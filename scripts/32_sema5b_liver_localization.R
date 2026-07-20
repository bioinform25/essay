# Phase 2 (step 3a, liver-to-heart axis): liver-side localization of Sema5b
# (the candidate secreted ligand) using the same GSE136103 atlas as the
# heart-to-liver axis. This answers "which liver cell type could plausibly
# secrete Sema5b" -- the mirror-image question to the heart-to-liver axis's
# "which liver cell type receives Angptl4".
suppressPackageStartupMessages({
  library(Seurat)
  library(dplyr)
  library(ggplot2)
})
dir.create("figures", showWarnings = FALSE)
dir.create("results", showWarnings = FALSE)

obj <- readRDS("../project4/data_cache/04_liver_final.rds")

genes_of_interest <- c("SEMA5B", "PLXNA1", "PLXNA3", "NRP1", "NRP2")
present <- genes_of_interest[genes_of_interest %in% rownames(obj)]
cat("Genes present in liver atlas object:", paste(present, collapse = ", "), "\n")
missing <- setdiff(genes_of_interest, present)
if (length(missing) > 0) cat("NOT detected in liver atlas panel:", paste(missing, collapse = ", "), "\n")

if ("cell_type" %in% colnames(obj@meta.data) && length(present) > 0) {
  Idents(obj) <- obj$cell_type
  p <- DotPlot(obj, features = present) + RotatedAxis() +
    labs(title = "Liver localization of Sema5b-Plxna1 axis genes",
         subtitle = "GSE136103 (human liver cirrhosis atlas), cross-species reference") +
    theme(plot.title = element_text(size = 14), plot.subtitle = element_text(size = 11))
  ggsave("figures/Sema5bAxis_liver_localization_dotplot.png", p, width = 9, height = 6, dpi = 200)
  cat("Saved figures/Sema5bAxis_liver_localization_dotplot.png\n")
}
