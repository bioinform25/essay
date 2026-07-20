"""Graphical abstract v2: bidirectional cardio-hepatic circuit. Two parallel
columns (Heart-to-Liver / Angptl4 axis; Liver-to-Heart / Sema5b-Nrp1 axis)
sharing a common data-source box at top and converging into a single
bidirectional-circuit summary box at bottom. Pure visual summary, no new
scientific content."""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
from matplotlib.lines import Line2D

fig, ax = plt.subplots(figsize=(15, 13))
ax.set_xlim(0, 18)
ax.set_ylim(5.5, 26)
ax.axis("off")

PHASE_COLORS = {
    1: "#dbe9f6", 2: "#dff0d8", 3: "#fdebd0", 4: "#f5d6d6", 5: "#e8dff5",
}
PHASE_EDGE = {1: "#3b6ea5", 2: "#3f8a3f", 3: "#c8791a", 4: "#b23a3a", 5: "#7c5aa6"}


def box(cx, y, w, h, text, phase, fontsize=9.7):
    b = FancyBboxPatch((cx - w / 2, y), w, h, boxstyle="round,pad=0.10,rounding_size=0.16",
                        linewidth=1.5, edgecolor=PHASE_EDGE[phase], facecolor=PHASE_COLORS[phase])
    ax.add_patch(b)
    ax.text(cx, y + h / 2, text, ha="center", va="center", fontsize=fontsize,
            color="#222222", linespacing=1.3, wrap=True)


def arrow(x, y_from, y_to, color="#555555"):
    a = FancyArrowPatch((x, y_from), (x, y_to), arrowstyle="-|>", mutation_scale=16,
                         linewidth=1.5, color=color)
    ax.add_patch(a)


def harrow(x_from, x_to, y, color="#555555"):
    a = FancyArrowPatch((x_from, y), (x_to, y), arrowstyle="-|>", mutation_scale=16,
                         linewidth=1.5, color=color, connectionstyle="arc3,rad=0.15")
    ax.add_patch(a)


# Title
ax.text(9, 25.5, "In Silico Discovery Pipeline", ha="center", fontsize=16, fontweight="bold")
ax.text(9, 24.75, "A Bidirectional Cardio-Hepatic Signaling Circuit: Heart-to-Liver (Angptl4) and Liver-to-Heart (Sema5b-Nrp1) Axes",
        ha="center", fontsize=10, style="italic", color="#444444")

# Shared top box
box(9, 22.7, 15.5, 1.5, "Paired bulk RNA-seq, Liver + Left Ventricle, same mice (Chow vs. 2-hit HFpEF, n=5/group)\n"
                        "DESeq2 (padj<0.05, |log2FC|>1.0): Liver 228 DEGs, LV 63 DEGs", 1)

# Column headers
LX, RX = 4.6, 13.4
ax.text(LX, 22.0, "HEART -> LIVER", ha="center", fontsize=12, fontweight="bold", color=PHASE_EDGE[2])
ax.text(RX, 22.0, "LIVER -> HEART", ha="center", fontsize=12, fontweight="bold", color=PHASE_EDGE[2])
arrow(LX, 22.55, 21.75)
arrow(RX, 22.55, 21.75)

CW = 7.6

y = 20.2
box(LX, y, CW, 1.9, "CellChatDB matching: threshold-robust\n"
                     "Angptl4 (LV) <-> Cdh5/Sdc1-4 (Liver), 5 curated pairs", 2)
box(RX, y, CW, 1.9, "CellChatDB matching: only at relaxed threshold\n"
                     "Sema5b (Liver) <-> Plxna1/Plxna3 (LV), 3 pairs", 2)
arrow(LX, y - 0.05, y - 0.75)
arrow(RX, y - 0.05, y - 0.75)

y -= 2.6
box(LX, y, CW, 1.9, "STRING hub: Sdc1 (deg 16), Sdc4 (deg 14)\n"
                     "Localize to hepatocytes (human + mouse atlases)", 2)
box(RX, y, CW, 1.9, "STRING hub: Plxna1 (deg 17), Plxna3 (deg 16)\n"
                     "Weak cardiac expression (Tabula Muris, ~5%)", 2)
arrow(LX, y - 0.05, y - 0.75)
arrow(RX, y - 0.05, y - 0.75)

y -= 2.6
box(LX, y, CW, 2.1, "Sdc1/Sdc4 structurally non-actionable\n(no ECD structure) -> redirect to\nANGPTL4 itself (PDB 6EUB)", 3)
box(RX, y, CW, 2.1, "Plxna1 apo-only, no plexin has a bound-\nligand structure -> redirect to co-receptor\nNRP1 (PDB 6FMC, EG01377-bound)", 3)
arrow(LX, y - 0.05, y - 0.85)
arrow(RX, y - 0.05, y - 0.85)

y -= 2.8
box(LX, y, CW, 2.3, "AutoDock Vina (21 cpds) + DiffDock\nResmetirom diverges (23.5 A);\nEzetimibe & Pioglitazone converge", 4)
box(RX, y, CW, 2.3, "Dual docking: Nrp1 (pocket-defined) vs\nPlxna1 (domain-blind). Imatinib converges\non Nrp1 (1.9 A); diverges on Plxna1 (22.7 A)", 4)
arrow(LX, y - 0.05, y - 0.85)
arrow(RX, y - 0.05, y - 0.85)

y -= 2.55
box(LX, y, CW, 1.7, "Repurposing leads:\nEzetimibe + Pioglitazone", 4, fontsize=10.5)
box(RX, y, CW, 1.7, "Structure-supported target:\nNrp1 (Plxna1 = hypothesis-generating only)", 4, fontsize=10.2)

# converge into bidirectional summary
harrow(LX, 8.3, y - 0.15, color="#7c5aa6")
harrow(RX, 9.7, y - 0.15, color="#7c5aa6")
arrow(9, y - 0.15, y - 0.85, color="#7c5aa6")

y -= 1.65
box(9, y - 0.75, 15.5, 1.5, "Bidirectional cardio-hepatic signaling circuit:\n"
                            "threshold-robust heart-to-liver axis + threshold-sensitive, hypothesis-generating liver-to-heart axis", 5, fontsize=10.5)

# legend
legend_elems = [
    Line2D([0], [0], marker="s", color="w", markerfacecolor=PHASE_COLORS[1], markeredgecolor=PHASE_EDGE[1], markersize=13, label="Phase 1: Transcriptomics"),
    Line2D([0], [0], marker="s", color="w", markerfacecolor=PHASE_COLORS[2], markeredgecolor=PHASE_EDGE[2], markersize=13, label="Phase 2: Network pharmacology"),
    Line2D([0], [0], marker="s", color="w", markerfacecolor=PHASE_COLORS[3], markeredgecolor=PHASE_EDGE[3], markersize=13, label="Phase 3: Druggability"),
    Line2D([0], [0], marker="s", color="w", markerfacecolor=PHASE_COLORS[4], markeredgecolor=PHASE_EDGE[4], markersize=13, label="Phase 4: Structure-based screening"),
    Line2D([0], [0], marker="s", color="w", markerfacecolor=PHASE_COLORS[5], markeredgecolor=PHASE_EDGE[5], markersize=13, label="Bidirectional synthesis"),
]
ax.legend(handles=legend_elems, loc="lower center", bbox_to_anchor=(0.5, -0.05),
          ncol=3, frameon=False, fontsize=9.5)

plt.tight_layout()
plt.savefig("figures/graphical_abstract.png", dpi=220, bbox_inches="tight", facecolor="white")
print("Saved figures/graphical_abstract.png")
