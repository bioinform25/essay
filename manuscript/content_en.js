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
  title: "A Heart-to-Liver Angptl4-Sdc/Cdh5 Axis in Cardiohepatic Syndrome: Target Redirection " +
         "and Structure-Based Repurposing of Ezetimibe and Pioglitazone",
  studentLine: "202251154 Changwoo Lee",

  graphicalAbstract: {
    file: "figures/graphical_abstract.png",
    caption: "Graphical abstract. Paired liver/left-ventricle transcriptomics reversed the hypothesized " +
             "signaling direction, identifying a heart-to-liver Angptl4-Sdc/Cdh5 axis; network centrality " +
             "pointed to Sdc1/Sdc4 as hubs, but the absence of extracellular-domain crystal structures " +
             "redirected structure-based screening to ANGPTL4 itself (PDB 6EUB), yielding Ezetimibe and " +
             "Pioglitazone as convergent repurposing candidates across STITCH, AutoDock Vina, and DiffDock.",
  },

  abstract:
    "Heart failure with preserved ejection fraction (HFpEF) and metabolic dysfunction-associated " +
    "steatotic liver disease (MASLD) are increasingly recognized as bidirectionally linked through a " +
    "cardio-hepatic axis, yet the molecular mediators of this crosstalk remain incompletely defined. " +
    "We reanalyzed a paired bulk RNA-seq dataset (liver and left ventricle from the same C57BL/6N mice, " +
    "chow vs. a 2-hit HFpEF diet, n=5/group; Zenodo 12794566) using a stricter statistical threshold " +
    "(padj<0.01, |log2FC|>1.5) than the original publication. Contrary to our initial hypothesis of a " +
    "liver-to-heart signal, curated ligand-receptor annotation (CellChatDB) and STRING protein-protein " +
    "interaction network analysis found no cross-organ edge in that direction, but identified a heart-to-" +
    "liver candidate axis: Angptl4 (upregulated in HFpEF left ventricle) paired with Cdh5/Sdc1-4 " +
    "(expressed in liver). Reusing an independently annotated human liver single-cell atlas (GSE136103), " +
    "Sdc1/Sdc4 localized to hepatocytes, consistent with their status as the top network hubs (degree 16 " +
    "and 14, respectively). However, all available crystal structures of Sdc1/Sdc4 cover non-extracellular " +
    "fragments unsuitable for structure-based docking, so we redirected structure-based screening to " +
    "ANGPTL4's C-terminal fibrinogen-like domain (PDB 6EUB) - a genuinely undrugged target (zero DGIdb " +
    "drug interactions) independently validated by a 2024 single-cell study showing cardiac-fibroblast-" +
    "specific ANGPTL4 secretion in HFpEF. AutoDock Vina screening of 21 compounds ranked Resmetirom (the " +
    "first FDA-approved MASH drug), Ezetimibe, and Pioglitazone as the top three hits (-9.07, -8.88, and " +
    "-8.28 kcal/mol). Cross-checking these three with box-free DiffDock showed Pioglitazone (confidence " +
    "-1.06, best of the three) and Ezetimibe (-1.32) both converging within 4 A of the Vina-defined " +
    "pocket, while Resmetirom's pose landed 23.5 A away at a distinct site - reframing Pioglitazone and " +
    "Ezetimibe, not the top Vina scorer, as the structurally cross-validated candidates, with Pioglitazone " +
    "further backed by an independent STITCH-annotated ANGPTL4 association. This work illustrates how a " +
    "rigorously reanalyzed, genuinely null result can redirect a network pharmacology pipeline toward a " +
    "clinically relevant, testable hypothesis.",

  keywords: "Keywords: HFpEF, MASLD, cardio-hepatic axis, ANGPTL4, network pharmacology, molecular docking",

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

    "The present study set out to reanalyze this public dataset under a substantially stricter " +
    "statistical threshold and to carry the analysis all the way through ligand-receptor interactome " +
    "matching, a STRING-based PPI network, STITCH network pharmacology, DGIdb druggability assessment, " +
    "and, finally, structure-based virtual screening with AutoDock Vina and DiffDock. This effort builds " +
    "directly on our own prior work profiling human MASLD liver-fibrosis cohorts. The first (GSE135251, " +
    "Govaere et al.; 216 liver biopsies, early F0-F1 vs. moderate/advanced F2-F4 fibrosis) was reanalyzed " +
    "by bulk DESeq2 differential expression, a STRING PPI network restricted to hub genes (degree>=3), " +
    "and a DGIdb druggability screen that excluded already-canonical fibrosis genes (collagens, the core " +
    "TGF-beta/myofibroblast axis) to surface seven under-explored druggable candidates: CCL21, CXCL8, " +
    "CCL20, EPCAM, LUM, THY1, and THBS2. The second (GSE136103, Ramachandran et al., 2019, Nature; a " +
    "human liver cirrhosis single-cell atlas) was built and annotated from scratch (quality control, " +
    "Harmony batch integration, clustering, and lineage-signature-based cell-type annotation - full " +
    "pipeline in Methods 2.6) to localize three of those seven genes (LUM, THY1, THBS2) to activated " +
    "hepatic stellate cells and to characterize their upstream transcription-factor/miRNA regulators and " +
    "cell-cell communication partners. Full methodological detail for both prior analyses, written so as " +
    "to stand on their own without reference to internal project labels, is provided in Supplemental " +
    "Text S3. The present study extends that program by moving from human to mouse and from a single-" +
    "organ (liver) to a genuinely inter-organ (liver-heart) axis; the GSE136103 atlas is reused here in " +
    "an entirely different role, as an independent cross-species reference for localizing this study's " +
    "own candidate genes (Section 3.5), not as a source of the candidate genes themselves. Contrary to " +
    "our initial hypothesis, the data pointed not " +
    "toward a liver-secreted factor acting on the heart, but toward the reverse - a heart-secreted " +
    "factor acting on the liver - a direction that in fact aligns closely with the clinically " +
    "established entity of congestive hepatopathy/cardiohepatic syndrome. Rather than treating this " +
    "reversal as a disappointment, we report it as a genuine finding and follow it through to a " +
    "druggability assessment and a compound-level screen."
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
      "scRNA-seq atlas built in our own prior work from the public GSE136103 dataset (Ramachandran et " +
      "al., 2019; 20 human liver 10x samples, 5 healthy + 5 cirrhotic, CD45+/CD45- sorted fractions). " +
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
  ],

  resultsBlocks: [
    { type: "heading", text: "3.1 Organ-specific differential expression" },
    { type: "p", text:
      "We first examined organ-specific transcriptional changes in mice exposed to the 2-hit HFpEF " +
      "regimen. At padj<0.01 and |log2FC|>1.5, 86 genes were significantly differentially expressed in " +
      "the liver (48 up, 38 down) and 20 in the LV (15 up, 5 down) (Figure 1A, 1B; Supplemental Table " +
      "S1, S2 list every gene). Unsupervised hierarchical clustering of these DEGs cleanly separated " +
      "Chow from HFpEF samples in both organs (Figure 2A, 2B). In the liver, acute-phase and " +
      "inflammation-associated transcripts (Dsg1c, Per2, Saa2, Lcn2) were upregulated, whereas numerous " +
      "cytochrome P450 family members were downregulated, consistent with disturbed lipid metabolism; in " +
      "the LV, Chrna2, Hmgcs2, and Mmp12 were upregulated and Cyp1a1 was downregulated." },
    { type: "figure", file: "figures/composite/Figure1_volcano_combined.png",
      caption: "Figure 1. Organ-specific differential gene expression under HFpEF vs. Chow. (A) Liver " +
               "volcano plot. (B) Left-ventricle (LV) volcano plot. Genes meeting the significance " +
               "threshold (padj<0.01, |log2FC|>1.5) are shown in red; representative genes are labeled. " +
               "Full DEG lists are provided in Supplemental Table S1 (liver) and S2 (LV)." },
    { type: "figure", file: "figures/composite/Figure2_heatmap_combined.png",
      caption: "Figure 2. Hierarchical clustering of significant DEGs (z-scored variance-stabilized " +
               "counts). (A) Liver (n=86 DEGs). (B) LV (n=20 DEGs). Both tissues show unsupervised " +
               "separation of Chow and HFpEF samples." },
    { type: "p", text:
      "We next asked whether the two candidate mediators nominated by the original study, Saa1 and Saa4 " +
      "(Strocchi et al., 2024), replicated under our stricter criteria. Both genes trended in the same " +
      "direction as previously reported (Saa1, log2FC=1.16, padj=5.9x10-5; Saa4, log2FC=0.53, padj=0.011) " +
      "but neither cleared our |log2FC|>1.5 cutoff. We interpret this as a genuine effect-size limitation " +
      "rather than a false-positive finding in the original report - both genes are statistically robust " +
      "but their fold-change falls short of our more conservative threshold." },

    { type: "heading", text: "3.2 Pathway-level enrichment (GSEA, GO, KEGG)" },
    { type: "p", text:
      "Hallmark GSEA identified 19 significantly enriched pathways in the liver and 17 in the LV " +
      "(padj<0.05; Figure 3A, 3B). In the liver, MTORC1_SIGNALING, CHOLESTEROL_HOMEOSTASIS, and " +
      "MYC_TARGETS_V1 were downregulated while INTERFERON_ALPHA_RESPONSE was upregulated. In the LV, " +
      "ADIPOGENESIS, FATTY_ACID_METABOLISM, OXIDATIVE_PHOSPHORYLATION, PEROXISOME, and " +
      "BILE_ACID_METABOLISM were all markedly upregulated, indicating a shift of cardiac metabolism " +
      "toward lipid handling and mitochondrial pathways under HFpEF stress - a pattern consistent with " +
      "the mitochondrial dysfunction reported in prior HFpEF literature. To examine the shape of these " +
      "enrichment signals directly rather than only their summary NES, we show classic running-" +
      "enrichment-score plots for the two most significant pathways per organ (Figure 3C-F): in the " +
      "liver, MTORC1_SIGNALING and CHOLESTEROL_HOMEOSTASIS both show a sharply front-loaded negative " +
      "running score with no crossing back toward zero, indicating a clean, concentrated depletion " +
      "signal rather than a diffuse one; in the LV, ADIPOGENESIS and FATTY_ACID_METABOLISM show the " +
      "mirror-image pattern - an immediate, sustained positive enrichment - consistent with a coherent " +
      "metabolic shift rather than a handful of outlier genes driving the signal. GO Biological Process " +
      "analysis " +
      "returned 34 significant terms in the liver and 10 in the LV, and KEGG returned 9 significant " +
      "pathways in the liver and none in the LV (Supplemental Figure S1, S2; Supplemental Table S3-S5)." },
    { type: "figure", file: "figures/composite/Figure3_GSEA_combined.png",
      caption: "Figure 3. Hallmark gene set enrichment analysis (GSEA). (A) Liver and (B) LV bar charts " +
               "show the normalized enrichment score (NES) for every pathway significant at padj<0.05. " +
               "(C-F) Classic GSEA running-enrichment-score plots (green line: running ES; black ticks: " +
               "gene-set hits; red-blue bar: ranked-list position; grey: ranking-metric magnitude) for " +
               "the two most significant pathways per organ: (C) Liver MTORC1_SIGNALING, (D) Liver " +
               "CHOLESTEROL_HOMEOSTASIS, (E) LV ADIPOGENESIS, (F) LV FATTY_ACID_METABOLISM. Full GO-BP and " +
               "KEGG results are provided in Supplemental Figure S1-S2 and Supplemental Table S3-S5." },

    { type: "heading", text: "3.3 Ligand-receptor interactome matching reveals a reversed axis" },
    { type: "p", text:
      "We had hypothesized that a liver-secreted factor drives HFpEF-associated cardiac remodeling. " +
      "Contrary to this expectation, neither CellChatDB matching nor an unrestricted STRING-based search " +
      "(confidence≥0.7) returned a single liver-to-LV edge. In the reverse direction, however, CellChatDB " +
      "returned five matches: Angptl4, significantly upregulated in the LV, is a curated ligand of Cdh5, " +
      "Sdc1, Sdc2, Sdc3, and Sdc4, all of which are expressed in liver (Table 1). We therefore reoriented " +
      "the candidate axis from liver-to-heart to heart-to-liver. This reversed direction is not an ad hoc " +
      "correction; it corresponds precisely to the clinically recognized entity of congestive " +
      "hepatopathy/cardiohepatic syndrome, in which cardiac dysfunction secondarily injures the liver." },
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
      "Reusing our previously constructed human liver scRNA-seq atlas (GSE136103; atlas construction " +
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
      "2.3-A crystal structure with a visible ligand-accommodating surface (PDB 6EUB), and it is " +
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

    "Several limitations should be noted. First, this analysis rests on a single mouse model with a " +
    "small sample size (n=5/group), and independent replication is warranted. Second, the cardiac source " +
    "of Angptl4 was confirmed only through an independent literature report rather than through single-" +
    "cell data generated in this study. Third, DiffDock was run through a public web interface for only " +
    "the top Vina hits (Resmetirom, Ezetimibe, and Pioglitazone - the latter included because it was " +
    "independently flagged by STITCH as a genuine ANGPTL4 chemical partner) because of the absence of a " +
    "local GPU, rather than across the full 21-compound library. Fourth, all binding affinities reported " +
    "here are in silico predictions; biochemical confirmation (e.g., Western blot, SPR, or ITC) will be " +
    "required before any therapeutic claim can be made.",
  ],

  conclusion: {
    summary:
      "By reanalyzing a publicly available paired liver-heart mouse transcriptome dataset under stricter " +
      "statistical criteria and carrying the analysis through ligand-receptor interactome matching, PPI " +
      "network construction, network pharmacology, druggability assessment, and structure-based virtual " +
      "screening, we identified a heart-to-liver Angptl4-Sdc/Cdh5 axis in place of our originally " +
      "hypothesized liver-to-heart direction - a reversal that in fact corresponds to the clinically " +
      "established cardiohepatic syndrome. This localization was independently reproduced in both a " +
      "human liver scRNA-seq atlas and a mouse-native atlas (Tabula Muris), and, recognizing that the " +
      "network hubs Sdc1/Sdc4 are not currently structurally actionable, we redirected structure-based " +
      "screening to Angptl4 itself, identifying Pioglitazone and Ezetimibe as the candidates most " +
      "consistently cross-validated across independent docking algorithms - Pioglitazone in particular " +
      "supported by three convergent lines of in silico evidence (STITCH annotation, Vina rank, and " +
      "DiffDock pocket convergence). Because these results remain in silico predictions, we outline " +
      "below a concrete wet-lab validation pipeline rather than only a generic list of future " +
      "directions.",
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
      "directions.",
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
    ],
    reproNote:
      "Software versions: R 4.5.2 (DESeq2, apeglm, clusterProfiler, fgsea, msigdbr, CellChat, igraph, " +
      "httr/jsonlite, EnhancedVolcano, pheatmap); Python 3.14 (RDKit, Meeko, PyMuPDF, matplotlib, " +
      "py3Dmol); AutoDock Vina 1.2.7; PyMOL (open-source build, installed via a dedicated Miniconda " +
      "environment); Cytoscape 3.10.4 (installed, available for manual use). DiffDock was not installed " +
      "locally (no CUDA-capable GPU on this machine) and was instead run through a publicly hosted " +
      "Gradio Space mirroring the original gcorso/DiffDock inference code, for the top Vina candidates " +
      "only (Resmetirom, Ezetimibe, Pioglitazone). The full commit history of the repository constitutes " +
      "a complete, chronological " +
      "log of the analysis as it was actually performed, including the initial (liver-to-heart) " +
      "hypothesis, the point at which it was found unsupported, and the subsequent re-direction of the " +
      "target and screening strategy.",
  },

  supplemental: {
    docTitle: "Supplemental Data",
    docSubtitle: "A Heart-to-Liver Angptl4-Sdc/Cdh5 Axis in Cardiohepatic Syndrome: Target Redirection " +
                 "and Structure-Based Repurposing of Ezetimibe and Pioglitazone " +
                 "— Supplemental Figures, Tables, and Text",
    labels: { figures: "Supplemental Figures", tables: "Supplemental Tables", text: "Supplemental Text", code: "Code and Analysis Workflow" },
    figures: [
      { file: "figures/composite/FigureS_GO_combined.png",
        caption: "Figure S1. GO Biological Process enrichment. (A) Liver (34 significant terms, padj<0.05). (B) LV (10 significant terms, padj<0.05). Complements the Hallmark GSEA in Figure 3 with a complementary, non-overlapping ontology." },
      { file: "figures/Liver_KEGG_dotplot.png",
        caption: "Figure S2. Liver KEGG pathway enrichment (9 significant pathways, padj<0.05). No KEGG pathway reached significance in LV under the same threshold, which is reported here rather than omitted." },
      { file: "figures/composite/FigureS3_condition_combined.png", maxHeightPx: 700,
        caption: "Figure S3. Liver cell-type localization of Angptl4-axis genes, split by disease condition (healthy vs. cirrhotic; GSE136103 cross-species reference atlas, see Methods 2.6 and Supplemental Text S3 for construction). Provided in addition to Figure 5 to show whether localization itself, rather than only expression level, shifts with disease state. (A) Dot plot, all six axis genes, cell types labeled on the y-axis. (B) UMAP feature plots (SDC1, SDC4, ANGPTL4), healthy vs. cirrhotic side by side, showing the same shift as a spread of expressing cells across the embedding rather than a per-cell-type summary; cluster identities match the labeled dot plot in panel A and the annotated UMAP in Supplemental Text S3." },
      { file: "figures/TabulaMuris_liver_dotplot.png",
        caption: "Figure S4. Independent mouse-native cross-check of Angptl4-axis gene localization (Tabula Muris, FACS/Smart-seq2 liver atlas, n=714 cells, 5 annotated cell types). Sdc4 (91.8%) and Sdc1 (68.3%) were detected predominantly in hepatocytes, Sdc3 in Kupffer cells (80.3%), and Cdh5 in hepatic sinusoidal endothelial cells (98.4%) - reproducing the human-atlas pattern shown in Figure 5 directly in the same species as the bulk cohort." },
    ],
    tableIntros: {
      S1: "Complete Liver DEG table underlying Figure 1A and the 86-gene count reported in Section 3.1 (all columns from the DESeq2/apeglm output: baseMean, log2FoldChange, lfcSE, pvalue, padj, gene_name).",
      S2: "Complete LV DEG table underlying Figure 1B and the 20-gene count reported in Section 3.1.",
      S3: "Complete Liver GO-BP enrichment table underlying Figure S1A.",
      S4: "Complete LV GO-BP enrichment table underlying Figure S1B.",
      S5: "Complete Liver KEGG enrichment table underlying Figure S2.",
      S6: "Complete STRING network hub-gene ranking (degree, betweenness) underlying the discussion of Sdc1/Sdc4 centrality in Section 3.4.",
      S7: "Complete AutoDock Vina ranking for all 21 screened compounds (Section 3.8), including the fatty-acid and unrelated-control categories omitted from the main-text Table 4 top-5 summary.",
      S8: "Complete STITCH chemical-partner query results for all Angptl4-axis genes (Section 3.6), including compound identity resolved via PubChem.",
      S9: "Complete DGIdb druggability query results underlying Table 3 and the target-selection rationale in Section 3.7.",
    },
    tableTitles: {
      S1: "Table S1. Full significant DEG list, Liver (n=86, padj<0.01, |log2FC|>1.5)",
      S2: "Table S2. Full significant DEG list, LV (n=20, padj<0.01, |log2FC|>1.5)",
      S3: "Table S3. Liver GO-BP enrichment (full, padj<0.05)",
      S4: "Table S4. LV GO-BP enrichment (full, padj<0.05)",
      S5: "Table S5. Liver KEGG pathway enrichment (full, padj<0.05)",
      S6: "Table S6. STRING network hub genes (Angptl4-Sdc/Cdh5 axis + first-shell interactors)",
      S7: "Table S7. Full AutoDock Vina ranking (all 21 compounds)",
      S8: "Table S8. STITCH chemical partners of Angptl4-axis genes (full)",
      S9: "Table S9. DGIdb druggability summary",
    },
    textTitles: {
      S1: "Text S1. Final target selection rationale",
      S2: "Text S2. DiffDock cross-check summary",
      S3: "Text S3. Methodology of the prior human-cohort analyses cited in this study (GSE135251, GSE136103)",
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
    ],
    textS3: [
      { type: "p", text:
        "The Introduction and Methods 2.6 cite two prior human-cohort re-analyses, carried out by the same " +
        "author as separate, fully version-controlled projects, as the source of (a) the candidate-gene " +
        "list that motivated this study's broader research program and (b) the human liver scRNA-seq atlas " +
        "reused in Section 3.5/Figure 5 as an independent cross-species reference. Because those two prior " +
        "analyses are not otherwise published, this section documents their methodology and results in " +
        "full, with the key figures from each, so that this manuscript is self-contained and does not " +
        "require access to any external project repository to be understood." },

      { type: "p", text:
        "Prior analysis 1 - GSE135251 (bulk RNA-seq, 216 human liver biopsies; Govaere et al., 2020): this " +
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
        caption: "GSE135251 hub-gene PPI network (prior analysis 1). Red: the seven novel druggable " +
                 "candidates; blue: canonical fibrosis genes / not druggable. Two modules resolve: a " +
                 "chemokine/immune-recruitment cluster and a collagen/ECM cluster anchored on COL1A1." },

      { type: "p", text:
        "Prior analysis 2 - GSE136103 (single-cell RNA-seq atlas construction and localization; " +
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
        caption: "GSE136103 annotated UMAP (prior analysis 2), 12 cell lineages, 60,925 cells. This is the " +
                 "same embedding underlying Figure 5, Figure S3, and the FeaturePlots in Figure S3B." },

      { type: "p", text:
        "This atlas was then used, in the prior analysis, to localize the seven GSE135251-derived " +
        "candidate genes (below): LUM, " +
        "THY1, and THBS2 all localized specifically to the Mesenchyme cluster (hepatic stellate " +
        "cells/portal fibroblasts) and were each far more expressed in cirrhotic than healthy liver within " +
        "that same cell type (e.g. THY1, 5.4% to 41.9% of cells expressing); EPCAM localized just as " +
        "cleanly to Cholangiocytes, consistent with the cirrhosis-associated ductular reaction; CXCL8 and " +
        "CCL20 did not resolve to one clear producer cell type." },
      { type: "figure", file: "figures/prior_analyses/GSE136103_candidate_gene_dotplot.png",
        caption: "GSE136103 localization of the seven GSE135251-derived candidate genes (prior analysis " +
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
        caption: "GSE136103 cell-type composition, healthy vs. cirrhotic (prior analysis 2). Cholangiocyte " +
                 "and Endothelia proportions rise with cirrhosis; Mesenchyme's proportion does not, despite " +
                 "its rising fibrogenic gene expression - activation, not expansion." },

      { type: "p", text:
        "Relationship to the present study: the present manuscript does not reuse the GSE135251 bulk " +
        "analysis or its LUM/THY1/THBS2/EPCAM findings at all - that analysis is cited only in the " +
        "Introduction as motivating background for why a network-centrality-and-druggability screening " +
        "strategy was judged worth extending to a genuinely inter-organ mouse dataset. The GSE136103 atlas " +
        "described above, however, is directly reused in Section 3.5/Figure 5 and Supplemental Figure S3 - " +
        "but in an entirely different role: as an independent, cross-species reference for localizing this " +
        "study's own candidate genes (Sdc1, Sdc2, Sdc3, Sdc4, Cdh5, Angptl4), which are unrelated to the " +
        "LUM/THY1/THBS2/EPCAM genes the atlas was originally built to localize. The same limitation flagged " +
        "in that prior work applies here: GSE135251 and GSE136103 are different patient cohorts with no " +
        "paired samples, and the present study's own mouse cohort is a third, entirely independent dataset " +
        "- so every cross-reference among the three (bulk-to-atlas, mouse-to-human) is a plausible " +
        "biological inference drawn across independent datasets, not a directly matched, within-subject " +
        "validation. All raw data, analysis code, and full result tables for both prior analyses are " +
        "version-controlled in their own dedicated repositories (referenced generically above rather than " +
        "by internal project name, consistent with the rest of this manuscript), and are available from " +
        "the corresponding author on request." },
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
  ],
};
