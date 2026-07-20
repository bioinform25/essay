# Same structural-actionability test applied to Sdc1/Sdc4/Cdh5/Angptl4 in the
# original target-selection step (Methods 2.8/Supplemental Text S1): does each
# semaphorin/plexin candidate have a solved PDB structure that actually covers
# a druggable (extracellular/ligand-binding) domain, or only fragments unusable
# for structure-based docking (cytoplasmic tails, single domains out of a large
# multi-domain ectodomain, etc.)?
suppressPackageStartupMessages({
  library(httr)
  library(jsonlite)
})

`%||%` <- function(a, b) if (is.null(a)) b else a
genes <- c("PLXNA1", "PLXNA3", "SEMA5B", "NRP1", "NRP2")

# BUG FOUND AND FIXED: gene:NRP1 / gene:NRP2 UniProt queries return TWO
# entries each, because NELL1/NELL2 carry "NRP1"/"NRP2" as OLD ALIASES
# (Q92832=NELL1 has synonym NRP1; Q99435=NELL2 has synonym NRP2). Taking
# results[[1]] silently picked the wrong protein (NELL1's PDB 6POL is a
# NELL1-ROBO3 complex, not Neuropilin-1 at all) -- caught only when the
# downloaded PDB file's own TITLE record didn't match "neuropilin" at
# docking-prep stage. Fix: require the PRIMARY gene name (not a synonym)
# to exactly equal the query, which picks O14786 (real NRP1) / O60462
# (real NRP2) instead.
for (g in genes) {
  cat("\n=====", g, "=====\n")
  # UniProt search restricted to human, reviewed (Swiss-Prot) entries
  r <- GET("https://rest.uniprot.org/uniprotkb/search",
           query = list(query = sprintf("gene:%s AND organism_id:9606 AND reviewed:true", g),
                        fields = "accession,gene_names,xref_pdb,length,ft_topo_dom",
                        format = "json"))
  res <- fromJSON(content(r, as = "text", encoding = "UTF-8"), simplifyVector = FALSE)
  if (length(res$results) == 0) { cat("No reviewed UniProt entry found\n"); next }

  primary_name <- function(e) tryCatch(e$genes[[1]]$geneName$value, error = function(e) NA_character_)
  match_idx <- which(vapply(res$results, function(e) identical(toupper(primary_name(e) %||% ""), toupper(g)), logical(1)))
  if (length(match_idx) == 0) {
    cat("WARNING: no entry with exact PRIMARY gene name match for", g,
        "-- candidates were:", paste(vapply(res$results, primary_name, character(1)), collapse = ", "), "\n")
    next
  }
  entry <- res$results[[match_idx[1]]]
  acc <- entry$primaryAccession
  cat("UniProt:", acc, "(primary gene name verified:", primary_name(entry), ") | length:", entry$sequence$length, "aa\n")

  pdb_xrefs <- Filter(function(x) x$database == "PDB", entry$uniProtKBCrossReferences %||% list())
  if (length(pdb_xrefs) == 0) {
    cat("PDB structures: NONE (no crystal/cryo-EM structure at all)\n")
  } else {
    cat("PDB structures (", length(pdb_xrefs), "):\n")
    for (p in pdb_xrefs) {
      props <- setNames(sapply(p$properties, function(x) x$value), sapply(p$properties, function(x) x$key))
      cat(sprintf("  %s | method=%s | resolution=%s | chains/range=%s\n",
                   p$id, props["Method"], props["Resolution"], props["Chains"]))
    }
  }
}
