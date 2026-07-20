// English-language manuscript content. Figures are interleaved with the
// Results text as {type:'figure'} blocks, placed immediately after the
// paragraph that first describes them (journal convention).
module.exports = {
  lang: "en",
  labels: {
    abstract: "Abstract",
    introduction: "1. Introduction",
    methods: "2. Methods",
    results: "3. Results",
    discussion: "4. Discussion",
    conclusion: "5. Conclusion and Future Directions",
    references: "References",
    graphicalAbstract: "Graphical Abstract",
  },
  title: "A Bidirectional Cardio-Hepatic Signaling Axis: Structure-Based Target Redirection and Drug " +
         "Repurposing Across the Angptl4-Sdc/Cdh5 (Heart-to-Liver) and Sema5b-Nrp1 (Liver-to-Heart) Circuits",
  studentLine: "202251154 Changwoo Lee",

  graphicalAbstract: {
    file: "figures/graphical_abstract.png",
    caption: "Graphical abstract. Reanalyzing paired liver/left-ventricle transcriptomics at padj<0.05, " +
             "|log2FC|>1.0 revealed candidate axes in both directions. The heart-to-liver direction is a " +
             "threshold-robust Angptl4-Sdc/Cdh5 axis: the network hubs Sdc1/Sdc4 are not structurally " +
             "actionable, so screening was redirected to ANGPTL4 itself (PDB 6EUB), yielding Ezetimibe " +
             "and Pioglitazone as candidates convergent across STITCH, Vina, and DiffDock. The " +
             "liver-to-heart direction is a Sema5b-Plxna1/Plxna3 axis visible only at the relaxed " +
             "threshold: the hub Plxna1 is weakly expressed in mouse heart, so screening was redirected " +
             "to the semaphorin/plexin co-receptor Nrp1 (PDB 6FMC), where Vina and DiffDock converge on " +
             "the same site, while the two methods disagree by 22.7 A on Plxna1 itself, left as a " +
             "hypothesis-generating result.",
  },

  abstract:
    "Heart failure with preserved ejection fraction (HFpEF) and metabolic dysfunction-associated " +
    "steatotic liver disease (MASLD) are increasingly recognized as bidirectionally linked through a " +
    "cardio-hepatic axis, yet the molecular mediators of this crosstalk remain incompletely defined. " +
    "We reanalyzed a paired bulk RNA-seq dataset (liver and left ventricle from the same C57BL/6N mice, " +
    "chow vs. a 2-hit HFpEF diet, n=5/group; Zenodo 12794566). A sensitivity analysis comparing the " +
    "original publication's own relaxed threshold (padj<0.05, |log2FC|>0.5) against the stricter " +
    "threshold we first adopted (padj<0.01, |log2FC|>1.5) led us to settle on an intermediate final " +
    "threshold, padj<0.05 and |log2FC|>1.0 (228 significant liver DEGs, 63 in LV). At this threshold, " +
    "CellChatDB ligand-receptor matching revealed signal in both directions. In the heart-to-liver " +
    "direction, Angptl4 (upregulated in HFpEF left ventricle) paired with Cdh5/Sdc1-4 (expressed in " +
    "liver), reproducing cleanly regardless of statistical threshold. Sdc1/Sdc4 were network hubs " +
    "(degree 16 and 14) localizing to hepatocytes, but with no extracellular-domain crystal structure " +
    "available, so we redirected structure-based screening to ANGPTL4's C-terminal fibrinogen-like " +
    "domain (PDB 6EUB). AutoDock Vina screening of 21 compounds followed by DiffDock cross-validation " +
    "identified Ezetimibe and Pioglitazone as candidates convergent across both methods (Vina -8.88 and " +
    "-8.28 kcal/mol; DiffDock poses converging within 3.5 A and 3.9 A of the Vina pocket). More " +
    "unexpectedly, the relaxed threshold also revealed a new signal in the liver-to-heart direction, " +
    "absent under the stricter threshold: liver Sema5b paired with LV-expressed Plxna1/Plxna3. STRING " +
    "nominated Plxna1 (degree 17) and Plxna3 (degree 16) as hubs, but an independent mouse cardiac " +
    "single-cell atlas (Tabula Muris Heart+Aorta) showed their actual cardiac expression was weak (<=5% " +
    "of cardiomyocytes). Nrp1, a well-documented co-receptor in semaphorin/plexin signaling, was instead " +
    "strongly expressed in endocardial and endothelial cells (up to 96.8%), had a far higher-resolution " +
    "crystal structure (0.90 A, EG01377-bound, PDB 6FMC; Powell et al., 2018), and showed real chemical " +
    "associations (STITCH/DGIdb: Pazopanib, Cediranib, Fasudil, Imatinib, Vatalanib, Semaxinib). Docking " +
    "both Plxna1 (a domain-level blind box centered on the Sema domain) and Nrp1 (a pocket-specific box " +
    "at the EG01377 co-crystal site), DiffDock cross-validation of each target's top Vina hit (Imatinib) " +
    "showed that Nrp1 converged with Vina at the same site (within 1.9 A, matching literature-known b1-" +
    "domain residues Tyr297/Trp301/Asp320/Lys351), whereas Plxna1 diverged by 22.7 A between the two " +
    "methods. We explicitly note that Nrp1's role as a co-receptor is established for class-3 secreted " +
    "semaphorin-PlexinA signaling (Takahashi et al., 1999), not for SEMA5B-PLXNA1 specifically - and that " +
    "SEMA5B's paralog SEMA5A binds Plexin-B3 while SEMA5B itself does not (Artigiani et al., 2004), " +
    "underscoring that receptor specificity cannot simply be extrapolated across this gene family. This " +
    "work shows that careful statistical-threshold selection can reveal a genuinely bidirectional cardio-" +
    "hepatic circuit - one direction statistically robust and structurally validated, the other " +
    "statistically subtler but supported by convergent structural, expression, and independent-docking " +
    "evidence as a hypothesis-generating axis.",

  keywords: "Keywords: HFpEF, MASLD, cardio-hepatic axis, ANGPTL4, Neuropilin-1, network pharmacology, molecular docking",

  introduction: [
    "Metabolic dysfunction-associated steatotic liver disease (MASLD) has superseded the purely " +
    "descriptive term \"non-alcoholic fatty liver disease\" (NAFLD), reflecting a paradigm in which " +
    "systemic metabolic dysfunction - insulin resistance, obesity, and dyslipidemia - is understood to " +
    "interact directly with the liver rather than merely coexist with it (Rinella et al., 2023). Over " +
    "the past three years, the focus of liver-disease research has likewise shifted from purely " +
    "intrahepatic pathology toward inter-organ crosstalk, driven in part by the observation that the " +
    "leading cause of death in MASLD/MASH patients is cardiovascular disease rather than cirrhosis. This " +
    "epidemiological fact has accelerated interest in the cardio-hepatic axis.",

    "Heart failure with preserved ejection fraction (HFpEF) is a central phenotype of this cardio-hepatic " +
    "interaction. A recent study was the first to systematically profile the liver and heart of the same " +
    "animals in a 2-hit HFpEF mouse model (combined metabolic and hypertensive stress) and nominated " +
    "Saa1/Saa4 as candidate liver-to-heart mediators (Strocchi et al., 2024). A follow-up study used " +
    "hepatocyte-specific secretome labeling to show that the liver's secreted cytokine signature is " +
    "altered under HFpEF (Schütte et al., 2025). However, neither study extended beyond the systems-" +
    "biology discovery stage into protein-protein interaction (PPI) network construction, network " +
    "pharmacology, or structure-based virtual screening.",

    "This study's investigation proceeded in three stages. First, we reanalyzed a public human MASLD " +
    "liver-fibrosis cohort (GSE135251, Govaere et al.; 216 liver biopsies, early F0-F1 vs. " +
    "moderate/advanced F2-F4 fibrosis) by bulk DESeq2 differential expression, a STRING PPI network " +
    "restricted to hub genes (degree>=3), and a DGIdb druggability screen that excluded already-canonical " +
    "fibrosis genes (collagens, the core TGF-beta/myofibroblast axis) to surface seven under-explored " +
    "druggable candidates: CCL21, CXCL8, CCL20, EPCAM, LUM, THY1, and THBS2. Second, we built and " +
    "annotated a human liver single-cell atlas from scratch (GSE136103, Ramachandran et al., 2019, " +
    "Nature; a human liver cirrhosis single-cell dataset; quality control, Harmony batch integration, " +
    "clustering, and lineage-signature-based cell-type annotation - full pipeline in Methods 2.6) to " +
    "localize three of those seven genes (LUM, THY1, THBS2) to activated hepatic stellate cells and to " +
    "characterize their upstream transcription-factor/miRNA regulators and cell-cell communication " +
    "partners. Full methodological detail for both analyses, written so as to stand on their own, is " +
    "provided in Supplemental Text S3. Third, and central to this study, we set out to reanalyze the " +
    "paired mouse liver-heart dataset described below under a substantially stricter statistical " +
    "threshold and to carry the analysis all the way through ligand-receptor interactome matching, a " +
    "STRING-based PPI network, STITCH network pharmacology, DGIdb druggability assessment, and, finally, " +
    "structure-based virtual screening with AutoDock Vina and DiffDock - extending the program above by " +
    "moving from human to mouse and from a single-organ (liver) to a genuinely inter-organ (liver-heart) " +
    "axis; the GSE136103 atlas built in the second stage is reused here in " +
    "an entirely different role, as an independent cross-species reference for localizing this study's " +
    "own candidate genes (Section 3.5), not as a source of the candidate genes themselves. Contrary to " +
    "our initial hypothesis, the data pointed not " +
    "toward a liver-secreted factor acting on the heart, but toward the reverse - a heart-secreted " +
    "factor acting on the liver - a direction that in fact aligns closely with the clinically " +
    "established entity of congestive hepatopathy/cardiohepatic syndrome. Rather than treating this " +
    "reversal as a disappointment, we report it as a genuine finding and follow it through to a " +
    "druggability assessment and a compound-level screen.",

    "After completing the three stages above, we noticed that the statistical threshold actually used by " +
    "the original study (Strocchi et al., 2024), padj<0.05 and |log2FC|>0.5, was considerably more " +
    "relaxed than the threshold we had first adopted (padj<0.01, |log2FC|>1.5; Section 3.1). This raised " +
    "a natural question: would a more relaxed, but still non-arbitrary, threshold reveal a significant " +
    "signal in the liver-to-heart direction as well? To answer it, we performed a sensitivity analysis by " +
    "re-filtering the already-fitted DESeq2 models (no refitting required) and adopted the result as the " +
    "final threshold for the entire pipeline (padj<0.05, |log2FC|>1.0; Section 3.1). Under this relaxed " +
    "threshold, the heart-to-liver Angptl4-Sdc/Cdh5 axis reproduced identically regardless of statistical " +
    "threshold, but a new signal also appeared in the originally hypothesized liver-to-heart direction " +
    "that had not been visible before (Sema5b-Plxna1/Plxna3). Rather than setting this second axis aside, " +
    "we followed it through with the same rigor as the first - STRING network analysis, cell-type " +
    "localization, druggability assessment, and structure-based docking (Sections 3.10-3.17) - ultimately " +
    "describing the cardio-hepatic axis as a bidirectional circuit rather than a one-way signal."
  ],

  methods: [
    { h: "2.1 Dataset", p:
      "This study reused publicly deposited data (Zenodo record 12794566) from Strocchi et al. (2024), " +
      "published in Circulation Research. Male C57BL/6N mice were subjected for 8 weeks to a 2-hit " +
      "HFpEF-inducing regimen (combined metabolic and hypertensive stress; HFpEF group, n=5) or a normal " +
      "chow diet (Chow group, n=5), after which liver and left-ventricular (LV) tissue were each " +
      "profiled by bulk RNA-seq. We used the deposited raw count matrices and phenotypic metadata " +
      "(echocardiographic indices, organ weights) as-is. Because liver and LV were sampled from the same " +
      "animals rather than from independently recruited cohorts, this dataset constitutes a genuine " +
      "paired multi-organ resource, appropriate for addressing inter-organ crosstalk."
    },
    { h: "2.2 Differential expression analysis", p:
      "DESeq2 (Love et al., 2014) was applied independently to each organ. Genes were pre-filtered to " +
      "those with a raw count ≥10 in at least 5 of the 10 samples, and log2 fold changes were shrunk " +
      "using apeglm (Zhu et al., 2019). We defined significant DEGs using a threshold stricter than the " +
      "conventional padj<0.05 - specifically padj<0.01 and |log2FC|>1.5 - to minimize false positives."
    },
    { h: "2.3 GSEA, GO, and KEGG enrichment", p:
      "GSEA against the Hallmark gene set collection (msigdbr, Mus musculus) was performed with fgsea " +
      "(Korotkevich et al., 2019). Because apeglm-shrunk results omit the Wald statistic, the ranking " +
      "metric was reconstructed as sign(log2FC) x (-log10 p-value). For the significant DEG lists, " +
      "clusterProfiler (Wu et al., 2021) was used for GO Biological Process and KEGG (organism=mmu) " +
      "over-representation analysis (BH-adjusted padj<0.05)."
    },
    { h: "2.4 Ligand-receptor interactome matching", p:
      "Upregulated DEGs from each organ were treated as candidate ligands and matched against CellChatDB." +
      "mouse's curated ligand-receptor pairs (Jin et al., 2021). Requiring that both the ligand and its " +
      "receptor independently clear genome-wide significance is unnecessarily strict, since a receptor " +
      "can transduce a signal without itself being transcriptionally altered; we therefore relaxed the " +
      "receptor-side criterion to \"detectably expressed\" in the target organ (baseMean≥10). Both the " +
      "liver-to-LV and LV-to-liver directions were tested."
    },
    { h: "2.5 STRING protein-protein interaction network", p:
      "Matched genes and up to 15 additional first-shell interactors were queried against the STRING " +
      "API (Szklarczyk et al., 2023; mouse taxid 10090, confidence score≥0.7). Degree and betweenness " +
      "centrality were computed with igraph to identify hub genes. Cytoscape 3.10.4 was installed for " +
      "visualization, but its CyREST interface proved unreliable in this environment, so the final " +
      "network figure was generated with igraph instead (Cytoscape remains available for manual use)."
    },
    { h: "2.6 Cell-type localization", p:
      "Because no single-cell data exist from the same experiment as the bulk cohort, cell-type " +
      "expression of the final candidate genes was assessed using an independently-annotated human liver " +
      "scRNA-seq atlas that we constructed, as an earlier stage of this study, from the public GSE136103 " +
      "dataset (Ramachandran et al., 2019; 20 human liver 10x samples, 5 healthy + 5 cirrhotic, " +
      "CD45+/CD45- sorted fractions). " +
      "Briefly, the atlas was constructed as follows: reads were quality-filtered per-sample " +
      "(nFeature_RNA>300, percent.mt<30, following the original paper's Methods), yielding 60,925 cells; " +
      "samples were merged and batch-corrected across individual 10x runs with Harmony (RunHarmony, " +
      "converging in 3 iterations); clusters were called with FindClusters (Harmony embedding, dims 1:15, " +
      "resolution 0.6, yielding 20 clusters, matching the original paper's reported cluster count at the " +
      "same resolution); and each cluster was assigned to one of 12 cell lineages by scoring it against " +
      "the original paper's own supplementary lineage-signature gene sets with Seurat's AddModuleScore, " +
      "taking the highest-scoring lineage per cluster and cross-checking every assignment against a " +
      "marker-gene dotplot before finalizing it. This atlas is used here strictly as an independent, " +
      "cross-species reference for localizing this study's own candidate genes, not pooled into any " +
      "statistical test. The complete construction pipeline, including quality-control figures and the " +
      "cluster-annotation table, is described in full in Supplemental Text S3."
    },
    { h: "2.7 STITCH network pharmacology and DGIdb druggability", p:
      "Hub genes from the STRING network were queried against STITCH (Szklarczyk et al., 2016) for known " +
      "or predicted chemical interactions, with compound names resolved via the PubChem PUG-REST API. " +
      "Druggability was assessed via the DGIdb 5.0 GraphQL API (Cannon et al., 2024), querying the human " +
      "ortholog symbol of each gene for existing drug interactions."
    },
    { h: "2.8 Target structure acquisition", p:
      "PDB cross-references for each candidate gene were retrieved via the UniProt REST API, and each " +
      "structure was individually inspected on RCSB PDB to determine which domain (extracellular, " +
      "transmembrane, or cytoplasmic) it actually represents."
    },
    { h: "2.9 Structure-based virtual screening with AutoDock Vina", p:
      "Water molecules and the crystallization additive (1PE, pentaethylene glycol) were removed from " +
      "the final target structure (PDB 6EUB); the single alternate-location residue was resolved to " +
      "conformer A. Meeko (mk_prepare_receptor) was used to generate a PDBQT file, and the docking box " +
      "(24x24x24 A3) was centered on the centroid of the 1PE site - the only small-molecule-occupied " +
      "surface pocket observed in the crystal structure. The ligand library comprised 21 compounds with " +
      "SMILES retrieved from PubChem, spanning three categories: (1) fatty acids and Pioglitazone, " +
      "identified by STITCH as genuine ANGPTL4 chemical partners; (2) Resmetirom, Fenofibrate, " +
      "Bezafibrate, Ezetimibe, Atorvastatin, Rosiglitazone, Empagliflozin, Dapagliflozin, Obeticholic " +
      "acid, Icosapent ethyl, Metformin, and Niacin, i.e. approved or late-stage cardiometabolic/MASH " +
      "drugs; and (3) Aspirin, Ibuprofen, Caffeine, and Metoprolol as mechanistically unrelated controls. " +
      "Three-dimensional conformers were generated with RDKit (ETKDGv3, MMFF94) and converted to PDBQT " +
      "with Meeko (mk_prepare_ligand), then docked with AutoDock Vina 1.2.7 (Eberhardt et al., 2021) at " +
      "exhaustiveness=16, num_modes=5, seed=42."
    },
    { h: "2.10 DiffDock cross-validation", p:
      "Because this machine has no CUDA-capable GPU, a from-scratch local DiffDock (Corso et al., 2023) " +
      "installation was judged impractical for CPU-only inference. Instead, a publicly hosted Gradio " +
      "Space running the original inference code (gcorso/DiffDock; mirrored at swcanner/DiffDock-Web) was " +
      "used to cross-validate the top Vina hits (Resmetirom, Ezetimibe, and Pioglitazone - the last added " +
      "because it was independently flagged by STITCH as a genuine ANGPTL4 chemical partner) only. " +
      "Unlike Vina, DiffDock " +
      "performs blind docking without a predefined binding site, so agreement between the two methods on " +
      "the pose location constitutes an independent structural check rather than a simple re-ranking " +
      "(10 samples per complex, seed unfixed)."
    },
    { h: "2.11 Cardiac cell-type localization (mouse-native validation)", p:
      "For the liver-to-heart direction, candidate genes include not only the ligand (Sema5b) but also " +
      "the receptors (Plxna1, Plxna3, Nrp1, Nrp2), which needed to be confirmed as actually expressed on " +
      "the cardiac side. The GSE136103 atlas used in Section 2.6 is human liver tissue and contains no " +
      "cardiac data, so an independent mouse cardiac atlas was required. We queried the Tabula Muris " +
      "droplet (10x) Heart+Aorta atlas (figshare file 13088642, 624 cells; cell_ontology_class " +
      "annotations: cardiac muscle cell, endocardial cell, endothelial cell, fibroblast) for the percent-" +
      "expressed and average expression of the five candidate genes across annotated cell types. This is " +
      "a cardiac-specific sub-resource of the same Tabula Muris collection used in Section 2.6/" +
      "Supplemental Figure S4, an independent reference from the same species (mouse) as the original " +
      "bulk cohort, following the same validation logic. The same Tabula Muris resource also offers a " +
      "FACS/Smart-seq2-based heart file (770 MB); we chose the smaller droplet-based file (85 MB) for " +
      "practicality, and accordingly report the result as droplet-based data rather than treating it as a " +
      "direct methodological counterpart to the FACS-based liver atlas in Section 2.6."
    },
    { h: "2.12 Dual-target structural actionability assessment and redirection", p:
      "The same UniProt/PDB structural review from Section 2.8 was repeated for the liver-to-heart " +
      "candidates (Plxna1, Plxna3, Sema5b, Nrp1, Nrp2). In the process, we discovered that UniProt REST " +
      "API queries for gene:NRP1 and gene:NRP2 each return two distinct gene entries - NELL1 (UniProt " +
      "Q92832) and NELL2 (Q99435) carry \"NRP1\" and \"NRP2\", respectively, as old gene-name aliases, so " +
      "naively taking the first search result returns PDB structures for NELL1/NELL2 rather than the " +
      "actual Neuropilins. This was caught when the returned PDB file's own TITLE record did not mention " +
      "\"neuropilin,\" and was fixed by revising the validation step to accept only entries whose PRIMARY " +
      "gene name (not a synonym) exactly matches the query (real Neuropilin-1: O14786, 25 PDB structures; " +
      "Neuropilin-2: O60462, 16 structures). Combining the observation that no plexin-family protein has " +
      "any publicly deposited small-molecule-bound structure (Plxna1's only structures, 7Y4P/7Y4Q, are " +
      "apo ectodomain fragments) with the fact that Nrp1 has a 0.90-A structure co-crystallized with a " +
      "known small-molecule inhibitor (EG01377; PDB 6FMC, Powell et al., 2018), we evaluated whether to " +
      "redirect structure-based screening for this axis from Plxna1 - CellChatDB's direct match - to its " +
      "first-shell STRING interactor Nrp1. Because whether Nrp1 actually functions as a co-receptor in " +
      "SEMA5B-PLXNA1 signaling specifically is not established in the literature (see Section 4), we " +
      "docked both Plxna1 and Nrp1 and let the data speak for itself (Sections 3.14-3.17)."
    },
    { h: "2.13 Dual-target AutoDock Vina and DiffDock screening", p:
      "Nrp1 (PDB 6FMC) was prepared pocket-specifically as in Section 2.9, centering the docking box " +
      "(24x24x24 A3) on the atom centroid of the co-crystallized inhibitor (EG01377, PDB ligand code " +
      "DUE). Plxna1 (PDB 7Y4P) has no known small-molecule pocket, so we instead used a broader domain-" +
      "level blind box (30x30x30 A3) centered on the C-alpha centroid of the UniProt-annotated Sema " +
      "domain (residues 27-512, the established semaphorin-binding seven-bladed beta-propeller module; " +
      "Tanaka et al., 2022) - explicitly a lower-confidence setup exploring the whole domain surface " +
      "rather than a defined pocket. The ligand library comprised 11 compounds: (1) EG01377 itself, the " +
      "compound actually bound to the Nrp1 receptor (SMILES taken directly from the RCSB chemical-" +
      "component dictionary entry DUE, a self-docking positive control); (2) six approved/late-stage " +
      "kinase inhibitors independently confirmed as real Nrp1/Nrp2 chemical partners by STITCH (Imatinib, " +
      "Vatalanib, Cediranib, Semaxinib, Pazopanib, Fasudil); (3) four mechanistically unrelated controls " +
      "(Aspirin, Ibuprofen, Caffeine, Metoprolol). The full library was screened against each target " +
      "under the same Vina conditions as Section 2.9 (exhaustiveness=16, num_modes=5, seed=42), and each " +
      "target's top Vina hit (Imatinib for both) was cross-validated with the same DiffDock web interface " +
      "as Section 2.10."
    },
  ],

  resultsBlocks: [
    { type: "heading", text: "3.1 Organ-specific differential expression and threshold sensitivity analysis" },
    { type: "p", text:
      "We first examined organ-specific transcriptional changes in mice exposed to the 2-hit HFpEF " +
      "regimen. To minimize false positives, we initially adopted a conservative threshold (padj<0.01, " +
      "|log2FC|>1.5; 86 significant liver DEGs, 20 in LV). We then noted that the original study " +
      "(Strocchi et al., 2024) itself used a considerably more relaxed threshold (padj<0.05, " +
      "|log2FC|>0.5), and performed a sensitivity analysis by re-filtering the already-fitted DESeq2 " +
      "models (no refitting required). We adopted an intermediate threshold between the original " +
      "study's and our initial one - padj<0.05, |log2FC|>1.0 - as the final criterion, and reran the " +
      "entire pipeline from this point forward. Under this threshold, 228 genes were significantly " +
      "differentially expressed in the liver (133 up, 95 down) and 63 in the LV (41 up, 22 down) " +
      "(Figure 1A, 1B; Supplemental Table S1, S2 list every gene). Unsupervised hierarchical clustering " +
      "of these DEGs cleanly separated Chow from HFpEF samples in both organs (Figure 2A, 2B)." },
    { type: "figure", file: "figures/composite/Figure1_volcano_combined.png",
      caption: "Figure 1. Organ-specific differential gene expression under HFpEF vs. Chow. (A) Liver " +
               "volcano plot. (B) Left-ventricle (LV) volcano plot. Genes meeting the significance " +
               "threshold (padj<0.05, |log2FC|>1.0) are shown in red; representative genes are labeled. " +
               "Full DEG lists are provided in Supplemental Table S1 (liver) and S2 (LV)." },
    { type: "figure", file: "figures/composite/Figure2_heatmap_combined.png",
      caption: "Figure 2. Hierarchical clustering of significant DEGs (z-scored variance-stabilized " +
               "counts). (A) Liver (n=228 DEGs). (B) LV (n=63 DEGs). Both tissues show unsupervised " +
               "separation of Chow and HFpEF samples." },
    { type: "p", text:
      "We next asked whether the two candidate mediators nominated by the original study, Saa1 and Saa4, " +
      "replicated under this relaxed threshold. Saa1 (log2FC=1.16, padj=5.9x10-5) now cleared the " +
      "|log2FC|>1.0 cutoff and entered the significant DEG list, while Saa4 (log2FC=0.53, padj=0.011) " +
      "still did not. This demonstrates that threshold choice has a real, material effect on which " +
      "candidates replicate - the reason we treated this question as an explicit sensitivity analysis " +
      "rather than a single fixed cutoff." },

    { type: "heading", text: "3.2 Pathway-level enrichment (GSEA, GO, KEGG): an honest observation about threshold-dependence" },
    { type: "p", text:
      "Hallmark GSEA identified 19 significantly enriched pathways in the liver and 17 in the LV " +
      "(padj<0.05; Figure 3A, 3B) - unchanged before and after the threshold relaxation described above, " +
      "because GSEA (fgsea) uses a continuous ranking metric over all genes rather than the significant-" +
      "DEG list, and is therefore independent of how DEGs are called. In the liver, MTORC1_SIGNALING, " +
      "CHOLESTEROL_HOMEOSTASIS, and MYC_TARGETS_V1 were downregulated while INTERFERON_ALPHA_RESPONSE " +
      "was upregulated. In the LV, ADIPOGENESIS, FATTY_ACID_METABOLISM, OXIDATIVE_PHOSPHORYLATION, " +
      "PEROXISOME, and BILE_ACID_METABOLISM were all markedly upregulated, indicating a shift of cardiac " +
      "metabolism toward lipid handling and mitochondrial pathways under HFpEF stress - a pattern " +
      "consistent with the mitochondrial dysfunction reported in prior HFpEF literature. To examine the " +
      "shape of these enrichment signals directly rather than only their summary NES, we show classic " +
      "running-enrichment-score plots for the two most significant pathways per organ (Figure 3C-F): in " +
      "the liver, MTORC1_SIGNALING and CHOLESTEROL_HOMEOSTASIS both show a sharply front-loaded negative " +
      "running score with no crossing back toward zero, indicating a clean, concentrated depletion " +
      "signal rather than a diffuse one; in the LV, ADIPOGENESIS and FATTY_ACID_METABOLISM show the " +
      "mirror-image pattern - an immediate, sustained positive enrichment - consistent with a coherent " +
      "metabolic shift rather than a handful of outlier genes driving the signal. In sharp contrast, " +
      "over-representation analysis (ORA), which does take the significant-DEG list as its direct input, " +
      "was fully exposed to the threshold change, and the result is a genuinely counterintuitive pattern: " +
      "GO Biological Process terms rose from 34 to 41 in the liver, but in the LV, despite the input DEG " +
      "count more than tripling from 20 to 63, significant terms fell from 10 to zero. KEGG rose from 9 " +
      "to 15 in the liver and from 0 to 1 in the LV (Supplemental Figure S1, S2; Supplemental Table " +
      "S3-S5). The LV GO-BP result looks paradoxical at first, but ORA specifically measures how " +
      "'concentrated' an input gene set is within particular functional categories - if the 43 " +
      "additional LV DEGs gained under the relaxed threshold are functionally more diffuse than the " +
      "original 20, significance can genuinely decrease even as the input list grows. We report this " +
      "observation exactly as it occurred rather than smoothing it over, and it is also important " +
      "background for interpreting the threshold-dependence of the ligand-receptor matching results in " +
      "Section 3.3 onward." },
    { type: "figure", file: "figures/composite/Figure3_GSEA_combined.png",
      caption: "Figure 3. Hallmark gene set enrichment analysis (GSEA). (A) Liver and (B) LV bar charts " +
               "show the normalized enrichment score (NES) for every pathway significant at padj<0.05. " +
               "(C-F) Classic GSEA running-enrichment-score plots (green line: running ES; black ticks: " +
               "gene-set hits; red-blue bar: ranked-list position; grey: ranking-metric magnitude) for " +
               "the two most significant pathways per organ: (C) Liver MTORC1_SIGNALING, (D) Liver " +
               "CHOLESTEROL_HOMEOSTASIS, (E) LV ADIPOGENESIS, (F) LV FATTY_ACID_METABOLISM. Full GO-BP and " +
               "KEGG results are provided in Supplemental Figure S1-S2 and Supplemental Table S3-S5." },

    { type: "heading", text: "3.3 Ligand-receptor interactome matching: a bidirectional axis emerges" },
    { type: "p", text:
      "We had hypothesized that a liver-secreted factor drives HFpEF-associated cardiac remodeling. " +
      "Under the conservative threshold we first adopted (padj<0.01, |log2FC|>1.5), neither CellChatDB " +
      "matching nor an unrestricted STRING-based search (confidence≥0.7) returned a single liver-to-LV " +
      "edge. In the reverse direction, however, CellChatDB returned five matches: Angptl4, significantly " +
      "upregulated in the LV, is a curated ligand of Cdh5, Sdc1, Sdc2, Sdc3, and Sdc4, all of which are " +
      "expressed in liver (Table 1). We therefore reoriented the candidate axis from liver-to-heart to " +
      "heart-to-liver. This reversed direction is not an ad hoc correction; it corresponds precisely to " +
      "the clinically recognized entity of congestive hepatopathy/cardiohepatic syndrome, in which " +
      "cardiac dysfunction secondarily injures the liver. Repeating this matching under the relaxed " +
      "final threshold described in Section 3.1 (padj<0.05, |log2FC|>1.0) reproduced the heart-to-liver " +
      "five matches exactly, confirming this axis is robust to statistical threshold. This time, however, " +
      "three new matches also appeared in the originally hypothesized liver-to-LV direction: liver-" +
      "upregulated Sema5b paired with LV-expressed Plxna1 and Plxna3, and liver C4a paired with LV C3ar1 " +
      "(C4a was subsequently excluded from network expansion for reasons described in Section 3.11). This " +
      "liver-to-heart signal is more threshold-sensitive, and therefore weaker, than the heart-to-liver " +
      "axis, but it is the only signal supporting our original hypothesis, so we did not set it aside and " +
      "instead traced it through with the same rigor as the heart-to-liver axis in Section 3.10 onward." },
    { type: "table",
      title: "Table 1. LV-to-liver ligand-receptor matches (CellChatDB).",
      header: ["Interaction", "Ligand", "Receptor", "Pathway", "Evidence"],
      widths: [2200, 1300, 1300, 1500, 2726],
      rows: [
        ["ANGPTL4_CDH5", "Angptl4", "Cdh5", "ANGPTL", "PMID: 30049845"],
        ["ANGPTL4_SDC1", "Angptl4", "Sdc1", "ANGPTL", "PMID: 29017031"],
        ["ANGPTL4_SDC2", "Angptl4", "Sdc2", "ANGPTL", "PMID: 29017031"],
        ["ANGPTL4_SDC3", "Angptl4", "Sdc3", "ANGPTL", "PMID: 29017031"],
        ["ANGPTL4_SDC4", "Angptl4", "Sdc4", "ANGPTL", "PMID: 29017031"],
      ] },

    { type: "heading", text: "3.4 STRING network analysis nominates Sdc1/Sdc4 as hub genes" },
    { type: "p", text:
      "Expanding Angptl4/Cdh5/Sdc1-4 with their first-shell STRING interactors (41 edges total) revealed " +
      "Sdc1 (degree=16, betweenness=64.3) and Sdc4 (degree=14, betweenness=45.1) as clear network hubs, " +
      "embedded in a module of heparan-sulfate-proteoglycan-related genes (Gpc1, Gpc4, Hspg2, Ext1, Tnc; " +
      "Figure 4). Cdh5, in contrast, formed an isolated pair with Angptl4 only, suggesting that the " +
      "syndecan family constitutes the structural core of this axis (Supplemental Table S6 lists the " +
      "complete hub-gene ranking)." },
    { type: "figure", file: "figures/Angptl4axis_network_ggraph.png",
      caption: "Figure 4. STRING protein-protein interaction network centered on the Angptl4-Sdc/Cdh5 " +
               "axis (confidence≥0.7, +15 first-shell interactors). Red nodes: seed genes (Angptl4, Cdh5, " +
               "Sdc1-4); blue nodes: STRING interactors. Node size scales with degree; edge width and " +
               "opacity scale with STRING confidence score." },

    { type: "heading", text: "3.5 Cross-species cell-type localization" },
    { type: "p", text:
      "Using the human liver scRNA-seq atlas constructed as an earlier stage of this study (GSE136103; atlas construction " +
      "pipeline in Methods 2.6 and Supplemental Text S3) as an " +
      "independent cross-species reference, SDC1 and SDC4 localized cleanly to hepatocytes (Figure 5), " +
      "consistent with their ranking as the top network hubs. SDC3 localized to MP (macrophage/Kupffer-" +
      "lineage) cells, and CDH5 localized to endothelia, exactly as expected for this canonical " +
      "endothelial marker - serving as a built-in positive control for the localization approach " +
      "(Supplemental Figure S3 shows the same analysis split by disease condition). Because this " +
      "reference is human, we additionally queried an independent mouse liver atlas (Tabula Muris, " +
      "FACS/Smart-seq2, n=714 cells) to confirm the localization directly in the same species as our " +
      "bulk cohort. This mouse-native check reproduced the human pattern almost exactly: Sdc4 was " +
      "detected in 91.8% of hepatocytes, Sdc1 in 68.3%, Sdc3 in 80.3% of Kupffer cells, and Cdh5 in " +
      "98.4% of hepatic sinusoidal endothelial cells (Supplemental Figure S4). The convergence of " +
      "network centrality, human scRNA-seq, and an independent mouse scRNA-seq atlas on the same " +
      "cell-type assignments substantially strengthens confidence in this localization." },
    { type: "figure", file: "figures/Angptl4axis_liver_localization_dotplot.png",
      caption: "Figure 5. Liver cell-type localization of Angptl4-axis genes, using an independent " +
               "cross-species reference (human liver cirrhosis scRNA-seq atlas, GSE136103; construction " +
               "pipeline in Methods 2.6 and Supplemental Text S3). SDC1/SDC4 localize to hepatocytes, " +
               "consistent with their status as network hubs; CDH5 localizes to endothelia as a positive " +
               "control." },

    { type: "heading", text: "3.6 STITCH network pharmacology" },
    { type: "p", text:
      "STITCH queries showed that Angptl4 is linked to endogenous fatty-acid metabolites (linoleic, " +
      "palmitic, arachidonic, and eicosapentaenoic acids) and to Pioglitazone, an approved PPAR agonist " +
      "(Table 2). Sdc1, Sdc2, Sdc3, and Cdh5, in contrast, returned only structural or metabolic partners " +
      "(iduronic acid, a heparan/dermatan sulfate glycosaminoglycan building block; calcium cation), with " +
      "essentially no association to existing therapeutic compounds (Supplemental Table S8 lists the " +
      "complete result)." },
    { type: "table",
      title: "Table 2. STITCH-identified chemical partners of Angptl4-axis genes (selected).",
      header: ["Gene", "Compound"],
      widths: [3013, 6013],
      rows: [
        ["Angptl4", "Linoleic acid (9,12-octadecadienoic acid)"],
        ["Angptl4", "Palmitic acid"],
        ["Angptl4", "Eicosapentaenoic acid"],
        ["Angptl4", "Pioglitazone (approved drug)"],
        ["Sdc1 / Sdc2 / Sdc3", "Iduronic acid (heparan/dermatan sulfate GAG unit)"],
        ["Cdh5", "Calcium cation"],
      ] },

    { type: "heading", text: "3.7 Druggability assessment and final target selection" },
    { type: "p", text:
      "DGIdb returned 3 drug interactions for Sdc1 (heparin, indatuximab ravtansine - an antibody-drug " +
      "conjugate), 1 for Sdc4 (repotrectinib, an oncology kinase inhibitor with no plausible mechanistic " +
      "link, most likely a text-mining artifact), and 1 for Cdh5 (FX06, a fibrin-derived peptide), while " +
      "Sdc3 and Angptl4 returned zero interactions each (Table 3; Supplemental Table S9). Critically, " +
      "however, UniProt/PDB inspection showed that every available crystal structure of the network hubs " +
      "Sdc1 and Sdc4 covers non-extracellular fragments only - for example, PDB 8BLV resolves the Sdc4 " +
      "cytoplasmic tail in complex with the syntenin PDZ domain, not the heparan-sulfate-bearing " +
      "ectodomain that would engage a secreted ligand such as Angptl4 - rendering them structurally " +
      "unactionable for small-molecule docking. We therefore redirected the final target to Angptl4 " +
      "itself: it is completely undrugged in DGIdb, its C-terminal fibrinogen-like domain has a solved " +
      "2.3-A crystal structure with a visible ligand-accommodating surface (PDB 6EUB; Biterova et al., " +
      "2018), and it is " +
      "independently validated both by our own DEG analysis and by a 2024 single-cell study demonstrating " +
      "cardiac-fibroblast-specific ANGPTL4 secretion in HFpEF (Li et al., 2024) (full rationale in " +
      "Supplemental Text S1)." },
    { type: "table",
      title: "Table 3. DGIdb druggability summary for Angptl4-axis genes.",
      header: ["Gene", "# interactions", "# approved", "Example drugs"],
      widths: [1800, 1800, 1500, 3926],
      rows: [
        ["SDC2", "1", "0", "Heparan sulfate"],
        ["SDC4", "1", "1", "Repotrectinib (likely unrelated text-mining hit)"],
        ["CDH5", "1", "0", "FX06 (peptide)"],
        ["SDC3", "0", "0", "-"],
        ["SDC1", "3", "0", "Heparin; Indatuximab ravtansine (ADC)"],
        ["ANGPTL4", "0", "0", "- (genuinely undrugged; final target)"],
      ] },

    { type: "heading", text: "3.8 Structure-based virtual screening with AutoDock Vina" },
    { type: "p", text:
      "Docking of 21 compounds against the ANGPTL4 fibrinogen-like domain ranked Resmetirom " +
      "(-9.07 kcal/mol), Ezetimibe (-8.88), Pioglitazone (-8.28), Fenofibrate (-8.21), and Empagliflozin " +
      "(-8.14) as the top five hits (Figure 6; Table 4; Supplemental Table S7 lists the full ranking of " +
      "all 21 compounds). As a group, the cardiometabolic-drug category scored more favorably than the " +
      "fatty-acid and unrelated-control categories, with Metformin (-4.65) and Caffeine (-5.36) scoring " +
      "weakest - a pattern broadly consistent with a mechanistically informed screen, although we note " +
      "that molecular size and rotatable-bond count can also influence Vina scores and should temper any " +
      "absolute ranking across compounds of very different size." },
    { type: "figure", file: "figures/Vina_screening_ranked.png",
      caption: "Figure 6. AutoDock Vina virtual screening of 21 compounds against the ANGPTL4 fibrinogen-" +
               "like domain (PDB 6EUB), ranked by best binding affinity. Dashed line: -8.0 kcal/mol " +
               "reference threshold. Full results in Supplemental Table S7." },
    { type: "table",
      title: "Table 4. AutoDock Vina top 5 hits vs ANGPTL4 (PDB 6EUB).",
      header: ["Rank", "Compound", "Best affinity (kcal/mol)", "Class"],
      widths: [900, 2500, 3100, 2526],
      rows: [
        ["1", "Resmetirom", "-9.07", "Cardiometabolic/MASH drug"],
        ["2", "Ezetimibe", "-8.88", "Cardiometabolic/MASH drug"],
        ["3", "Pioglitazone", "-8.28", "Cardiometabolic/MASH drug"],
        ["4", "Fenofibrate", "-8.21", "Cardiometabolic/MASH drug"],
        ["5", "Empagliflozin", "-8.14", "Cardiometabolic/MASH drug"],
      ] },

    { type: "heading", text: "3.9 DiffDock cross-validation reframes the leading candidate" },
    { type: "p", text:
      "Applying blind docking (no predefined binding site) to the top three Vina hits - Resmetirom, " +
      "Ezetimibe, and Pioglitazone (the last included because it was independently flagged by STITCH as " +
      "a genuine ANGPTL4 chemical partner; Section 3.6) - produced an informative split. Pioglitazone's " +
      "top-ranked pose (confidence -1.06, the best of the three) fell 3.9 A from the Vina-defined pocket " +
      "centroid, and Ezetimibe's top-ranked pose (confidence -1.32) fell within 3.5 A of the same " +
      "centroid (Figure 7A, 7B) - two chemically unrelated compounds, docked independently with a " +
      "method that searches the entire protein surface, both converged on essentially the same site, " +
      "with substantially overlapping contact residues (Leu304, Leu312, Gly313, Ala314, Leu322, Val324, " +
      "Gly352, Thr353, His356 are shared between the two poses). Resmetirom's top-ranked pose (confidence " +
      "-2.06), by contrast, localized 23.5 A away at an entirely different surface region (Figure 7C; " +
      "Supplemental Text S2 gives full contact-residue detail for all three). All three DiffDock " +
      "confidence values fall within that method's low-to-moderate range and should not be over-" +
      "interpreted as confirmed binding; nonetheless, on a strictly comparative basis, Pioglitazone and " +
      "Ezetimibe - not the top Vina scorer - emerge as the structurally consistent candidates across two " +
      "independent docking algorithms, and Pioglitazone in particular is now supported by three " +
      "independent lines of evidence (a real STITCH-annotated chemical association, a top-5 Vina score, " +
      "and a DiffDock pose that converges on the same site as Vina)." },
    { type: "figure", file: "figures/composite/Figure7_pose_combined.png",
      caption: "Figure 7. Structure-based docking poses of the top three AutoDock Vina hits, cross-" +
               "validated by DiffDock. (A) Pioglitazone (DiffDock confidence -1.06, the best of the " +
               "three), converging within 3.9 A of the Vina-defined pocket; contact residues Leu304, " +
               "Ala309, Leu312, Gly313, Ala314, Val317, Leu322, Val324, Gly352, Thr353, His356, Lys381. " +
               "(B) Ezetimibe (DiffDock confidence -1.32), converging within 3.5 A of the same pocket; " +
               "contact residues Leu304, Leu312, Gly313, Ala314, Leu322, Ser323, Val324, Trp349, Trp350, " +
               "Gly352, Thr353, His356. (C) Resmetirom (DiffDock confidence -2.06), 23.5 A from the Vina-" +
               "defined pocket at a distinct site; contact residues Trp280, Asp281, Ile367, Leu374, " +
               "Tyr387, Tyr388, Pro389." },

    { type: "heading", text: "3.10 Liver-to-heart ligand-receptor matching and STRING network" },
    { type: "p", text:
      "As described in Section 3.3, the relaxed final threshold (padj<0.05, |log2FC|>1.0) revealed " +
      "three liver-to-LV matches not visible under the stricter threshold (Table 5). Using Sema5b-Plxna1 " +
      "and Sema5b-Plxna3 as seeds, we expanded a STRING network to first-shell interactors " +
      "(confidence≥0.7, 62 edges total). C4a was excluded from the seed set: we confirmed that mouse " +
      "STRING has no distinct node corresponding to C4a (an Ensembl gene ID query returned zero hits, " +
      "and querying by the gene symbol 'C4a' instead mismatched to an entirely different gene, 'C5ar2') " +
      "- likely reflecting a database limitation related to mice, unlike humans, carrying a C4a/Slp and " +
      "C4b paralog pair arising from segmental duplication. In this network, Plxna1 (degree=17, " +
      "betweenness=38.4) and Plxna3 (degree=16, betweenness=22.4) were the most central hubs among the " +
      "seed genes, and although not seeds themselves, first-shell interactors Plxna4 (degree=14), Nrp1 " +
      "(degree=13), and Nrp2 (degree=11) also showed high connectivity (Figure 8; Supplemental Table S10 " +
      "lists the complete hub-gene ranking)." },
    { type: "table",
      title: "Table 5. Liver-to-LV ligand-receptor matches (CellChatDB, visible only under padj<0.05/|log2FC|>1.0).",
      header: ["Interaction", "Ligand", "Receptor", "Pathway", "Note"],
      widths: [2200, 1300, 1300, 1500, 2726],
      rows: [
        ["SEMA5B_PLXNA1", "Sema5b", "Plxna1", "SEMA5", "Highest-degree STRING hub"],
        ["SEMA5B_PLXNA3", "Sema5b", "Plxna3", "SEMA5", "Second-highest-degree STRING hub"],
        ["C4A_C3AR1", "C4a", "C3ar1", "COMPLEMENT", "C4a has no node in mouse STRING DB (see text)"],
      ] },
    { type: "figure", file: "figures/Sema5bAxis_network_ggraph.png",
      caption: "Figure 8. STRING protein-protein interaction network centered on the Sema5b-Plxna1/" +
               "Plxna3 axis (confidence≥0.7, first-shell interactors included, 62 edges). Red nodes: " +
               "seed genes (Sema5b, Plxna1, Plxna3); blue nodes: STRING interactors (Plxna4, Nrp1, Nrp2, " +
               "etc.). Node size scales with degree; edge width and opacity scale with STRING confidence " +
               "score." },

    { type: "heading", text: "3.11 Cross-species cell-type localization: validating both liver (ligand) and heart (receptor)" },
    { type: "p", text:
      "The heart-to-liver axis (Angptl4) has its ligand secreted from the heart and its receptor in the " +
      "liver, so localizing the liver side alone (Section 3.5) was sufficient. This axis has the mirror-" +
      "image structure - the ligand (Sema5b) is liver-derived while the receptors (Plxna1, Plxna3, Nrp1, " +
      "Nrp2) act on the heart - requiring validation on both sides. The liver side reused the same " +
      "GSE136103 atlas as Section 3.5: SEMA5B/PLXNA1/PLXNA3 all localized primarily to Mesenchyme " +
      "(hepatic stellate cells) - the same cell type as the original heart-to-liver candidates LUM/THY1/" +
      "THBS2 (Introduction, Supplemental Text S3) - while NRP1/NRP2 localized strongly to Endothelia " +
      "(Figure 9A). The cardiac side queried the new reference introduced in Section 2.11, the Tabula " +
      "Muris mouse Heart+Aorta droplet atlas (624 cells). The result showed a striking asymmetry: Plxna1 " +
      "- the most central STRING hub and CellChatDB's directly matched receptor - was only weakly " +
      "detected in every cell type (5.0% of cardiomyocytes, 4.9% of fibroblasts, 4.5% of endothelial " +
      "cells), whereas Nrp1, not directly matched by CellChatDB but the first-shell STRING interactor, " +
      "was overwhelmingly strongly expressed (96.8% of endocardial cells, 94.9% of endothelial cells, " +
      "74.8% of fibroblasts) (Figure 9B; Supplemental Table S11 lists the complete result). Sema5b was, " +
      "as expected, undetected in every cardiac cell type - not a shortcoming but expected, since Sema5b " +
      "is secreted by the liver and reaches the heart, so it need not itself be expressed in cardiac " +
      "tissue (this is a receptor-side validation; the ligand's own expression is not the question being " +
      "tested here)." },
    { type: "figure", file: "figures/composite/FigureSema5bLocalization_combined.png",
      caption: "Figure 9. Cross-species cell-type localization of Sema5b-Plxna1-axis genes, both ligand " +
               "(liver) and receptor (heart) sides. (A) Liver side (GSE136103, human liver cirrhosis " +
               "atlas): SEMA5B/PLXNA1/PLXNA3 localize to Mesenchyme, NRP1/NRP2 to Endothelia. (B) Cardiac " +
               "side (Tabula Muris mouse Heart+Aorta droplet atlas, n=624 cells): the first-shell STRING " +
               "interactor Nrp1 (up to 96.8%) is expressed far more strongly and broadly than CellChatDB's " +
               "directly matched receptor Plxna1 (<=5%)." },

    { type: "heading", text: "3.12 STITCH network pharmacology: real chemical signal only for Nrp1/Nrp2" },
    { type: "p", text:
      "STITCH queries returned only crystallization-buffer artifacts for Sema5b/Plxna1/Plxna3 " +
      "(N-acetyl-hexosamine, glycerol, magnesium ion, ADP, etc.), with no genuine drug-like compounds at " +
      "all. Nrp1, in contrast, returned Imatinib (an approved oncology drug), and Nrp2 returned a much " +
      "richer set of real compounds, including Vatalanib, Cediranib, Semaxinib (SU5416), Pazopanib (an " +
      "approved multi-kinase inhibitor), and Fasudil (an approved ROCK inhibitor) (Table 6; Supplemental " +
      "Table S12 lists the complete result). This is an independent line of evidence pointing the same " +
      "direction as the expression asymmetry in Section 3.11: Nrp1/Nrp2 are far more richly represented " +
      "in real chemical-interaction databases than Plxna1/Plxna3." },
    { type: "table",
      title: "Table 6. STITCH-identified chemical partners of Sema5b-Plxna1-axis genes (selected).",
      header: ["Gene", "Compound"],
      widths: [3013, 6013],
      rows: [
        ["Sema5b / Plxna1 / Plxna3", "Crystallization-buffer artifacts only (no real compounds)"],
        ["Nrp1", "Imatinib (approved oncology drug)"],
        ["Nrp2", "Pazopanib (approved multi-kinase inhibitor)"],
        ["Nrp2", "Fasudil (approved ROCK inhibitor)"],
        ["Nrp2", "Cediranib, Vatalanib, Semaxinib (late-stage/research kinase inhibitors)"],
      ] },

    { type: "heading", text: "3.13 Structural actionability assessment and target redirection: Plxna1 to Nrp1" },
    { type: "p", text:
      "After fixing the UniProt search error described in Section 2.12, we re-examined the PDB structure " +
      "of each candidate gene. PLXNA1 (UniProt Q9UIW2) had only two apo ectodomain structures (7Y4P, " +
      "3.50 A; 7Y4Q, 4.70 A; Tanaka et al., 2022), while PLXNA3 and SEMA5B had no deposited structure at " +
      "all - in fact, no plexin-family protein anywhere has a publicly deposited small-molecule-bound " +
      "structure. NRP1 (O14786), by contrast, had 25 PDB structures, including 6FMC, an ultra-high-" +
      "resolution 0.90-A structure with the small-molecule inhibitor EG01377 bound (Powell et al., 2018); " +
      "NRP2 (O60462) likewise had 16 structures (Table 7). This asymmetry - CellChatDB's directly matched " +
      "receptor (Plxna1) structurally unactionable, while the first-shell STRING interactor (Nrp1) has a " +
      "high-resolution structure resolved down to a small-molecule binding pocket - follows exactly the " +
      "same logic as the Sdc1/Sdc4-to-Angptl4 redirection in Section 3.7. There is, however, an important " +
      "difference between the two redirections: the heart-to-liver redirection moved to the ligand " +
      "(Angptl4) itself, whereas this redirection moves to a different node within the receptor complex " +
      "(Nrp1), and whether Nrp1 actually functions as a co-receptor for Sema5b-Plxna1 signaling is not " +
      "established in the literature (discussed in detail in Section 4). Neuropilin's role as a co-" +
      "receptor is clearly validated specifically where class-3 secreted semaphorins bind the Plexin-A " +
      "family (Takahashi et al., 1999); Sema5b is a class-5 semaphorin whose receptor specificity may " +
      "differ - indeed, its paralog Sema5a binds Plexin-B3 while Sema5b itself does not (Artigiani et " +
      "al., 2004), i.e., receptor specificity is strict even between paralogs within class 5. We therefore " +
      "did not exclude either candidate in advance, and instead used both Plxna1 and Nrp1 as structure-" +
      "based docking targets, letting the data itself indicate which is more defensible (Sections " +
      "3.15-3.16)." },
    { type: "table",
      title: "Table 7. PDB structure summary for Sema5b-Plxna1-axis genes.",
      header: ["Gene", "UniProt", "# PDB structures", "Small-molecule-bound structure", "Note"],
      widths: [1600, 1600, 1600, 1800, 2426],
      rows: [
        ["PLXNA1", "Q9UIW2", "2", "None", "Apo ectodomain (7Y4P 3.50 A, 7Y4Q 4.70 A)"],
        ["PLXNA3", "P51805", "0", "None", "No structure"],
        ["SEMA5B", "Q9P283", "0", "None", "No structure"],
        ["NRP1", "O14786", "25", "Yes (6FMC, 0.90 A)", "EG01377-bound b1 domain - final target"],
        ["NRP2", "O60462", "16", "Yes", "Multiple inhibitor-bound structures"],
      ] },

    { type: "heading", text: "3.14 Druggability assessment (DGIdb)" },
    { type: "p", text:
      "DGIdb results were consistent with both the STITCH results in Section 3.12 and the structural " +
      "assessment in Section 3.13. Plxna1, Plxna3, and Sema5b each returned zero drug interactions, " +
      "while Nrp1 and Nrp2 each returned multiple (Table 8; Supplemental Table S13 lists the complete " +
      "result)." },
    { type: "table",
      title: "Table 8. DGIdb druggability summary for Sema5b-Plxna1-axis genes.",
      header: ["Gene", "# interactions", "Example drugs"],
      widths: [2000, 2000, 5013],
      rows: [
        ["PLXNA1", "0", "-"],
        ["PLXNA3", "0", "-"],
        ["SEMA5B", "0", "-"],
        ["NRP1", "5", "Palifermin, Pegaptanib, Vesencumab, EG01377, EG00229"],
        ["NRP2", "1", "Daunorubicin liposomal"],
      ] },

    { type: "heading", text: "3.15 Dual-target AutoDock Vina screening: Nrp1 vs. Plxna1" },
    { type: "p", text:
      "The 11-compound library was screened independently against both Nrp1 (pocket-specific box) and " +
      "Plxna1 (domain-level blind box centered on the Sema domain) (Figure 10; Supplemental Table S14 " +
      "lists the complete results). Against Nrp1, compounds STITCH had confirmed as genuine chemical " +
      "partners (Imatinib -7.98, Vatalanib -7.97, Semaxinib -7.26, Pazopanib -7.23 kcal/mol) scored " +
      "markedly better than the mechanistically unrelated controls (Aspirin, Caffeine, Metoprolol, " +
      "Fasudil; -4.98 to -6.30 kcal/mol), and the self-docking positive control EG01377 also scored a " +
      "respectable -7.10 kcal/mol in the upper-middle of the ranking, suggesting a specific result. " +
      "Against Plxna1, by contrast, EG01377 - designed for Nrp1, not Plxna1 - scored -9.15 kcal/mol, " +
      "nearly tying the actual top hit, Imatinib (-9.96) - a warning sign suggesting a general artifact " +
      "of larger molecules scoring better within a wide blind box, rather than a specific compound-" +
      "target interaction." },
    { type: "figure", file: "figures/composite/FigureVina_dual_combined.png",
      caption: "Figure 10. Dual-target AutoDock Vina screening. (A) Nrp1 (PDB 6FMC, pocket-specific box " +
               "at the EG01377 co-crystal site): STITCH-confirmed chemical partners (red) clearly " +
               "outscore unrelated controls (grey), and the self-docking positive control EG01377 (blue) " +
               "also scores in the upper-middle range. (B) Plxna1 (PDB 7Y4P, domain-level blind box " +
               "centered on the Sema domain): EG01377, designed exclusively for Nrp1, nearly ties the " +
               "actual top hit - suggesting a non-specific artifact." },

    { type: "heading", text: "3.16 DiffDock cross-validation: a decisive split" },
    { type: "p", text:
      "Cross-validating each target's top Vina hit (coincidentally Imatinib for both) with DiffDock made " +
      "the concern raised in Section 3.15 concrete and split sharply between the two targets. For Nrp1, " +
      "DiffDock's top-ranked pose (confidence -1.51) converged within just 1.9 A of the Vina pocket " +
      "(EG01377 centroid), and its contact residues (Tyr297, Trp301, Asp320, Glu348, Lys350, Lys351, " +
      "Tyr353) matched exactly the b1-domain pocket known in the literature to bind the C-terminal " +
      "arginine of VEGF-A/Sema3A and the EG-series inhibitor scaffold (Figure 11A). For Plxna1, " +
      "DiffDock's top-ranked pose (confidence -1.65) landed at an entirely different site, 22.7 A from " +
      "the Vina box (contact residues Lys156, Glu196, Gln221, Ser226, Gln228, Leu229, Lys230, Phe292, " +
      "Leu388, Gln413, Pro414) - the unconstrained, independent method did not agree at all with the " +
      "Sema-domain target region (Figure 11B). Both DiffDock confidence values (-1.51, -1.65) fall " +
      "within that method's own low-to-moderate range, but whether Vina and DiffDock independently agree " +
      "on pose location is itself valid evidence for the biological plausibility of a binding site. We " +
      "therefore report Nrp1 as this axis's structurally supported final target, and Plxna1 - " +
      "CellChatDB's original direct match - as a hypothesis-generating result unsupported by all three " +
      "of structure, expression, and independent docking agreement." },
    { type: "figure", file: "figures/composite/FigurePose_dual_combined.png",
      caption: "Figure 11. Dual-target DiffDock cross-validation of Imatinib. (A) Nrp1 (PDB 6FMC): " +
               "DiffDock's top-ranked pose (confidence -1.51) converges within 1.9 A of the Vina pocket, " +
               "with contact residues matching the literature-known b1-domain pocket. (B) Plxna1 (PDB " +
               "7Y4P): DiffDock's top-ranked pose (confidence -1.65) lands at a distinct site 22.7 A from " +
               "the Vina box - the two independent methods disagree on binding site, undermining " +
               "confidence in this result." },
  ],

  discussion: [
    "This study set out to reanalyze a recently deposited paired liver-heart mouse cohort under a " +
    "stricter statistical threshold, but its most important finding is that our starting hypothesis - a " +
    "liver-secreted factor driving HFpEF-associated cardiac remodeling - was not supported by the data. " +
    "The absence of any liver-to-heart cross-organ edge in either CellChatDB matching or an unrestricted " +
    "STRING search (Figure 4; Section 3.3) should be read as a genuine, database-level signal for this " +
    "particular model and statistical threshold, not as a methodological failure.",

    "The heart-to-liver Angptl4-Sdc/Cdh5 axis identified instead aligns closely with congestive " +
    "hepatopathy and the emerging concept of cardiohepatic syndrome, both long recognized in clinical " +
    "medicine. The independent 2024 single-cell finding that Angptl4 is secreted specifically by cardiac " +
    "fibroblasts and suppresses angiogenesis in the HFpEF heart (Li et al., 2024) reproduces our own bulk " +
    "DEG result (Figure 1B) using an entirely different experimental modality - a cross-validation that " +
    "considerably strengthens confidence in this axis.",

    "The most centrally connected genes in our network analysis, Sdc1 and Sdc4 (Figure 4), turned out " +
    "not to be structurally actionable: every deposited crystal structure covers a domain other than the " +
    "extracellular ligand-binding surface. This dissociation between \"most important by network " +
    "centrality\" and \"currently actionable by structure-based methods\" is a practical limitation that " +
    "is not always made explicit in network pharmacology studies that promote hub genes directly to " +
    "final targets; we chose not to paper over this gap and instead redirected the docking campaign to " +
    "Angptl4 itself (Section 3.7, Supplemental Text S1).",

    "The divergence between AutoDock Vina and DiffDock for Resmetirom and Ezetimibe (Figure 7) is " +
    "similarly informative. Vina reports a relative ranking within a single predefined pocket, whereas " +
    "DiffDock searches the entire protein surface; agreement between the two on pose location is " +
    "therefore independent evidence that a site is biologically meaningful rather than a scoring " +
    "artifact of one method. That Resmetirom scored best on Vina yet was preferentially placed by " +
    "DiffDock at a completely different site illustrates the risk of selecting a final candidate from a " +
    "single docking algorithm, and supports Ezetimibe as the more defensible hypothesis-generating lead " +
    "from this screen.",

    "Ezetimibe's established mechanism of action - inhibition of the intestinal cholesterol transporter " +
    "NPC1L1 at the brush-border membrane, unrelated to any known action on ANGPTL4 - is worth revisiting " +
    "in light of this result. If the predicted ANGPTL4-binding pose is confirmed biochemically, Ezetimibe " +
    "would represent a genuine dual-action, multi-target drug-repurposing candidate: its canonical " +
    "NPC1L1-mediated effect on intestinal cholesterol absorption would be complemented by a second, " +
    "previously unrecognized action of directly intercepting a heart-derived signal (Angptl4) at the " +
    "liver, potentially blocking the cardiohepatic axis at its source rather than only its downstream " +
    "metabolic consequences. The same dual-action logic extends, arguably even more strongly, to " +
    "Pioglitazone: it is already a PPAR-gamma agonist prescribed for insulin resistance, and its " +
    "independent STITCH-annotated association with Angptl4 (Section 3.6) together with its DiffDock " +
    "convergence on the same pocket as Ezetimibe (Section 3.9) raise the possibility that part of its " +
    "known metabolic benefit could involve direct engagement of this heart-derived signal, in addition " +
    "to its canonical nuclear-receptor-mediated action. We raise both as hypotheses generated by the " +
    "docking data, not as established pharmacological mechanisms - exactly the kind of possibility that " +
    "the wet-lab validation plan proposed in Section 5 is designed to test.",

    "The liver-to-heart axis (Sections 3.10-3.16) pushes this discussion one step further. It follows " +
    "exactly the same redirection logic as the heart-to-liver axis - network centrality does not " +
    "guarantee structural actionability - but the direction of the redirection differs. In the heart-to-" +
    "liver axis, the target moved from a receptor (Sdc1/Sdc4) to the ligand itself (Angptl4); in the " +
    "liver-to-heart axis, the target moved from CellChatDB's directly matched receptor (Plxna1) to a " +
    "different node within that receptor's complex (Nrp1). This difference is not trivial: redirecting " +
    "to Angptl4 is a conservative move (\"target the same molecule, but a different domain\"), whereas " +
    "redirecting to Nrp1 requires a far bolder assumption - that an entirely different molecule is the " +
    "target. That assumption is only justified if Nrp1 actually functions as part of the Sema5b-Plxna1 " +
    "signaling complex, which is not an established fact but an explicit hypothesis: Neuropilin's co-" +
    "receptor role is structurally validated where class-3 secreted semaphorins bind Plexin-A " +
    "(Takahashi et al., 1999), whereas Sema5b is a class-5 semaphorin whose paralog Sema5a is already " +
    "known to show paralog-specific receptor binding to Plexin-B3 (Sema5a binds, Sema5b does not; " +
    "Artigiani et al., 2004). For this reason, we present Nrp1 not as an \"established target\" but as " +
    "\"the most defensible hypothesis where three independent lines of indirect evidence - structure, " +
    "expression, and independent docking methods - converge,\" and we report the Plxna1 docking result " +
    "alongside it at the same level of rigor without hiding that it is unsupported by all three lines of " +
    "evidence (Sections 3.13-3.16).",

    "Placing the two axes side by side reveals an interesting asymmetry. The heart-to-liver axis " +
    "(Angptl4-Sdc/Cdh5) reproduces identically whether the statistical threshold is strict or relaxed " +
    "(Section 3.3), whereas the liver-to-heart axis (Sema5b-Plxna1/Plxna3) appears only under the " +
    "relaxed threshold (padj<0.05, |log2FC|>1.0) and disappears under the stricter one (padj<0.01, " +
    "|log2FC|>1.5). It is important not to paper over this asymmetry: it means the liver-to-heart axis " +
    "is a statistically weaker signal than the heart-to-liver axis, and correspondingly more " +
    "hypothesis-generating in character. The GSEA-versus-ORA contrast we observed in Section 3.2 " +
    "(threshold-independent vs. threshold-dependent) carries the same message: the choice of statistical " +
    "threshold is not a mere formality but actively determines which biological hypotheses become " +
    "'visible' at all, and rather than concealing this, we report results from both thresholds side by " +
    "side so readers can judge the strength of evidence behind each axis for themselves. Taken together, " +
    "however, the two axes raise the possibility that cardio-hepatic crosstalk is not a single one-way " +
    "signal but a bidirectional circuit with differing confidence in each direction - a possibility with " +
    "the potential to extend the existing clinical view of cardiohepatic syndrome beyond one-directional " +
    "congestive injury.",

    "Several limitations should be noted. First, this analysis rests on a single mouse model with a " +
    "small sample size (n=5/group), and independent replication is warranted. Second, the cardiac source " +
    "of Angptl4 was confirmed only through an independent literature report rather than through single-" +
    "cell data generated in this study. Third, DiffDock was run through a public web interface for only " +
    "the top Vina hits (heart-to-liver axis: Resmetirom, Ezetimibe, and Pioglitazone - the latter " +
    "included because it was independently flagged by STITCH as a genuine ANGPTL4 chemical partner; " +
    "liver-to-heart axis: each target's top Vina hit, Imatinib) because of the absence of a local GPU, " +
    "rather than across the full compound library. Fourth, all binding affinities reported here are in " +
    "silico predictions; biochemical confirmation (e.g., Western blot, SPR, or ITC) will be required " +
    "before any therapeutic claim can be made. Fifth, targeting Nrp1 in the liver-to-heart axis assumes " +
    "a direct role for Nrp1 in Sema5b-Plxna1 signaling that, as discussed above, is not established in " +
    "the literature - the docking results supporting Nrp1 as a \"defensible structure-based target\" and " +
    "confirming Nrp1 as \"the biological co-receptor for this specific signaling event\" are claims at " +
    "different levels of certainty, and this distinction must be kept explicit. Sixth, Plxna1 docking " +
    "used a domain-level blind box with no known binding pocket, and its self-docking control nearly " +
    "tied the actual top hit (Section 3.15) - we reiterate that this result should not be trusted at the " +
    "same level as the Nrp1 result.",
  ],

  conclusion: {
    summary:
      "By reanalyzing a publicly available paired liver-heart mouse transcriptome dataset under a " +
      "sensitivity-informed statistical threshold (padj<0.05, |log2FC|>1.0) and carrying the analysis " +
      "through ligand-receptor interactome matching, PPI network construction, network pharmacology, " +
      "druggability assessment, and structure-based virtual screening, we identified the cardio-hepatic " +
      "axis as a bidirectional circuit. In the statistically robust heart-to-liver direction, we " +
      "identified an Angptl4-Sdc/Cdh5 axis in place of our originally hypothesized liver-to-heart " +
      "direction - a reversal that in fact corresponds to the clinically established cardiohepatic " +
      "syndrome - and, recognizing that the network hubs Sdc1/Sdc4 are not structurally actionable, " +
      "redirected structure-based screening to Angptl4 itself, identifying Pioglitazone and Ezetimibe as " +
      "the candidates most consistently cross-validated across independent docking algorithms. In the " +
      "statistically subtler liver-to-heart direction, visible only under the relaxed threshold, we " +
      "traced the Sema5b-Plxna1/Plxna3 axis through with the same rigor, identified the expression and " +
      "structural limitations of CellChatDB's directly matched receptor (Plxna1), and redirected the " +
      "target to its first-shell STRING interactor, Nrp1 - which converged with Vina and DiffDock, two " +
      "independent methods, on a literature-known binding site, whereas Plxna1 docking left the two " +
      "methods pointing at different sites and remains hypothesis-generating. Because all of these " +
      "results remain in silico predictions, we outline below a concrete wet-lab validation pipeline " +
      "centered on the statistically more robust heart-to-liver axis, followed by a brief proposal for " +
      "an analogous validation direction for the liver-to-heart axis.",
    planIntro:
      "The proposed validation pipeline follows a conditioned-media paradigm - stressed/secreting donor " +
      "cells transferring a secreted factor to a recipient cell type, with pharmacological blockade " +
      "tested on the recipient side - the same general design used in prior work from the host " +
      "laboratory modeling hepatocyte and macrophage responses to secreted lipotoxic/apoptotic signals " +
      "(e.g., conditioned media from apoptotic adipocytes applied to macrophages and AML12 hepatocytes). " +
      "Adapting that paradigm to the heart-to-liver axis identified here gives the following concrete steps:",
    steps: [
      { h: "(1) Cell models", p:
        "Primary murine cardiac fibroblasts (or an immortalized cardiac fibroblast line) as the Angptl4-" +
        "secreting donor cell, paired with AML12 mouse hepatocytes and primary murine hepatic stellate " +
        "cells as the two recipient cell types - chosen to match the cell types to which Sdc1/Sdc4 " +
        "(hepatocyte) and downstream fibrogenic signaling (hepatic stellate cell) were localized in " +
        "Sections 3.4-3.5." },
      { h: "(2) Conditioned-media transfer with pharmacological blockade", p:
        "Collect conditioned media from cardiac fibroblasts under HFpEF-mimicking stress (e.g., mechanical " +
        "stretch or metabolic/hypertensive stress analogous to the in vivo 2-hit regimen), confirm elevated " +
        "secreted Angptl4 by ELISA, then apply the conditioned media to hepatocytes/hepatic stellate cells " +
        "with or without pre-treatment by each of the two structurally cross-validated candidates " +
        "(Ezetimibe and Pioglitazone; Section 3.9) across a dose range bracketing their predicted binding " +
        "affinities. A recombinant ANGPTL4 protein arm should be run in parallel as a simplified positive " +
        "control before committing to the full conditioned-media design." },
      { h: "(3) Readout", p:
        "Harvest whole-cell lysate (not media supernatant) for Western blot, since the mechanistic question " +
        "concerns intracellular signaling in the recipient cell, not the secreted ligand itself. Probe both " +
        "total and phosphorylated forms of the relevant downstream pathway (e.g., SMAD2/3 phosphorylation " +
        "for a TGF-beta-linked fibrogenic readout, or NF-kB/p65 phosphorylation for an inflammatory " +
        "readout), alongside fibrotic markers (fibronectin, collagen I) as functional endpoints." },
      { h: "(4) Sample-scale and blotting practicalities", p:
        "A design of this kind (donor stress condition x recipient cell type x Ezetimibe dose, each with " +
        "replicates) realistically runs to on the order of 17 samples processed and blotted together. At " +
        "that scale, uniform secondary-antibody blocking becomes a real practical constraint: using a " +
        "generous, freshly prepared blocking solution (e.g., on the order of 180 mL of 3% BSA in PBST) " +
        "for the secondary antibody incubation step helps ensure even blocking and antibody binding across " +
        "the full membrane, which matters for resolving the small signal changes expected between " +
        "treatment arms rather than losing them to lane-to-lane or membrane-edge background variation." },
      { h: "(5) In vivo follow-up", p:
        "If the in vitro data support direct ANGPTL4-Ezetimibe engagement and downstream signal blockade, " +
        "the natural next step is to administer Ezetimibe in the same 2-hit HFpEF mouse model used in this " +
        "study and assess whether hepatic fibrotic/inflammatory markers are attenuated independently of " +
        "Ezetimibe's canonical cholesterol-lowering effect (e.g., by including a diet/genetic control that " +
        "isolates the cholesterol-absorption pathway)." },
    ],
    closing:
      "Beyond this specific pipeline, biochemical confirmation of ANGPTL4-Ezetimibe binding by SPR or ITC, " +
      "and full-library DiffDock re-screening on a GPU-equipped system, remain worthwhile complementary " +
      "directions. For the liver-to-heart axis (Sema5b-Nrp1), the same conditioned-media paradigm can be " +
      "applied in reverse: primary murine hepatic stellate cells (HSCs) as the Sema5b-secreting donor " +
      "cell, paired with primary murine cardiac endothelial or endocardial cells (the cell types with the " +
      "highest Nrp1 expression in Tabula Muris, Section 3.11) as the recipient, testing whether " +
      "downstream VEGF/semaphorin signaling (e.g., Rac1/RhoA activity, an endothelial migration assay) " +
      "changes with or without pre-treatment by a candidate Nrp1 inhibitor (EG01377 or Imatinib). Because " +
      "this axis is statistically subtler and Nrp1's direct role remains a hypothesis (Section 4), " +
      "confirming direct binding between recombinant Sema5b and Nrp1 by SPR/ITC should precede any in " +
      "vitro validation.",
  },

  codeWalkthrough: {
    intro:
      "All code, intermediate results, and figures for this study are version-controlled at " +
      "github.com/bioinform25/essay. The repository is organized into scripts/ (analysis code, run in " +
      "the numeric order below), results/ (CSV outputs and text summaries), figures/ (all PNG figures, " +
      "with composite multi-panel images under figures/composite/), docking/ (receptor/ligand PDBQT " +
      "files and Vina/DiffDock outputs), and manuscript/ (this document's build scripts and content). " +
      "The list below walks through every script in execution order so that the analysis can be fully " +
      "reproduced or audited step by step.",
    items: [
      { file: "00_check_packages.R / 00b-00d", desc: "Verify/install required R packages (DESeq2, clusterProfiler, fgsea, msigdbr, EnhancedVolcano, pheatmap, igraph, CellChat, RCy3) before running the pipeline." },
      { file: "01_deseq2_analysis.R", desc: "Load the Zenodo raw count matrices and metadata, run DESeq2 independently for Liver and LV, apply apeglm shrinkage, export full and significant (padj<0.01, |log2FC|>1.5) DEG tables, volcano plots, and heatmaps." },
      { file: "02_gsea_go_kegg.R", desc: "Hallmark GSEA (fgsea) ranked by sign(log2FC)*-log10(p), plus GO-BP and KEGG over-representation analysis (clusterProfiler) on the significant DEG lists, for each organ." },
      { file: "03_ligand_receptor_matching.R", desc: "Match upregulated DEGs (ligand candidates) against CellChatDB.mouse ligand-receptor pairs, receptor side relaxed to baseMean>=10 expression, tested in both liver-to-LV and LV-to-liver directions." },
      { file: "04_string_ppi_network.R", desc: "Query the STRING API for the combined significant gene set to search directly for cross-organ edges (result: zero in the hypothesized direction)." },
      { file: "05_angptl4_axis_network.R / 05b", desc: "Expand the Angptl4/Cdh5/Sdc1-4 seed set with STRING first-shell interactors, compute degree/betweenness centrality with igraph, and render the network figure." },
      { file: "06_liver_localization_atlas.R", desc: "Reload the previously constructed and annotated GSE136103 Seurat atlas (construction pipeline in Supplemental Text S3) and generate DotPlots of Angptl4-axis genes across annotated liver cell types." },
      { file: "07_stitch_network_pharmacology.R", desc: "Query the STITCH API for chemical partners of each hub gene and resolve PubChem CIDs to compound names." },
      { file: "08_druggability_dgidb.R", desc: "Query the DGIdb 5.0 GraphQL API for existing drug interactions of each hub gene (human ortholog symbols)." },
      { file: "09_build_ligand_library.py", desc: "Resolve canonical SMILES for the 21-compound docking library from PubChem PUG-REST." },
      { file: "10_prepare_receptor.py", desc: "Strip waters/crystallization additives from PDB 6EUB, compute the 1PE-site centroid as the docking box center, and generate a receptor PDBQT with Meeko." },
      { file: "11_prepare_ligands.py", desc: "Generate 3D conformers (RDKit ETKDGv3/MMFF94) for all 21 ligands and convert to PDBQT with Meeko." },
      { file: "12_run_vina_screening.py", desc: "Run AutoDock Vina for every ligand against the prepared receptor and collate best binding affinities." },
      { file: "13_vina_results_plot.R", desc: "Render the ranked Vina results as a categorized bar chart." },
      { file: "14_visualize_poses.py / 15_static_pose_figure.py", desc: "Early-stage pose visualization attempts (py3Dmol web-rendering, then a matplotlib-based static fallback) before the PyMOL pipeline below was added." },
      { file: "16_pymol_pose_render.py", desc: "Headless PyMOL (installed via a dedicated Miniconda environment) rendering of the final publication-quality binding-pose figures, run via `pymol -cq`." },
      { file: "17_stitch_panels.py", desc: "Combine paired single-panel figures (volcano, heatmap, GSEA, docking pose, GO) into single composite Figure images with panel letters (A)/(B)/(C), matching standard journal figure layout." },
      { file: "18_fix_liver_heatmap.R", desc: "Regenerate the Liver heatmap alone (reusing the cached DESeq2 object) with a smaller row font and taller canvas so 86 gene labels no longer overlap." },
      { file: "19_tabula_muris_check.R", desc: "Cross-check Sdc1/Sdc4/Sdc3/Cdh5 hepatocyte/Kupffer/endothelial localization directly in mouse tissue using the public Tabula Muris FACS liver atlas, closing the human-only cross-species gap." },
      { file: "20_check_ggraph.R", desc: "Verify ggraph/tidygraph/ggrepel package availability before rebuilding Figure 4." },
      { file: "21_network_ggraph.R", desc: "Rebuild Figure 4 (STRING network) with ggraph/tidygraph/ggrepel: node size by degree, edge width/opacity by STRING confidence, and non-overlapping repelled gene labels." },
      { file: "22_check_score_range.R", desc: "Debug check confirming the STRING edge score column is already a 0-1 fraction (not 0-1000), used to fix a division bug in the initial version of script 21." },
      { file: "23_graphical_abstract.py", desc: "Render the graphical-abstract pipeline schematic (matplotlib) summarizing the full study workflow, from data to repurposing candidates." },
      { file: "24_gsea_running_score.R", desc: "Rerun Hallmark GSEA via clusterProfiler::GSEA (identical ranking metric to the fgsea run in script 02) and render classic running-enrichment-score plots (enrichplot::gseaplot2) for the two most significant pathways per organ, added as Figure 3C-F." },
      { file: "25_umap_featureplot_condition.R", desc: "Generate UMAP FeaturePlot (Seurat, split by condition) for Sdc1/Sdc4/Angptl4 on the GSE136103 atlas; combined with the existing dot plot into Figure S3." },
      { file: "26_relaxed_threshold_recheck.R", desc: "First exploratory sensitivity analysis: re-filter the cached DESeq2 objects at padj<0.05, |log2FC|>1.0 and rerun CellChatDB matching, first revealing 3 new liver-to-LV matches (subsequently absorbed into the official pipeline once scripts 01-03 themselves adopted this threshold as default)." },
      { file: "28_liver_to_heart_candidate_network.R", desc: "Expand a STRING network seeded on Sema5b/Plxna1/Plxna3. Confirms C4a has no node in mouse STRING DB (checked by both Ensembl ID and symbol) and excludes it." },
      { file: "29_liver_to_heart_druggability_check.R", desc: "Query the DGIdb GraphQL API for Sema5b/Plxna1/Plxna3/Plxna4/Nrp1/Nrp2." },
      { file: "30_semaphorin_structure_check.R", desc: "Query UniProt PDB cross-references for PLXNA1/PLXNA3/SEMA5B/NRP1/NRP2. Discovers and fixes the gene:NRP1/NRP2 collision with NELL1/NELL2 (old aliases) via exact primary-gene-name matching." },
      { file: "31_semaphorin_stitch.R", desc: "Query STITCH chemical partners for the same 6 genes, resolving PubChem CIDs to compound names." },
      { file: "32_sema5b_liver_localization.R", desc: "Reuse the already-built GSE136103 atlas to generate a liver cell-type DotPlot for SEMA5B/PLXNA1/PLXNA3/NRP1/NRP2." },
      { file: "33_tabula_muris_heart_check.R", desc: "Query the Tabula Muris droplet Heart+Aorta atlas (624 cells) to directly confirm cardiac cell-type expression of Plxna1/Plxna3/Sema5b/Nrp1/Nrp2 in mouse tissue." },
      { file: "34_prepare_dual_receptors.py", desc: "Generate Meeko receptor PDBQT files for both Nrp1 (PDB 6FMC, pocket-specific box centered on the EG01377 ligand centroid) and Plxna1 (PDB 7Y4P, domain-level box centered on the UniProt Sema domain residues 27-512 C-alpha centroid)." },
      { file: "35_build_dual_axis_ligand_library.py", desc: "Assemble the 11-compound library: EG01377 (SMILES taken directly from the RCSB chemical-component dictionary, self-docking control) + 6 STITCH-confirmed compounds + 4 unrelated controls." },
      { file: "36_prepare_dual_axis_ligands.py", desc: "Generate 3D conformers and Meeko PDBQT conversion for all 11 ligands." },
      { file: "37_run_dual_axis_vina_screening.py", desc: "Run AutoDock Vina for all 11 ligands against each of the two prepared receptors (Nrp1, Plxna1)." },
      { file: "38_dual_axis_vina_results_plot.R", desc: "Visualize both targets' Vina results as categorized bar charts (Figure 10)." },
      { file: "39_diffdock_distance_check.py", desc: "Compute the distance between each DiffDock top-pose centroid and the corresponding Vina box center to quantify convergence/divergence between the two methods." },
      { file: "40_dual_axis_pose_figures.py", desc: "Same matplotlib pipeline as script 15, generating DiffDock pose and contact-residue static figures for both targets (Figure 11)." },
      { file: "41_liver_to_heart_network_ggraph.R", desc: "Same ggraph pipeline as script 21, rebuilding the Sema5b-Plxna1/Plxna3 STRING network (Figure 8)." },
      { file: "42_graphical_abstract_dual_axis.py", desc: "Redesign the graphical abstract as two parallel columns (heart-to-liver, liver-to-heart) to summarize the bidirectional circuit at a glance." },
    ],
    reproNote:
      "Software versions: R 4.5.2 (DESeq2, apeglm, clusterProfiler, fgsea, msigdbr, CellChat, igraph, " +
      "httr/jsonlite, EnhancedVolcano, pheatmap); Python 3.14 (RDKit, Meeko, PyMuPDF, matplotlib, " +
      "py3Dmol); AutoDock Vina 1.2.7; PyMOL (open-source build, installed via a dedicated Miniconda " +
      "environment); Cytoscape 3.10.4 (installed, available for manual use). DiffDock was not installed " +
      "locally (no CUDA-capable GPU on this machine) and was instead run through a publicly hosted " +
      "Gradio Space mirroring the original gcorso/DiffDock inference code, for the top Vina candidates " +
      "only (heart-to-liver axis: Resmetirom, Ezetimibe, Pioglitazone; liver-to-heart axis: each " +
      "target's top Vina hit, Imatinib). The full commit history of the repository constitutes " +
      "a complete, chronological " +
      "log of the analysis as it was actually performed, including the initial (liver-to-heart) " +
      "hypothesis, the point at which it was found unsupported, and the subsequent re-direction of the " +
      "target and screening strategy.",
  },

  supplemental: {
    docTitle: "Supplemental Data",
    docSubtitle: "A Bidirectional Cardio-Hepatic Signaling Axis: Structure-Based Target Redirection and " +
                 "Drug Repurposing Across the Angptl4-Sdc/Cdh5 (Heart-to-Liver) and Sema5b-Nrp1 " +
                 "(Liver-to-Heart) Circuits — Supplemental Figures, Tables, and Text",
    labels: { figures: "Supplemental Figures", tables: "Supplemental Tables", text: "Supplemental Text", code: "Code and Analysis Workflow" },
    figures: [
      { file: "figures/composite/FigureS_GO_combined.png",
        caption: "Figure S1. Liver GO Biological Process enrichment (41 significant terms, padj<0.05). " +
                 "LV had zero significant terms under the same threshold - a result of the input DEG " +
                 "count more than tripling from 20 to 63 while significant GO-BP terms nonetheless " +
                 "vanished, reported here rather than omitted (see Section 3.2; ORA, unlike GSEA, is " +
                 "threshold-dependent). Complements the Hallmark GSEA in Figure 3 with a complementary, " +
                 "non-overlapping ontology." },
      { file: "figures/composite/FigureKEGG_combined.png",
        caption: "Figure S2. KEGG pathway enrichment (padj<0.05). (A) Liver (15 significant pathways). " +
                 "(B) LV (1 significant pathway, Ovarian steroidogenesis) - under the previous stricter " +
                 "threshold LV had no significant KEGG pathway at all, and 1 newly emerged under the " +
                 "relaxed threshold." },
      { file: "figures/composite/FigureS3_condition_combined.png", maxHeightPx: 700,
        caption: "Figure S3. Liver cell-type localization of Angptl4-axis genes, split by disease condition (healthy vs. cirrhotic; GSE136103 cross-species reference atlas, see Methods 2.6 and Supplemental Text S3 for construction). Provided in addition to Figure 5 to show whether localization itself, rather than only expression level, shifts with disease state. (A) Dot plot, all six axis genes, cell types labeled on the y-axis. (B) UMAP feature plots (SDC1, SDC4, ANGPTL4), healthy vs. cirrhotic side by side, showing the same shift as a spread of expressing cells across the embedding rather than a per-cell-type summary; cluster identities match the labeled dot plot in panel A and the annotated UMAP in Supplemental Text S3." },
      { file: "figures/TabulaMuris_liver_dotplot.png",
        caption: "Figure S4. Independent mouse-native cross-check of Angptl4-axis gene localization (Tabula Muris, FACS/Smart-seq2 liver atlas, n=714 cells, 5 annotated cell types). Sdc4 (91.8%) and Sdc1 (68.3%) were detected predominantly in hepatocytes, Sdc3 in Kupffer cells (80.3%), and Cdh5 in hepatic sinusoidal endothelial cells (98.4%) - reproducing the human-atlas pattern shown in Figure 5 directly in the same species as the bulk cohort." },
    ],
    tableIntros: {
      S1: "Complete Liver DEG table underlying Figure 1A and the 228-gene count reported in Section 3.1 (all columns from the DESeq2/apeglm output: baseMean, log2FoldChange, lfcSE, pvalue, padj, gene_name).",
      S2: "Complete LV DEG table underlying Figure 1B and the 63-gene count reported in Section 3.1.",
      S3: "Complete Liver GO-BP enrichment table underlying Figure S1.",
      S4: "LV GO-BP enrichment result (0 rows - see Section 3.2 and the Figure S1 caption).",
      S5: "Complete Liver/LV KEGG enrichment table underlying Figure S2.",
      S6: "Complete STRING network hub-gene ranking (degree, betweenness) underlying the discussion of Sdc1/Sdc4 centrality in Section 3.4.",
      S7: "Complete AutoDock Vina ranking for all 21 screened compounds (Section 3.8), including the fatty-acid and unrelated-control categories omitted from the main-text Table 4 top-5 summary.",
      S8: "Complete STITCH chemical-partner query results for all Angptl4-axis genes (Section 3.6), including compound identity resolved via PubChem.",
      S9: "Complete DGIdb druggability query results underlying Table 3 and the target-selection rationale in Section 3.7.",
      S10: "Complete STRING network hub-gene ranking (degree, betweenness) for the Sema5b-Plxna1/Plxna3 axis underlying Section 3.10/Figure 8.",
      S11: "Complete Tabula Muris mouse heart (Heart+Aorta droplet atlas) cell-type expression results (pct_expressed, avg_expr, n_cells) underlying Section 3.11/Figure 9B.",
      S12: "Complete STITCH chemical-partner query results for all Sema5b-Plxna1-axis genes underlying Section 3.12/Table 6.",
      S13: "Complete DGIdb druggability query results for all Sema5b-Plxna1-axis genes underlying Section 3.14/Table 8.",
      S14: "Complete dual-target (Nrp1, Plxna1) AutoDock Vina ranking (all 11 compounds, each target) underlying Section 3.15/Figure 10.",
    },
    tableTitles: {
      S1: "Table S1. Full significant DEG list, Liver (n=228, padj<0.05, |log2FC|>1.0)",
      S2: "Table S2. Full significant DEG list, LV (n=63, padj<0.05, |log2FC|>1.0)",
      S3: "Table S3. Liver GO-BP enrichment (full, padj<0.05)",
      S4: "Table S4. LV GO-BP enrichment (0 rows)",
      S5: "Table S5. Liver/LV KEGG pathway enrichment (full, padj<0.05)",
      S6: "Table S6. STRING network hub genes (Angptl4-Sdc/Cdh5 axis + first-shell interactors)",
      S7: "Table S7. Full AutoDock Vina ranking (all 21 compounds, ANGPTL4)",
      S8: "Table S8. STITCH chemical partners of Angptl4-axis genes (full)",
      S9: "Table S9. DGIdb druggability summary (Angptl4 axis)",
      S10: "Table S10. STRING network hub genes (Sema5b-Plxna1/Plxna3 axis + first-shell interactors)",
      S11: "Table S11. Complete Tabula Muris mouse heart cell-type expression results (Sema5b-Plxna1 axis)",
      S12: "Table S12. STITCH chemical partners of Sema5b-Plxna1-axis genes (full)",
      S13: "Table S13. DGIdb druggability summary (Sema5b-Plxna1 axis)",
      S14: "Table S14. Dual-target (Nrp1, Plxna1) AutoDock Vina full ranking (all 11 compounds)",
    },
    textTitles: {
      S1: "Text S1. Final target selection rationale (both axes)",
      S2: "Text S2. DiffDock cross-check summary (both axes)",
      S3: "Text S3. Full methodology of the human-cohort analyses underlying this study (GSE135251, GSE136103)",
    },
    textS1: [
      "Five candidates arising from the Angptl4-Sdc/Cdh5 axis were evaluated as the final structure-" +
      "based screening target: Angptl4 itself, and its four curated receptors Sdc1, Sdc2, Sdc3, and Cdh5.",
      "Sdc1 is the top network hub (degree 16) and localizes to hepatocytes, but DGIdb lists 3 existing " +
      "interactions (heparin, and the antibody-drug conjugate indatuximab ravtansine) and, more " +
      "importantly, its only solved structures (e.g., PDB 4GVC/4GVD/6EJE) cover small ectodomain " +
      "fragments rather than a druggable ligand-binding pocket.",
      "Sdc4 is the second network hub (degree 14) and also localizes to hepatocytes, but its only solved " +
      "structures (e.g., PDB 8BLV) resolve the cytoplasmic tail in complex with the syntenin PDZ domain " +
      "- the opposite side of the membrane from where a secreted ligand such as Angptl4 would engage - " +
      "and DGIdb's single hit (repotrectinib, an oncology kinase inhibitor) has no plausible mechanistic " +
      "connection to Sdc4 and is most likely a text-mining artifact.",
      "Sdc3 has no solved structure at all and zero DGIdb interactions; while genuinely undrugged, it is " +
      "simply not structurally actionable.",
      "Cdh5 is an isolated node in the network (linked to Angptl4 only) and localizes to endothelia " +
      "(the expected, canonical result for this marker, serving as a positive control for the " +
      "localization method rather than a disease-specific finding). Its one DGIdb hit, FX06, is a " +
      "fibrin-derived peptide, not a small molecule.",
      "Angptl4 itself was therefore selected: it has zero DGIdb drug interactions (genuinely undrugged); " +
      "its C-terminal fibrinogen-like domain has a solved 2.3-A crystal structure (PDB 6EUB) with a " +
      "visible, ligand-accommodating surface (a pentaethylene glycol molecule from the crystallization " +
      "buffer occupies this site in the deposited structure, marking a real surface pocket rather than a " +
      "computationally predicted one); and it is validated by two independent lines of evidence - our " +
      "own stricter DEG reanalysis (LV upregulated, Section 3.1) and an independent 2024 single-cell " +
      "study demonstrating cardiac-fibroblast-specific Angptl4 secretion in HFpEF (Li et al., 2024).",
      "We explicitly note the resulting limitation: this choice reframes the docking target from the " +
      "network-centrality hub genes (Sdc1/Sdc4) to the ligand itself, purely because of a structural-" +
      "biology constraint (no usable receptor ectodomain structure), not because the network analysis " +
      "itself pointed away from the syndecans. Sdc1/Sdc4 remain the top computational hubs of this axis " +
      "and should be revisited once a structure of their heparan-sulfate-bearing ectodomain becomes " +
      "available.",
      "For the liver-to-heart axis (Sema5b-Plxna1/Plxna3; Sections 3.10-3.16), three final candidates " +
      "were evaluated: the two directly CellChatDB-matched receptors (Plxna1, Plxna3) and the first-" +
      "shell STRING interactor with the richest structural, expression, and druggability data, Nrp1.",
      "Plxna1 is this axis's most central hub (degree 17) and CellChatDB's direct match, but its actual " +
      "expression in mouse heart was weak (5.0% of cardiomyocytes, Section 3.11). Its only solved " +
      "structures (PDB 7Y4P/7Y4Q) are apo ectodomain fragments with no known small-molecule pocket, and " +
      "it has zero DGIdb interactions.",
      "Plxna3 is the second hub (degree 16) and likewise weakly expressed in heart (1.6-3.1%). It has no " +
      "solved structure at all and zero DGIdb interactions, making it even less structurally actionable " +
      "than Plxna1.",
      "Nrp1 was not CellChatDB's directly matched receptor but was discovered as the first-shell STRING " +
      "interactor of Plxna1/Plxna3 (degree 13), and was overwhelmingly strongly expressed in mouse heart " +
      "(96.8% of endocardial cells, 94.9% of endothelial cells, 74.8% of fibroblasts, Tabula Muris). It " +
      "has an ultra-high-resolution 0.90-A structure with the small-molecule inhibitor EG01377 bound " +
      "(PDB 6FMC; Powell et al., 2018), 5 DGIdb interactions (Palifermin, Pegaptanib, Vesencumab, " +
      "EG01377, EG00229), and multiple real approved/late-stage compounds in STITCH.",
      "We therefore adopted a dual-docking strategy for this axis, screening both Plxna1 and Nrp1 " +
      "without excluding either in advance. Ultimately, we report Nrp1 - where both Vina and DiffDock " +
      "independently converged on a literature-known binding site - as the structurally supported " +
      "target, and Plxna1 - where the two methods disagreed - as a hypothesis-generating result (Sections " +
      "3.15-3.16). We explicitly note the resulting limitation: unlike the redirection to Angptl4 (same " +
      "molecule, different domain), redirecting to Nrp1 moves to an entirely different molecule, and " +
      "whether Nrp1 actually functions as a co-receptor for Sema5b-Plxna1 signaling is not established in " +
      "the literature (see Section 4). Plxna1/Plxna3 remain this axis's top computational hubs and " +
      "CellChatDB's direct match, and should be revisited once a small-molecule-bound structure becomes " +
      "available.",
    ],
    textS2: [
      "Three Vina hits were cross-checked with DiffDock: Resmetirom and Ezetimibe (the top two by Vina " +
      "score), plus Pioglitazone, added because it was independently flagged by STITCH as a genuine " +
      "ANGPTL4 chemical partner (Section 3.6) rather than purely on its Vina rank.",
      "Pioglitazone and Ezetimibe emerged as the cross-validated candidates: an orthogonal, box-free " +
      "method (DiffDock) independently converged on essentially the same surface pocket that Vina was " +
      "constrained to search for both compounds, with Pioglitazone's top pose 3.9 A from the Vina pocket " +
      "centroid (confidence -1.06, the best of the three) and Ezetimibe's 3.5 A away (confidence -1.32). " +
      "The two poses share the majority of their contact residues (Leu304, Leu312, Gly313, Ala314, " +
      "Leu322, Val324, Gly352, Thr353, His356 in common), and Pioglitazone additionally contacts Ala309, " +
      "Val317, and Lys381. This overlap, from two chemically unrelated scaffolds docked independently, " +
      "is itself evidence that the site is a real, druggable pocket rather than a coincidental surface " +
      "depression.",
      "Resmetirom scored best on Vina, which only searched the predefined pocket, but DiffDock's " +
      "unconstrained search preferred a completely different surface region (contact residues Trp280, " +
      "Asp281, Ile367, Leu374, Tyr387, Tyr388, Pro389). We report this as a genuine discrepancy rather " +
      "than smoothing it over: Resmetirom's top Vina score should be read as \"the best-fitting pose " +
      "within the pocket we searched,\" not as strong independent evidence that this is its preferred " +
      "binding site on ANGPTL4.",
      "All three DiffDock confidence scores (-2.06 for Resmetirom, -1.32 for Ezetimibe, -1.06 for " +
      "Pioglitazone) fall within that method's own low-to-moderate confidence range (published " +
      "benchmarks treat a confidence score above 0 as high-confidence), so none of the three results " +
      "should be oversold as a confirmed binder - all remain hypothesis-generating leads from this " +
      "screen, not validated hits. Pioglitazone is nonetheless the most consistently supported of the " +
      "three across independent lines of in silico evidence (STITCH annotation, Vina rank, and DiffDock " +
      "pocket convergence).",
      "DiffDock was not run locally: this machine has no CUDA-capable GPU, and a local from-scratch " +
      "install (PyTorch, PyTorch Geometric, e3nn, and the ESM protein language model) would have made " +
      "CPU-only inference impractically slow for even a single complex. Instead, a publicly running " +
      "DiffDock Gradio Space (swcanner/DiffDock-Web, mirroring the original gcorso/DiffDock inference " +
      "code) was used via its web interface for the approved top-hit compounds only (Resmetirom, " +
      "Ezetimibe, Pioglitazone), consistent with the earlier CPU-budget decision to restrict DiffDock to " +
      "a handful of final candidates rather than the full 21-compound library.",
      "For the liver-to-heart axis (Nrp1, Plxna1; Sections 3.15-3.16), each target's top Vina hit " +
      "(coincidentally Imatinib for both) was cross-validated using the same web interface. Unlike the " +
      "heart-to-liver axis, the results split sharply between the two targets: for Nrp1, DiffDock's top-" +
      "ranked pose (confidence -1.51) converged within 1.9 A of the Vina box center (the EG01377 " +
      "centroid), with contact residues (Tyr297, Trp301, Thr316, Asp320, Glu348, Thr349, Lys350, Lys351, " +
      "Tyr353, Thr413, Gly414, Ile415) matching exactly the b1-domain pocket known in the literature to " +
      "bind the C-terminal arginine of VEGF-A/Sema3A and the EG-series inhibitor scaffold. For Plxna1, " +
      "DiffDock's top-ranked pose (confidence -1.65) landed at an entirely different site 22.7 A from " +
      "the Sema-domain-centered Vina box (contact residues Lys156, Glu196, Gln221, Ser226, Gln228, " +
      "Leu229, Lys230, Phe292, Leu388, Gln413, Pro414).",
      "This result independently reconfirms, with a second method, the concern already raised in Section " +
      "3.15 - that for Plxna1, a self-docking control designed exclusively for Nrp1 (EG01377) nearly tied " +
      "the actual top Vina hit (-9.15 vs. -9.96 kcal/mol). Neither Vina nor DiffDock gives us confidence " +
      "in the Plxna1 domain-level blind-box result, which stands in exact contrast to Nrp1, where the two " +
      "methods mutually reinforce each other. The two DiffDock confidence values themselves (-1.51, " +
      "-1.65) both fall within the low-to-moderate range, so neither should be oversold as a confirmed " +
      "binder, but on the criterion of 'do two independent methods converge on the same site,' Nrp1 and " +
      "Plxna1 are clearly distinguished.",
    ],
    textS3: [
      { type: "p", text:
        "The Introduction and Methods 2.6 describe the first two stages of this study's investigation: " +
        "(a) a human-cohort bulk RNA-seq analysis that identified the candidate-gene list motivating this " +
        "study's broader research program, and (b) the human liver scRNA-seq atlas built for use in " +
        "Section 3.5/Figure 5 as an independent cross-species reference. Because these two analyses are " +
        "not otherwise published, this section documents their methodology and results in " +
        "full, with the key figures from each, so that this manuscript is fully self-contained." },

      { type: "p", text:
        "Analysis 1 - GSE135251 (bulk RNA-seq, 216 human liver biopsies; Govaere et al., 2020): this " +
        "public MASLD cohort comprises 206 biopsy-confirmed MASLD/NAFLD patients (fibrosis-staged F0-F4) " +
        "plus 10 healthy controls. The 10 healthy controls were excluded and the 206 MASLD patients were " +
        "split into an early-fibrosis group (F0-F1, n=85) and a moderate/advanced-fibrosis group (F2-F4, " +
        "n=121). Differential expression was computed with DESeq2 (Wald test, apeglm log2FC shrinkage; " +
        "genes pre-filtered to count>=10 in >=20 samples, 64,258 to 17,421 genes tested), identifying 167 " +
        "significantly upregulated and 5 significantly downregulated genes in advanced versus early " +
        "fibrosis (padj<0.05). Gene set enrichment (fgsea, ranked by Wald statistic; MSigDB Hallmark and " +
        "KEGG_MEDICUS) showed advanced fibrosis enriched for EMT, TNFA/NFKB signaling, and angiogenesis, " +
        "and depleted for fatty-acid metabolism and oxidative phosphorylation; GO/KEGG over-representation " +
        "analysis (clusterProfiler) returned extracellular-matrix organization, collagen fibril " +
        "organization, and integrin signaling as the dominant enriched terms. The 172 significant DEGs were " +
        "submitted to the STRING API (confidence score>=700) and formed a 157-node, 60-edge network " +
        "resolving into a chemokine/immune-recruitment module (CXCL8, CXCL1, CXCL6, CCL19, CCL20, CCL21) " +
        "and a collagen/ECM module anchored on COL1A1 (below). The 15 hub genes (degree>=3) were queried against " +
        "DGIdb and cross-referenced against a hand-curated list of ~26 already-canonical fibrosis genes " +
        "(collagens, the core TGF-beta/myofibroblast axis); excluding that canonical set left seven " +
        "druggable, network-central candidates that had not already been deeply studied in this specific " +
        "cohort: CCL21, CXCL8, CCL20, EPCAM, LUM, THY1, and THBS2. These seven genes, not literally novel " +
        "in the broader fibrosis literature but data-driven and network-centrality-ranked in this cohort, " +
        "are the candidate list referenced in the Introduction." },
      { type: "figure", file: "figures/prior_analyses/GSE135251_ppi_hub_network.png",
        caption: "GSE135251 hub-gene PPI network (Analysis 1). Red: the seven novel druggable " +
                 "candidates; blue: canonical fibrosis genes / not druggable. Two modules resolve: a " +
                 "chemokine/immune-recruitment cluster and a collagen/ECM cluster anchored on COL1A1." },

      { type: "p", text:
        "Analysis 2 - GSE136103 (single-cell RNA-seq atlas construction and localization; " +
        "Ramachandran et al., 2019): this public dataset comprises 20 human liver 10x samples (5 healthy + " +
        "5 cirrhotic patients, CD45+/CD45- sorted fractions; blood and mouse samples in the same GEO series " +
        "were excluded as not relevant). Cells were quality-filtered per-sample (nFeature_RNA>300, " +
        "percent.mt<30, following the original paper's Methods), yielding 60,925 cells, then normalized, " +
        "scaled, PCA'd, and batch-corrected across individual 10x runs with Harmony (RunHarmony, batch = " +
        "individual sample, converging in 3 iterations; post-integration UMAP confirmed cells mixed by cell " +
        "type rather than by patient-of-origin). Clusters were called with FindClusters (Harmony embedding, " +
        "dims 1:15, resolution 0.6), yielding 20 clusters, matching the original paper's reported cluster " +
        "count at the same resolution. Each cluster was assigned to one of 12 cell lineages (T cell, ILC, " +
        "MP, B cell, Plasma cell, pDC, Mast cell, Endothelia, Mesenchyme, Hepatocyte, Cholangiocyte, " +
        "Cycling) by scoring it with Seurat's AddModuleScore against the original paper's own supplementary " +
        "lineage-signature gene sets and taking the highest-scoring lineage per cluster, with every " +
        "assignment cross-checked against a marker-gene dotplot before being finalized (annotated UMAP " +
        "below - the same embedding reused for the Figure S3B feature plots in the main analysis)." },
      { type: "figure", file: "figures/prior_analyses/GSE136103_umap_annotated.png",
        caption: "GSE136103 annotated UMAP (Analysis 2), 12 cell lineages, 60,925 cells. This is the " +
                 "same embedding underlying Figure 5, Figure S3, and the FeaturePlots in Figure S3B." },

      { type: "p", text:
        "This atlas was then used, in this stage of the study, to localize the seven GSE135251-derived " +
        "candidate genes (below): LUM, " +
        "THY1, and THBS2 all localized specifically to the Mesenchyme cluster (hepatic stellate " +
        "cells/portal fibroblasts) and were each far more expressed in cirrhotic than healthy liver within " +
        "that same cell type (e.g. THY1, 5.4% to 41.9% of cells expressing); EPCAM localized just as " +
        "cleanly to Cholangiocytes, consistent with the cirrhosis-associated ductular reaction; CXCL8 and " +
        "CCL20 did not resolve to one clear producer cell type." },
      { type: "figure", file: "figures/prior_analyses/GSE136103_candidate_gene_dotplot.png",
        caption: "GSE136103 localization of the seven GSE135251-derived candidate genes (Analysis " +
                 "2), split by condition. LUM/THY1/THBS2 localize to Mesenchyme and rise sharply in " +
                 "cirrhosis; EPCAM localizes to Cholangiocyte." },

      { type: "p", text:
        "A composition-shift test (chi-square plus " +
        "per-type proportion tests, BH-adjusted) additionally showed Cholangiocyte proportion nearly " +
        "tripling in cirrhosis (3.2% to 9.1% of cells) and Endothelia more than doubling (8.9% to 19.3%), " +
        "while Mesenchyme's own proportion slightly decreased (4.6% to 3.0%) even as LUM/THY1/THBS2 " +
        "expression within that population rose sharply - i.e., the fibrogenic signal reflects activation " +
        "of existing stellate cells rather than net stellate-cell expansion." },
      { type: "figure", file: "figures/prior_analyses/GSE136103_composition_barplot.png",
        caption: "GSE136103 cell-type composition, healthy vs. cirrhotic (Analysis 2). Cholangiocyte " +
                 "and Endothelia proportions rise with cirrhosis; Mesenchyme's proportion does not, despite " +
                 "its rising fibrogenic gene expression - activation, not expansion." },

      { type: "p", text:
        "Relationship to the mouse inter-organ analysis in the main Results: Analyses 1 and 2 above " +
        "establish the human background this study builds on, but the mouse liver-heart axis reported " +
        "in the main Results does not directly reuse the GSE135251 bulk analysis or its " +
        "LUM/THY1/THBS2/EPCAM findings - that analysis instead motivated why a network-centrality-and-" +
        "druggability screening strategy was worth extending to a genuinely inter-organ mouse dataset. " +
        "The GSE136103 atlas described above, however, is directly reused in Section 3.5/Figure 5 and " +
        "Supplemental Figure S3 - but in an entirely different role: as an independent, cross-species " +
        "reference for localizing this study's own candidate genes (Sdc1, Sdc2, Sdc3, Sdc4, Cdh5, " +
        "Angptl4), which are unrelated to the LUM/THY1/THBS2/EPCAM genes the atlas was originally built " +
        "to localize in Analysis 2. The same caveat applies across all three stages of this study: " +
        "GSE135251 and GSE136103 are different human patient cohorts with no paired samples, and this " +
        "study's own mouse cohort is a third, entirely independent dataset " +
        "- so every cross-reference among the three (bulk-to-atlas, mouse-to-human) is a plausible " +
        "biological inference drawn across independent datasets, not a directly matched, within-subject " +
        "validation. Full result tables and analysis code for Analyses 1 and 2 are documented above and " +
        "available from the corresponding author on request." },
    ],
  },

  references: [
    "Rinella ME, Lazarus JV, Ratziu V, et al. A multisociety Delphi consensus statement on new fatty liver disease nomenclature. J Hepatol. 2023;79(6):1542-1556.",
    "Strocchi S, Liu L, Wang R, et al. Systems Biology Approach Uncovers Candidates for Liver-Heart Interorgan Crosstalk in HFpEF. Circ Res. 2024;135(8):873-876.",
    "Schütte JP, Markus N, Grein S, et al. Cell Type–Specific Secretome Analysis Reveals Liver-Heart Crosstalk in HFpEF. Circ Res. 2025;136(11):1516-1518.",
    "Li G, Zhao H, Cheng Z, Liu J, Li G, Guo Y. Single-cell transcriptomic profiling of heart reveals ANGPTL4 linking fibroblasts and angiogenesis in heart failure with preserved ejection fraction. J Adv Res. 2025;68:215-230. Epub 2024 Feb 8.",
    "Love MI, Huber W, Anders S. Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2. Genome Biol. 2014;15:550.",
    "Zhu A, Ibrahim JG, Love MI. Heavy-tailed prior distributions for sequence count data: removing the noise and preserving large differences. Bioinformatics. 2019;35(12):2084-2092.",
    "Korotkevich G, Sukhov V, Budin N, Shpak B, Artyomov MN, Sergushichev A. Fast gene set enrichment analysis. bioRxiv. 2019. doi:10.1101/060012",
    "Wu T, Hu E, Xu S, et al. clusterProfiler 4.0: A universal enrichment tool for interpreting omics data. Innovation (Camb). 2021;2(3):100141.",
    "Szklarczyk D, Kirsch R, Koutrouli M, et al. The STRING database in 2023: protein-protein association networks and functional enrichment analyses for any sequenced genome of interest. Nucleic Acids Res. 2023;51(D1):D638-D646.",
    "Szklarczyk D, Santos Delgado A, von Mering C, Jensen LJ, Bork P, Kuhn M. STITCH 5: augmenting protein-chemical interaction networks with tissue and affinity data. Nucleic Acids Res. 2016;44(D1):D380-D384.",
    "Jin S, Guerrero-Juarez CF, Zhang L, et al. Inference and analysis of cell-cell communication using CellChat. Nat Commun. 2021;12:1088.",
    "Cannon M, Stevenson J, Stahl K, et al. DGIdb 5.0: rebuilding the drug-gene interaction database for precision medicine and drug discovery platforms. Nucleic Acids Res. 2024;52(D1):D1227-D1235.",
    "Biterova EI, Esmaeeli M, Alanen HI, Saaranen M, Ruddock LW. Structures of Angptl3 and Angptl4, modulators of triglyceride levels and coronary artery disease. Sci Rep. 2018;8:6752.",
    "Eberhardt J, Santos-Martins D, Tillack AF, Forli S. AutoDock Vina 1.2.0: New Docking Methods, Expanded Force Field, and Python Bindings. J Chem Inf Model. 2021;61(8):3891-3898.",
    "Corso G, Stärk H, Jing B, Barzilay R, Jaakkola T. DiffDock: Diffusion Steps, Twists, and Turns for Molecular Docking. International Conference on Learning Representations (ICLR). 2023.",
    "Ramachandran P, Dobie R, Wilson-Kanamori JR, et al. Resolving the fibrotic niche of human liver cirrhosis at single-cell level. Nature. 2019;575(7783):512-518.",
    "Govaere O, Cockell S, Tiniakos D, et al. Transcriptomic profiling across the nonalcoholic fatty liver disease spectrum reveals gene signatures for steatohepatitis and fibrosis. Sci Transl Med. 2020;12(572):eaba4448.",
    "Powell J, Mota F, Steadman D, et al. Small Molecule Neuropilin-1 Antagonists Combine Antiangiogenic and Antitumor Activity with Immune Modulation through Reduction of Transforming Growth Factor Beta (TGFbeta) Production in Regulatory T-Cells. J Med Chem. 2018;61(9):4135-4154.",
    "Tanaka T, Ekimoto T, Nagatomo M, et al. Hybrid in vitro/in silico analysis of low-affinity protein-protein interactions that regulate signal transduction by Sema6D. Protein Sci. 2022;31(9):e4452.",
    "Takahashi T, Fournier A, Nakamura F, et al. Plexin-neuropilin-1 complexes form functional semaphorin-3A receptors. Cell. 1999;99(1):59-69.",
    "Artigiani S, Conrotto P, Fazzari P, et al. Plexin-B3 is a functional receptor for semaphorin 5A. EMBO Rep. 2004;5(7):710-714.",
  ],
};
