if (!requireNamespace("BiocManager", quietly = TRUE)) install.packages("BiocManager", repos = "https://cloud.r-project.org")
BiocManager::install("RCy3", update = FALSE, ask = FALSE)
cat("RCy3 install attempt done. Available:", requireNamespace("RCy3", quietly = TRUE), "\n")
