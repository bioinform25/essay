# Liver-to-heart axis: dual-target docking summary (Nrp1 + Plxna1)

## Background: why two targets

CellChatDB directly matches liver-secreted SEMA5B to cardiac PLXNA1/PLXNA3
(Section 3.x). STRING network expansion (script 28) shows Plxna1 (degree 17)
and Plxna3 (degree 16) as genuine hubs, comparable to or exceeding the
heart-to-liver axis's Sdc1/Sdc4. However, Tabula Muris mouse cardiac
single-cell data (script 33) shows Plxna1/Plxna3 are only weakly detected in
actual cardiac cell types (~5% of cells), while Nrp1 -- an established
obligate co-receptor for class-A plexins in semaphorin signaling, not itself
the CellChatDB-matched gene -- is very strongly and broadly expressed
(74.8-96.8% of endocardial/endothelial/fibroblast cells) and has a much
better-resolved structure (0.90 A vs. 3.50 A) with real chemical-partner data
(STITCH, DGIdb). Per the user's decision, both targets were docked and are
reported together rather than picking one in advance.

## Bug found and fixed during receptor prep

UniProt's `gene:NRP1` / `gene:NRP2` queries each return TWO entries: the
real Neuropilin gene, and NELL1/NELL2, which carry "NRP1"/"NRP2" as old
gene-name aliases. The first structure-check pass (script 30, before the
fix) silently took the first search result and returned PDB 6POL/6POG --
both NELL1/NELL2-ROBO complexes, not Neuropilin structures at all. This was
caught only when the downloaded PDB's own TITLE record didn't say
"neuropilin". Script 30 was fixed to require an exact PRIMARY gene-name
match (not a synonym), which correctly resolves to O14786 (real NRP1, 25 PDB
structures) and O60462 (real NRP2, 16 PDB structures). The receptor
ultimately used, 6FMC (Neuropilin-1 b1 domain in complex with EG01377,
0.90 A), was verified against its own TITLE record before use.

## Receptor prep

| Target | PDB | Box definition | Box size |
|---|---|---|---|
| Nrp1 | 6FMC (0.90 A, EG01377-bound) | Pocket-defined: co-crystallized ligand (DUE/EG01377) atom centroid | 24 A cube |
| Plxna1 | 7Y4P (3.50 A, apo ectodomain) | Domain-focused blind: CA centroid of the Sema domain (UniProt-annotated residues 27-512), the literature-established semaphorin-binding beta-propeller | 30 A cube |

No small-molecule-bound plexin structure exists for any family member, so
the Plxna1 box is disclosed as lower-confidence domain-level blind docking,
not a defined pocket.

## Ligand library (11 compounds)

- **EG01377**: self-docking positive control, SMILES taken directly from the
  RCSB chemical-component dictionary (entry DUE) rather than a name search,
  since it is the exact molecule co-crystallized in the Nrp1 receptor.
- **STITCH-flagged real chemical partners** of Nrp1/Nrp2 (script 31):
  Imatinib, Vatalanib, Cediranib, Semaxinib, Pazopanib, Fasudil.
- **Unrelated common drugs** (specificity contrast, reused from the
  original ANGPTL4 library): Aspirin, Ibuprofen, Caffeine, Metoprolol.

## AutoDock Vina results

| Target | Top hit | Self-docking control (EG01377) | Unrelated-drug range | Interpretation |
|---|---|---|---|---|
| Nrp1 | Imatinib -7.98 kcal/mol | -7.10 kcal/mol (respectable, mid-pack) | -4.98 to -6.30 kcal/mol | Real separation: known chemical partners and the native ligand all score clearly better than unrelated drugs |
| Plxna1 | Imatinib -9.96 kcal/mol | -9.15 kcal/mol (2nd of 11, nearly tied with top hit) | -6.44 to -6.71 kcal/mol | Confounded: EG01377 was never designed for Plxna1, yet scores almost as well as the top real hit -- consistent with a general size/surface-stickiness artifact of blind domain-level docking rather than specific binding |

## DiffDock cross-check (top Vina hit per target: Imatinib)

DiffDock performs blind docking across the whole receptor with no box
constraint, so agreement with the Vina-defined site is an independent
structural check, mirroring the original ANGPTL4 Ezetimibe/Resmetirom
cross-check.

| Target | DiffDock top-pose confidence | Distance from Vina box center | Verdict |
|---|---|---|---|
| Nrp1 | -1.51 | **1.9 A -- converges on the same pocket** | Independently confirmed. Contact residues (Tyr297, Trp301, Asp320, Glu348, Lys350/351, Tyr353) match the literature-known Nrp1 b1-domain pocket that normally binds the C-terminal arginine of VEGF-A/Sema3A and the EG-series inhibitor scaffold. |
| Plxna1 | -1.65 | **22.7 A -- different site entirely** | Not confirmed. DiffDock's unconstrained search preferred a site far from the Sema domain propeller face, contradicting the Vina result. Both docking methods agree the Plxna1 result should not be over-interpreted. |

Both confidence scores (-1.51, -1.65) fall in DiffDock's own low-to-moderate
range (published benchmarks treat c > 0 as high-confidence), consistent with
the original paper's ANGPTL4 DiffDock scores (-1.32, -2.06) -- these remain
hypothesis-generating leads, not validated hits, for this 학술제 pipeline.

## Overall interpretation

The Nrp1 axis is the well-supported liver-to-heart docking result: real
Vina specificity (known chemical partners >> unrelated drugs), a respectable
self-docking control score, and DiffDock independently converging on the
same, biologically sensible pocket. The Plxna1 axis -- despite being the
literal CellChatDB-matched receptor with the highest network centrality --
is contradicted by two independent lines of evidence (a self-docking-control
artifact in Vina, and DiffDock preferring a different site entirely) on top
of its already weak cardiac single-cell expression (script 33). This
reproduces, through a different mechanism, the same lesson as the original
heart-to-liver axis's Sdc1/Sdc4-to-Angptl4 redirect: network/complex-level
hub identification is necessary but not sufficient, and structural +
expression + independent-method agreement should decide the final claim.
