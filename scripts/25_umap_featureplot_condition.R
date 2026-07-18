# UMAP FeaturePlot (healthy vs. cirrhotic), Angptl4-axis genes, on the
# GSE136103 atlas -- complements the Figure S3 dotplot-by-condition with the
# more intuitive "blue-dot spread across the whole UMAP" view of how
# expression shifts per cluster between conditions.
suppressPackageStartupMessages({
  library(Seurat)
  library(ggplot2)
  library(patchwork)
})
dir.create("figures", showWarnings = FALSE)

obj <- readRDS("../project4/data_cache/04_liver_final.rds")
obj$condition <- factor(obj$condition, levels = c("healthy", "cirrhotic"))

genes <- c("SDC1", "SDC4", "ANGPTL4")
genes <- genes[genes %in% rownames(obj)]
cat("Genes present:", paste(genes, collapse = ", "), "\n")

p <- FeaturePlot(obj, features = genes, split.by = "condition", order = TRUE,
                  pt.size = 0.3, combine = TRUE) &
  theme(legend.position = "right", plot.title = element_text(size = 11))

ggsave("figures/Angptl4axis_UMAP_featureplot_by_condition.png", p,
       width = 9, height = 3.1 * length(genes) + 0.6, dpi = 200, limitsize = FALSE)
cat("Saved figures/Angptl4axis_UMAP_featureplot_by_condition.png\n")
