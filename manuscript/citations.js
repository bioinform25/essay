// Maps in-text citation keys (exact strings as they appear, verbatim, in
// content_en.js / content_kr.js after string concatenation, e.g.
// "Strocchi et al., 2024") to a resolvable DOI/arXiv URL, and provides the
// bibliography-entry URLs in the same order as content.references, so that
// both build_manuscript.js and build_supplemental.js can render clickable
// citations without duplicating this lookup table per language (the keys
// are identical in both languages since author names/years stay in Latin
// script). All DOIs verified against PubMed/publisher pages on 2026-07-18.
module.exports = {
  inText: {
    "Rinella et al., 2023": "https://doi.org/10.1016/j.jhep.2023.06.003",
    "Strocchi et al., 2024": "https://doi.org/10.1161/CIRCRESAHA.124.324829",
    "Schütte et al., 2025": "https://doi.org/10.1161/CIRCRESAHA.125.326264",
    "Li et al., 2024": "https://doi.org/10.1016/j.jare.2024.02.006",
    "Love et al., 2014": "https://doi.org/10.1186/s13059-014-0550-8",
    "Zhu et al., 2019": "https://doi.org/10.1093/bioinformatics/bty895",
    "Korotkevich et al., 2019": "https://doi.org/10.1101/060012",
    "Wu et al., 2021": "https://doi.org/10.1016/j.xinn.2021.100141",
    "Szklarczyk et al., 2023": "https://doi.org/10.1093/nar/gkac1000",
    "Szklarczyk et al., 2016": "https://doi.org/10.1093/nar/gkv1277",
    "Jin et al., 2021": "https://doi.org/10.1038/s41467-021-21246-9",
    "Cannon et al., 2024": "https://doi.org/10.1093/nar/gkad1040",
    "Eberhardt et al., 2021": "https://doi.org/10.1021/acs.jcim.1c00203",
    "Corso et al., 2023": "https://arxiv.org/abs/2210.01776",
    "Ramachandran et al., 2019": "https://doi.org/10.1038/s41586-019-1631-3",
    "Govaere et al., 2020": "https://doi.org/10.1126/scitranslmed.aba4448",
    "Powell et al., 2018": "https://doi.org/10.1021/acs.jmedchem.8b00210",
    "Tanaka et al., 2022": "https://doi.org/10.1002/pro.4452",
    "Takahashi et al., 1999": "https://doi.org/10.1016/S0092-8674(00)80062-8",
    "Artigiani et al., 2004": "https://doi.org/10.1038/sj.embor.7400189",
  },
  // Same order as the `references` array in content_en.js / content_kr.js.
  referenceUrls: [
    "https://doi.org/10.1016/j.jhep.2023.06.003",          // Rinella 2023
    "https://doi.org/10.1161/CIRCRESAHA.124.324829",       // Strocchi 2024
    "https://doi.org/10.1161/CIRCRESAHA.125.326264",       // Schütte 2025
    "https://doi.org/10.1016/j.jare.2024.02.006",          // Li 2024/2025
    "https://doi.org/10.1186/s13059-014-0550-8",           // Love 2014 DESeq2
    "https://doi.org/10.1093/bioinformatics/bty895",       // Zhu 2019 apeglm
    "https://doi.org/10.1101/060012",                      // Korotkevich fgsea
    "https://doi.org/10.1016/j.xinn.2021.100141",          // Wu 2021 clusterProfiler
    "https://doi.org/10.1093/nar/gkac1000",                // Szklarczyk 2023 STRING
    "https://doi.org/10.1093/nar/gkv1277",                 // Szklarczyk 2016 STITCH
    "https://doi.org/10.1038/s41467-021-21246-9",          // Jin 2021 CellChat
    "https://doi.org/10.1093/nar/gkad1040",                // Cannon 2024 DGIdb
    "https://doi.org/10.1038/s41598-018-25237-7",          // Biterova 2018
    "https://doi.org/10.1021/acs.jcim.1c00203",            // Eberhardt 2021 Vina
    "https://arxiv.org/abs/2210.01776",                    // Corso 2023 DiffDock
    "https://doi.org/10.1038/s41586-019-1631-3",           // Ramachandran 2019
    "https://doi.org/10.1126/scitranslmed.aba4448",        // Govaere 2020
    "https://doi.org/10.1021/acs.jmedchem.8b00210",        // Powell 2018 (PDB 6FMC/EG01377)
    "https://doi.org/10.1002/pro.4452",                    // Tanaka 2022 (PDB 7Y4P)
    "https://doi.org/10.1016/S0092-8674(00)80062-8",       // Takahashi 1999 (Nrp1-PlexinA co-receptor)
    "https://doi.org/10.1038/sj.embor.7400189",            // Artigiani 2004 (Sema5A-PlexinB3 specificity)
  ],
};
