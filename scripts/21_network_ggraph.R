# Re-render the Angptl4-Sdc/Cdh5 STRING network with ggraph/tidygraph for a
# publication-standard look: node size by degree, edge width/alpha by STRING
# confidence score, repelled labels (replaces the base-igraph plot in 05b).
suppressPackageStartupMessages({
  library(igraph)
  library(tidygraph)
  library(ggraph)
  library(ggplot2)
  library(dplyr)
})

dir.create("figures", showWarnings = FALSE)

net <- readRDS("results/angptl4axis_network.rds")
g_ig <- net$graph
seed_genes <- c("Angptl4", "Cdh5", "Sdc1", "Sdc2", "Sdc3", "Sdc4")

tg <- as_tbl_graph(g_ig) %>%
  activate(nodes) %>%
  mutate(
    is_seed = name %in% seed_genes,
    degree = centrality_degree(),
    node_label = name
  ) %>%
  activate(edges) %>%
  mutate(score_norm = score)

set.seed(1)
p <- ggraph(tg, layout = "stress") +
  geom_edge_link(aes(width = score_norm, alpha = score_norm), colour = "grey55") +
  scale_edge_width(range = c(0.3, 1.8), guide = "none") +
  scale_edge_alpha(range = c(0.25, 0.85), name = "STRING\nconfidence",
                    labels = scales::label_number(accuracy = 0.01)) +
  geom_node_point(aes(size = degree, fill = is_seed), shape = 21, colour = "white", stroke = 0.6) +
  scale_size(range = c(4, 14), name = "Degree") +
  scale_fill_manual(values = c(`TRUE` = "#e41a1c", `FALSE` = "#4292c6"),
                     labels = c(`TRUE` = "Seed gene\n(Angptl4/Cdh5/Sdc1-4)", `FALSE` = "STRING interactor"),
                     name = NULL) +
  ggrepel::geom_text_repel(
    aes(x = x, y = y, label = node_label),
    size = 3.6, fontface = "bold", max.overlaps = 20, seed = 1,
    segment.size = 0.2, segment.alpha = 0.5, bg.color = "white", bg.r = 0.12
  ) +
  labs(title = "Angptl4-Sdc/Cdh5 axis: STRING network",
       subtitle = "Confidence ≥ 0.7, +15 first-shell interactors — node size = degree, edge = STRING confidence") +
  theme_graph(base_family = "sans") +
  theme(plot.title = element_text(size = 17, face = "bold"),
        plot.subtitle = element_text(size = 11),
        legend.position = "right",
        plot.margin = margin(10, 10, 10, 10))

ggsave("figures/Angptl4axis_network_ggraph.png", p, width = 10, height = 7.5, dpi = 220, bg = "white")
cat("Saved figures/Angptl4axis_network_ggraph.png\n")
