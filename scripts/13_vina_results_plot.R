suppressPackageStartupMessages({ library(ggplot2); library(dplyr) })
dir.create("figures", showWarnings = FALSE)

df <- read.csv("docking/results/vina_summary.csv", stringsAsFactors = FALSE)
df <- df %>% arrange(best_affinity_kcal_mol) %>%
  mutate(label = gsub("_", " ", label),
         label = factor(label, levels = rev(label)),
         category = case_when(
           label %in% c("Resmetirom","Pioglitazone","Fenofibrate","Bezafibrate","Rosiglitazone",
                        "Ezetimibe","Empagliflozin","Dapagliflozin","Obeticholic acid") ~ "Cardiometabolic/MASH drug",
           label %in% c("Linoleic acid","Palmitic acid","Eicosapentaenoic acid","Arachidonic acid","Icosapent ethyl") ~ "Endogenous fatty acid",
           TRUE ~ "Unrelated common drug"))

p <- ggplot(df, aes(x = label, y = best_affinity_kcal_mol, fill = category)) +
  geom_col() +
  geom_hline(yintercept = -8.0, linetype = "dashed", color = "grey30") +
  coord_flip() +
  scale_fill_manual(values = c("Cardiometabolic/MASH drug" = "#e41a1c",
                                "Endogenous fatty acid" = "#4daf4a",
                                "Unrelated common drug" = "#999999")) +
  labs(title = "AutoDock Vina screening vs ANGPTL4 fibrinogen-like domain (PDB 6EUB)",
       subtitle = "Dashed line: -8.0 kcal/mol (strong-binding reference threshold)",
       x = NULL, y = "Best binding affinity (kcal/mol)", fill = "Compound class") +
  theme_minimal(base_size = 12) +
  theme(plot.title = element_text(size = 13), legend.position = "bottom")

ggsave("figures/Vina_screening_ranked.png", p, width = 9, height = 7, dpi = 200)
cat("Saved figures/Vina_screening_ranked.png\n")
