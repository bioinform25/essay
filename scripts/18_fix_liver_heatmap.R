# Regenerate only the Liver heatmap (Figure 2A) with non-overlapping row
# labels, reusing the cached DESeq2 object instead of rerunning the pipeline.
suppressPackageStartupMessages({
  library(DESeq2)
  library(dplyr)
  library(pheatmap)
})

liver_result <- readRDS("results/liver_result.rds")
dds <- liver_result$dds
sig <- liver_result$sig

vsd <- vst(dds, blind = FALSE)
mat <- assay(vsd)[sig$ensembl_id, ]
rownames(mat) <- ifelse(is.na(sig$gene_name) | sig$gene_name == "", sig$ensembl_id, sig$gene_name)
mat_z <- t(scale(t(mat)))
ann <- data.frame(condition = colData(dds)$condition)
rownames(ann) <- colnames(dds)

n_genes <- nrow(mat_z)
fontsize_row <- if (n_genes > 50) 7 else 10
px_per_row <- if (n_genes > 50) 26 else 20

png("figures/Liver_heatmap.png", width = 1600,
    height = max(1200, px_per_row * min(n_genes, 100)), res = 200)
pheatmap(mat_z, annotation_col = ann, show_rownames = (n_genes <= 100),
         fontsize_row = fontsize_row,
         main = "Liver: significant DEGs (z-score)")
dev.off()
cat("Regenerated figures/Liver_heatmap.png with", n_genes, "genes, fontsize_row =", fontsize_row, "\n")
