pkgs <- c("CellChat", "httr", "jsonlite")
for (p in pkgs) {
  ok <- requireNamespace(p, quietly = TRUE)
  cat(p, ":", ifelse(ok, "OK", "MISSING"), "\n")
}
