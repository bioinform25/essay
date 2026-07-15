# Phase 3: Final target selection rationale

## Candidates considered (Angptl4-Sdc/Cdh5 axis hub genes)

| Gene | Network role | Liver/organ localization | DGIdb hits | PDB structure |
|---|---|---|---|---|
| ANGPTL4 | axis ligand, LV-up DEG | secreted by cardiac fibroblasts (lit., PMC11785561) | 0 | **6EUB/6U0A/6U1U/6U73** - C-terminal fibrinogen-like domain, 2.3A, real ligand-binding surface |
| SDC1 | hub (degree 16) | Liver hepatocyte (+plasma cell) | 3 (heparin, indatuximab ravtansine - ADC biologic, not small-molecule-relevant) | ectodomain largely unstructured; PDB entries are fragments |
| SDC4 | hub (degree 14) | Liver hepatocyte (+cholangiocyte) | 1 (Repotrectinib - oncology kinase inhibitor, mechanistically unrelated; likely DGIdb text-mining artifact) | PDB 8BLV etc. = **cytoplasmic PDZ-binding tail only**, not the extracellular ligand-binding surface -> not usable for docking against Angptl4 binding |
| SDC3 | hub (degree 6) | Liver MP/Kupffer | 0 | no PDB structure at all |
| CDH5 | isolated (degree 1) | Liver Endothelia (positive control) | 1 (FX06, a fibrin-derived peptide, not small molecule) | calcium-dependent adhesion domains, less directly tied to this axis |

## Decision: ANGPTL4 (C-terminal fibrinogen-like domain, PDB 6EUB)

**Why not the syndecans (the actual network hubs):** all available PDB structures for
SDC1/SDC4 cover fragments other than the extracellular heparan-sulfate-bearing
ectodomain that would physically engage a secreted ligand like Angptl4 (e.g. 8BLV is
the SDC4 cytoplasmic tail bound to syntenin PDZ domains, not an extracellular pocket).
Docking a small molecule against a cytoplasmic PDZ-binding motif would not address the
actual Angptl4-syndecan extracellular interaction, so despite their strong network
centrality, they are not structurally actionable for this step.

**Why ANGPTL4:** (1) zero existing DGIdb drug interactions -- genuinely undrugged;
(2) a real, solved, 2.3-angstrom crystal structure of its C-terminal fibrinogen-like
domain exists (6EUB) with a visible ligand-accommodating surface (PEG fragment bound
in the deposited structure); (3) it is the molecule directly validated twice over --
by our own stricter DEG reanalysis (LV upregulated, padj/lfc-significant) and by an
independent 2024 single-cell paper confirming cardiac-fibroblast secretion in HFpEF;
(4) blocking this domain would act at the source of the axis (the secreted signal
itself) rather than downstream, which is defensible as the more tractable
intervention point given the receptor-side structures are unusable.

**Limitation to state plainly in the paper:** this reframes the intervention target
from the network-centrality hub (Sdc1/Sdc4) to the ligand itself, because of a
structural-biology constraint, not a change in the network analysis's conclusions --
Sdc1/Sdc4 remain the top computational hubs, but are not currently actionable for
small-molecule structure-based screening with public structural data.
