# Phase 2 (step 3a): liver-side cell-type localization of the Angptl4-axis
# receptors, reusing project4's already-annotated human GSE136103 liver Seurat
# object (cross-species check note: project4 is human, this essay's DEG axis
# is mouse -- used here only as an independent cross-species localization
# reference, not pooled into any statistical test).
suppressPackageStartupMessages({
  library(Seurat)
  library(dplyr)
  library(ggplot2)
})
dir.create("figures", showWarnings = FALSE)
dir.create("results", showWarnings = FALSE)

obj <- readRDS("../project4/data_cache/04_liver_final.rds")
cat("Metadata columns:\n"); print(colnames(obj@meta.data))
cat("\ncell_type table:\n")
if ("cell_type" %in% colnames(obj@meta.data)) print(table(obj$cell_type)) else cat("(no cell_type column found)\n")

genes_of_interest <- c("SDC1", "SDC4", "SDC2", "SDC3", "CDH5", "ANGPTL4")
present <- genes_of_interest[genes_of_interest %in% rownames(obj)]
cat("\nGenes present in object:", paste(present, collapse = ", "), "\n")

if ("cell_type" %in% colnames(obj@meta.data) && length(present) > 0) {
  Idents(obj) <- obj$cell_type
  p <- DotPlot(obj, features = present) + RotatedAxis() +
    labs(title = "Liver localization of Angptl4-axis genes",
         subtitle = "project4 GSE136103 (human), cross-species reference") +
    theme(plot.title = element_text(size = 14), plot.subtitle = element_text(size = 11))
  ggsave("figures/Angptl4axis_liver_localization_dotplot.png", p, width = 9, height = 6, dpi = 200)

  if ("condition" %in% colnames(obj@meta.data)) {
    p2 <- DotPlot(obj, features = present, group.by = "cell_type", split.by = "condition") +
      RotatedAxis() +
      labs(title = "Liver localization by condition",
           subtitle = "project4 GSE136103 (human), cross-species reference") +
      theme(plot.title = element_text(size = 14), plot.subtitle = element_text(size = 11))
    ggsave("figures/Angptl4axis_liver_localization_by_condition.png", p2, width = 10, height = 6, dpi = 200)
  }
  cat("Saved localization dotplot(s) to figures/\n")
}
