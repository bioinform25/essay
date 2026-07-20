# Quick druggability check on the semaphorin/plexin liver-to-heart candidates
# (Sema5b, Plxna1, Plxna3, plus the STRING first-shell hubs Plxna4/Nrp1/Nrp2)
# before deciding whether this axis is worth carrying forward alongside/
# instead of the heart-to-liver Angptl4 axis.
suppressPackageStartupMessages({
  library(httr)
  library(jsonlite)
})

`%||%` <- function(a, b) if (is.null(a)) b else a
genes <- c("SEMA5B", "PLXNA1", "PLXNA3", "PLXNA4", "NRP1", "NRP2")

query <- sprintf('{
  genes(names: %s) {
    nodes {
      name
      interactions {
        drug { name conceptId }
        interactionScore
        interactionTypes { type directionality }
      }
    }
  }
}', jsonlite::toJSON(genes))

res <- POST("https://dgidb.org/api/graphql",
            body = list(query = query), encode = "json",
            add_headers("Content-Type" = "application/json"))
out <- fromJSON(content(res, as = "text", encoding = "UTF-8"), simplifyVector = FALSE)

rows <- list()
found_genes <- character(0)
for (node in out$data$genes$nodes) {
  n_int <- length(node$interactions)
  found_genes <- c(found_genes, node$name)
  cat(sprintf("%s: %d drug interaction(s)\n", node$name, n_int))
  if (n_int > 0) {
    for (i in node$interactions) {
      cat("   -", i$drug$name, "\n")
      rows[[length(rows) + 1]] <- data.frame(gene = node$name, drug = i$drug$name %||% NA,
                                              interaction_score = i$interactionScore %||% NA)
    }
  } else {
    rows[[length(rows) + 1]] <- data.frame(gene = node$name, drug = NA, interaction_score = NA)
  }
}
# DGIdb omits genes with zero interactions from the response entirely rather
# than returning an empty-interactions node -- add explicit zero-row entries
# for those so the full 6-gene query set is represented in the output table.
missing_genes <- setdiff(genes, found_genes)
for (g in missing_genes) {
  cat(sprintf("%s: 0 drug interaction(s)\n", g))
  rows[[length(rows) + 1]] <- data.frame(gene = g, drug = NA, interaction_score = NA)
}
dir.create("results", showWarnings = FALSE)
out_df <- do.call(rbind, rows)
write.csv(out_df, "results/LiverToHeart_DGIdb_druggability.csv", row.names = FALSE)
cat("\nSaved results/LiverToHeart_DGIdb_druggability.csv\n")
