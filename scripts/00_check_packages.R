pkgs <- c("DESeq2","clusterProfiler","org.Mm.eg.db","fgsea","msigdbr",
          "EnhancedVolcano","pheatmap","ggplot2","dplyr","tibble","apeglm",
          "igraph","STRINGdb")
for (p in pkgs) {
  ok <- requireNamespace(p, quietly = TRUE)
  cat(p, ":", ifelse(ok, "OK", "MISSING"), "\n")
}
