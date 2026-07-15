// Shared text content for the manuscript, kept separate from docx-building logic.
// All figures/numbers below are taken directly from essay/results and essay/figures
// generated in this repository (see PIPELINE.md for the full analysis log).

module.exports = {
  title: "다중장기 전사체 통합분석을 통한 Angptl4-Syndecan/Cadherin 축 매개 " +
         "심장-간 증후군(Cardiohepatic Syndrome) 신규 표적 발굴 및 구조 기반 약물 스크리닝",

  studentLine: "20XX511XX 000",

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
    "specific ANGPTL4 secretion in HFpEF. AutoDock Vina screening of 21 compounds (cardiometabolic drugs, " +
    "endogenous fatty acids, and unrelated controls) ranked Resmetirom (the first FDA-approved MASH drug) " +
    "and Ezetimibe as the top two hits (-9.07 and -8.88 kcal/mol). An orthogonal, box-free DiffDock cross-" +
    "check showed Ezetimibe's top pose converging within 3.5 A of the Vina-defined pocket, while " +
    "Resmetirom's top pose landed 23.5 A away at a distinct site - reframing Ezetimibe, not the top Vina " +
    "scorer, as the more cross-validated candidate. This work illustrates how a rigorously reanalyzed, " +
    "genuinely null result can redirect a network pharmacology pipeline toward a clinically relevant, " +
    "testable hypothesis.",

  keywords: "Keywords: HFpEF, MASLD, cardio-hepatic axis, ANGPTL4, network pharmacology, molecular docking",

  introduction: [
    "대사이상 관련 지방성 간질환(Metabolic dysfunction-associated steatotic liver disease, MASLD)은 " +
    "기존의 '비알코올성 지방간질환(NAFLD)'이라는 병리학적 서술을 넘어, 인슐린 저항성·비만·지질대사 " +
    "이상 등 전신 대사기능장애가 간과 어떻게 상호작용하는지를 규명하는 새로운 진단 패러다임으로 " +
    "확립되었다 (Rinella et al., 2023). 이와 함께 최근 3년간 간질환 연구의 중심축은 간 내부의 병리를 " +
    "넘어 다중 장기 네트워크(inter-organ crosstalk)로 이동해왔으며, 그 중에서도 MASLD/MASH 환자의 " +
    "주된 사망원인이 간경변이 아니라 심혈관질환이라는 사실이 심장-간 축(Cardio-Hepatic Axis) 연구를 " +
    "가속화시키고 있다.",

    "박출률보존 심부전(Heart Failure with preserved Ejection Fraction, HFpEF)은 이러한 심장-간 상호작용의 " +
    "핵심 표현형으로, 최근 동일 개체에서 간과 심장 조직을 동시에 프로파일링한 체계적 접근이 처음으로 " +
    "보고되었다 (Strocchi et al., 2024). 해당 연구는 2-hit HFpEF 마우스 모델(대사+혈압 스트레스 병용 " +
    "식이)에서 Saa1/Saa4를 후보 간-심장 매개 인자로 제시하였고, 후속 연구는 간세포 특이적 분비단백질 " +
    "표지(secretome labeling) 기법으로 HFpEF 상태에서 간 분비 사이토카인 신호가 변화함을 보였다 " +
    "(Schütte et al., 2025). 그러나 이들 선행 연구는 시스템생물학적 발견에 그쳤을 뿐, 단백질-단백질 " +
    "상호작용(PPI) 네트워크 구축, 네트워크 약리학, 그리고 구조 기반 가상 스크리닝으로까지 이어지는 " +
    "심화된 신약 발굴 파이프라인을 적용하지는 않았다.",

    "본 연구는 위 공개 데이터셋을 더 엄격한 통계 기준으로 재분석하는 것에서 출발하여, 리간드-수용체 " +
    "인터랙톰 매칭, STRING 기반 PPI 네트워크, STITCH 네트워크 약리학, DGIdb 약물표적성 평가를 거쳐 " +
    "최종적으로 AutoDock Vina 및 DiffDock을 이용한 구조 기반 가상 스크리닝까지 수행하는 것을 목표로 " +
    "한다. 특히 이전에 수행한 인간 MASLD 간섬유화 코호트 분석(GSE135251, GSE136103 기반, 자체 " +
    "선행연구)에서 이미 LUM/THY1/THBS2, EDNRB, CD44/ITGA1·ITGB1 등 여러 후보 유전자를 발굴한 바 " +
    "있어, 이번 연구는 그 연장선에서 '종을 마우스로, 축을 간-심장 간(inter-organ)으로 확장'하는 독립적 " +
    "신규 분석으로 설계하였다. 분석 과정에서 당초 가설(간이 분비하는 인자가 심장에 작용)과 반대로 " +
    "심장이 분비하는 인자가 간에 작용하는 축이 확인되었으며, 이는 오히려 임상적으로 이미 확립된 " +
    "울혈성 간병증(congestive hepatopathy)/심장-간 증후군(cardiohepatic syndrome) 개념과 정확히 " +
    "부합하는 결과였다. 본 논문은 이러한 예상치 못한 방향 전환을 숨기지 않고 그 자체를 정직한 결과로 " +
    "다루며, 이로부터 도출된 신규 표적의 druggability 평가와 실제 화합물 스크리닝까지 전 과정을 " +
    "보고한다."
  ],

  methods: [
    { h: "2.1 데이터셋", p:
      "본 연구는 Strocchi 등(2024)이 Circulation Research에 보고한 공개 데이터(Zenodo record " +
      "12794566)를 재사용하였다. C57BL/6N 수컷 마우스를 대상으로 8주간 2-hit HFpEF 유도 식이(대사 " +
      "스트레스+고혈압 스트레스 병용, 이하 HFpEF군, n=5)와 일반 사료(Chow군, n=5)를 급여한 뒤, 간 " +
      "및 좌심실(Left Ventricle, LV) 조직에서 각각 bulk RNA-seq을 수행한 raw count 매트릭스와 " +
      "표현형 메타데이터(초음파 심장기능 지표, 장기 무게 등)를 그대로 활용하였다. 이는 서로 다른 " +
      "코호트를 인위적으로 결합한 것이 아니라 동일 개체에서 채취한 진정한 다중장기 페어드(paired) " +
      "데이터라는 점에서, 장기 간(inter-organ) crosstalk 규명에 적합하다."
    },
    { h: "2.2 DEG 분석", p:
      "각 장기(간, LV)에 대해 독립적으로 DESeq2(Love et al., 2014)를 적용하였다. 발현량이 낮은 " +
      "유전자는 사전 필터링(전체 10개 표본 중 5개 이상에서 raw count ≥10)하였으며, log2 fold " +
      "change는 apeglm 방법(Zhu et al., 2019)으로 shrinkage 하였다. 유의 DEG의 기준은 일반적으로 " +
      "통용되는 padj<0.05보다 엄격한 padj<0.01 및 |log2FC|>1.5로 설정하여 위양성을 최소화하였다."
    },
    { h: "2.3 GSEA·GO·KEGG", p:
      "Hallmark 유전자 집합(msigdbr, Mus musculus)을 이용해 fgsea(Korotkevich et al., 2019)로 " +
      "GSEA를 수행하였으며, 순위 통계량은 apeglm 결과에 stat 컬럼이 없으므로 " +
      "sign(log2FC)×(−log10 p-value)로 대체 산출하였다. 유의 DEG 목록에 대해서는 clusterProfiler " +
      "(Wu et al., 2021)의 enrichGO(Biological Process)와 enrichKEGG(organism=mmu)를 BH " +
      "보정(padj<0.05) 기준으로 수행하였다."
    },
    { h: "2.4 리간드-수용체 인터랙톰 매칭", p:
      "간·LV 각각의 상향 DEG를 후보 리간드로, CellChatDB.mouse(Jin et al., 2021)의 큐레이션된 " +
      "리간드-수용체 쌍을 참조 테이블로 사용해 매칭하였다. 다만 두 장기가 동일 개체에서 유래했더라도 " +
      "리간드와 수용체 모두가 독립적으로 genome-wide 유의성을 통과해야 한다는 조건은 지나치게 " +
      "엄격하다고 판단하여(수용체는 발현량 자체가 변하지 않아도 리간드 신호를 받을 수 있음), " +
      "수용체 측은 해당 장기에서 '검출 가능한 발현(baseMean≥10)'을 기준으로 완화하였다. 이 방식으로 " +
      "간→LV, LV→간 양방향을 모두 탐색하였다."
    },
    { h: "2.5 STRING PPI 네트워크", p:
      "매칭된 유전자 및 그 첫 번째 상호작용 파트너(최대 15개 추가)를 STRING API(Szklarczyk et al., " +
      "2023; 마우스 taxid 10090, confidence score≥0.7)로 조회하여 네트워크를 구축하였다. igraph " +
      "패키지로 degree centrality와 betweenness centrality를 계산해 hub 유전자를 식별하였다. " +
      "Cytoscape 3.10.4를 설치하여 시각화를 시도하였으나 CyREST 연동이 이 환경에서 불안정하여, " +
      "최종 네트워크 시각화는 R의 igraph로 대체하였다(설치 자체는 이후 수동 활용을 위해 유지)."
    },
    { h: "2.6 세포유형 국소화(Cell-type localization)", p:
      "본 연구의 마우스 bulk 코호트와 동일한 실험에서 얻어진 단일세포 데이터는 존재하지 않으므로, " +
      "최종 후보 유전자의 세포유형별 발현을 확인하기 위해 자체 선행연구(project4, 인간 간경변 " +
      "scRNA-seq, GSE136103; Ramachandran et al., 2019)에서 이미 세포유형이 주석된 Seurat " +
      "객체를 종간(cross-species) 참조 자료로 재사용하였다. 이는 통계적 검정에 직접 결합한 것이 " +
      "아니라 발현 위치를 확인하는 독립적 참조로만 사용하였다."
    },
    { h: "2.7 네트워크 약리학(STITCH) 및 druggability 평가(DGIdb)", p:
      "STRING 네트워크의 hub 유전자에 대해 STITCH(Szklarczyk et al., 2016) API로 기존에 " +
      "알려진/예측된 화학물질 상호작용을 조회하고, PubChem PUG-REST로 화합물명을 확인하였다. " +
      "druggability는 DGIdb 5.0(Cannon et al., 2024)의 GraphQL API로 각 유전자(인간 오소로그 " +
      "심볼 사용)의 기존 약물 상호작용 건수를 조회해 평가하였다."
    },
    { h: "2.8 표적 3D 구조 확보", p:
      "UniProt(REST API)를 통해 각 후보 유전자의 PDB 교차참조를 확인하고, RCSB PDB에서 각 구조가 " +
      "실제로 단백질의 어느 도메인을 포함하는지(세포외/막관통/세포질) 개별 검토하였다."
    },
    { h: "2.9 구조 기반 가상 스크리닝(AutoDock Vina)", p:
      "최종 표적 구조(PDB 6EUB)에서 물 분자와 결정화 첨가물(1PE, pentaethylene glycol)을 제거하고, " +
      "대체 위치(altloc) 잔기는 기본값(A)으로 처리하였다. Meeko(mk_prepare_receptor)로 " +
      "PDBQT 파일을 생성하였으며, 도킹 박스는 결정구조 내 유일하게 관찰된 소분자 결합 부위인 " +
      "1PE의 무게중심을 중심으로 24×24×24 Å³로 설정하였다. 리간드 라이브러리는 PubChem에서 " +
      "SMILES를 확보한 21개 화합물로 구성하였으며, (1) STITCH에서 실제 Angptl4 상호작용 물질로 " +
      "확인된 지방산·Pioglitazone, (2) Resmetirom·Fenofibrate·Bezafibrate·Ezetimibe·" +
      "Atorvastatin·Rosiglitazone·Empagliflozin·Dapagliflozin·Obeticholic acid·Icosapent " +
      "ethyl·Metformin·Niacin 등 심혈관대사/MASH 관련 승인 또는 후기임상 약물, (3) Aspirin·" +
      "Ibuprofen·Caffeine·Metoprolol 등 기전상 무관한 대조군 약물의 세 그룹으로 구성하였다. " +
      "RDKit(ETKDGv3, MMFF94)으로 3차원 구조를 생성하고 Meeko(mk_prepare_ligand)로 PDBQT화한 " +
      "뒤, AutoDock Vina 1.2.7(Eberhardt et al., 2021)로 exhaustiveness=16, num_modes=5, " +
      "seed=42 조건으로 도킹하였다."
    },
    { h: "2.10 DiffDock 교차검증", p:
      "이 컴퓨터에는 CUDA 지원 GPU가 없어 DiffDock(Corso et al., 2023)을 로컬에서 CPU로 " +
      "구동하는 것은 비현실적이라고 판단하여, 원 저자 코드(gcorso/DiffDock)를 그대로 구동하는 " +
      "공개 Gradio 웹 인터페이스(swcanner/DiffDock-Web)를 이용해 Vina 상위 2개 화합물" +
      "(Resmetirom, Ezetimibe)에 한해 교차검증을 수행하였다. DiffDock은 Vina와 달리 결합 " +
      "부위를 사전에 지정하지 않는 blind docking 방식이므로, 두 방법이 독립적으로 같은 부위에 " +
      "수렴하는지를 확인하는 것이 이 단계의 목적이었다(샘플 수=10, seed 미고정)."
    },
  ],

  results: [
    { h: "3.1 장기별 DEG 분석", p:
      "간에서는 padj<0.01 및 |log2FC|>1.5 기준으로 86개, LV에서는 20개의 유의 DEG가 확인되었다 " +
      "(Figure 1A, 1B: volcano plot; Figure 2A, 2B: heatmap). 두 조직 모두 계층적 군집화에서 " +
      "Chow군과 HFpEF군이 뚜렷이 분리되었다. 간에서는 Dsg1c, Per2, Saa2, Lcn2 등 급성기 " +
      "반응·염증 관련 유전자가 상향되었고 다수의 Cyp450 계열 유전자가 하향되어 지질대사 이상을 " +
      "시사하였다. LV에서는 Chrna2, Hmgcs2, Mmp12가 상향, Cyp1a1이 하향되었다. 원 논문이 " +
      "제시한 후보 유전자 Saa1(log2FC=1.16, padj=5.9×10⁻⁵)과 Saa4(log2FC=0.53, padj=0.011)는 " +
      "방향성은 일치하였으나 본 연구의 더 엄격한 |log2FC|>1.5 기준을 통과하지 못하였다 — 이는 " +
      "통계적으로는 실재하나 효과크기가 기준에 못 미치는 정직한 결과로 해석하였다."
    },
    { h: "3.2 GSEA·GO·KEGG", p:
      "간에서는 19개, LV에서는 17개의 Hallmark 경로가 padj<0.05로 유의하였다(Figure 3A, 3B). " +
      "간에서는 MTORC1_SIGNALING, CHOLESTEROL_HOMEOSTASIS, MYC_TARGETS_V1 등이 하향, " +
      "INTERFERON_ALPHA_RESPONSE가 상향되었다. LV에서는 ADIPOGENESIS, FATTY_ACID_METABOLISM, " +
      "OXIDATIVE_PHOSPHORYLATION, PEROXISOME, BILE_ACID_METABOLISM이 뚜렷이 상향되어, " +
      "심장이 HFpEF 상태에서 지질 대사·미토콘드리아 기능 쪽으로 대사를 전환하고 있음을 시사하였다 " +
      "— 이는 HFpEF의 미토콘드리아 기능장애 관련 선행 문헌과 일치하는 패턴이다. GO-BP는 간 34개, " +
      "LV 10개 유의 항목이, KEGG는 간 9개, LV 0개 유의 경로가 확인되었다(Supplemental Table)."
    },
    { h: "3.3 리간드-수용체 인터랙톰 매칭: 방향 재조정", p:
      "당초 가설이었던 간→LV 방향은 CellChatDB 매칭과 STRING 교차-장기 엣지 탐색(confidence≥0.7) " +
      "모두에서 0건이었다. 반대로 LV→간 방향에서는 CellChatDB가 5개의 매칭을 제시하였다: LV에서 " +
      "유의하게 상향된 Angptl4가 간에서 발현되는 Cdh5, Sdc1, Sdc2, Sdc3, Sdc4와 결합하는 " +
      "리간드-수용체 쌍으로 확인되었다(Table 1). 이 결과에 따라 본 연구는 축의 방향을 심장→간으로 " +
      "재조정하였으며, 이는 임상적으로 이미 알려진 울혈성 간병증/심장-간 증후군 개념과 부합한다."
    },
    { h: "3.4 STRING PPI 네트워크와 hub 유전자", p:
      "Angptl4/Cdh5/Sdc1-4 및 첫 번째 상호작용 파트너로 구성한 네트워크(41개 엣지)에서 " +
      "Sdc1(degree=16, betweenness=64.3)과 Sdc4(degree=14, betweenness=45.1)가 뚜렷한 " +
      "hub로 확인되었으며, 이들은 다른 heparan sulfate proteoglycan 계열 유전자(Gpc1, Gpc4, " +
      "Hspg2, Ext1, Tnc 등)로 이루어진 모듈을 형성하였다(Figure 4). Cdh5는 Angptl4와만 연결된 " +
      "고립 쌍으로 나타나, 이 축의 중심은 syndecan 계열임이 시사되었다."
    },
    { h: "3.5 세포유형 국소화", p:
      "project4의 인간 간경변 scRNA-seq 재분석 자료(GSE136103, 종간 참조)에서, hub 유전자인 " +
      "SDC1과 SDC4는 뚜렷하게 Hepatocyte에 국소화되어(Figure 5) 네트워크 중심성 순위와 일치하는 " +
      "결과를 보였다. SDC3는 MP(대식세포/Kupffer 계열)에, CDH5는 예상대로 Endothelia에 " +
      "국소화되어(양성 대조군 역할) 분석 파이프라인의 타당성을 뒷받침하였다."
    },
    { h: "3.6 STITCH 네트워크 약리학", p:
      "STITCH 조회 결과, Angptl4는 리놀레산·팔미트산·아라키돈산·EPA 등 지방산 대사물 및 " +
      "PPAR 경로 관련 승인 약물인 Pioglitazone과 연관되어 있었다(Table 2). 반면 Sdc1/Sdc2/Sdc3/" +
      "Cdh5는 각각 Iduronic acid(헤파란/더마탄 황산 GAG 구성 성분)나 Calcium cation 등 구조적· " +
      "대사적 파트너만 확인되어, 기존에 알려진 치료 약물과의 연관성은 거의 없었다."
    },
    { h: "3.7 Druggability 평가 및 최종 표적 선정", p:
      "DGIdb 조회 결과 Sdc1은 Heparin·Indatuximab ravtansine(항체-약물접합체) 등 3건, Sdc4는 " +
      "Repotrectinib(종양학적 키나아제 억제제, 기전상 무관 — 텍스트마이닝 오탐 가능성 높음) 1건, " +
      "Cdh5는 FX06(펩타이드) 1건이 있었으나, Sdc3와 Angptl4는 0건으로 완전한 미개발 상태였다 " +
      "(Table 3). 그러나 UniProt/PDB 조회 결과 네트워크 hub인 Sdc1·Sdc4의 모든 결정구조는 " +
      "세포외 리간드 결합면이 아니라 세포질 PDZ-결합 꼬리 부분(예: PDB 8BLV, syntenin과의 복합체)만 " +
      "포함하고 있어, 소분자 도킹에 활용할 수 없었다. 이에 최종 표적을 네트워크 중심성은 낮지만 " +
      "(1) DGIdb 0건으로 완전히 미개발되었고, (2) 2.3Å 해상도의 실제 결정구조(PDB 6EUB, " +
      "C-말단 fibrinogen-like domain)가 존재하며, (3) 본 연구의 DEG 분석과 독립적인 2024년 " +
      "단일세포 논문(심장 섬유아세포 특이적 분비 확인; Li et al., 2024)으로 이중 검증된 " +
      "Angptl4 자체로 재조정하였다(상세 근거는 Supplemental Text S1)."
    },
    { h: "3.8 AutoDock Vina 가상 스크리닝", p:
      "21개 화합물을 ANGPTL4 fibrinogen-like domain에 도킹한 결과, Resmetirom(-9.07 kcal/mol), " +
      "Ezetimibe(-8.88), Pioglitazone(-8.28), Fenofibrate(-8.21), Empagliflozin(-8.14)이 " +
      "상위 5위를 차지하였다(Figure 6, Table 4). 심혈관대사 약물 그룹이 전반적으로 지방산·대조군 " +
      "그룹보다 강한 결합친화도를 보였으며, Metformin(-4.65)과 Caffeine(-5.36)이 가장 약한 " +
      "결합력을 보여 음성대조군과 유사한 패턴을 나타냈다. 다만 분자 크기·회전가능결합 수가 " +
      "Vina 점수에 영향을 줄 수 있다는 점은 한계로 고려하였다."
    },
    { h: "3.9 DiffDock 교차검증", p:
      "Vina 상위 2개 화합물에 대해 결합부위를 지정하지 않는 DiffDock을 적용한 결과, " +
      "Ezetimibe의 최상위 pose(confidence −1.32)는 Vina가 탐색한 포켓 중심으로부터 3.5Å " +
      "이내에 위치하여 서로 다른 두 방법이 독립적으로 같은 부위에 수렴하였다. 반면 Resmetirom의 " +
      "최상위 pose(confidence −2.06)는 동일 포켓으로부터 23.5Å 떨어진 완전히 다른 표면 부위에 " +
      "결합하였다(Figure 7A, 7B). 두 DiffDock confidence 값 모두 해당 방법의 저–중간 신뢰 " +
      "구간에 속하여 확정적 결합을 의미하지는 않으나, Vina 점수만으로는 1위였던 Resmetirom보다 " +
      "Ezetimibe가 구조적으로 더 일관되게 교차검증된 후보임을 시사한다."
    },
  ],

  discussion: [
    "본 연구는 최근 보고된 간-심장 페어드 마우스 코호트를 더 엄격한 통계 기준으로 재분석함으로써 " +
    "출발하였으나, 가장 중요한 발견은 사전에 설정한 가설(간이 분비하는 인자가 심장에 작용하여 " +
    "HFpEF를 유발)이 데이터로 뒷받침되지 않았다는 점이다. CellChatDB 큐레이션 매칭과 STRING 기반 " +
    "포괄적 네트워크 탐색이라는 서로 다른 두 방법 모두에서 간→심장 방향의 교차-장기 엣지가 전혀 " +
    "확인되지 않은 것은, 우연이라기보다 이 특정 마우스 모델·통계 기준에서는 그 방향의 직접적 분자 " +
    "연결이 데이터베이스 차원에서 뒷받침되지 않는다는 정직한 신호로 해석해야 한다.",

    "대신 발견된 심장→간 방향의 Angptl4-Sdc/Cdh5 축은 임상의학에서 이미 오래전부터 인식되어 온 " +
    "울혈성 간병증(congestive hepatopathy) 및 최근 부상하는 심장-간 증후군(cardiohepatic " +
    "syndrome) 개념과 정확히 부합한다. 특히 Angptl4가 심장 섬유아세포에서 특이적으로 분비되어 " +
    "혈관신생을 억제한다는 2024년 독립적 단일세포 연구 결과(Li et al., 2024)는 본 연구의 bulk " +
    "DEG 분석 결과를 완전히 다른 실험적 방법론으로 재확인해준다는 점에서 중요한 교차검증이다.",

    "네트워크 중심성 분석에서 가장 뚜렷한 hub는 Sdc1/Sdc4였으나, 이들의 공개된 모든 결정구조가 " +
    "세포외 리간드 결합면이 아닌 세포질 영역만을 포함한다는 사실은 '네트워크상 가장 중요한 " +
    "유전자'와 '현재 구조생물학적으로 액셔너블한 유전자'가 반드시 일치하지 않는다는 점을 " +
    "보여준다. 이는 많은 네트워크 약리학 연구가 hub 유전자를 곧바로 최종 표적으로 선정하는 " +
    "관행에 대한 실질적 한계를 드러내는 사례로, 본 연구는 이 지점에서 타협하지 않고 실제 " +
    "구조적으로 도킹 가능한 Angptl4로 표적을 재조정하였다.",

    "AutoDock Vina와 DiffDock의 결과가 Resmetirom과 Ezetimibe에서 서로 다른 결론을 시사한다는 " +
    "점도 주목할 만하다. Vina는 사전 정의된 단일 포켓 내에서의 상대적 순위를 제공하는 반면, " +
    "DiffDock은 단백질 전체 표면에서 결합 가능 부위를 탐색하므로, 두 방법이 같은 부위로 수렴하는지 " +
    "여부는 그 부위가 실제 생물학적으로 의미 있는 포켓인지에 대한 독립적 증거가 된다. Resmetirom이 " +
    "Vina 점수는 가장 우수했음에도 DiffDock이 전혀 다른 부위를 선호했다는 사실은, 단일 도킹 " +
    "방법론의 결과만으로 최종 후보를 선정하는 것의 위험성을 보여주며, Ezetimibe를 상대적으로 더 " +
    "신뢰할 수 있는 가설 생성적 후보로 제시하는 근거가 된다.",

    "본 연구는 몇 가지 명확한 한계를 지닌다. 첫째, 단일 마우스 모델·소규모 표본(n=5/군)에 기반한 " +
    "발견으로 재현성 검증이 필요하다. 둘째, 심장 측 Angptl4 분비 세포유형은 독립 문헌을 통해 " +
    "확인하였을 뿐 본 연구 자체의 단일세포 데이터로 직접 검증하지 못했으며, 간 측 국소화 역시 " +
    "인간 데이터를 종간 참조로 사용한 것으로 마우스 자체의 단일세포 검증은 아니다. 셋째, DiffDock은 " +
    "로컬 GPU 부재로 공개 웹 인터페이스를 통해 제한적으로만(상위 2개 화합물) 수행하였다. 넷째, " +
    "모든 결합친화도는 in silico 예측치로, 실제 결합 여부는 Western blot, SPR/ITC 등 wet-lab " +
    "검증이 필요하다.",
  ],

  conclusion:
    "본 연구는 공개된 간-심장 페어드 마우스 전사체 데이터를 엄격한 통계 기준으로 재분석하고, " +
    "리간드-수용체 인터랙톰 매칭, PPI 네트워크, 네트워크 약리학, druggability 평가, 구조 기반 " +
    "가상 스크리닝까지 이어지는 파이프라인을 구축하였다. 당초 가설과 달리 간→심장이 아닌 " +
    "심장→간 방향의 Angptl4-Sdc/Cdh5 축이 확인되었으며, 이는 임상적으로 확립된 심장-간 증후군 " +
    "개념과 부합하는 정직한 재발견이었다. 네트워크 hub(Sdc1/Sdc4)가 구조적으로 액셔너블하지 " +
    "않다는 한계를 인식하고 표적을 Angptl4로 재조정한 뒤 수행한 가상 스크리닝에서, Ezetimibe가 " +
    "Vina·DiffDock 두 방법 모두에서 교차검증된 가장 신뢰할 수 있는 후보로 확인되었다. 향후 " +
    "연구에서는 (1) 간·심장을 동시에 프로파일링한 단일세포 데이터를 이용한 직접적 세포유형 " +
    "국소화, (2) GPU 환경에서의 전체 화합물 라이브러리 DiffDock 재검증, (3) Ezetimibe의 " +
    "ANGPTL4 결합에 대한 SPR/ITC 등 생화학적 검증, (4) 최종적으로 HFpEF 마우스 모델에서의 " +
    "Ezetimibe 투여를 통한 간 표현형 개선 여부 확인이 필요하다.",

  references: [
    "Rinella ME, Lazarus JV, Ratziu V, et al. A multisociety Delphi consensus statement on new fatty liver disease nomenclature. J Hepatol. 2023;79(6):1542-1556.",
    "Strocchi S, Liu L, Wang R, et al. Systems Biology Approach Uncovers Candidates for Liver-Heart Interorgan Crosstalk in HFpEF. Circ Res. 2024;135(8):873-876.",
    "Schütte JP, Markus N, Grein S, et al. Cell Type–Specific Secretome Analysis Reveals Liver-Heart Crosstalk in HFpEF. Circ Res. 2025;136(11):1516-1518.",
    "Li G, Zhao H, Cheng Z, Liu J, Li G, Guo Y. Single-cell transcriptomic profiling of heart reveals ANGPTL4 linking fibroblasts and angiogenesis in heart failure with preserved ejection fraction. J Adv Res. 2024.",
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
  ],
};
