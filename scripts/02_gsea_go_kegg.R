# Phase 1 (cont.): GSEA (Hallmark) + GO + KEGG per organ
suppressPackageStartupMessages({
  library(dplyr)
  library(clusterProfiler)
  library(org.Mm.eg.db)
  library(fgsea)
  library(msigdbr)
  library(ggplot2)
})

dir.create("results", showWarnings = FALSE)
dir.create("figures", showWarnings = FALSE)

hallmark <- msigdbr(species = "Mus musculus", category = "H")
hallmark_list <- split(hallmark$ensembl_gene, hallmark$gs_name)

run_enrichment <- function(organ_label) {
  full <- read.csv(sprintf("results/%s_DESeq2_full.csv", organ_label), stringsAsFactors = FALSE)
  full <- full %>% filter(!is.na(pvalue), !is.na(log2FoldChange), !is.na(ensembl_id))

  # --- GSEA (Hallmark), ranked by sign(log2FC) * -log10(pvalue) ---
  # (lfcShrink(type="apeglm") does not return the Wald "stat" column, so we
  # build a standard substitute ranking metric from the shrunken LFC direction
  # and raw p-value magnitude)
  ranks <- sign(full$log2FoldChange) * -log10(full$pvalue)
  names(ranks) <- full$ensembl_id
  ranks <- sort(ranks, decreasing = TRUE)
  ranks <- ranks[!duplicated(names(ranks))]

  set.seed(42)
  gsea_res <- fgsea(pathways = hallmark_list, stats = ranks, minSize = 10, maxSize = 500, eps = 0)
  gsea_res <- gsea_res %>% arrange(padj)
  gsea_out <- gsea_res
  gsea_out$leadingEdge <- sapply(gsea_out$leadingEdge, paste, collapse = ";")
  write.csv(gsea_out, sprintf("results/%s_GSEA_hallmark.csv", organ_label), row.names = FALSE)

  top20 <- gsea_res %>% filter(padj < 0.05) %>% arrange(padj) %>% head(20)
  if (nrow(top20) > 0) {
    p <- ggplot(top20, aes(x = reorder(pathway, NES), y = NES, fill = NES > 0)) +
      geom_col() + coord_flip() +
      labs(title = sprintf("%s: Hallmark GSEA (padj<0.05)", organ_label),
           x = NULL, y = "Normalized Enrichment Score") +
      theme_minimal(base_size = 11) +
      theme(legend.position = "none")
    ggsave(sprintf("figures/%s_GSEA_hallmark_top20.png", organ_label), p,
           width = 8, height = max(4, 0.35 * nrow(top20) + 1), dpi = 200)
  }
  cat(organ_label, ": GSEA significant pathways (padj<0.05):", sum(gsea_res$padj < 0.05, na.rm = TRUE), "\n")

  # --- GO / KEGG over-representation on the significant DEG set ---
  sig <- read.csv(sprintf("results/%s_DEG_sig_padj01_lfc1.5.csv", organ_label), stringsAsFactors = FALSE)
  entrez_map <- bitr(sig$ensembl_id, fromType = "ENSEMBL", toType = "ENTREZID", OrgDb = org.Mm.eg.db)
  universe_map <- bitr(full$ensembl_id, fromType = "ENSEMBL", toType = "ENTREZID", OrgDb = org.Mm.eg.db)

  ego <- enrichGO(gene = unique(entrez_map$ENTREZID),
                   universe = unique(universe_map$ENTREZID),
                   OrgDb = org.Mm.eg.db, ont = "BP",
                   pAdjustMethod = "BH", pvalueCutoff = 0.05, readable = TRUE)
  write.csv(as.data.frame(ego), sprintf("results/%s_GO_BP.csv", organ_label), row.names = FALSE)
  if (nrow(as.data.frame(ego)) > 0) {
    ggsave(sprintf("figures/%s_GO_BP_dotplot.png", organ_label),
           dotplot(ego, showCategory = 15) + ggtitle(sprintf("%s: GO Biological Process", organ_label)),
           width = 8, height = 7, dpi = 200)
  }

  ekegg <- enrichKEGG(gene = unique(entrez_map$ENTREZID),
                       universe = unique(universe_map$ENTREZID),
                       organism = "mmu", pAdjustMethod = "BH", pvalueCutoff = 0.05)
  ekegg_df <- as.data.frame(ekegg)
  write.csv(ekegg_df, sprintf("results/%s_KEGG.csv", organ_label), row.names = FALSE)
  if (nrow(ekegg_df) > 0) {
    ggsave(sprintf("figures/%s_KEGG_dotplot.png", organ_label),
           dotplot(ekegg) + ggtitle(sprintf("%s: KEGG pathway", organ_label)),
           width = 8, height = 7, dpi = 200)
  }
  cat(organ_label, ": GO-BP terms:", nrow(as.data.frame(ego)), " | KEGG pathways:", nrow(ekegg_df), "\n")

  invisible(list(gsea = gsea_res, go = ego, kegg = ekegg))
}

liver_enrich <- run_enrichment("Liver")
lv_enrich    <- run_enrichment("LV")
