suppressPackageStartupMessages({ library(ggplot2); library(dplyr) })
dir.create("figures", showWarnings = FALSE)

classify <- function(label) {
  case_when(
    label %in% c("Imatinib","Vatalanib","Cediranib","Semaxinib","Pazopanib","Fasudil") ~ "STITCH-flagged Nrp1/Nrp2 chemical partner",
    label == "EG01377" ~ "Self-docking positive control (native Nrp1 ligand)",
    TRUE ~ "Unrelated common drug"
  )
}

plot_target <- function(target, receptor_label, box_note, out_png) {
  df <- read.csv(sprintf("docking/results_%s/vina_summary.csv", tolower(target)), stringsAsFactors = FALSE)
  df <- df %>% arrange(best_affinity_kcal_mol) %>%
    mutate(label = factor(label, levels = rev(label)), category = classify(as.character(label)))
  p <- ggplot(df, aes(x = label, y = best_affinity_kcal_mol, fill = category)) +
    geom_col() +
    geom_hline(yintercept = -8.0, linetype = "dashed", color = "grey30") +
    coord_flip() +
    scale_fill_manual(values = c("STITCH-flagged Nrp1/Nrp2 chemical partner" = "#e41a1c",
                                  "Self-docking positive control (native Nrp1 ligand)" = "#377eb8",
                                  "Unrelated common drug" = "#999999")) +
    labs(title = sprintf("AutoDock Vina screening vs %s (PDB %s)", target, receptor_label),
         subtitle = box_note,
         x = NULL, y = "Best binding affinity (kcal/mol)", fill = "Compound class") +
    guides(fill = guide_legend(nrow = 3)) +
    theme_minimal(base_size = 12) +
    theme(plot.title = element_text(size = 13), legend.position = "bottom")
  ggsave(out_png, p, width = 9, height = 7, dpi = 200)
  cat("Saved", out_png, "\n")
}

plot_target("Nrp1", "6FMC", "Pocket-defined box (EG01377 co-crystallized site)", "figures/Vina_screening_Nrp1_ranked.png")
plot_target("Plxna1", "7Y4P", "Domain-blind box (Sema domain, res 27-512; no cognate pocket known)", "figures/Vina_screening_Plxna1_ranked.png")
