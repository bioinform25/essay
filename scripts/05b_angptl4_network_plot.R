suppressPackageStartupMessages({ library(igraph); library(dplyr) })
dir.create("figures", showWarnings = FALSE)

net <- readRDS("results/angptl4axis_network.rds")
g <- net$graph
seed_genes <- c("Angptl4", "Cdh5", "Sdc1", "Sdc2", "Sdc3", "Sdc4")
V(g)$is_seed <- V(g)$name %in% seed_genes
V(g)$color <- ifelse(V(g)$is_seed, "#e41a1c", "#a6cee3")
V(g)$size <- ifelse(V(g)$is_seed, 14, 8)

set.seed(1)
lay <- layout_with_fr(g)
lay <- norm_coords(lay, ymin = -1, ymax = 1, xmin = -1, xmax = 1)

png("figures/Angptl4axis_network.png", width = 1800, height = 1500, res = 220)
par(mar = c(1, 1, 3, 1))
plot(g, layout = lay, rescale = FALSE, xlim = c(-1.3, 1.3), ylim = c(-1.45, 1.15),
     vertex.label = V(g)$name, vertex.label.cex = 0.8, vertex.label.color = "black",
     vertex.color = V(g)$color, vertex.size = V(g)$size,
     edge.width = E(g)$score / 300, edge.color = "grey70",
     main = "Angptl4-Sdc/Cdh5 axis: STRING network (confidence>=0.7, +15 first-shell interactors)")
legend(x = -1.3, y = -1.15, legend = c("Seed gene (Angptl4/Cdh5/Sdc1-4)", "STRING interactor"),
       pt.bg = c("#e41a1c", "#a6cee3"), pch = 21, pt.cex = 2, bty = "n", xpd = TRUE)
dev.off()
cat("Saved figures/Angptl4axis_network.png\n")
