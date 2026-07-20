# Phase 2 (step 1): Liver <-> LV ligand-receptor interactome matching
# Uses CellChatDB.mouse's curated L-R pairs purely as an ANNOTATION reference
# (which genes are known ligands/receptors of each other) -- NOT as a signaling
# probability computation, since Liver and LV are different Seurat/bulk objects
# and cannot be validly combined into one CellChat object.
suppressPackageStartupMessages({
  library(dplyr)
  library(CellChat)
})

dir.create("results", showWarnings = FALSE)

liver_sig  <- read.csv("results/Liver_DEG_sig_padj05_lfc1.0.csv", stringsAsFactors = FALSE)
lv_sig     <- read.csv("results/LV_DEG_sig_padj05_lfc1.0.csv", stringsAsFactors = FALSE)
liver_full <- read.csv("results/Liver_DESeq2_full.csv", stringsAsFactors = FALSE)
lv_full    <- read.csv("results/LV_DESeq2_full.csv", stringsAsFactors = FALSE)

liver_up <- liver_sig %>% filter(log2FoldChange > 0) %>% pull(gene_name) %>% unique()
lv_up    <- lv_sig    %>% filter(log2FoldChange > 0) %>% pull(gene_name) %>% unique()

# Requiring BOTH ligand AND receptor to independently clear genome-wide
# significance in two small-n (n=5 vs 5) organs is too strict -- a receptor
# doesn't need its own transcript to change to receive a signal, it just needs
# to be present in the target tissue. So: candidate receptor pool = any gene
# DETECTABLY EXPRESSED in the target organ (baseMean >= 10 across all samples),
# not necessarily itself a DEG. The DEG requirement stays on the ligand side
# (the actual perturbed secretome), which is the more biologically meaningful
# direction of "what changed and could be signaling out."
EXPR_THRESHOLD <- 10
liver_expressed <- liver_full %>% filter(baseMean >= EXPR_THRESHOLD) %>% pull(gene_name) %>% unique()
lv_expressed    <- lv_full    %>% filter(baseMean >= EXPR_THRESHOLD) %>% pull(gene_name) %>% unique()

cat("Liver upregulated DEG (ligand candidates):", length(liver_up), "\n")
cat("LV upregulated DEG (ligand candidates):", length(lv_up), "\n")
cat("Liver detectably-expressed genes (receptor pool):", length(liver_expressed), "\n")
cat("LV detectably-expressed genes (receptor pool):", length(lv_expressed), "\n")

cellchatdb <- CellChatDB.mouse$interaction
cat("CellChatDB.mouse interaction columns:\n")
print(colnames(cellchatdb))

# ligand/receptor columns can encode multi-subunit complexes as "GeneA_GeneB"
any_subunit_in <- function(complex_str, gene_set) {
  if (is.na(complex_str) || complex_str == "" || length(gene_set) == 0) return(FALSE)
  parts <- strsplit(complex_str, "_")[[1]]
  any(parts %in% gene_set)
}

match_direction <- function(ligand_source_genes, receptor_pool_genes, receptor_deg_sig, label) {
  hits <- cellchatdb %>%
    rowwise() %>%
    mutate(ligand_match = any_subunit_in(ligand, ligand_source_genes),
           receptor_match = any_subunit_in(receptor, receptor_pool_genes)) %>%
    ungroup() %>%
    filter(ligand_match, receptor_match) %>%
    select(interaction_name, ligand, receptor, pathway_name, annotation, evidence) %>%
    distinct()

  if (nrow(hits) == 0) {
    cat(label, ": 0 matched L-R pairs\n")
    hits$receptor_also_DEG <- logical(0)
    return(hits)
  }

  receptor_deg_up <- receptor_deg_sig$gene_name[receptor_deg_sig$log2FoldChange > 0]
  hits <- hits %>%
    rowwise() %>%
    mutate(receptor_also_DEG = any_subunit_in(receptor, receptor_deg_up)) %>%
    ungroup()
  cat(label, ": ", nrow(hits), "matched L-R pairs (", sum(hits$receptor_also_DEG), "with receptor also up-DEG )\n")
  hits
}

liver_to_heart <- match_direction(liver_up, lv_expressed, lv_sig, "Liver-ligand(DEG) -> LV-receptor(expressed)")
heart_to_liver <- match_direction(lv_up, liver_expressed, liver_sig, "LV-ligand(DEG) -> Liver-receptor(expressed)")

write.csv(liver_to_heart, "results/LR_liver_to_heart.csv", row.names = FALSE)
write.csv(heart_to_liver, "results/LR_heart_to_liver.csv", row.names = FALSE)

cat("\n--- Liver -> Heart matched pairs ---\n")
print(liver_to_heart)
cat("\n--- Heart -> Liver matched pairs ---\n")
print(heart_to_liver)
