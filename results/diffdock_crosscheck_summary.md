# Phase 4: DiffDock cross-check summary (top 2 Vina hits)

Vina docking (Section above) used a fixed search box centered on the only
observed small-molecule-occupied surface site in the ANGPTL4 crystal structure
(the 1PE/PEG cryoprotectant site). DiffDock, by contrast, performs **blind**
docking across the entire protein surface with no box constraint — so
agreement between the two methods on *where* a ligand binds is an independent
structural check, not just a re-ranking of the same fixed site.

| Compound | Vina best affinity | DiffDock top-pose confidence | Distance from Vina pocket center |
|---|---|---|---|
| Resmetirom | -9.07 kcal/mol (rank 1 of 21) | -2.06 (low-moderate) | **23.5 A -- different site** |
| Ezetimibe  | -8.88 kcal/mol (rank 2 of 21) | -1.32 (moderate, better than Resmetirom's) | **3.5 A -- converges on the same pocket** |

## Interpretation

- **Ezetimibe** is the more cross-validated candidate: an orthogonal,
  box-free method (DiffDock) independently converged on essentially the same
  surface pocket that Vina was constrained to search, and did so with a
  *better* confidence score than Resmetirom. Contact residues at this site
  (Leu304, Leu312, Gly313, Ala314, Leu322, Ser323, Val324, Trp349, Trp350,
  Gly352, Thr353, His356) form a real hydrophobic groove consistent with a
  genuine small-molecule pocket, not a surface artifact.
- **Resmetirom** scored best on Vina (which only searched the predefined
  pocket), but DiffDock's unconstrained search preferred a completely
  different surface region (contact residues Trp280, Asp281, Ile367, Leu374,
  Tyr387, Tyr388, Pro389). This is reported as a genuine discrepancy rather
  than smoothed over: Resmetirom's top Vina score should be read as
  "the best-fitting pose *within the pocket we searched*," not as strong
  independent evidence that this is its preferred binding site on ANGPTL4.
- Both DiffDock confidence scores (-2.06, -1.32) fall in DiffDock's own
  low-to-moderate confidence range (published benchmarks treat c > 0 as
  high-confidence), so neither result should be oversold as a confirmed
  binder -- both are hypothesis-generating leads for this 학술제 pipeline,
  not validated hits.

## Practical note on tooling

DiffDock was not run locally: this machine has no CUDA-capable GPU, and a
local from-scratch install (PyTorch + PyTorch Geometric + e3nn + ESM) would
have made CPU inference impractically slow for even one complex. Instead, a
publicly running DiffDock Gradio Space (`swcanner/DiffDock-Web`, mirroring
the original `gcorso/DiffDock` inference code) was used via its web UI for
the two approved top-hit compounds only, consistent with the earlier
CPU-budget decision to limit DiffDock to the final 1-2 candidates rather than
the full 21-compound library.
