# Phase 2 (step 2b): expand the Angptl4-Sdc/Cdh5 axis into a small PPI network
# via STRING (seed genes + first-shell interactors), identify hub genes, and
# push the network into the running Cytoscape session via RCy3 for CytoHubba.
suppressPackageStartupMessages({
  library(dplyr)
  library(httr)
  library(jsonlite)
  library(igraph)
})

dir.create("results", showWarnings = FALSE)
dir.create("figures", showWarnings = FALSE)

seed_genes <- c("Angptl4", "Cdh5", "Sdc1", "Sdc2", "Sdc3", "Sdc4")

map_res <- POST(
  "https://string-db.org/api/json/get_string_ids",
  body = list(identifiers = paste(seed_genes, collapse = "\r"), species = 10090, limit = 1),
  encode = "form"
)
id_map <- fromJSON(content(map_res, as = "text", encoding = "UTF-8"))
string_ids <- unique(id_map$stringId)
cat("Resolved", nrow(id_map), "of", length(seed_genes), "seed genes\n")

# expand with up to 15 additional first-shell interactors at high confidence
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
          "results/Angptl4axis_STRING_edges.csv", row.names = FALSE)

g <- graph_from_data_frame(edges %>% select(preferredName_A, preferredName_B, score), directed = FALSE)
deg <- degree(g)
btw <- betweenness(g)
hub_df <- data.frame(gene = names(deg), degree = deg, betweenness = round(btw[names(deg)], 1),
                      is_seed = names(deg) %in% seed_genes) %>%
  arrange(desc(degree), desc(betweenness))
write.csv(hub_df, "results/Angptl4axis_hub_genes.csv", row.names = FALSE)
cat("\nHub genes (Angptl4-Sdc/Cdh5 axis network):\n")
print(hub_df)

saveRDS(list(edges = edges, graph = g, hub_df = hub_df), "results/angptl4axis_network.rds")

# --- push to Cytoscape (assumes Cytoscape.exe already running with CyREST on 1234) ---
cyto_ok <- tryCatch({
  suppressPackageStartupMessages(library(RCy3))
  RCy3::cytoscapePing()
  TRUE
}, error = function(e) { cat("Cytoscape not reachable via CyREST:", conditionMessage(e), "\n"); FALSE })

if (cyto_ok) {
  node_df <- data.frame(id = unique(c(edges$preferredName_A, edges$preferredName_B))) %>%
    mutate(is_seed = id %in% seed_genes)
  edge_df <- edges %>% transmute(source = preferredName_A, target = preferredName_B, interaction = "interacts", score)
  RCy3::createNetworkFromDataFrames(nodes = node_df, edges = edge_df,
                                     title = "Angptl4-Sdc-Cdh5 axis", collection = "essay_cardiohepatic")
  RCy3::setNodeColorMapping("is_seed", c("TRUE","FALSE"), c("#e41a1c","#377eb8"), mapping.type = "d")
  RCy3::layoutNetwork("force-directed")
  RCy3::exportImage("figures/Angptl4axis_cytoscape_network", type = "PNG", resolution = 300, overwriteFile = TRUE)
  cat("Pushed network to Cytoscape and exported figures/Angptl4axis_cytoscape_network.png\n")
} else {
  cat("Skipping Cytoscape push; network still saved via igraph/CSV for downstream use.\n")
}
