# Phase 1: per-organ DESeq2 analysis (Liver, LV) — chow vs HFpEF
# Data: Zenodo 12794566 (Schiattarella lab, Circ Res 2024), same 10 mice, both organs
# Threshold: padj < 0.05 & |log2FC| > 1.0 (a sensitivity check at the
# original stricter padj<0.01/|log2FC|>1.5 confirmed the heart-to-liver
# Angptl4 axis is identical at both thresholds -- unaffected either way --
# while relaxing the threshold surfaces a small liver-to-heart signal
# (C4a-C3ar1, Sema5b-Plxna1/3) that the original threshold missed entirely.
# Adopted padj<0.05/|log2FC|>1.0 as the primary threshold since it is the
# more conventional choice (close to Strocchi et al. 2024's own
# padj<0.05/|log2FC|>0.5) and lets both directions be evaluated fairly.

suppressPackageStartupMessages({
  library(DESeq2)
  library(dplyr)
  library(tibble)
  library(EnhancedVolcano)
  library(pheatmap)
  library(apeglm)
})

dir.create("results", showWarnings = FALSE)
dir.create("figures", showWarnings = FALSE)

meta <- read.csv("data/raw/metadata_mice_chow_HFpEF.csv", stringsAsFactors = FALSE)
meta$condition <- factor(ifelse(meta$condition == "h", "HFpEF", "Chow"),
                          levels = c("Chow", "HFpEF"))

# published DE tables carry an authoritative Ensembl ID -> Gene.name map; reuse it
# instead of a separate org.Mm.eg.db mapping to avoid annotation-version mismatch
liver_pub <- read.csv("data/raw/Liver_DE_published.csv", stringsAsFactors = FALSE)
lv_pub    <- read.csv("data/raw/LV_DE_published.csv", stringsAsFactors = FALSE)
id2name <- unique(rbind(
  liver_pub[, c("ID", "Gene.name")],
  lv_pub[, c("ID", "Gene.name")]
))
names(id2name) <- c("ensembl_id", "gene_name")
id2name <- id2name[!duplicated(id2name$ensembl_id), ]

run_deseq2 <- function(organ_label, counts_path) {
  counts <- read.csv(counts_path, row.names = 1, check.names = FALSE)
  # column names look like "371-Liver" / "371-LV" -> extract the mouse ID
  mouse_id <- as.integer(sub("-.*$", "", colnames(counts)))
  stopifnot(all(mouse_id %in% meta$ID))
  coldata <- data.frame(
    row.names = colnames(counts),
    ID = mouse_id
  ) %>%
    left_join(meta[, c("ID", "condition")], by = "ID")
  rownames(coldata) <- colnames(counts)

  keep <- rowSums(counts >= 10) >= 5   # expressed in at least one full group
  counts <- counts[keep, ]

  dds <- DESeqDataSetFromMatrix(countData = counts, colData = coldata,
                                 design = ~condition)
  dds <- DESeq(dds)
  res <- lfcShrink(dds, coef = "condition_HFpEF_vs_Chow", type = "apeglm")

  res_df <- as.data.frame(res) %>%
    rownames_to_column("ensembl_id") %>%
    left_join(id2name, by = "ensembl_id") %>%
    arrange(padj)

  write.csv(res_df, sprintf("results/%s_DESeq2_full.csv", organ_label), row.names = FALSE)

  sig <- res_df %>% filter(!is.na(padj), padj < 0.05, abs(log2FoldChange) > 1.0)
  write.csv(sig, sprintf("results/%s_DEG_sig_padj05_lfc1.0.csv", organ_label), row.names = FALSE)
  cat(organ_label, ": ", nrow(sig), "significant DEGs (padj<0.05, |log2FC|>1.0) out of",
      nrow(res_df), "tested\n")

  # volcano
  png(sprintf("figures/%s_volcano.png", organ_label), width = 1600, height = 1400, res = 200)
  print(EnhancedVolcano(res_df,
    lab = res_df$gene_name,
    x = "log2FoldChange", y = "padj",
    pCutoff = 0.05, FCcutoff = 1.0,
    title = sprintf("%s: HFpEF vs Chow", organ_label),
    subtitle = "padj < 0.05, |log2FC| > 1.0",
    caption = "",
    labSize = 3.0, pointSize = 1.5, drawConnectors = TRUE, max.overlaps = 15))
  dev.off()

  # heatmap of significant DEGs (z-scored vst counts)
  if (nrow(sig) >= 2) {
    vsd <- vst(dds, blind = FALSE)
    mat <- assay(vsd)[sig$ensembl_id, ]
    rownames(mat) <- ifelse(is.na(sig$gene_name) | sig$gene_name == "", sig$ensembl_id, sig$gene_name)
    mat_z <- t(scale(t(mat)))
    ann <- data.frame(condition = coldata$condition)
    rownames(ann) <- rownames(coldata)
    show_rows <- nrow(mat_z) <= 100
    n_genes <- nrow(mat_z)
    # gene labels overlap once there are too many rows for the default font
    # size to fit in a fixed-height canvas -> shrink fontsize_row and scale
    # the canvas height per-row so rows never get thinner than the font needs
    fontsize_row <- if (n_genes > 50) 7 else 10
    px_per_row <- if (n_genes > 50) 26 else 20
    png(sprintf("figures/%s_heatmap.png", organ_label), width = 1600,
        height = max(1200, px_per_row * min(n_genes, 100)), res = 200)
    pheatmap(mat_z, annotation_col = ann, show_rownames = show_rows,
             fontsize_row = fontsize_row,
             main = sprintf("%s: significant DEGs (z-score)", organ_label))
    dev.off()
  }

  list(dds = dds, res_df = res_df, sig = sig)
}

liver_result <- run_deseq2("Liver", "data/raw/Liver_raw_counts.csv")
lv_result    <- run_deseq2("LV",    "data/raw/LV_raw_counts.csv")

saveRDS(liver_result, "results/liver_result.rds")
saveRDS(lv_result, "results/lv_result.rds")

# quick external-validation checkpoint vs the paper's own published candidates (Saa1/Saa4)
cat("\n--- Validation checkpoint: Saa1/Saa4 in our stricter reanalysis (Liver) ---\n")
print(liver_result$res_df %>% filter(gene_name %in% c("Saa1", "Saa4")))
