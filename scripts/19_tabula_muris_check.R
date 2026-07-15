# Cross-check: does Sdc1/Sdc4 localize to hepatocytes in a MOUSE liver
# scRNA-seq atlas (Tabula Muris, FACS/Smart-seq2), closing the cross-species
# gap flagged in Discussion/Limitations (project4 reference was human).
suppressPackageStartupMessages({
  library(Seurat)
  library(dplyr)
  library(ggplot2)
  library(tidyr)
})

dir.create("figures", showWarnings = FALSE)
dir.create("results", showWarnings = FALSE)

obj_name <- load("data/tabula_muris/facs_Liver_seurat_tiss.Robj")
obj <- get(obj_name)

genes <- c("Sdc1", "Sdc4", "Sdc2", "Sdc3", "Cdh5", "Angptl4")
genes <- genes[genes %in% rownames(obj@data)]
cat("Genes found:", paste(genes, collapse = ", "), "\n")

expr <- as.matrix(obj@data[genes, , drop = FALSE])  # log-normalized (Seurat v2 @data)
meta <- obj@meta.data

df <- data.frame(cell_type = meta$cell_ontology_class, t(expr), check.names = FALSE)

summary_df <- df %>%
  tidyr::pivot_longer(-cell_type, names_to = "gene", values_to = "expr") %>%
  group_by(cell_type, gene) %>%
  summarise(pct_expressed = 100 * mean(expr > 0), avg_expr = mean(expr), n_cells = n(), .groups = "drop")

write.csv(summary_df, "results/TabulaMuris_liver_Sdc_expression.csv", row.names = FALSE)
cat("\n--- Sdc1/Sdc4 in hepatocytes ---\n")
print(summary_df %>% filter(gene %in% c("Sdc1", "Sdc4"), cell_type == "hepatocyte"))

# dotplot-style summary (percent expressed = size, avg expr = color)
p <- ggplot(summary_df, aes(x = gene, y = cell_type, size = pct_expressed, color = avg_expr)) +
  geom_point() +
  scale_color_gradient(low = "grey90", high = "blue") +
  labs(title = "Tabula Muris mouse liver (FACS):\nAngptl4-axis gene expression",
       subtitle = "Independent mouse scRNA-seq cross-check\n(n=714 cells, 5 annotated cell types)",
       x = NULL, y = NULL, size = "% expressed", color = "Avg. expr") +
  theme_minimal(base_size = 12) +
  theme(axis.text.x = element_text(angle = 45, hjust = 1),
        plot.title = element_text(size = 13), plot.subtitle = element_text(size = 10))
ggsave("figures/TabulaMuris_liver_dotplot.png", p, width = 8, height = 5.5, dpi = 200)
cat("\nSaved figures/TabulaMuris_liver_dotplot.png\n")
