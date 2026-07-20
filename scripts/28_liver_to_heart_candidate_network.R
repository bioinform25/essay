# Phase 2 (step 2c): at the relaxed threshold (padj<0.05, |log2FC|>1.0), a
# liver-to-heart ligand-receptor signal appears for the first time via
# CellChatDB (C4a-C3ar1, Sema5b-Plxna1/Plxna3; see results/LR_liver_to_heart.csv).
# Same treatment as the heart-to-liver Angptl4 axis: expand each candidate
# into a small STRING network and check whether it forms a hub structure of
# its own, or remains an isolated pair.
#
# C4a is handled separately and reported as a known limitation: STRING's
# mouse interactome has no distinct node for the C4a paralog (mice carry a
# tandem-duplicated C4a/Slp + C4b locus, unlike humans' single C4A/C4B pair) --
# querying STRING by the exact Ensembl gene ID (ENSMUSG00000015451) returns
# no match at all, and querying by the bare symbol "C4a" silently resolves to
# a different gene (C5ar2, the C5a receptor) via STRING's alias table. Rather
# than let a wrong gene's network stand in for C4a, C4a is excluded from the
# STRING expansion below and this gap is reported honestly instead.
suppressPackageStartupMessages({
  library(dplyr)
  library(httr)
  library(jsonlite)
  library(igraph)
})

dir.create("results", showWarnings = FALSE)
dir.create("figures", showWarnings = FALSE)

# --- C4a STRING resolvability check (expected to fail; documented, not silently skipped) ---
c4a_by_ensembl <- POST("https://string-db.org/api/json/get_string_ids",
                        body = list(identifiers = "ENSMUSG00000015451", species = 10090), encode = "form")
c4a_ensembl_res <- fromJSON(content(c4a_by_ensembl, as = "text", encoding = "UTF-8"))
c4a_by_symbol <- POST("https://string-db.org/api/json/get_string_ids",
                       body = list(identifiers = "C4a", species = 10090), encode = "form")
c4a_symbol_res <- fromJSON(content(c4a_by_symbol, as = "text", encoding = "UTF-8"))
cat("C4a resolved by Ensembl ID (ENSMUSG00000015451):", length(c4a_ensembl_res), "hits\n")
cat("C4a resolved by symbol 'C4a': preferredName =",
    ifelse(is.null(c4a_symbol_res$preferredName), "(none)", c4a_symbol_res$preferredName),
    "-- ", ifelse(identical(c4a_symbol_res$preferredName, "C4a"), "correct", "MISMATCH, excluding from network"), "\n")

# --- Semaphorin/Plexin candidates only (correctly resolvable) ---
seed_genes <- c("Sema5b", "Plxna1", "Plxna3")

map_res <- POST(
  "https://string-db.org/api/json/get_string_ids",
  body = list(identifiers = paste(seed_genes, collapse = "\r"), species = 10090, limit = 1),
  encode = "form"
)
id_map <- fromJSON(content(map_res, as = "text", encoding = "UTF-8"))
string_ids <- unique(id_map$stringId)
cat("\nResolved", nrow(id_map), "of", length(seed_genes), "seed genes\n")
print(id_map[, c("queryItem", "preferredName")])

network_res <- POST(
  "https://string-db.org/api/json/network",
  body = list(identifiers = paste(string_ids, collapse = "%0d"),
              species = 10090, required_score = 700,
              add_nodes = 15),
  encode = "form"
)
edges <- fromJSON(content(network_res, as = "text", encoding = "UTF-8"))
edges <- edges %>% distinct(preferredName_A, preferredName_B, score, .keep_all = TRUE)
cat("Expanded network edges:", nrow(edges), "\n")

is_seed <- function(g) g %in% seed_genes
edges <- edges %>% mutate(seed_edge = is_seed(preferredName_A) | is_seed(preferredName_B))

write.csv(edges %>% select(preferredName_A, preferredName_B, score, seed_edge),
          "results/LiverToHeart_candidate_STRING_edges.csv", row.names = FALSE)

g <- graph_from_data_frame(edges %>% select(preferredName_A, preferredName_B, score), directed = FALSE)
deg <- degree(g)
btw <- betweenness(g)
hub_df <- data.frame(gene = names(deg), degree = deg, betweenness = round(btw[names(deg)], 1),
                      is_seed = names(deg) %in% seed_genes) %>%
  arrange(desc(degree), desc(betweenness))
write.csv(hub_df, "results/LiverToHeart_candidate_hub_genes.csv", row.names = FALSE)
cat("\nHub genes (Sema5b-Plxna1/Plxna3 candidate network):\n")
print(hub_df)

saveRDS(list(edges = edges, graph = g, hub_df = hub_df), "results/liver_to_heart_candidate_network.rds")
