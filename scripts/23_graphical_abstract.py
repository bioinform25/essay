"""Graphical abstract: a single-figure pipeline schematic summarizing the
whole study (Bulk RNA-seq -> DEG -> network -> druggability -> docking ->
repurposing candidates). Pure visual summary, no new scientific content."""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
from matplotlib.lines import Line2D

fig, ax = plt.subplots(figsize=(9, 12))
ax.set_xlim(0, 10)
ax.set_ylim(0, 30)
ax.axis("off")

PHASE_COLORS = {
    1: "#dbe9f6",  # Phase 1 - data/DEG (light blue)
    2: "#dff0d8",  # Phase 2 - network (light green)
    3: "#fdebd0",  # Phase 3 - druggability (light orange)
    4: "#f5d6d6",  # Phase 4 - docking (light red)
}
PHASE_EDGE = {1: "#3b6ea5", 2: "#3f8a3f", 3: "#c8791a", 4: "#b23a3a"}


def box(y, h, text, phase, fontsize=10.5, bold_first=False):
    b = FancyBboxPatch((0.6, y), 8.8, h, boxstyle="round,pad=0.12,rounding_size=0.18",
                        linewidth=1.6, edgecolor=PHASE_EDGE[phase], facecolor=PHASE_COLORS[phase])
    ax.add_patch(b)
    ax.text(5, y + h / 2, text, ha="center", va="center", fontsize=fontsize,
            color="#222222", linespacing=1.35, wrap=True)


def arrow(y_from, y_to):
    a = FancyArrowPatch((5, y_from), (5, y_to), arrowstyle="-|>", mutation_scale=18,
                         linewidth=1.6, color="#555555")
    ax.add_patch(a)


# Title
ax.text(5, 29.3, "In Silico Discovery Pipeline", ha="center", fontsize=15, fontweight="bold")
ax.text(5, 28.5, "Cardio-Hepatic Axis → Structure-Based Drug Repurposing",
        ha="center", fontsize=10.5, style="italic", color="#444444")

y = 26.3
box(y, 1.7, "Paired bulk RNA-seq\nLiver + Left Ventricle, same mice\n(Chow vs. 2-hit HFpEF, n=5/group)", 1)
arrow(y - 0.05, y - 0.75)

y -= 2.55
box(y, 1.9, "DESeq2 (padj<0.01, |log2FC|>1.5)\nLiver: 86 DEGs   |   LV: 20 DEGs\nGSEA · GO · KEGG", 1)
arrow(y - 0.05, y - 0.75)

y -= 2.65
box(y, 2.15, "Ligand-receptor matching (CellChatDB)\nHypothesis reversed: Liver→Heart (0 hits)\n"
             "→ Heart→Liver axis: Angptl4 – Cdh5/Sdc1-4", 2)
arrow(y - 0.05, y - 0.75)

y -= 2.9
box(y, 2.15, "STRING PPI network + STITCH\nHub genes: Sdc1, Sdc4 (localize to hepatocytes,\n"
             "confirmed in human + mouse scRNA atlases)", 2)
arrow(y - 0.05, y - 0.75)

y -= 2.9
box(y, 2.3, "DGIdb druggability screen\nSdc1/Sdc4 structurally non-actionable (no ECD structure)\n"
            "→ target redirected to ANGPTL4 (PDB 6EUB)", 3)
arrow(y - 0.05, y - 0.75)

y -= 3.05
box(y, 2.3, "AutoDock Vina (21 compounds)\n+ DiffDock blind-docking cross-check\n"
            "Resmetirom diverges; Ezetimibe & Pioglitazone converge", 4)
arrow(y - 0.05, y - 0.75)

y -= 3.05
box(y, 2.0, "Repurposing candidates\nEzetimibe + Pioglitazone\n(convergent STITCH · Vina · DiffDock evidence)", 4,
    fontsize=11.5)

# legend
legend_elems = [
    Line2D([0], [0], marker="s", color="w", markerfacecolor=PHASE_COLORS[1], markeredgecolor=PHASE_EDGE[1], markersize=14, label="Phase 1: Transcriptomics"),
    Line2D([0], [0], marker="s", color="w", markerfacecolor=PHASE_COLORS[2], markeredgecolor=PHASE_EDGE[2], markersize=14, label="Phase 2: Network pharmacology"),
    Line2D([0], [0], marker="s", color="w", markerfacecolor=PHASE_COLORS[3], markeredgecolor=PHASE_EDGE[3], markersize=14, label="Phase 3: Druggability"),
    Line2D([0], [0], marker="s", color="w", markerfacecolor=PHASE_COLORS[4], markeredgecolor=PHASE_EDGE[4], markersize=14, label="Phase 4: Structure-based screening"),
]
ax.legend(handles=legend_elems, loc="lower center", bbox_to_anchor=(0.5, -0.045),
          ncol=1, frameon=False, fontsize=9.5)

plt.tight_layout()
plt.savefig("figures/graphical_abstract.png", dpi=220, bbox_inches="tight", facecolor="white")
print("Saved figures/graphical_abstract.png")
