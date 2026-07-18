# Classic 3-panel GSEA running-enrichment-score plots (running ES line + hit
# marks + ranked-metric barcode), for the top 2 most significant Hallmark
# pathways per organ (by padj, from the cached fgsea results in
# results/{organ}_GSEA_hallmark.csv). Uses clusterProfiler::GSEA() with the
# identical ranking metric fgsea already used, purely so enrichplot::gseaplot2
# has a compatible object to draw from -- NES/padj should reproduce the fgsea
# numbers, not add a new statistical claim.
suppressPackageStartupMessages({
  library(dplyr)
  library(clusterProfiler)
  library(enrichplot)
  library(msigdbr)
  library(ggplot2)
})

dir.create("figures", showWarnings = FALSE)

hallmark <- msigdbr(species = "Mus musculus", category = "H")
t2g <- hallmark[, c("gs_name", "ensembl_gene")]

run_gsea_plots <- function(organ_label) {
  full <- read.csv(sprintf("results/%s_DESeq2_full.csv", organ_label), stringsAsFactors = FALSE)
  full <- full %>% filter(!is.na(pvalue), !is.na(log2FoldChange), !is.na(ensembl_id))
  ranks <- sign(full$log2FoldChange) * -log10(full$pvalue)
  names(ranks) <- full$ensembl_id
  ranks <- sort(ranks, decreasing = TRUE)
  ranks <- ranks[!duplicated(names(ranks))]

  set.seed(42)
  gsea_obj <- GSEA(geneList = ranks, TERM2GENE = t2g, minGSSize = 10, maxGSSize = 500,
                    pvalueCutoff = 1, seed = TRUE, eps = 0)

  cached <- read.csv(sprintf("results/%s_GSEA_hallmark.csv", organ_label), stringsAsFactors = FALSE)
  top2 <- cached %>% filter(padj < 0.05) %>% arrange(padj) %>% head(2)
  cat(organ_label, "top 2 pathways:", paste(top2$pathway, collapse = ", "), "\n")

  files <- character(0)
  for (i in seq_len(nrow(top2))) {
    pw <- top2$pathway[i]
    p <- gseaplot2(gsea_obj, geneSetID = pw,
                    title = sprintf("%s: %s (NES=%.2f, padj=%.2g)", organ_label, pw, top2$NES[i], top2$padj[i]),
                    subplots = 1:3, base_size = 9)
    fn <- sprintf("figures/gsea_running_%s_%d.png", organ_label, i)
    ggsave(fn, p, width = 6.5, height = 5.5, dpi = 200)
    files <- c(files, fn)
  }
  files
}

liver_files <- run_gsea_plots("Liver")
lv_files    <- run_gsea_plots("LV")

cat("\nAll running-score plot files:\n")
cat(paste(c(liver_files, lv_files), collapse = "\n"), "\n")
