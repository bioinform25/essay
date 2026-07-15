pkgs <- c("ggraph", "tidygraph", "ggrepel", "shadowtext")
for (p in pkgs) cat(p, ":", ifelse(requireNamespace(p, quietly = TRUE), "OK", "MISSING"), "\n")
