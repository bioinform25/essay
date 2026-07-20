# Cross-species, cardiac-side localization check for the liver-to-heart
# Sema5b-Plxna1 axis: does Plxna1 (and Nrp1/Nrp2, its structurally-solved
# co-receptors) localize to a plausible receiving cell type in mouse heart
# tissue? Mirrors script 19 (Tabula Muris liver check for the heart-to-liver
# axis), using the Tabula Muris droplet (10x) Heart+Aorta atlas -- the FACS
# Heart file is available too but is a much larger download (770MB vs 85MB);
# droplet-based Tabula Muris data is an equally valid, just differently
# profiled, part of the same public atlas.
suppressPackageStartupMessages({
  library(Seurat)
  library(dplyr)
  library(ggplot2)
  library(tidyr)
})

dir.create("figures", showWarnings = FALSE)
dir.create("results", showWarnings = FALSE)

obj_name <- load("data/tabula_muris/droplet_Heart_and_Aorta_seurat_tiss.Robj")
obj <- get(obj_name)
cat("Loaded object class:", class(obj), "\n")
cat("Cells:", ncol(obj@data), "\n")
cat("Metadata columns:", paste(colnames(obj@meta.data), collapse = ", "), "\n")

genes <- c("Plxna1", "Plxna3", "Sema5b", "Nrp1", "Nrp2")
genes <- genes[genes %in% rownames(obj@data)]
cat("Genes found:", paste(genes, collapse = ", "), "\n")

expr <- as.matrix(obj@data[genes, , drop = FALSE])
meta <- obj@meta.data

df <- data.frame(cell_type = meta$cell_ontology_class, t(expr), check.names = FALSE)

summary_df <- df %>%
  tidyr::pivot_longer(-cell_type, names_to = "gene", values_to = "expr") %>%
  group_by(cell_type, gene) %>%
  summarise(pct_expressed = 100 * mean(expr > 0), avg_expr = mean(expr), n_cells = n(), .groups = "drop")

write.csv(summary_df, "results/TabulaMuris_heart_Sema5bAxis_expression.csv", row.names = FALSE)
cat("\n--- Summary (sorted by pct_expressed desc) ---\n")
print(summary_df %>% arrange(desc(pct_expressed)), n = 60)

p <- ggplot(summary_df, aes(x = gene, y = cell_type, size = pct_expressed, color = avg_expr)) +
  geom_point() +
  scale_color_gradient(low = "grey80", high = "blue") +
  labs(title = "Tabula Muris mouse heart+aorta (droplet):\nSema5b-Plxna1 axis gene expression",
       subtitle = sprintf("Independent mouse scRNA-seq cross-check (n=%d cells, %d annotated cell types)",
                           ncol(obj@data), length(unique(meta$cell_ontology_class))),
       x = NULL, y = NULL, size = "% expressed", color = "Avg. expr") +
  theme_minimal(base_size = 11)
ggsave("figures/TabulaMuris_heart_dotplot.png", p, width = 8, height = 5.5, dpi = 200)
cat("\nSaved figures/TabulaMuris_heart_dotplot.png\n")
