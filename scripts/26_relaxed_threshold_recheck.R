# Sensitivity check requested by the user: does relaxing the DEG threshold
# from the paper's padj<0.01/|log2FC|>1.5 to a more conventional
# padj<0.05/|log2FC|>1.0 (closer to Strocchi et al. 2024's own padj<0.05/
# |log2FC|>0.5) reveal a liver-to-heart ligand-receptor signal that was
# absent under the stricter cutoff? Re-filters the already-computed DESeq2
# results (no need to refit the model -- only the significance/effect-size
# cutoff changes) and reruns the exact same CellChatDB matching logic as
# scripts/03_ligand_receptor_matching.R, in both directions.
suppressPackageStartupMessages({
  library(dplyr)
  library(CellChat)
})

PADJ_CUTOFF <- 0.05
LFC_CUTOFF  <- 1.0

liver_full <- read.csv("results/Liver_DESeq2_full.csv", stringsAsFactors = FALSE)
lv_full    <- read.csv("results/LV_DESeq2_full.csv", stringsAsFactors = FALSE)

liver_sig_new <- liver_full %>% filter(!is.na(padj), padj < PADJ_CUTOFF, abs(log2FoldChange) > LFC_CUTOFF)
lv_sig_new    <- lv_full    %>% filter(!is.na(padj), padj < PADJ_CUTOFF, abs(log2FoldChange) > LFC_CUTOFF)

cat(sprintf("New threshold (padj<%.2f, |log2FC|>%.1f):\n", PADJ_CUTOFF, LFC_CUTOFF))
cat("Liver significant DEGs:", nrow(liver_sig_new),
    "(", sum(liver_sig_new$log2FoldChange > 0), "up,",
    sum(liver_sig_new$log2FoldChange < 0), "down)\n")
cat("LV significant DEGs:", nrow(lv_sig_new),
    "(", sum(lv_sig_new$log2FoldChange > 0), "up,",
    sum(lv_sig_new$log2FoldChange < 0), "down)\n")

liver_up <- liver_sig_new %>% filter(log2FoldChange > 0) %>% pull(gene_name) %>% unique()
lv_up    <- lv_sig_new    %>% filter(log2FoldChange > 0) %>% pull(gene_name) %>% unique()

EXPR_THRESHOLD <- 10
liver_expressed <- liver_full %>% filter(baseMean >= EXPR_THRESHOLD) %>% pull(gene_name) %>% unique()
lv_expressed    <- lv_full    %>% filter(baseMean >= EXPR_THRESHOLD) %>% pull(gene_name) %>% unique()

cellchatdb <- CellChatDB.mouse$interaction

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

cat("\n--- Ligand-receptor matching at RELAXED threshold ---\n")
liver_to_heart_new <- match_direction(liver_up, lv_expressed, lv_sig_new, "Liver-ligand(DEG) -> LV-receptor(expressed)")
heart_to_liver_new <- match_direction(lv_up, liver_expressed, liver_sig_new, "LV-ligand(DEG) -> Liver-receptor(expressed)")

write.csv(liver_sig_new, "results/Liver_DEG_sig_padj05_lfc1.0_SENSITIVITY.csv", row.names = FALSE)
write.csv(lv_sig_new, "results/LV_DEG_sig_padj05_lfc1.0_SENSITIVITY.csv", row.names = FALSE)
write.csv(liver_to_heart_new, "results/LR_liver_to_heart_SENSITIVITY.csv", row.names = FALSE)
write.csv(heart_to_liver_new, "results/LR_heart_to_liver_SENSITIVITY.csv", row.names = FALSE)

cat("\n--- Liver -> Heart matched pairs (relaxed threshold) ---\n")
if (nrow(liver_to_heart_new) > 0) print(liver_to_heart_new) else cat("(none)\n")

cat("\n--- Which new liver-up genes are candidate secreted ligands in CellChatDB at all (any direction)? ---\n")
liver_up_in_db <- cellchatdb %>%
  rowwise() %>%
  mutate(is_liver_up_ligand = any_subunit_in(ligand, liver_up)) %>%
  ungroup() %>%
  filter(is_liver_up_ligand) %>%
  pull(ligand) %>%
  unique()
cat("Liver upregulated genes (new threshold) that ARE curated ligands in CellChatDB.mouse:\n")
print(liver_up_in_db)

cat("\n--- Was Saa1/Saa4 recovered at the new threshold? ---\n")
for (g in c("Saa1", "Saa4")) {
  row <- liver_full %>% filter(gene_name == g)
  if (nrow(row) == 0) { cat(g, ": not found in results table\n"); next }
  passes <- !is.na(row$padj) && row$padj < PADJ_CUTOFF && abs(row$log2FoldChange) > LFC_CUTOFF
  cat(sprintf("%s: log2FC=%.3f, padj=%.4g -> %s at new threshold\n",
              g, row$log2FoldChange, row$padj, ifelse(passes, "SIGNIFICANT", "still NOT significant")))
}
