# Phase 2 (step 2): STRING PPI network across the combined Liver+LV DEG set
#
# Rationale: CellChatDB (script 03) surfaced only one candidate axis
# (Angptl4 [LV-up] -> Cdh5/Sdc1-4 [Liver-expressed]) and ZERO hits in the
# hypothesized Liver-to-Heart direction. CellChatDB is curated mainly for
# local juxtacrine/paracrine cell-cell signaling (Wnt/Notch/TGFb/chemokines),
# and under-covers classic endocrine hepatokine biology -- so absence of a
# hit there is a limitation of that resource, not proof of no crosstalk.
# This step casts a wider net: query STRING (all evidence channels, not just
# curated L-R) for the combined Liver_up + LV_up gene set together, and look
# specifically for edges that BRIDGE a Liver-side node to an LV-side node.
suppressPackageStartupMessages({
  library(dplyr)
  library(httr)
  library(jsonlite)
  library(igraph)
})

dir.create("results", showWarnings = FALSE)
dir.create("figures", showWarnings = FALSE)

liver_sig <- read.csv("results/Liver_DEG_sig_padj01_lfc1.5.csv", stringsAsFactors = FALSE)
lv_sig    <- read.csv("results/LV_DEG_sig_padj01_lfc1.5.csv", stringsAsFactors = FALSE)

liver_genes <- liver_sig %>% filter(log2FoldChange > 0) %>% pull(gene_name) %>% unique()
lv_genes    <- lv_sig    %>% filter(log2FoldChange > 0) %>% pull(gene_name) %>% unique()
liver_genes <- liver_genes[liver_genes != "" & !is.na(liver_genes)]
lv_genes    <- lv_genes[lv_genes != "" & !is.na(lv_genes)]

combined_genes <- union(liver_genes, lv_genes)
cat("Combined gene set (Liver_up U LV_up):", length(combined_genes), "\n")

organ_of <- setNames(rep("Liver", length(liver_genes)), liver_genes)
organ_of[lv_genes] <- ifelse(lv_genes %in% liver_genes, "Both", "LV")

# STRING API: map identifiers first (mouse taxid 10090)
map_res <- POST(
  "https://string-db.org/api/json/get_string_ids",
  body = list(identifiers = paste(combined_genes, collapse = "\r"),
              species = 10090, limit = 1, echo_query = 1),
  encode = "form"
)
id_map <- fromJSON(content(map_res, as = "text", encoding = "UTF-8"))
cat("STRING resolved", nrow(id_map), "of", length(combined_genes), "identifiers\n")

string_ids <- unique(id_map$stringId)

network_res <- POST(
  "https://string-db.org/api/json/network",
  body = list(identifiers = paste(string_ids, collapse = "%0d"),
              species = 10090, required_score = 700),
  encode = "form"
)
edges <- fromJSON(content(network_res, as = "text", encoding = "UTF-8"))

if (is.null(edges) || nrow(edges) == 0) {
  stop("STRING returned no edges at confidence>=0.7 -- check API response / rate limiting")
}

edges <- edges %>%
  distinct(preferredName_A, preferredName_B, score, .keep_all = TRUE) %>%
  mutate(organ_A = organ_of[preferredName_A], organ_B = organ_of[preferredName_B])

write.csv(edges %>% select(preferredName_A, preferredName_B, score, organ_A, organ_B),
          "results/STRING_edges_confidence0.7.csv", row.names = FALSE)

cross_organ <- edges %>%
  filter((organ_A == "Liver" & organ_B %in% c("LV","Both")) |
         (organ_B == "Liver" & organ_A %in% c("LV","Both")) |
         (organ_A == "LV" & organ_B %in% c("Liver","Both")) |
         (organ_B == "LV" & organ_A %in% c("Liver","Both")))
cross_organ <- cross_organ %>% filter(organ_A != organ_B)
write.csv(cross_organ, "results/STRING_cross_organ_edges.csv", row.names = FALSE)
cat("Cross-organ (Liver<->LV) STRING edges at confidence>=0.7:", nrow(cross_organ), "\n")
if (nrow(cross_organ) > 0) print(cross_organ %>% select(preferredName_A, preferredName_B, score, organ_A, organ_B))

# --- hub gene identification (degree / betweenness) across the whole network ---
g <- graph_from_data_frame(edges %>% select(preferredName_A, preferredName_B, score), directed = FALSE)
deg <- degree(g)
btw <- betweenness(g)
hub_df <- data.frame(gene = names(deg), degree = deg, betweenness = btw[names(deg)]) %>%
  mutate(organ = organ_of[gene]) %>%
  arrange(desc(degree))
write.csv(hub_df, "results/STRING_hub_genes.csv", row.names = FALSE)
cat("\nTop 20 hub genes (by degree):\n")
print(head(hub_df, 20))

saveRDS(list(edges = edges, graph = g, hub_df = hub_df), "results/string_network.rds")
