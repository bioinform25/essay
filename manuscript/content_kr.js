// 국문 원고 콘텐츠. Figure는 Results 본문 중 해당 문단 바로 뒤에 배치되도록
// {type:'figure'} 블록으로 텍스트 사이에 삽입한다 (저널 관행).
module.exports = {
  lang: "kr",
  labels: {
    abstract: "Abstract",
    introduction: "1. 서론 (Introduction)",
    methods: "2. 실험 방법 (Methods)",
    results: "3. 결과 (Results)",
    discussion: "4. 고찰 (Discussion)",
    conclusion: "5. 결론 및 향후 연구 방향 (Conclusion and Future Directions)",
    references: "참고문헌 (References)",
    graphicalAbstract: "Graphical Abstract",
  },
  title: "심장-간 양방향 신호 축: Angptl4-Sdc/Cdh5(심장→간)와 Sema5b-Nrp1(간→심장) 축의 " +
         "구조 기반 표적 재조정 및 약물 재창출",
  studentLine: "202251154 이창우",

  graphicalAbstract: {
    file: "figures/graphical_abstract.png",
    caption: "Graphical abstract. 간·좌심실 페어드 전사체 분석을 padj<0.05, |log2FC|>1.0 " +
             "기준으로 재분석한 결과, 심장→간과 간→심장 양방향 모두에서 후보 축이 발견되었다. " +
             "심장→간 방향은 통계 기준과 무관하게 견고한 Angptl4-Sdc/Cdh5 축으로, 네트워크 hub인 " +
             "Sdc1/Sdc4가 구조적으로 액셔너블하지 않아 ANGPTL4(PDB 6EUB) 자체로 표적을 재조정하였고 " +
             "Ezetimibe·Pioglitazone이 STITCH·Vina·DiffDock 세 방법에 걸쳐 수렴하는 재창출 " +
             "후보로 확인되었다. 간→심장 방향은 완화된 통계 기준에서만 나타나는 Sema5b-Plxna1/Plxna3 " +
             "축으로, hub인 Plxna1이 마우스 심장에서 발현이 미약해 semaphorin/plexin 신호전달의 " +
             "보조수용체인 Nrp1(PDB 6FMC)로 표적을 재조정하였으며, Nrp1에서는 Vina·DiffDock이 " +
             "동일 부위로 수렴한 반면 Plxna1에서는 두 방법이 22.7Å 떨어진 서로 다른 부위를 가리켜 " +
             "가설 생성적 결과로 남겨두었다.",
  },

  abstract:
    "박출률보존 심부전(HFpEF)과 대사이상 관련 지방성 간질환(MASLD)은 심장-간 축(cardio-hepatic " +
    "axis)을 통해 양방향으로 연결되어 있다는 인식이 점차 확립되고 있으나, 이 상호작용을 매개하는 " +
    "분자적 실체는 아직 충분히 규명되지 않았다. 본 연구는 동일 개체(C57BL/6N 마우스)에서 간과 " +
    "좌심실을 동시에 채취한 페어드 bulk RNA-seq 데이터(Chow vs. 2-hit HFpEF 식이, 군당 n=5; Zenodo " +
    "12794566)를 재분석하였다. 원 논문 자체의 완화된 기준(padj<0.05, |log2FC|>0.5)과 본 연구가 " +
    "처음 채택했던 더 엄격한 기준(padj<0.01, |log2FC|>1.5)을 비교하는 민감도 분석을 거쳐, 두 기준의 " +
    "중간에 해당하는 padj<0.05, |log2FC|>1.0을 최종 기준으로 채택하였다(간 228개, LV 63개 유의 " +
    "DEG). 이 기준에서 CellChatDB 리간드-수용체 매칭은 양방향 모두에서 신호를 드러내었다. " +
    "심장→간 방향에서는 LV에서 유의하게 상향된 Angptl4가 간에서 발현되는 Cdh5/Sdc1-4와 짝을 " +
    "이루는 축이 통계 기준과 무관하게 견고하게 재현되었다. Sdc1/Sdc4는 간세포에 국소화되는 네트워크 " +
    "hub(각각 degree 16, 14)였으나 공개된 모든 결정구조가 세포외 영역을 포함하지 않아, 표적을 " +
    "ANGPTL4의 C-말단 fibrinogen-like domain(PDB 6EUB)으로 재조정하였다. 21개 화합물에 대한 " +
    "AutoDock Vina 스크리닝과 DiffDock 교차검증 결과 Ezetimibe와 Pioglitazone이 두 방법 모두에서 " +
    "수렴하는 재창출 후보로 확인되었다(Vina -8.88, -8.28 kcal/mol; DiffDock pose가 Vina 포켓 " +
    "3.5Å, 3.9Å 이내로 수렴). 더 흥미로운 점은 완화된 통계 기준에서만 나타나는 간→심장 방향의 " +
    "새로운 신호였다: 간의 Sema5b가 LV에서 발현되는 Plxna1/Plxna3와 짝을 이루었다. STRING " +
    "네트워크는 Plxna1(degree 17)과 Plxna3(degree 16)을 hub로 지목하였으나, 독립적인 마우스 " +
    "심장 단일세포 아틀라스(Tabula Muris Heart+Aorta)에서 이들의 실제 심장 내 발현은 미약하였다 " +
    "(심근세포 기준 ≤5%). 반면 semaphorin/plexin 신호전달에서 잘 알려진 보조수용체인 Nrp1은 " +
    "심내막·내피세포에서 강하게 발현되었고(최대 96.8%), 훨씬 고해상도의 결정구조(0.90Å, EG01377 " +
    "결합형, PDB 6FMC; Powell et al., 2018)와 실제 화합물 연관성(STITCH·DGIdb: Pazopanib, " +
    "Cediranib, Fasudil, Imatinib, Vatalanib, Semaxinib)을 지녔다. Plxna1(Sema 도메인 중심의 " +
    "domain-level blind box)과 Nrp1(EG01377 공동결정 포켓 특이적 box) 양쪽 모두에 대해 도킹을 " +
    "수행한 결과, 두 표적에서 Vina 순위가 가장 높았던 Imatinib을 DiffDock으로 교차검증했을 때 " +
    "Nrp1에서는 Vina와 DiffDock 모두 동일 부위(1.9Å 이내, 문헌상 알려진 b1 domain 잔기 Tyr297/ " +
    "Trp301/Asp320/Lys351과 일치)로 수렴한 반면, Plxna1에서는 두 방법이 22.7Å 떨어진 서로 다른 " +
    "부위를 가리켜 도킹 결과의 신뢰도가 낮았다. 다만 SEMA5B-PLXNA1 신호전달에서 NRP1이 실제로 " +
    "보조수용체로 작용하는지는 문헌상 확립되어 있지 않다는 점을 명시한다 — NRP1의 보조수용체 " +
    "역할은 III형 분비성 semaphorin-PlexinA 신호전달에서 규명된 것이며(Takahashi et al., " +
    "1999), V형 semaphorin인 SEMA5B는 수용체 특이성이 그 근연 유전자 SEMA5A와도 다르므로" +
    "(SEMA5A는 Plexin-B3에 결합하나 SEMA5B는 결합하지 않음; Artigiani et al., 2004) 이를 그대로 " +
    "확장 적용할 수 없으며, 이는 명시적 가설로 남겨둔다. 본 연구는 통계 기준의 신중한 재조정이 " +
    "심장-간 축의 양방향 신호 — 통계적으로 견고하고 구조적으로 검증된 심장→간 축과, 통계적으로는 " +
    "미묘하지만 구조·발현·독립적 도킹 방법이 수렴하는 가설 생성적 간→심장 축 — 를 모두 드러낼 수 " +
    "있음을 보여준다.",

  keywords: "핵심단어: HFpEF, MASLD, 심장-간 축, ANGPTL4, Neuropilin-1, 네트워크 약리학, 분자 도킹",

  introduction: [
    "대사이상 관련 지방성 간질환(Metabolic dysfunction-associated steatotic liver disease, " +
    "MASLD)은 기존의 서술적 명칭인 '비알코올성 지방간질환(NAFLD)'을 대체하며, 인슐린 저항성·비만· " +
    "이상지질혈증과 같은 전신 대사기능장애가 간과 단순히 공존하는 것이 아니라 직접 상호작용한다는 " +
    "패러다임을 반영한다(Rinella et al., 2023). 지난 3년간 간질환 연구의 초점은 순수한 간 내부 " +
    "병리에서 다중 장기 네트워크(inter-organ crosstalk)로 옮겨갔으며, 이는 MASLD/MASH 환자의 " +
    "주된 사망원인이 간경변이 아니라 심혈관질환이라는 관찰에 상당 부분 기인한다. 이 역학적 사실은 " +
    "심장-간 축(cardio-hepatic axis)에 대한 관심을 가속화시켰다.",

    "박출률보존 심부전(HFpEF)은 이러한 심장-간 상호작용의 핵심 표현형이다. 최근 한 연구는 2-hit " +
    "HFpEF 마우스 모델(대사 스트레스와 고혈압 스트레스 병용)에서 동일 개체의 간과 심장을 처음으로 " +
    "체계적으로 프로파일링하여 Saa1/Saa4를 후보 간→심장 매개인자로 제시하였다(Strocchi et al., " +
    "2024). 후속 연구는 간세포 특이적 분비단백질 표지(secretome labeling) 기법을 이용해 HFpEF " +
    "상태에서 간의 분비 사이토카인 신호가 변화함을 보였다(Schütte et al., 2025). 그러나 두 연구 " +
    "모두 시스템생물학적 발견 단계에 그쳤을 뿐, 단백질-단백질 상호작용(PPI) 네트워크 구축, 네트워크 " +
    "약리학, 구조 기반 가상 스크리닝으로는 이어지지 않았다.",

    "본 연구의 조사는 세 단계로 진행되었다. 첫 번째 단계로, 공개된 인간 MASLD 간섬유화 코호트" +
    "(GSE135251, Govaere et al.; 간생검 216례, 초기 섬유화 F0-F1군 vs. 중등도/" +
    "진행성 섬유화 F2-F4군)를 bulk DESeq2 차등발현분석, hub 유전자(degree≥3) 중심의 STRING PPI " +
    "네트워크, 그리고 이미 잘 알려진 섬유화 유전자(collagen 계열, 핵심 TGF-β/근섬유아세포 축)를 " +
    "제외한 DGIdb druggability 스크리닝으로 재분석하여, 아직 깊이 다루어지지 않은 druggable 후보 7개 " +
    "(CCL21, CXCL8, CCL20, EPCAM, LUM, THY1, THBS2)를 도출하였다. 두 번째 단계로, 인간 간 " +
    "단일세포 아틀라스(GSE136103, " +
    "Ramachandran et al., 2019, Nature; 인간 간경변 단일세포 데이터셋)를 품질관리·Harmony 배치 " +
    "통합·클러스터링·계통(lineage) 시그니처 기반 세포유형 주석의 전체 파이프라인을 처음부터 직접 " +
    "구축하여(전체 파이프라인은 Methods 2.6 참조), 위 7개 후보 중 3개(LUM, THY1, THBS2)를 활성화된 " +
    "간성상세포(activated hepatic stellate cell)에 국소화하고 이들의 상위 전사인자/miRNA 조절자 및 " +
    "세포 간 신호전달 파트너를 규명하였다. 두 분석의 전체 방법론은 " +
    "그 자체로 이해될 수 있도록 Supplemental Text S3에 완전히 기술하였다. 세 번째 단계이자 " +
    "본 연구의 핵심으로, 아래에 기술된 마우스 페어드 간-심장 데이터셋을 훨씬 더 엄격한 통계 기준으로 " +
    "재분석하고, 리간드-수용체 인터랙톰 매칭, STRING 기반 PPI 네트워크, STITCH 네트워크 약리학, " +
    "DGIdb 약물표적성 평가를 거쳐 최종적으로 AutoDock Vina 및 DiffDock을 이용한 구조 기반 가상 " +
    "스크리닝까지 이어감으로써, 위 프로그램을 인간에서 마우스로, 그리고 단일 장기(간)에서 진정한 " +
    "다중 장기(간-심장) 축으로 확장하였다. " +
    "이때 두 번째 단계에서 구축한 GSE136103 아틀라스는 완전히 다른 역할로 재사용되는데, 즉 위 후보 유전자들을 다시 " +
    "다루기 위해서가 아니라 본 연구 자체의 후보 유전자를 국소화하기 위한 독립적인 종간(cross-" +
    "species) 참조 자료로만 사용된다(3.5절). 그러나 당초 가설과 달리, 데이터는 간이 분비하는 인자가 심장에 작용하는 " +
    "방향이 아니라 그 반대 — 심장이 분비하는 인자가 간에 작용하는 방향 — 을 가리켰으며, 이는 " +
    "임상적으로 이미 확립된 울혈성 간병증(congestive hepatopathy)/심장-간 증후군(cardiohepatic " +
    "syndrome) 개념과 정확히 부합하는 것이었다. 본 연구는 이러한 방향 전환을 실망스러운 결과로 " +
    "치부하지 않고 정직한 발견으로 보고하며, 이를 druggability 평가와 화합물 수준의 스크리닝까지 " +
    "끝까지 추적한다.",

    "위 세 단계를 마친 뒤, 원 연구(Strocchi et al., 2024)가 실제로 사용한 통계 기준(padj<0.05, " +
    "|log2FC|>0.5)이 본 연구가 처음 채택한 기준(padj<0.01, |log2FC|>1.5)보다 상당히 완화되어 " +
    "있다는 점을 발견하였다(3.1절). 이는 자연스러운 질문으로 이어졌다: 더 완화된, 그러나 여전히 " +
    "임의적이지 않은 기준을 채택하면 간→심장 방향에서도 유의미한 신호가 나타날까? 이 질문에 답하기 " +
    "위해 이미 적합된 DESeq2 모델을 다시 필터링하는 민감도 분석을 수행하였고(모델을 다시 적합할 " +
    "필요 없이), 그 결과를 본 연구 전체 파이프라인의 최종 기준으로 채택하였다(padj<0.05, " +
    "|log2FC|>1.0; 3.1절). 이 완화된 기준에서 심장→간 Angptl4-Sdc/Cdh5 축은 통계 기준과 무관하게 " +
    "그대로 재현되었으나, 동시에 당초 가설이었던 간→심장 방향에서도 이전에는 보이지 않았던 새로운 " +
    "신호(Sema5b-Plxna1/Plxna3)가 나타났다. 본 연구는 이 두 번째 축을 무시하지 않고, 첫 번째 축과 " +
    "동일한 엄격도로 STRING 네트워크·세포유형 국소화·druggability·구조 기반 도킹까지 끝까지 " +
    "추적하여(3.10-3.17절), 최종적으로 심장-간 축을 단방향이 아닌 양방향 회로로 기술한다."
  ],

  methods: [
    { h: "2.1 데이터셋", p:
      "본 연구는 Strocchi 등(2024)이 Circulation Research에 보고한 공개 데이터(Zenodo record " +
      "12794566)를 재사용하였다. 수컷 C57BL/6N 마우스에게 8주간 2-hit HFpEF 유도 식이(대사 " +
      "스트레스와 고혈압 스트레스 병용; HFpEF군, n=5) 또는 일반 사료(Chow군, n=5)를 급여한 뒤, 간 " +
      "및 좌심실(LV) 조직에서 각각 bulk RNA-seq을 수행하였다. 공개된 raw count 매트릭스와 " +
      "표현형 메타데이터(초음파 심장기능 지표, 장기 무게)를 그대로 사용하였다. 간과 LV가 독립적으로 " +
      "모집된 코호트가 아니라 동일 개체에서 채취되었다는 점에서, 이 데이터셋은 진정한 다중장기 " +
      "페어드 자원이며 장기 간(inter-organ) crosstalk 규명에 적합하다."
    },
    { h: "2.2 차등발현 분석", p:
      "각 장기(간, LV)에 대해 독립적으로 DESeq2(Love et al., 2014)를 적용하였다. 유전자는 전체 " +
      "10개 표본 중 5개 이상에서 raw count ≥10인 것만 사전 필터링하였으며, log2 fold change는 " +
      "apeglm(Zhu et al., 2019)으로 축소(shrinkage)하였다. 유의 DEG는 일반적으로 통용되는 " +
      "padj<0.05보다 엄격한 padj<0.01 및 |log2FC|>1.5 기준으로 정의하여 위양성을 최소화하였다."
    },
    { h: "2.3 GSEA·GO·KEGG 농축분석", p:
      "Hallmark 유전자 집합(msigdbr, Mus musculus)에 대해 fgsea(Korotkevich et al., 2019)로 " +
      "GSEA를 수행하였다. apeglm으로 축소된 결과에는 Wald 통계량이 없으므로, 순위 지표는 " +
      "sign(log2FC) × (−log10 p-value)로 재구성하였다. 유의 DEG 목록에 대해서는 clusterProfiler" +
      "(Wu et al., 2021)를 이용해 GO Biological Process 및 KEGG(organism=mmu) 과대표현분석을 " +
      "BH 보정 padj<0.05 기준으로 수행하였다."
    },
    { h: "2.4 리간드-수용체 인터랙톰 매칭", p:
      "각 장기의 상향 DEG를 후보 리간드로 삼아, CellChatDB.mouse(Jin et al., 2021)의 큐레이션된 " +
      "리간드-수용체 쌍과 매칭하였다. 리간드와 수용체 모두가 독립적으로 genome-wide 유의성을 " +
      "통과해야 한다는 조건은 지나치게 엄격한데, 수용체는 스스로의 전사 수준이 변하지 않아도 신호를 " +
      "전달할 수 있기 때문이다. 이에 수용체 측 기준은 표적 장기에서 '검출 가능한 발현' " +
      "(baseMean≥10)으로 완화하였다. 간→LV, LV→간 양방향을 모두 검증하였다."
    },
    { h: "2.5 STRING 단백질-단백질 상호작용 네트워크", p:
      "매칭된 유전자 및 그 첫 번째 상호작용 파트너(최대 15개 추가)를 STRING API(Szklarczyk et " +
      "al., 2023; 마우스 taxid 10090, confidence score≥0.7)로 조회하였다. igraph로 degree " +
      "centrality와 betweenness centrality를 계산해 hub 유전자를 식별하였다. Cytoscape " +
      "3.10.4를 설치해 시각화를 시도하였으나 이 환경에서 CyREST 연동이 불안정하여, 최종 네트워크 " +
      "그림은 igraph로 대체 생성하였다(Cytoscape는 수동 활용을 위해 유지)."
    },
    { h: "2.6 세포유형 국소화(Cell-type localization)", p:
      "본 bulk 코호트와 동일한 실험에서 얻어진 단일세포 데이터는 존재하지 않으므로, 최종 후보 " +
      "유전자의 세포유형별 발현은 본 연구의 앞 단계에서 공개 GSE136103 데이터(Ramachandran et " +
      "al., 2019)로부터 직접 구축한 독립적으로 주석된 인간 간 scRNA-seq 아틀라스(20개 인간 간 10x " +
      "표본, 건강 5례 + 간경변 5례, CD45+/CD45- 분리 분획)를 이용해 평가하였다. 아틀라스 구축 과정은 " +
      "다음과 같다: 원 논문의 Methods를 따라 표본별로 품질관리 필터링(nFeature_RNA>300, " +
      "percent.mt<30)을 적용해 60,925개 세포를 확보하였고, Harmony(RunHarmony)로 개별 10x 실행 " +
      "단위 배치보정을 수행(3회 반복만에 수렴)하였으며, FindClusters(Harmony 임베딩, dims 1:15, " +
      "resolution 0.6)로 20개 클러스터를 도출(동일 resolution에서 원 논문이 보고한 클러스터 수와 " +
      "일치)하였고, 각 클러스터는 원 논문 자체의 보충 계통(lineage) 시그니처 유전자 집합에 대해 " +
      "Seurat의 AddModuleScore로 점수화한 뒤 가장 높은 점수의 계통을 부여하고 marker 유전자 " +
      "dotplot으로 모든 배정을 교차 검증하여 12개 세포 계통으로 최종 확정하였다. 이 아틀라스는 " +
      "본 연구의 후보 유전자를 국소화하기 위한 독립적인 종간 참조 자료로만 활용하였으며, 어떠한 " +
      "통계적 검정에도 직접 결합하지 않았다. 품질관리 그림과 클러스터 주석 표를 포함한 전체 구축 " +
      "파이프라인은 Supplemental Text S3에 완전히 기술하였다."
    },
    { h: "2.7 STITCH 네트워크 약리학 및 DGIdb druggability 평가", p:
      "STRING 네트워크의 hub 유전자에 대해 STITCH(Szklarczyk et al., 2016)로 기존에 알려지거나 " +
      "예측된 화학물질 상호작용을 조회하고, 화합물명은 PubChem PUG-REST API로 확인하였다. " +
      "druggability는 DGIdb 5.0 GraphQL API(Cannon et al., 2024)로 각 유전자(인간 오소로그 " +
      "심볼 사용)의 기존 약물 상호작용을 조회하여 평가하였다."
    },
    { h: "2.8 표적 3차원 구조 확보", p:
      "UniProt REST API를 통해 각 후보 유전자의 PDB 교차참조를 확인하고, RCSB PDB에서 각 구조가 " +
      "실제로 어느 도메인(세포외, 막관통, 세포질)을 나타내는지 개별적으로 검토하였다."
    },
    { h: "2.9 AutoDock Vina 구조 기반 가상 스크리닝", p:
      "최종 표적 구조(PDB 6EUB)에서 물 분자와 결정화 첨가물(1PE, pentaethylene glycol)을 " +
      "제거하고, 유일한 대체위치(altloc) 잔기는 conformer A로 처리하였다. Meeko" +
      "(mk_prepare_receptor)로 PDBQT 파일을 생성하였으며, 도킹 박스(24×24×24Å³)는 결정구조에서 " +
      "관찰된 유일한 소분자 결합 표면 부위인 1PE 부위의 무게중심을 중심으로 설정하였다. 리간드 " +
      "라이브러리는 PubChem에서 SMILES를 확보한 21개 화합물로, 세 그룹으로 구성하였다: (1) " +
      "STITCH에서 실제 ANGPTL4 화학적 파트너로 확인된 지방산류와 Pioglitazone; (2) Resmetirom, " +
      "Fenofibrate, Bezafibrate, Ezetimibe, Atorvastatin, Rosiglitazone, Empagliflozin, " +
      "Dapagliflozin, Obeticholic acid, Icosapent ethyl, Metformin, Niacin 등 승인 또는 후기임상 " +
      "심혈관대사/MASH 약물; (3) Aspirin, Ibuprofen, Caffeine, Metoprolol 등 기전상 무관한 " +
      "대조군. RDKit(ETKDGv3, MMFF94)으로 3차원 구조를 생성하고 Meeko(mk_prepare_ligand)로 " +
      "PDBQT화한 뒤, AutoDock Vina 1.2.7(Eberhardt et al., 2021)로 exhaustiveness=16, " +
      "num_modes=5, seed=42 조건으로 도킹하였다."
    },
    { h: "2.10 DiffDock 교차검증", p:
      "이 컴퓨터에는 CUDA 지원 GPU가 없어 DiffDock(Corso et al., 2023)의 로컬 설치 및 CPU " +
      "추론은 비현실적이라고 판단하였다. 대신 원 저자 추론 코드(gcorso/DiffDock)를 그대로 구동하는 " +
      "공개 Gradio 웹 인터페이스(swcanner/DiffDock-Web)를 이용해 Vina 상위 화합물(Resmetirom, " +
      "Ezetimibe, 그리고 STITCH에서 이미 독립적으로 실제 ANGPTL4 화학적 파트너로 확인되어 " +
      "추가한 Pioglitazone)에 한해서만 교차검증을 수행하였다. DiffDock은 Vina와 달리 결합 " +
      "부위를 사전에 지정하지 않는 blind docking 방식이므로, 두 방법이 pose 위치에서 일치하는지 " +
      "여부는 단순한 재순위화가 아니라 독립적인 구조적 검증에 해당한다(복합체당 샘플 수=10, " +
      "seed 미고정)."
    },
    { h: "2.11 심장 세포유형 국소화(마우스 자체 검증)", p:
      "간→심장 방향에서 확인된 후보 유전자는 리간드(Sema5b)뿐 아니라 수용체(Plxna1, Plxna3, " +
      "Nrp1, Nrp2)까지 심장 측에서 실제로 발현되는지 확인이 필요하였다. 2.6절에서 사용한 " +
      "GSE136103 아틀라스는 인간 간 데이터이므로 심장 조직을 포함하지 않아, 독립적인 마우스 심장 " +
      "atlas가 새로 필요하였다. Tabula Muris droplet(10x) Heart+Aorta atlas(figshare file " +
      "13088642, 624 세포, cell_ontology_class 주석: cardiac muscle cell, endocardial cell, " +
      "endothelial cell, fibroblast)를 조회하여 5개 후보 유전자의 세포유형별 발현 비율과 평균 " +
      "발현량을 산출하였다. 이는 2.6절/Supplemental Figure S4에서 사용한 것과 같은 Tabula Muris " +
      "리소스의 심장 특이적 하위 데이터셋으로, 원 bulk 코호트와 동일한 종(마우스)에서 얻은 " +
      "독립적인 참조 자료라는 점에서 2.6절의 검증 논리를 그대로 따른다. 같은 Tabula Muris " +
      "리소스에는 FACS/Smart-seq2 기반 심장 파일(770MB)도 존재하나, 본 연구는 실용적인 이유로 " +
      "더 작은 droplet 기반 파일(85MB)을 선택하였으며, 이에 따라 결과를 2.6절의 FACS 기반 간 " +
      "atlas와 직접적인 방법론적 대응물로 취급하지 않고 droplet 기반 데이터로 명시한다."
    },
    { h: "2.12 이중 표적 구조 액셔너빌리티 평가 및 표적 재조정", p:
      "간→심장 후보(Plxna1, Plxna3, Sema5b, Nrp1, Nrp2)에 대해서도 2.8절과 동일한 UniProt/PDB " +
      "구조 검토를 반복하였다. 이 과정에서 UniProt REST API의 gene:NRP1 및 gene:NRP2 검색이 " +
      "각각 두 개의 서로 다른 유전자 항목을 반환한다는 사실을 발견하였다 — NELL1(UniProt Q92832)과 " +
      "NELL2(Q99435)가 오래된 유전자 별칭으로 각각 'NRP1'과 'NRP2'를 가지고 있어, 검색 결과의 " +
      "첫 항목을 그대로 취하면 진짜 Neuropilin이 아닌 NELL1/NELL2의 PDB 구조가 반환된다. 이 " +
      "문제는 반환된 PDB 파일 자체의 TITLE 레코드가 'neuropilin'을 언급하지 않는다는 점에서 " +
      "발견되었으며, 이후 검색 결과 중 1차 유전자명(동의어가 아닌)이 질의어와 정확히 일치하는 " +
      "항목만 채택하도록 검증 절차를 수정하여 재현하였다(실제 Neuropilin-1: O14786, 25개 PDB " +
      "구조; Neuropilin-2: O60462, 16개 PDB 구조). 모든 plexin 계열 단백질에 대해 소분자가 " +
      "결합된 공개 구조가 전무하다는 점(Plxna1의 유일한 구조 7Y4P/7Y4Q는 apo 상태의 ectodomain " +
      "단편)과, 반대로 Nrp1이 이미 알려진 소분자 억제제(EG01377)와 공동결정화된 0.90Å " +
      "고해상도 구조(PDB 6FMC; Powell et al., 2018)를 갖추고 있다는 점을 종합하여, 이 축의 " +
      "구조 기반 스크리닝 표적을 CellChatDB가 직접 매칭한 Plxna1이 아니라 그 첫 번째 STRING " +
      "상호작용 파트너인 Nrp1로 재조정할지 판단하였다. 다만 Nrp1이 실제로 SEMA5B-PLXNA1 " +
      "신호전달의 보조수용체로 기능하는지는 문헌상 확립되어 있지 않으므로(4절 참조), Plxna1과 " +
      "Nrp1 양쪽 모두를 도킹하여 데이터가 스스로 말하게 하는 방식을 채택하였다(3.14-3.17절)."
    },
    { h: "2.13 이중 표적 AutoDock Vina 및 DiffDock 스크리닝", p:
      "Nrp1(PDB 6FMC)은 2.9절과 동일한 방식으로, 공동결정화된 저해제(EG01377, PDB 리간드 코드 " +
      "DUE)의 원자 무게중심을 도킹 박스 중심(24×24×24Å³)으로 삼아 포켓 특이적으로 준비하였다. " +
      "Plxna1(PDB 7Y4P)은 소분자 결합 포켓이 알려져 있지 않으므로, UniProt이 주석한 Sema " +
      "domain(잔기 27-512, semaphorin 리간드 결합이 확립된 7-blade beta-propeller 구조; " +
      "Tanaka et al., 2022)의 Cα 무게중심을 중심으로 한 더 넓은 domain-level blind box" +
      "(30×30×30Å³)를 사용하였으며, 이는 특정 포켓이 아닌 도메인 표면 전체를 탐색하는 더 낮은 " +
      "신뢰도의 설정임을 명시한다. 리간드 라이브러리는 11개 화합물로 구성하였다: (1) Nrp1 " +
      "수용체에 실제로 결합해 있는 EG01377 자체(RCSB 화학성분 사전의 DUE 항목에서 직접 확보한 " +
      "SMILES 사용, 자기도킹(self-docking) 양성대조군); (2) STITCH에서 실제 Nrp1/Nrp2 화학적 " +
      "파트너로 확인된 승인/후기임상 키나아제 억제제 6종(Imatinib, Vatalanib, Cediranib, " +
      "Semaxinib, Pazopanib, Fasudil); (3) 기전상 무관한 대조군 4종(Aspirin, Ibuprofen, " +
      "Caffeine, Metoprolol). 두 표적 각각에 대해 2.9절과 동일한 Vina 조건(exhaustiveness=16, " +
      "num_modes=5, seed=42)으로 전체 라이브러리를 스크리닝한 뒤, 각 표적의 Vina 1위 화합물" +
      "(두 표적 모두 Imatinib)을 2.10절과 동일한 DiffDock 웹 인터페이스로 교차검증하였다."
    },
  ],

  resultsBlocks: [
    { type: "heading", text: "3.1 장기별 차등발현 분석 및 통계 기준 재조정" },
    { type: "p", text:
      "먼저 2-hit HFpEF 요법에 노출된 마우스의 장기별 전사체 변화를 살펴보았다. 처음에는 위양성을 " +
      "최소화하기 위해 padj<0.01, |log2FC|>1.5의 보수적 기준을 채택하였다(간 86개, LV 20개 유의 " +
      "DEG). 그러나 원 연구(Strocchi et al., 2024) 자체가 사용한 기준은 훨씬 완화된 padj<0.05, " +
      "|log2FC|>0.5였다는 점을 확인하고, 이미 적합된 DESeq2 모델을 다시 필터링하는 민감도 분석을 " +
      "수행하였다(모델 재적합 불필요). 원 논문의 기준과 본 연구가 처음 채택한 기준의 중간에 해당하는 " +
      "padj<0.05, |log2FC|>1.0을 최종 기준으로 채택하였으며, 이 기준으로 전체 파이프라인을 " +
      "처음부터 다시 실행하였다. 이 기준에서는 간 228개(상향 133, 하향 95), LV 63개(상향 41, " +
      "하향 22) 유전자가 유의하게 차등발현되었다(Figure 1A, 1B; 전체 유전자 목록은 Supplemental " +
      "Table S1, S2 참조). 이들 DEG에 대한 비지도 계층적 군집화는 두 장기 모두에서 Chow군과 " +
      "HFpEF군을 뚜렷하게 분리하였다(Figure 2A, 2B)." },
    { type: "figure", file: "figures/composite/Figure1_volcano_combined.png",
      caption: "Figure 1. HFpEF vs. Chow 조건에서 장기별 차등발현 유전자. (A) 간 volcano plot. " +
               "(B) 좌심실(LV) volcano plot. 유의 기준(padj<0.05, |log2FC|>1.0)을 만족하는 " +
               "유전자는 빨간색으로 표시하였고 대표 유전자를 라벨로 표기하였다. 전체 DEG 목록은 " +
               "Supplemental Table S1(간)과 S2(LV)에 수록하였다." },
    { type: "figure", file: "figures/composite/Figure2_heatmap_combined.png",
      caption: "Figure 2. 유의 DEG의 계층적 군집화(z-score 변환된 variance-stabilized count 기준). " +
               "(A) 간(DEG 228개). (B) LV(DEG 63개). 두 조직 모두 비지도 방식으로 Chow군과 HFpEF군이 " +
               "뚜렷하게 분리되었다." },
    { type: "p", text:
      "다음으로, 원 연구가 제시한 두 후보 매개인자 Saa1과 Saa4가 이 완화된 기준에서 재현되는지 " +
      "확인하였다. Saa1(log2FC=1.16, padj=5.9×10⁻⁵)은 |log2FC|>1.0 기준을 통과하여 유의 DEG " +
      "목록에 포함되었으나, Saa4(log2FC=0.53, padj=0.011)는 여전히 통과하지 못하였다. 이는 " +
      "통계 기준의 선택이 재현되는 후보 목록에 실질적인 영향을 미친다는 것을 보여주며, 본 연구가 " +
      "이 문제를 명시적인 민감도 분석으로 다룬 이유이기도 하다." },

    { type: "heading", text: "3.2 경로 수준 농축분석 (GSEA, GO, KEGG): 기준 의존성에 대한 정직한 관찰" },
    { type: "p", text:
      "Hallmark GSEA에서 간은 19개, LV는 17개의 경로가 유의하였다(padj<0.05; Figure 3A, 3B) — " +
      "이 결과는 이전 절에서 기술한 기준 완화 전후로 전혀 변하지 않았는데, GSEA(fgsea)는 유의 " +
      "DEG 목록이 아니라 전체 유전자의 순위화된 랭킹 지표를 사용하는 방법이므로 DEG 판정 기준 " +
      "자체와 무관하기 때문이다. 간에서는 MTORC1_SIGNALING, CHOLESTEROL_HOMEOSTASIS, " +
      "MYC_TARGETS_V1이 하향된 반면 INTERFERON_ALPHA_RESPONSE는 상향되었다. LV에서는 " +
      "ADIPOGENESIS, FATTY_ACID_METABOLISM, OXIDATIVE_PHOSPHORYLATION, PEROXISOME, " +
      "BILE_ACID_METABOLISM이 모두 뚜렷하게 상향되어, HFpEF 스트레스 하에서 심장 대사가 지질 " +
      "처리 및 미토콘드리아 경로 쪽으로 전환되고 있음을 시사하였다 — 이는 기존 HFpEF 문헌에서 " +
      "보고된 미토콘드리아 기능장애와 일치하는 패턴이다. 이러한 농축 신호의 형태를 요약 지표인 " +
      "NES만이 아니라 직접 확인하기 위해, 각 장기에서 가장 유의한 상위 2개 경로에 대한 고전적인 " +
      "running-enrichment-score plot을 제시하였다(Figure 3C-F): 간에서는 MTORC1_SIGNALING과 " +
      "CHOLESTEROL_HOMEOSTASIS 모두 running score가 초반부터 급격하게 음의 방향으로 몰려 있고 0 " +
      "부근으로 되돌아오지 않아, 분산된 신호가 아니라 뚜렷하게 집중된 결핍 신호임을 보여주었다. " +
      "LV에서는 ADIPOGENESIS와 FATTY_ACID_METABOLISM이 정반대 패턴 — 즉시 상승해 지속되는 양의 " +
      "농축 — 을 보여, 소수의 이상치 유전자가 아니라 일관된 대사 전환에 의한 신호임을 시사하였다. " +
      "반면 유의 DEG 목록 자체를 입력으로 사용하는 과대표현분석(ORA)은 기준 완화의 영향을 그대로 " +
      "받았으며, 그 결과는 직관과 어긋나는 흥미로운 패턴을 보였다: GO Biological Process에서 간은 " +
      "34개에서 41개로 늘었으나, LV는 입력 DEG 수가 20개에서 63개로 3배 이상 늘었음에도 유의 " +
      "항목이 10개에서 0개로 완전히 사라졌다. KEGG에서는 간이 9개에서 15개로, LV는 0개에서 1개로 " +
      "늘었다(Supplemental Figure S1, S2; Supplemental Table S3-S5). LV GO-BP 결과는 얼핏 " +
      "모순처럼 보이지만, ORA는 입력 유전자 집합이 특정 기능 범주에 얼마나 '집중'되어 있는지를 " +
      "평가하는 방법이므로, 완화된 기준으로 늘어난 43개의 추가 LV DEG가 기존 20개보다 기능적으로 " +
      "더 분산되어 있다면 유의성이 오히려 감소할 수 있다 — 실제로 이런 현상이 관찰되었다는 " +
      "사실 자체를 얼버무리지 않고 그대로 보고한다. 이 관찰은 3.3절 이하에서 다루는 리간드-수용체 " +
      "매칭 결과의 기준 의존성을 해석하는 데에도 중요한 배경이 된다." },
    { type: "figure", file: "figures/composite/Figure3_GSEA_combined.png",
      caption: "Figure 3. Hallmark 유전자집합농축분석(GSEA). (A) 간, (B) LV 막대그래프는 padj<0.05로 " +
               "유의한 모든 경로의 정규화농축점수(NES)를 나타낸다. (C-F) 각 장기에서 가장 유의한 " +
               "상위 2개 경로에 대한 고전적 GSEA running-enrichment-score plot(초록선: running ES; " +
               "검은 눈금: 유전자집합 hit 위치; 빨강-파랑 막대: ranked list 상 위치; 회색: ranking " +
               "metric 크기): (C) 간 MTORC1_SIGNALING, (D) 간 CHOLESTEROL_HOMEOSTASIS, (E) LV " +
               "ADIPOGENESIS, (F) LV FATTY_ACID_METABOLISM. GO-BP 및 KEGG 전체 결과는 " +
               "Supplemental Figure S1-S2 및 Supplemental Table S3-S5에 수록하였다." },

    { type: "heading", text: "3.3 리간드-수용체 인터랙톰 매칭: 양방향 축의 발견" },
    { type: "p", text:
      "본 연구는 당초 간에서 분비되는 인자가 HFpEF 관련 심장 리모델링을 유발한다는 가설을 " +
      "세웠다. 처음 채택했던 보수적 기준(padj<0.01, |log2FC|>1.5)에서는 CellChatDB 매칭과 제약 " +
      "없는 STRING 기반 탐색(confidence≥0.7) 모두에서 간→LV 방향의 교차-장기 엣지가 단 하나도 " +
      "확인되지 않았다. 반대 방향에서는 CellChatDB가 5건의 매칭을 제시하였다: LV에서 유의하게 " +
      "상향된 Angptl4는 간에서 발현되는 Cdh5, Sdc1, Sdc2, Sdc3, Sdc4 모두와 큐레이션된 " +
      "리간드-수용체 관계에 있었다(Table 1). 이에 따라 후보 축의 방향을 간→심장에서 심장→간으로 " +
      "재조정하였다. 이 방향 전환은 임시방편적인 수정이 아니라, 심장의 기능장애가 이차적으로 간을 " +
      "손상시키는 임상적으로 이미 확립된 울혈성 간병증/심장-간 증후군 개념과 정확히 대응한다. " +
      "3.1절에서 기술한 완화된 최종 기준(padj<0.05, |log2FC|>1.0)에서 이 매칭을 다시 수행한 " +
      "결과, 심장→간 방향의 5건은 정확히 동일하게 재현되어 이 축이 통계 기준에 견고함을 " +
      "확인하였다. 그러나 이번에는 당초 가설이었던 간→LV 방향에서도 이전에는 보이지 않았던 3건의 " +
      "새로운 매칭이 나타났다: 간에서 상향된 Sema5b가 LV에서 발현되는 Plxna1, Plxna3와, 그리고 " +
      "간의 C4a가 LV의 C3ar1과 짝을 이루었다(C4a는 이후 3.11절에서 기술하는 이유로 네트워크 " +
      "확장 분석에서 제외하였다). 이 간→심장 신호는 통계 기준에 민감하다는 점에서 심장→간 축보다 " +
      "약하지만, 당초 가설을 뒷받침하는 유일한 신호이므로 무시하지 않고 3.10절 이하에서 심장→간 " +
      "축과 동일한 엄격도로 끝까지 추적하였다." },
    { type: "table",
      title: "Table 1. LV→간 리간드-수용체 매칭 결과 (CellChatDB).",
      header: ["Interaction", "리간드", "수용체", "Pathway", "근거"],
      widths: [2200, 1300, 1300, 1500, 2726],
      rows: [
        ["ANGPTL4_CDH5", "Angptl4", "Cdh5", "ANGPTL", "PMID: 30049845"],
        ["ANGPTL4_SDC1", "Angptl4", "Sdc1", "ANGPTL", "PMID: 29017031"],
        ["ANGPTL4_SDC2", "Angptl4", "Sdc2", "ANGPTL", "PMID: 29017031"],
        ["ANGPTL4_SDC3", "Angptl4", "Sdc3", "ANGPTL", "PMID: 29017031"],
        ["ANGPTL4_SDC4", "Angptl4", "Sdc4", "ANGPTL", "PMID: 29017031"],
      ] },

    { type: "heading", text: "3.4 STRING 네트워크 분석: Sdc1/Sdc4가 hub 유전자로 확인됨" },
    { type: "p", text:
      "Angptl4/Cdh5/Sdc1-4를 그 첫 번째 STRING 상호작용 파트너까지 확장한 네트워크(총 41개 " +
      "엣지)에서, Sdc1(degree=16, betweenness=64.3)과 Sdc4(degree=14, betweenness=45.1)가 " +
      "뚜렷한 네트워크 hub로 확인되었으며, 이들은 heparan sulfate proteoglycan 관련 유전자(Gpc1, " +
      "Gpc4, Hspg2, Ext1, Tnc)로 이루어진 모듈에 속해 있었다(Figure 4). 반면 Cdh5는 Angptl4와만 " +
      "연결된 고립 쌍을 형성하여, syndecan 계열이 이 축의 구조적 중심임을 시사하였다(전체 hub " +
      "유전자 순위는 Supplemental Table S6 참조)." },
    { type: "figure", file: "figures/Angptl4axis_network_ggraph.png",
      caption: "Figure 4. Angptl4-Sdc/Cdh5 축을 중심으로 한 STRING 단백질-단백질 상호작용 네트워크" +
               "(confidence≥0.7, 첫 번째 상호작용 파트너 최대 15개 추가). 빨간 노드: seed 유전자" +
               "(Angptl4, Cdh5, Sdc1-4); 파란 노드: STRING 상호작용 파트너. 노드 크기는 degree에 " +
               "비례하며, 엣지의 굵기와 불투명도는 STRING confidence score에 비례한다." },

    { type: "heading", text: "3.5 종간(Cross-species) 세포유형 국소화" },
    { type: "p", text:
      "본 연구의 앞 단계에서 직접 구축한 인간 간 scRNA-seq 아틀라스(GSE136103; 구축 파이프라인은 " +
      "Methods 2.6 및 Supplemental Text S3 참조)를 독립적인 종간 참조 자료로 재사용한 결과, SDC1과 SDC4는 간세포(hepatocyte)에 " +
      "뚜렷하게 국소화되어(Figure 5) 이들이 네트워크 hub라는 순위와 일치하는 결과를 보였다. SDC3는 " +
      "MP(대식세포/Kupffer 계열)에, CDH5는 이 전형적인 내피세포 표지자에 대해 예상대로 " +
      "Endothelia에 국소화되어, 국소화 분석 방법론 자체에 대한 내장 양성대조군 역할을 하였다" +
      "(질환 상태별로 나눈 동일 분석은 Supplemental Figure S3 참조). 이 참조 자료가 인간 유래라는 " +
      "점을 보완하기 위해, 본 연구의 bulk 코호트와 동일한 종(마우스)의 독립적인 간 아틀라스(Tabula " +
      "Muris, FACS/Smart-seq2, n=714 세포)를 추가로 조회해 국소화를 마우스 자체에서 직접 " +
      "확인하였다. 이 마우스 자체 검증은 인간에서 관찰된 패턴을 거의 그대로 재현하였다: Sdc4는 " +
      "간세포의 91.8%에서, Sdc1은 68.3%에서 검출되었고, Sdc3는 Kupffer 세포의 80.3%에서, Cdh5는 " +
      "간 동양혈관 내피세포의 98.4%에서 검출되었다(Supplemental Figure S4). 네트워크 중심성, 인간 " +
      "scRNA-seq, 그리고 독립적인 마우스 scRNA-seq 아틀라스가 동일한 세포유형 배정으로 수렴한다는 " +
      "점은 이 국소화 결과에 대한 신뢰도를 크게 높여준다." },
    { type: "figure", file: "figures/Angptl4axis_liver_localization_dotplot.png",
      caption: "Figure 5. Angptl4 축 유전자의 간 내 세포유형 국소화, 독립적 종간 참조 자료 활용" +
               "(인간 간경변 scRNA-seq 아틀라스, GSE136103; 구축 파이프라인은 Methods 2.6 및 " +
               "Supplemental Text S3 참조). SDC1/SDC4는 네트워크 hub라는 지위와 일치하게 " +
               "간세포에 국소화되며, CDH5는 양성대조군으로서 Endothelia에 국소화된다." },

    { type: "heading", text: "3.6 STITCH 네트워크 약리학" },
    { type: "p", text:
      "STITCH 조회 결과 Angptl4는 내인성 지방산 대사물(리놀레산, 팔미트산, 아라키돈산, EPA)과 " +
      "승인된 PPAR 작용제인 Pioglitazone에 연결되어 있었다(Table 2). 반면 Sdc1, Sdc2, Sdc3, " +
      "Cdh5는 구조적·대사적 파트너(헤파란/더마탄 황산 글리코사미노글리칸 구성 성분인 iduronic " +
      "acid; calcium cation)만을 반환하여, 기존 치료 약물과의 연관성은 사실상 없었다(전체 결과는 " +
      "Supplemental Table S8 참조)." },
    { type: "table",
      title: "Table 2. Angptl4 축 유전자의 STITCH 화학적 파트너 (선별).",
      header: ["유전자", "화합물"],
      widths: [3013, 6013],
      rows: [
        ["Angptl4", "리놀레산 (9,12-octadecadienoic acid)"],
        ["Angptl4", "팔미트산"],
        ["Angptl4", "에이코사펜타엔산(EPA)"],
        ["Angptl4", "Pioglitazone (승인 약물)"],
        ["Sdc1 / Sdc2 / Sdc3", "Iduronic acid (헤파란/더마탄 황산 GAG 구성 성분)"],
        ["Cdh5", "칼슘 양이온"],
      ] },

    { type: "heading", text: "3.7 Druggability 평가 및 최종 표적 선정" },
    { type: "p", text:
      "DGIdb 조회 결과 Sdc1은 3건(heparin, 항체-약물접합체인 indatuximab ravtansine), Sdc4는 " +
      "1건(기전상 무관한 종양학적 키나아제 억제제 repotrectinib으로, 텍스트마이닝 오탐일 가능성이 " +
      "높음), Cdh5는 1건(피브린 유래 펩타이드 FX06)의 약물 상호작용을 보였으며, Sdc3와 Angptl4는 " +
      "각각 0건이었다(Table 3; Supplemental Table S9). 그러나 결정적으로, UniProt/PDB 검토 결과 " +
      "네트워크 hub인 Sdc1과 Sdc4의 공개된 모든 결정구조는 세포외 영역이 아닌 부분만을 포함하고 " +
      "있었다 — 예컨대 PDB 8BLV는 Sdc4의 세포질 꼬리가 syntenin PDZ 도메인과 결합한 복합체를 " +
      "보여줄 뿐, Angptl4와 같은 분비 리간드가 실제로 결합하는 헤파란황산 함유 세포외 영역이 " +
      "아니다 — 이로 인해 소분자 도킹에는 구조적으로 활용할 수 없었다. 이에 최종 표적을 Angptl4 " +
      "자체로 재조정하였다: DGIdb 기준 완전히 미개발 상태이고, C-말단 fibrinogen-like domain의 " +
      "2.3Å 결정구조(PDB 6EUB; Biterova et al., 2018)가 리간드 수용 가능한 표면과 함께 존재하며, " +
      "본 연구 자체의 DEG 분석과 " +
      "심장 섬유아세포 특이적 ANGPTL4 분비를 HFpEF에서 확인한 2024년 독립적 단일세포 연구(Li et " +
      "al., 2024) 양쪽으로부터 이중 검증되었다(상세 근거는 Supplemental Text S1 참조)." },
    { type: "table",
      title: "Table 3. Angptl4 축 유전자의 DGIdb druggability 요약.",
      header: ["유전자", "상호작용 수", "승인 약물 수", "예시 약물"],
      widths: [1800, 1800, 1500, 3926],
      rows: [
        ["SDC2", "1", "0", "Heparan sulfate"],
        ["SDC4", "1", "1", "Repotrectinib (텍스트마이닝 오탐 가능성)"],
        ["CDH5", "1", "0", "FX06 (펩타이드)"],
        ["SDC3", "0", "0", "-"],
        ["SDC1", "3", "0", "Heparin; Indatuximab ravtansine (ADC)"],
        ["ANGPTL4", "0", "0", "- (완전 미개발, 최종 표적)"],
      ] },

    { type: "heading", text: "3.8 AutoDock Vina 구조 기반 가상 스크리닝" },
    { type: "p", text:
      "ANGPTL4 fibrinogen-like domain에 21개 화합물을 도킹한 결과, Resmetirom(-9.07 kcal/mol), " +
      "Ezetimibe(-8.88), Pioglitazone(-8.28), Fenofibrate(-8.21), Empagliflozin(-8.14)이 상위 " +
      "5위를 차지하였다(Figure 6; Table 4; 21개 화합물 전체 순위는 Supplemental Table S7 참조). " +
      "그룹별로 보면 심혈관대사 약물군이 지방산군 및 무관 대조군보다 전반적으로 더 우수한 점수를 " +
      "보였으며, Metformin(-4.65)과 Caffeine(-5.36)이 가장 약한 결합력을 보여 기전적으로 " +
      "타당한 스크리닝임을 뒷받침하였다. 다만 분자 크기와 회전가능결합 수 역시 Vina 점수에 영향을 " +
      "줄 수 있으므로, 크기가 크게 다른 화합물 간의 절대적 순위 비교는 신중해야 함을 밝혀둔다." },
    { type: "figure", file: "figures/Vina_screening_ranked.png",
      caption: "Figure 6. ANGPTL4 fibrinogen-like domain(PDB 6EUB)에 대한 21개 화합물의 AutoDock " +
               "Vina 가상 스크리닝, 최고 결합친화도 순 정렬. 점선: -8.0 kcal/mol 참고 기준선. " +
               "전체 결과는 Supplemental Table S7 참조." },
    { type: "table",
      title: "Table 4. ANGPTL4(PDB 6EUB)에 대한 AutoDock Vina 상위 5개 화합물.",
      header: ["순위", "화합물", "최고 결합친화도 (kcal/mol)", "분류"],
      widths: [900, 2500, 3100, 2526],
      rows: [
        ["1", "Resmetirom", "-9.07", "심혈관대사/MASH 약물"],
        ["2", "Ezetimibe", "-8.88", "심혈관대사/MASH 약물"],
        ["3", "Pioglitazone", "-8.28", "심혈관대사/MASH 약물"],
        ["4", "Fenofibrate", "-8.21", "심혈관대사/MASH 약물"],
        ["5", "Empagliflozin", "-8.14", "심혈관대사/MASH 약물"],
      ] },

    { type: "heading", text: "3.9 DiffDock 교차검증: 선두 후보의 재조정" },
    { type: "p", text:
      "결합 부위를 사전 지정하지 않는 blind docking을 Vina 상위 3개 화합물 — Resmetirom, " +
      "Ezetimibe, 그리고 STITCH에서 이미 독립적으로 실제 ANGPTL4 화학적 파트너로 확인되어 " +
      "추가로 포함한 Pioglitazone(3.6절) — 에 적용한 결과, 시사하는 바가 큰 결과가 나타났다. " +
      "Pioglitazone의 최상위 pose(confidence −1.06, 셋 중 가장 우수)는 Vina 포켓 무게중심으로부터 " +
      "3.9Å, Ezetimibe의 최상위 pose(confidence −1.32)는 3.5Å 이내에 위치하여 — 화학구조가 " +
      "서로 무관한 두 화합물이 단백질 전체 표면을 탐색하는 독립적인 방법으로도 사실상 같은 " +
      "부위로 수렴하였다(Figure 7A, 7B), 두 pose는 접촉 잔기(Leu304, Leu312, Gly313, Ala314, " +
      "Leu322, Val324, Gly352, Thr353, His356)도 상당 부분 공유하였다. 반면 Resmetirom의 " +
      "최상위 pose(confidence −2.06)는 그로부터 23.5Å 떨어진 완전히 다른 표면 영역에 " +
      "국소화되었다(Figure 7C; 세 화합물 모두의 접촉 잔기 상세 정보는 Supplemental Text S2 " +
      "참조). 세 DiffDock confidence 값 모두 해당 방법의 저–중간 신뢰 구간에 속하므로 확정적 " +
      "결합으로 과대해석해서는 안 되지만, 엄밀히 비교했을 때 Vina 1위가 아닌 Pioglitazone과 " +
      "Ezetimibe가 두 개의 독립적인 도킹 알고리즘에 걸쳐 구조적으로 일관된 후보로 부상하였으며, " +
      "그 중에서도 Pioglitazone은 STITCH 화학적 연관성·Vina 순위·DiffDock 포켓 수렴이라는 " +
      "세 가지 독립적 근거를 모두 갖춘 유일한 화합물이다." },
    { type: "figure", file: "figures/composite/Figure7_pose_combined.png",
      caption: "Figure 7. Vina 상위 3개 화합물의 구조 기반 도킹 pose, DiffDock으로 교차검증. " +
               "(A) Pioglitazone(DiffDock confidence −1.06, 셋 중 최고), Vina 포켓으로부터 " +
               "3.9Å 이내로 수렴; 접촉 잔기 Leu304, Ala309, Leu312, Gly313, Ala314, Val317, " +
               "Leu322, Val324, Gly352, Thr353, His356, Lys381. (B) Ezetimibe(DiffDock " +
               "confidence −1.32), 같은 포켓으로부터 3.5Å 이내로 수렴; 접촉 잔기 Leu304, " +
               "Leu312, Gly313, Ala314, Leu322, Ser323, Val324, Trp349, Trp350, Gly352, " +
               "Thr353, His356. (C) Resmetirom(DiffDock confidence −2.06), Vina 포켓으로부터 " +
               "23.5Å 떨어진 별개 부위; 접촉 잔기 Trp280, Asp281, Ile367, Leu374, Tyr387, " +
               "Tyr388, Pro389." },

    { type: "heading", text: "3.10 간→심장 방향 리간드-수용체 매칭 및 STRING 네트워크" },
    { type: "p", text:
      "3.3절에서 기술한 대로, 완화된 통계 기준(padj<0.05, |log2FC|>1.0)에서만 간→LV 방향의 3건의 " +
      "매칭이 나타났다(Table 5). 이 중 Sema5b-Plxna1과 Sema5b-Plxna3를 seed로 삼아 STRING " +
      "네트워크를 첫 번째 상호작용 파트너까지 확장하였다(confidence≥0.7, 62개 엣지). C4a는 " +
      "seed에서 제외하였는데, STRING의 마우스 데이터베이스에는 C4a에 대응하는 별도 노드가 " +
      "존재하지 않는다는 것을 확인했기 때문이다(Ensembl 유전자 ID로 조회 시 0건 반환; 유전자 " +
      "심볼 'C4a'로 조회하면 전혀 다른 유전자인 'C5ar2'로 오매칭됨 — 마우스가 인간과 달리 C4a/Slp " +
      "및 C4b라는 절편중복(segmental duplication) 유래 paralog 쌍을 가지는 것과 관련된 " +
      "데이터베이스 한계로 판단된다). 이 네트워크에서 Plxna1(degree=17, betweenness=38.4)과 " +
      "Plxna3(degree=16, betweenness=22.4)가 seed 유전자 중 가장 중심적인 hub였으며, seed는 " +
      "아니지만 첫 번째 상호작용 파트너인 Plxna4(degree=14), Nrp1(degree=13), Nrp2(degree=11) " +
      "역시 높은 연결성을 보였다(Figure 8; 전체 hub 순위는 Supplemental Table S10 참조)." },
    { type: "table",
      title: "Table 5. 간→LV 리간드-수용체 매칭 결과 (CellChatDB, padj<0.05/|log2FC|>1.0 기준에서만 확인됨).",
      header: ["Interaction", "리간드", "수용체", "Pathway", "비고"],
      widths: [2200, 1300, 1300, 1500, 2726],
      rows: [
        ["SEMA5B_PLXNA1", "Sema5b", "Plxna1", "SEMA5", "STRING 최고 degree hub"],
        ["SEMA5B_PLXNA3", "Sema5b", "Plxna3", "SEMA5", "STRING 2위 degree hub"],
        ["C4A_C3AR1", "C4a", "C3ar1", "COMPLEMENT", "C4a는 STRING 마우스 DB에 노드 없음 (본문 참조)"],
      ] },
    { type: "figure", file: "figures/Sema5bAxis_network_ggraph.png",
      caption: "Figure 8. Sema5b-Plxna1/Plxna3 축을 중심으로 한 STRING 단백질-단백질 상호작용 " +
               "네트워크(confidence≥0.7, 첫 번째 상호작용 파트너 포함, 62개 엣지). 빨간 노드: seed " +
               "유전자(Sema5b, Plxna1, Plxna3); 파란 노드: STRING 상호작용 파트너(Plxna4, Nrp1, " +
               "Nrp2 등). 노드 크기는 degree에 비례하며, 엣지의 굵기와 불투명도는 STRING confidence " +
               "score에 비례한다." },

    { type: "heading", text: "3.11 종간 세포유형 국소화: 간(리간드)과 심장(수용체) 양쪽 검증" },
    { type: "p", text:
      "heart→liver 축(Angptl4)은 리간드가 심장에서, 수용체가 간에서 발현되므로 3.5절에서 간 " +
      "측만 국소화하면 충분하였다. 그러나 이 liver→heart 축은 정반대 구조 — 리간드(Sema5b)는 " +
      "간에서, 수용체(Plxna1, Plxna3, Nrp1, Nrp2)는 심장에서 — 이므로 양쪽 모두의 검증이 " +
      "필요하였다. 간 측은 3.5절과 동일한 GSE136103 아틀라스를 재사용하였으며, SEMA5B/PLXNA1/ " +
      "PLXNA3는 모두 Mesenchyme(간성상세포)에 주로 국소화되어 — heart→liver 축의 원 후보였던 " +
      "LUM/THY1/THBS2(서론, Supplemental Text S3)와 동일한 세포유형이었다 — NRP1/NRP2는 " +
      "Endothelia에 강하게 국소화되었다(Figure 9A). 심장 측은 2.11절에서 기술한 새로운 참조 " +
      "자료인 Tabula Muris 마우스 심장(droplet, Heart+Aorta, 624세포)를 조회하였다. 그 결과는 " +
      "뚜렷한 비대칭을 보였다: STRING에서 가장 중심적인 hub이자 CellChatDB가 직접 매칭한 " +
      "수용체인 Plxna1은 심근세포에서 5.0%, 섬유아세포에서 4.9%, 내피세포에서 4.5%로 모든 " +
      "세포유형에서 미약하게만 검출된 반면, CellChatDB가 직접 매칭하지 않은 첫 번째 STRING " +
      "상호작용 파트너 Nrp1은 심내막세포의 96.8%, 내피세포의 94.9%, 섬유아세포의 74.8%에서 " +
      "검출되어 압도적으로 강한 신호를 보였다(Figure 9B; 전체 결과는 Supplemental Table S11 " +
      "참조). Sema5b는 예상대로 심장 내 모든 세포유형에서 검출되지 않았는데, 이는 결함이 " +
      "아니라 Sema5b가 간에서 분비되어 심장에 도달하는 리간드이므로 애초에 심장 조직 자체에서 " +
      "발현될 필요가 없기 때문이다(수용 측 검증이므로 리간드 발현 자체는 확인 대상이 아님)." },
    { type: "figure", file: "figures/composite/FigureSema5bLocalization_combined.png",
      caption: "Figure 9. Sema5b-Plxna1 축 유전자의 종간 세포유형 국소화, 리간드(간)와 수용체" +
               "(심장) 양쪽. (A) 간 측(GSE136103, 인간 간경변 atlas): SEMA5B/PLXNA1/PLXNA3는 " +
               "Mesenchyme에, NRP1/NRP2는 Endothelia에 국소화된다. (B) 심장 측(Tabula Muris " +
               "마우스 Heart+Aorta droplet atlas, n=624세포): CellChatDB가 직접 매칭한 수용체인 " +
               "Plxna1(≤5%)보다 첫 번째 STRING 상호작용 파트너인 Nrp1(최대 96.8%)이 훨씬 " +
               "강하고 넓게 발현된다." },

    { type: "heading", text: "3.12 STITCH 네트워크 약리학: Nrp1/Nrp2에서만 실제 화합물 신호" },
    { type: "p", text:
      "STITCH 조회 결과, Sema5b/Plxna1/Plxna3의 화학적 파트너는 모두 결정화 완충액 유래 " +
      "인공물(N-Acetyl-Hexosamine, Glycerol, Magnesium ion, ADP 등)뿐이었고 실제 약물성 " +
      "화합물은 전혀 없었다. 반면 Nrp1은 Imatinib(승인 항암제) 1건을, Nrp2는 Vatalanib, " +
      "Cediranib, Semaxinib(SU5416), Pazopanib(승인 다중 키나아제 억제제), Fasudil(승인 " +
      "ROCK 억제제)을 포함해 훨씬 풍부한 실제 화합물 신호를 반환하였다(Table 6; 전체 결과는 " +
      "Supplemental Table S12 참조). 이는 3.11절의 발현 국소화 비대칭과 같은 방향을 가리키는 " +
      "독립적인 근거로, Plxna1/Plxna3보다 Nrp1/Nrp2가 실제 화합물 상호작용 데이터베이스에 " +
      "훨씬 풍부하게 기록되어 있음을 보여준다." },
    { type: "table",
      title: "Table 6. Sema5b-Plxna1 축 유전자의 STITCH 화학적 파트너 (선별).",
      header: ["유전자", "화합물"],
      widths: [3013, 6013],
      rows: [
        ["Sema5b / Plxna1 / Plxna3", "결정화 완충액 유래 인공물뿐 (실제 화합물 없음)"],
        ["Nrp1", "Imatinib (승인 항암제)"],
        ["Nrp2", "Pazopanib (승인 다중 키나아제 억제제)"],
        ["Nrp2", "Fasudil (승인 ROCK 억제제)"],
        ["Nrp2", "Cediranib, Vatalanib, Semaxinib (후기임상/연구용 키나아제 억제제)"],
      ] },

    { type: "heading", text: "3.13 구조 액셔너빌리티 평가 및 표적 재조정: Plxna1에서 Nrp1으로" },
    { type: "p", text:
      "2.12절에서 기술한 UniProt 검색 오류를 수정한 뒤, 각 후보 유전자의 PDB 구조를 재검토하였다. " +
      "PLXNA1(UniProt Q9UIW2)은 apo 상태의 ectodomain 구조 2건(7Y4P, 3.50Å; 7Y4Q, 4.70Å; " +
      "Tanaka et al., 2022)만을 가지고 있었고, PLXNA3와 SEMA5B는 공개된 구조가 전무하였다. 사실 " +
      "plexin 계열 단백질 전체를 통틀어 소분자가 결합된 공개 구조는 단 하나도 없었다. 반면 " +
      "NRP1(O14786)은 25개의 PDB 구조를 가지고 있었으며, 그중 6FMC는 소분자 저해제 EG01377이 " +
      "결합된 0.90Å 초고해상도 구조였다(Powell et al., 2018). NRP2(O60462) 역시 16개 구조를 " +
      "가지고 있었다(Table 7). 이 비대칭 — CellChatDB가 직접 매칭한 수용체(Plxna1)는 구조적으로 " +
      "액셔너블하지 않은 반면, 첫 번째 STRING 상호작용 파트너(Nrp1)는 소분자 결합 포켓까지 " +
      "해결된 고해상도 구조를 갖춤 — 은 3.7절에서 기술한 heart→liver 축의 Sdc1/Sdc4→Angptl4 " +
      "재조정과 정확히 같은 논리 구조이다. 다만 두 재조정 사이에는 중요한 차이가 있다: heart→liver " +
      "축의 재조정은 리간드(Angptl4) 자체로 옮겨간 것이지만, 이번 재조정은 수용체 복합체 내의 " +
      "다른 노드(Nrp1)로 옮겨가는 것이며, Nrp1이 실제로 Sema5b-Plxna1 신호전달의 보조수용체로 " +
      "기능하는지는 문헌상 확립되어 있지 않다(4절에서 상세히 논의). Neuropilin이 보조수용체로 " +
      "명확히 검증된 것은 III형 분비성 semaphorin이 Plexin-A 계열과 결합하는 경우이며(Takahashi " +
      "et al., 1999), Sema5b는 V형 semaphorin으로 수용체 특이성이 다를 수 있다 — 실제로 근연 " +
      "유전자 Sema5a는 Plexin-B3에 결합하지만 Sema5b는 결합하지 않는다는 것이 알려져 있다" +
      "(Artigiani et al., 2004), 즉 5형 semaphorin 내에서도 paralog 간 수용체 특이성이 " +
      "엄격하다. 이에 본 연구는 어느 한쪽을 미리 배제하지 않고 Plxna1과 Nrp1 양쪽 모두를 " +
      "구조 기반 도킹 표적으로 사용하여, 데이터 자체가 어느 쪽이 더 방어 가능한지 답하도록 " +
      "하였다(3.15-3.16절)." },
    { type: "table",
      title: "Table 7. Sema5b-Plxna1 축 유전자의 PDB 구조 요약.",
      header: ["유전자", "UniProt", "PDB 구조 수", "소분자 결합 구조", "비고"],
      widths: [1600, 1600, 1600, 1800, 2426],
      rows: [
        ["PLXNA1", "Q9UIW2", "2", "없음", "apo ectodomain (7Y4P 3.50Å, 7Y4Q 4.70Å)"],
        ["PLXNA3", "P51805", "0", "없음", "구조 전무"],
        ["SEMA5B", "Q9P283", "0", "없음", "구조 전무"],
        ["NRP1", "O14786", "25", "있음 (6FMC, 0.90Å)", "EG01377 결합 b1 domain — 최종 표적"],
        ["NRP2", "O60462", "16", "있음", "다수 저해제 결합 구조"],
      ] },

    { type: "heading", text: "3.14 Druggability 평가 (DGIdb)" },
    { type: "p", text:
      "DGIdb 조회 결과는 3.12절의 STITCH 결과 및 3.13절의 구조 평가와 일관되었다. Plxna1, " +
      "Plxna3, Sema5b는 모두 0건의 약물 상호작용을 보인 반면, Nrp1과 Nrp2는 각각 다수의 " +
      "상호작용을 보였다(Table 8; 전체 결과는 Supplemental Table S13 참조)." },
    { type: "table",
      title: "Table 8. Sema5b-Plxna1 축 유전자의 DGIdb druggability 요약.",
      header: ["유전자", "상호작용 수", "예시 약물"],
      widths: [2000, 2000, 5013],
      rows: [
        ["PLXNA1", "0", "-"],
        ["PLXNA3", "0", "-"],
        ["SEMA5B", "0", "-"],
        ["NRP1", "5", "Palifermin, Pegaptanib, Vesencumab, EG01377, EG00229"],
        ["NRP2", "1", "Daunorubicin liposomal"],
      ] },

    { type: "heading", text: "3.15 이중 표적 AutoDock Vina 스크리닝: Nrp1 vs. Plxna1" },
    { type: "p", text:
      "11개 화합물 라이브러리를 Nrp1(포켓 특이적 box)과 Plxna1(Sema domain 중심 domain-level " +
      "blind box) 양쪽에 독립적으로 스크리닝하였다(Figure 10; 전체 결과는 Supplemental Table " +
      "S14 참조). Nrp1에서는 STITCH가 실제 화학적 파트너로 확인한 화합물들(Imatinib −7.98, " +
      "Vatalanib −7.97, Semaxinib −7.26, Pazopanib −7.23 kcal/mol)이 기전상 무관한 대조군" +
      "(Aspirin, Caffeine, Metoprolol, Fasudil; −4.98~−6.30 kcal/mol)보다 뚜렷하게 우수한 " +
      "점수를 보였고, 자기도킹 양성대조군인 EG01377도 −7.10 kcal/mol로 중상위권에 위치하여 " +
      "특이성이 있는 결과임을 시사하였다. 반면 Plxna1에서는 Nrp1을 표적으로 설계된 EG01377이 " +
      "−9.15 kcal/mol로 실제 Vina 1위인 Imatinib(−9.96)과 거의 동률을 이루었는데, 이는 " +
      "특정 화합물-표적 상호작용이 아니라 넓은 blind box 내에서 분자 크기가 클수록 유리해지는 " +
      "일반적인 인공물일 가능성을 시사하는 경고 신호이다." },
    { type: "figure", file: "figures/composite/FigureVina_dual_combined.png",
      caption: "Figure 10. 이중 표적 AutoDock Vina 스크리닝. (A) Nrp1(PDB 6FMC, EG01377 " +
               "포켓 특이적 box): STITCH 화학적 파트너(빨강)가 무관한 대조군(회색)보다 뚜렷하게 " +
               "우수하며, 자기도킹 양성대조군 EG01377(파랑)도 중상위권. (B) Plxna1(PDB 7Y4P, " +
               "Sema domain 중심 domain-level blind box): Nrp1 전용으로 설계된 EG01377이 " +
               "실제 1위 화합물과 거의 동률 — 특이성 없는 인공물일 가능성을 시사." },

    { type: "heading", text: "3.16 DiffDock 교차검증: 결정적 분기" },
    { type: "p", text:
      "두 표적 각각의 Vina 1위 화합물(공교롭게도 둘 다 Imatinib)을 DiffDock으로 교차검증한 결과, " +
      "3.15절의 우려가 뚜렷하게 갈렸다. Nrp1에서는 DiffDock의 최상위 pose(confidence −1.51)가 " +
      "Vina 포켓(EG01377 무게중심)으로부터 단 1.9Å 이내에 수렴하였으며, 접촉 잔기(Tyr297, " +
      "Trp301, Asp320, Glu348, Lys350, Lys351, Tyr353)는 문헌상 VEGF-A/Sema3A의 C-말단 " +
      "아르기닌과 EG-계열 저해제가 결합하는 것으로 알려진 바로 그 b1 domain 포켓과 일치하였다 " +
      "(Figure 11A). 반면 Plxna1에서는 DiffDock의 최상위 pose(confidence −1.65)가 Vina " +
      "box로부터 22.7Å 떨어진 완전히 다른 부위(접촉 잔기 Lys156, Glu196, Gln221, Ser226, " +
      "Gln228, Leu229, Lys230, Phe292, Leu388, Gln413, Pro414)에 위치하여, 사전 지정 없는 " +
      "독립적 방법이 Sema domain 표적 부위에 전혀 동의하지 않았다(Figure 11B). 두 DiffDock " +
      "confidence 값(−1.51, −1.65) 모두 해당 방법의 저–중간 신뢰 구간에 속하지만, Vina와 " +
      "DiffDock이 pose 위치에서 완전히 독립적으로 일치하는지 여부는 결합 부위의 생물학적 " +
      "타당성을 판단하는 데 그 자체로 유효한 근거이다. 이에 따라 본 연구는 Nrp1을 이 축의 " +
      "구조적으로 뒷받침되는 최종 표적으로, Plxna1은 CellChatDB가 직접 매칭한 원래 후보이지만 " +
      "구조·발현·독립적 도킹 방법 세 가지 모두에서 뒷받침되지 않는 가설 생성적 결과로 " +
      "구분하여 보고한다." },
    { type: "figure", file: "figures/composite/FigurePose_dual_combined.png",
      caption: "Figure 11. Imatinib의 이중 표적 DiffDock 교차검증 결과. (A) Nrp1(PDB 6FMC): " +
               "DiffDock 최상위 pose(confidence −1.51)가 Vina 포켓으로부터 1.9Å 이내로 수렴하며, " +
               "접촉 잔기가 문헌상 알려진 b1 domain 포켓과 일치. (B) Plxna1(PDB 7Y4P): DiffDock " +
               "최상위 pose(confidence −1.65)가 Vina box로부터 22.7Å 떨어진 별개 부위에 위치 — " +
               "두 독립적 방법이 서로 다른 결합 부위를 가리켜 신뢰도가 낮음." },
  ],

  discussion: [
    "본 연구는 최근 공개된 간-심장 페어드 마우스 코호트를 더 엄격한 통계 기준으로 재분석하는 " +
    "것에서 출발하였으나, 가장 중요한 발견은 당초 가설 — 간이 분비하는 인자가 HFpEF 관련 심장 " +
    "리모델링을 유발한다는 가설 — 이 데이터로 뒷받침되지 않았다는 점이다. CellChatDB 매칭과 제약 " +
    "없는 STRING 탐색(Figure 4; 3.3절) 모두에서 간→심장 방향의 교차-장기 엣지가 전혀 없었다는 " +
    "사실은, 방법론적 실패가 아니라 이 특정 모델·통계 기준에서의 진정한 데이터베이스 수준의 신호로 " +
    "해석해야 한다.",

    "대신 확인된 심장→간 방향의 Angptl4-Sdc/Cdh5 축은 임상의학에서 오랫동안 인식되어 온 울혈성 " +
    "간병증 및 최근 부상하는 심장-간 증후군 개념과 정확히 부합한다. Angptl4가 심장 섬유아세포에서 " +
    "특이적으로 분비되어 HFpEF 심장에서 혈관신생을 억제한다는 독립적인 2024년 단일세포 연구 결과" +
    "(Li et al., 2024)는, 완전히 다른 실험적 방법론을 통해 본 연구 자체의 bulk DEG 결과(Figure " +
    "1B)를 재현해준다는 점에서 이 축에 대한 신뢰도를 크게 높여준다.",

    "본 연구의 네트워크 분석에서 가장 중심적으로 연결된 유전자인 Sdc1과 Sdc4(Figure 4)는 " +
    "구조적으로 액셔너블하지 않은 것으로 드러났다 — 등록된 모든 결정구조가 세포외 리간드 결합면이 " +
    "아닌 다른 도메인만을 포함하고 있었다. '네트워크 중심성상 가장 중요함'과 '현재 구조 기반 " +
    "방법으로 액셔너블함' 사이의 이러한 괴리는, hub 유전자를 곧바로 최종 표적으로 승격시키는 " +
    "네트워크 약리학 연구들에서 항상 명시적으로 드러나지는 않는 실질적 한계이다. 본 연구는 이 " +
    "간극을 얼버무리지 않고, 도킹 캠페인의 표적을 Angptl4 자체로 재조정하였다(3.7절, " +
    "Supplemental Text S1).",

    "Resmetirom과 Ezetimibe에 대한 AutoDock Vina와 DiffDock의 결과 괴리(Figure 7) 역시 " +
    "시사하는 바가 크다. Vina는 사전에 정의된 단일 포켓 내에서의 상대적 순위를 제공하는 반면, " +
    "DiffDock은 단백질 전체 표면을 탐색한다. 따라서 두 방법이 pose 위치에서 일치한다는 것은 그 " +
    "부위가 특정 방법의 채점 방식에서 비롯된 인공물이 아니라 생물학적으로 의미 있는 부위라는 " +
    "독립적 근거가 된다. Resmetirom이 Vina에서 최고 점수를 얻었음에도 DiffDock이 완전히 다른 " +
    "부위를 선호했다는 사실은, 단일 도킹 알고리즘만으로 최종 후보를 선정하는 것의 위험성을 " +
    "보여주며, 이번 스크리닝에서 Ezetimibe가 더 정당화될 수 있는 가설 생성적 선도물질임을 " +
    "뒷받침한다.",

    "Ezetimibe의 기존 작용기전 — 장 브러시보더막의 콜레스테롤 수송체 NPC1L1 억제, ANGPTL4와는 " +
    "무관한 것으로 알려진 기전 — 을 이번 결과에 비추어 재해석할 가치가 있다. 만약 예측된 " +
    "ANGPTL4 결합 pose가 생화학적으로 확인된다면, Ezetimibe는 진정한 이중 기전(dual-action)의 " +
    "다중 표적 약물 재창출(multi-target drug repurposing) 사례가 된다: 장에서 NPC1L1을 통해 " +
    "콜레스테롤 흡수를 억제하는 고전적 효과에 더해, 심장에서 유래한 신호(Angptl4)를 간에서 직접 " +
    "가로채는 지금까지 알려지지 않은 두 번째 작용을 통해, 심장-간 축이 초래하는 하위 대사적 " +
    "결과만이 아니라 그 발원지 자체를 차단할 가능성이 생긴다. 같은 이중 기전 논리는 " +
    "Pioglitazone에도 — 어쩌면 더 강하게 — 적용된다: 이미 인슐린 저항성 치료에 쓰이는 PPAR-γ " +
    "작용제인 Pioglitazone이 STITCH에서 독립적으로 확인된 Angptl4와의 연관성(3.6절)과 " +
    "Ezetimibe와 같은 포켓으로 수렴하는 DiffDock 결과(3.9절)를 함께 보면, 이 약물의 알려진 " +
    "대사 개선 효과 중 일부가 핵수용체 매개 작용에 더해 이 심장 유래 신호를 직접 " +
    "가로채는 것과도 관련이 있을 가능성이 제기된다. 이 둘 모두 도킹 데이터가 생성한 가설로 " +
    "제시하는 것이지 확립된 약리기전으로 주장하는 것이 아니며, 정확히 5절에서 제안하는 " +
    "wet-lab 검증 계획이 확인하도록 설계된 바로 그 가능성이다.",

    "3.10-3.16절에서 다룬 liver→heart 축은 이 논의를 한 단계 더 밀고 나간다. 이 축은 " +
    "heart→liver 축과 정확히 같은 재조정 논리 — 네트워크 중심성이 곧 구조적 액셔너빌리티를 " +
    "보장하지 않는다 — 를 따르지만, 재조정의 방향이 다르다: heart→liver 축에서는 표적이 " +
    "수용체(Sdc1/Sdc4)에서 리간드(Angptl4) 자체로 옮겨갔지만, liver→heart 축에서는 표적이 " +
    "CellChatDB가 직접 매칭한 수용체(Plxna1)에서 그 수용체 복합체 내의 다른 노드(Nrp1)로 " +
    "옮겨갔다. 이 차이는 사소하지 않다: Angptl4로의 재조정은 '같은 분자를 표적으로 삼되 " +
    "다른 도메인을 겨냥한다'는 안전한 재조정인 반면, Nrp1으로의 재조정은 '전혀 다른 분자를 " +
    "표적으로 삼는다'는 훨씬 대담한 가정을 필요로 한다. 이 가정이 정당화되려면 Nrp1이 " +
    "실제로 Sema5b-Plxna1 신호전달 복합체의 일부로 기능해야 하는데, 이는 확립된 사실이 " +
    "아니라 명시적 가설이다 — Neuropilin의 보조수용체 역할이 구조적으로 검증된 것은 III형 " +
    "분비성 semaphorin이 Plexin-A와 결합하는 경우이며(Takahashi et al., 1999), Sema5b는 " +
    "V형 semaphorin으로 그 근연 유전자인 Sema5a조차 Plexin-B3에 대한 결합 특이성이 " +
    "paralog-specific함이 알려져 있다(Sema5a는 결합하지만 Sema5b는 결합하지 않음; Artigiani " +
    "et al., 2004). 이러한 이유로 본 연구는 Nrp1을 '확립된 표적'이 아니라 '구조·발현·독립적 " +
    "도킹 방법이라는 세 갈래의 간접 증거가 수렴하는 가장 방어 가능한 가설'로 제시하며, Plxna1 " +
    "도킹 결과는 같은 엄격도로 나란히 보고하되 세 증거 모두에서 뒷받침되지 않는다는 점을 " +
    "숨기지 않는다(3.13-3.16절).",

    "두 축을 나란히 놓고 보면 흥미로운 비대칭이 드러난다. heart→liver 축(Angptl4-Sdc/Cdh5)은 " +
    "통계 기준을 엄격하게 잡든 완화하든 동일하게 재현되는 반면(3.3절), liver→heart 축" +
    "(Sema5b-Plxna1/Plxna3)은 완화된 기준(padj<0.05, |log2FC|>1.0)에서만 나타나고 더 엄격한 " +
    "기준(padj<0.01, |log2FC|>1.5)에서는 사라진다. 이 비대칭을 얼버무리지 않는 것이 중요하다: " +
    "이는 liver→heart 축이 heart→liver 축보다 통계적으로 더 약한 신호이며, 따라서 " +
    "가설 생성적(hypothesis-generating) 성격이 더 강하다는 것을 의미한다. 3.2절에서 관찰한 " +
    "GSEA(기준 무관)와 ORA(기준 의존)의 대비 역시 같은 메시지를 준다: 통계 기준의 선택은 " +
    "단순한 형식적 절차가 아니라 어떤 생물학적 가설이 '보이는지' 자체를 결정하며, 본 연구는 " +
    "이를 감추는 대신 정직하게 두 기준 모두에서 얻은 결과를 나란히 제시함으로써 독자가 각 " +
    "축의 증거 강도를 스스로 판단할 수 있게 하였다. 그럼에도 불구하고, 두 축을 종합하면 " +
    "심장-간 상호작용이 한쪽 방향의 단일 신호가 아니라 서로 다른 신뢰도를 가진 양방향 회로일 " +
    "가능성을 시사하며, 이는 심장-간 증후군을 단일 방향의 울혈성 손상으로만 보던 기존 임상적 " +
    "관점을 확장할 잠재력을 가진다.",

    "몇 가지 한계를 명시해야 한다. 첫째, 본 분석은 소규모 표본(군당 n=5)의 단일 마우스 모델에 " +
    "기반하므로 독립적 재현이 필요하다. 둘째, 심장 측 Angptl4 분비원은 본 연구 자체의 단일세포 " +
    "데이터가 아니라 독립적인 문헌 보고를 통해서만 확인되었다. 셋째, 로컬 GPU의 부재로 " +
    "DiffDock은 21개 전체 화합물이 아니라 Vina 상위 화합물(Resmetirom, Ezetimibe, 그리고 " +
    "STITCH에서 이미 독립적으로 실제 ANGPTL4 화학적 파트너로 확인되었기에 포함한 " +
    "Pioglitazone; liver→heart 축은 두 표적 각각의 Vina 1위 화합물 Imatinib)에 한해 공개 " +
    "웹 인터페이스를 통해서만 수행되었다. 넷째, 본 연구에서 제시된 모든 결합친화도는 in " +
    "silico 예측치이며, 어떠한 치료적 주장을 하기에 앞서 Western blot, SPR, ITC 등을 통한 " +
    "생화학적 검증이 필요하다. 다섯째, liver→heart 축의 Nrp1 표적화는 Sema5b-Plxna1 신호전달 " +
    "복합체에서 Nrp1의 직접적 역할을 가정하는데, 이는 위에서 논의했듯 문헌상 확립되지 않은 " +
    "가설이다 — 도킹 결과가 Nrp1을 '방어 가능한 구조 기반 표적'으로 뒷받침하는 것과, Nrp1이 " +
    "'이 특정 신호전달의 생물학적 보조수용체'라고 확정하는 것은 다른 수준의 주장임을 " +
    "명확히 구분해야 한다. 여섯째, Plxna1 도킹은 알려진 결합 포켓이 없는 domain-level blind " +
    "box를 사용하였고, 자기도킹 대조군이 실제 상위 화합물과 거의 동률을 이루었다는 점에서 " +
    "(3.15절) 이 결과 자체의 신뢰도가 낮다는 것을 반복해서 강조한다.",
  ],

  conclusion: {
    summary:
      "본 연구는 공개된 간-심장 페어드 마우스 전사체 데이터를 통계 기준의 민감도 분석을 거쳐 " +
      "재조정된 기준(padj<0.05, |log2FC|>1.0)으로 재분석하고, 리간드-수용체 인터랙톰 매칭, PPI " +
      "네트워크 구축, 네트워크 약리학, druggability 평가, 구조 기반 가상 스크리닝까지 분석을 " +
      "이어감으로써 심장-간 축을 양방향 회로로 확인하였다. 통계적으로 견고한 heart→liver 방향 " +
      "에서는 당초 가설이었던 간→심장 대신 심장→간 방향의 Angptl4-Sdc/Cdh5 축이 확인되었으며 — " +
      "이는 임상적으로 확립된 심장-간 증후군 개념에 대응한다 — 네트워크 hub인 Sdc1/Sdc4가 " +
      "구조적으로 액셔너블하지 않다는 점을 인식하고 표적을 Angptl4 자체로 재조정한 결과, 여러 " +
      "독립적인 도킹 알고리즘에 걸쳐 가장 일관되게 교차검증된 후보로 Pioglitazone과 Ezetimibe를 " +
      "확인하였다. 통계적으로 더 미묘한 liver→heart 방향에서는 완화된 기준에서만 나타나는 " +
      "Sema5b-Plxna1/Plxna3 축을 동일한 엄격도로 끝까지 추적하여, CellChatDB가 직접 매칭한 " +
      "수용체(Plxna1)의 발현·구조적 한계를 확인하고 첫 번째 STRING 상호작용 파트너인 Nrp1으로 " +
      "표적을 재조정하였다 — Nrp1은 Vina와 DiffDock 두 독립적 방법 모두에서 문헌상 알려진 결합 " +
      "부위로 수렴한 반면, Plxna1 도킹은 두 방법이 서로 다른 부위를 가리켜 가설 생성적 수준에 " +
      "머물렀다. 이 모든 결과는 여전히 in silico 예측에 머물러 있으므로, 아래에서는 일반적인 " +
      "향후 연구 방향 나열 대신 통계적으로 더 견고한 heart→liver 축을 중심으로 한 구체적인 " +
      "wet-lab 검증 파이프라인을 제시하고, 마지막에 liver→heart 축에 대한 유사한 검증 방향을 " +
      "간략히 제안한다.",
    planIntro:
      "제안하는 검증 파이프라인은 conditioned-media 패러다임을 따른다 — 스트레스를 받은/분비하는 " +
      "공여세포가 분비인자를 수용세포로 전달하고, 그 수용세포 측에서 약리학적 차단을 테스트하는 " +
      "방식으로, 본 연구실의 선행 연구에서 지방세포의 apoptosis 유래 분비인자에 대한 대식세포 및 " +
      "AML12 간세포의 반응을 모델링할 때 사용한 것과 동일한 전반적 설계이다. 이 패러다임을 본 " +
      "연구에서 발굴한 심장→간 축에 맞게 적용하면 다음과 같은 구체적 단계가 된다:",
    steps: [
      { h: "(1) 세포 모델", p:
        "Angptl4를 분비하는 공여세포로 1차 마우스 심장 섬유아세포(또는 불멸화된 심장 섬유아세포 " +
        "주)를 사용하고, 수용세포로는 AML12 마우스 간세포주와 1차 마우스 간성상세포(HSC) 두 " +
        "종류를 짝짓는다 — 이는 3.4~3.5절에서 Sdc1/Sdc4(간세포)와 하위 섬유화 신호전달(간성상세포)이 " +
        "각각 국소화된 세포유형과 일치하도록 선정한 것이다."
      },
      { h: "(2) 약리학적 차단을 동반한 Conditioned-media 전달", p:
        "HFpEF 유사 스트레스(예: 기계적 신전, 또는 본 연구의 in vivo 2-hit 요법에 준하는 대사·" +
        "고혈압 스트레스) 조건의 심장 섬유아세포에서 conditioned media를 수집하고, ELISA로 분비된 " +
        "Angptl4의 상승을 확인한 뒤, 이 conditioned media를 간세포/간성상세포에 구조적으로 " +
        "교차검증된 두 후보(Ezetimibe와 Pioglitazone; 3.9절) 각각의 전처리 유무 및 예측된 " +
        "결합친화도를 포괄하는 용량 범위로 나누어 처리한다. 전체 conditioned-media 설계에 " +
        "들어가기 전, 재조합 ANGPTL4 단백질을 이용한 단순화된 양성대조군 실험을 병행하여 예비 " +
        "검증하는 것이 바람직하다."
      },
      { h: "(3) 검출", p:
        "배지 상등액이 아니라 세포 전체 파쇄액(whole-cell lysate)을 수확하여 Western blot을 " +
        "수행한다 — 기전적 질문은 분비 리간드 자체가 아니라 수용세포 내 신호전달에 관한 것이기 " +
        "때문이다. 관련 하위 경로의 총단백질과 인산화형을 모두 검출한다(예: TGF-β 연관 섬유화 " +
        "readout을 위한 SMAD2/3 인산화, 혹은 염증 readout을 위한 NF-κB/p65 인산화), 그리고 " +
        "fibronectin, collagen I 등 섬유화 표지자를 기능적 종점으로 함께 확인한다."
      },
      { h: "(4) 샘플 규모 및 블롯팅 실무", p:
        "이러한 설계(공여세포 스트레스 조건 × 수용세포 유형 × Ezetimibe 용량, 각 반복포함)는 " +
        "현실적으로 한 번에 처리·블롯팅하는 샘플이 대략 17개 안팎에 이른다. 이 규모에서는 2차 " +
        "항체의 균일한 블로킹이 실질적인 실험적 제약이 된다 — 2차 항체 반응 단계에서 넉넉한 " +
        "양(예: 180mL 규모)의 신선하게 준비한 3% BSA in PBST를 사용하면 멤브레인 전체에 걸쳐 " +
        "균일한 블로킹과 항체 결합을 확보할 수 있으며, 이는 처리군 간에 예상되는 미세한 신호" +
        "변화를 레인 간·멤브레인 가장자리 배경 잡음에 묻히지 않고 정확히 잡아내는 데 중요하다."
      },
      { h: "(5) In vivo 후속 검증", p:
        "체외 데이터가 ANGPTL4-Ezetimibe의 직접적 결합과 하위 신호 차단을 뒷받침한다면, 자연스러운 " +
        "다음 단계는 본 연구와 동일한 2-hit HFpEF 마우스 모델에 Ezetimibe를 투여하여, Ezetimibe " +
        "고유의 콜레스테롤 저하 효과와 독립적으로 간 섬유화·염증 표지자가 개선되는지 평가하는 " +
        "것이다(예: 콜레스테롤 흡수 경로만을 분리하는 식이/유전적 대조군을 포함하여)."
      },
    ],
    closing:
      "이 구체적 파이프라인 외에도, SPR 또는 ITC를 통한 ANGPTL4-Ezetimibe 결합의 생화학적 검증과 " +
      "GPU 환경에서의 전체 라이브러리 DiffDock 재스크리닝은 여전히 가치 있는 보완적 방향으로 " +
      "남아있다. liver→heart 축(Sema5b-Nrp1)에 대해서는, 같은 conditioned-media 패러다임을 " +
      "방향만 뒤집어 적용할 수 있다: 이번에는 1차 마우스 간성상세포(HSC)를 Sema5b 분비 " +
      "공여세포로, 1차 마우스 심장 내피세포 또는 심내막세포(Tabula Muris에서 Nrp1 발현이 " +
      "가장 높았던 세포유형, 3.11절)를 수용세포로 삼아, Nrp1 저해제 후보(EG01377 또는 Imatinib) " +
      "전처리 유무에 따라 VEGF/semaphorin 하위 신호(예: Rac1/RhoA 활성, 내피 이동성 assay)가 " +
      "변화하는지 확인한다. 다만 이 축은 통계적으로 더 미묘하고 Nrp1의 직접적 역할이 가설 " +
      "수준이므로(4절), 어떠한 체외 검증에 앞서 재조합 Sema5b 단백질과 Nrp1의 직접 결합 여부를 " +
      "SPR/ITC로 먼저 확인하는 것이 순서상 우선되어야 한다.",
  },

  codeWalkthrough: {
    intro:
      "본 연구의 모든 코드, 중간 결과, figure는 github.com/bioinform25/essay에서 버전관리되고 " +
      "있다. 저장소는 scripts/(아래 번호 순서대로 실행하는 분석 코드), results/(CSV 결과물 및 텍스트 " +
      "요약), figures/(모든 PNG figure, 다중 패널 합성 이미지는 figures/composite/ 하위), " +
      "docking/(수용체·리간드 PDBQT 파일 및 Vina/DiffDock 결과), manuscript/(본 문서 빌드 스크립트 " +
      "및 콘텐츠)로 구성되어 있다. 아래 목록은 전체 분석을 단계별로 재현하거나 감사할 수 있도록 " +
      "모든 스크립트를 실행 순서대로 설명한다.",
    items: [
      { file: "00_check_packages.R / 00b-00d", desc: "파이프라인 실행 전 필요한 R 패키지(DESeq2, clusterProfiler, fgsea, msigdbr, EnhancedVolcano, pheatmap, igraph, CellChat, RCy3) 설치 여부 확인/설치." },
      { file: "01_deseq2_analysis.R", desc: "Zenodo raw count 매트릭스와 메타데이터를 불러와 간·LV 각각에 대해 독립적으로 DESeq2를 실행하고, apeglm 축소를 적용해 전체/유의(padj<0.01, |log2FC|>1.5) DEG 테이블, volcano plot, heatmap을 산출." },
      { file: "02_gsea_go_kegg.R", desc: "sign(log2FC)×(−log10 p)로 순위화한 Hallmark GSEA(fgsea)와, 유의 DEG 목록에 대한 GO-BP·KEGG 과대표현분석(clusterProfiler)을 장기별로 수행." },
      { file: "03_ligand_receptor_matching.R", desc: "상향 DEG(후보 리간드)를 CellChatDB.mouse 리간드-수용체 쌍과 매칭. 수용체 측 기준은 baseMean≥10 발현으로 완화하였으며, 간→LV·LV→간 양방향 모두 검증." },
      { file: "04_string_ppi_network.R", desc: "유의 유전자 전체 집합을 STRING API로 조회해 교차-장기 엣지를 직접 탐색(결과: 가설 방향에서 0건)." },
      { file: "05_angptl4_axis_network.R / 05b", desc: "Angptl4/Cdh5/Sdc1-4 seed 세트를 STRING 첫 번째 상호작용 파트너로 확장하고, igraph로 degree/betweenness centrality를 계산해 네트워크 그림을 생성." },
      { file: "06_liver_localization_atlas.R", desc: "이미 구축·주석된 GSE136103 Seurat 아틀라스(구축 파이프라인은 Supplemental Text S3 참조)를 다시 불러와 Angptl4 축 유전자의 간 세포유형별 DotPlot을 생성." },
      { file: "07_stitch_network_pharmacology.R", desc: "각 hub 유전자의 화학적 파트너를 STITCH API로 조회하고 PubChem CID를 화합물명으로 변환." },
      { file: "08_druggability_dgidb.R", desc: "각 hub 유전자(인간 오소로그 심볼)의 기존 약물 상호작용을 DGIdb 5.0 GraphQL API로 조회." },
      { file: "09_build_ligand_library.py", desc: "21개 화합물 도킹 라이브러리의 정규 SMILES를 PubChem PUG-REST로 확보." },
      { file: "10_prepare_receptor.py", desc: "PDB 6EUB에서 물 분자·결정화 첨가물을 제거하고, 1PE 부위 무게중심을 도킹 박스 중심으로 계산해 Meeko로 수용체 PDBQT 생성." },
      { file: "11_prepare_ligands.py", desc: "21개 리간드 전체에 대해 3차원 구조(RDKit ETKDGv3/MMFF94)를 생성하고 Meeko로 PDBQT 변환." },
      { file: "12_run_vina_screening.py", desc: "준비된 수용체에 대해 모든 리간드로 AutoDock Vina를 실행하고 최고 결합친화도를 집계." },
      { file: "13_vina_results_plot.R", desc: "순위화된 Vina 결과를 분류별 막대그래프로 시각화." },
      { file: "14_visualize_poses.py / 15_static_pose_figure.py", desc: "아래 PyMOL 파이프라인을 도입하기 전 시도했던 초기 pose 시각화(py3Dmol 웹 렌더링, 이후 matplotlib 기반 정적 대안)." },
      { file: "16_pymol_pose_render.py", desc: "전용 Miniconda 환경으로 설치한 headless PyMOL(`pymol -cq`)로 최종 출판 품질의 결합 pose figure를 렌더링." },
      { file: "17_stitch_panels.py", desc: "짝을 이루는 단일 패널 figure(volcano, heatmap, GSEA, docking pose, GO)를 표준 저널 figure 레이아웃에 맞게 (A)/(B)/(C) 패널 문자와 함께 하나의 합성 Figure 이미지로 결합." },
      { file: "18_fix_liver_heatmap.R", desc: "캐시된 DESeq2 객체를 재사용해 간 heatmap만 다시 생성 — 행 폰트를 줄이고 캔버스를 늘려 86개 유전자 라벨이 더 이상 겹치지 않도록 조정." },
      { file: "19_tabula_muris_check.R", desc: "공개 Tabula Muris FACS 간 아틀라스로 Sdc1/Sdc4/Sdc3/Cdh5의 간세포/Kupffer/내피세포 국소화를 마우스 조직에서 직접 교차검증 — 인간 전용 종간 참조라는 한계를 보완." },
      { file: "20_check_ggraph.R", desc: "Figure 4 재구축 전 ggraph/tidygraph/ggrepel 패키지 설치 여부 확인." },
      { file: "21_network_ggraph.R", desc: "ggraph/tidygraph/ggrepel로 Figure 4(STRING 네트워크) 재구축: 노드 크기는 degree, 엣지 굵기/불투명도는 STRING confidence, 겹치지 않는 repelled 유전자 라벨 적용." },
      { file: "22_check_score_range.R", desc: "STRING 엣지 score 컬럼이 이미 0-1 사이 비율(0-1000이 아님)임을 확인하는 디버그 스크립트 — script 21 초기 버전의 나눗셈 버그를 수정하는 근거로 사용." },
      { file: "23_graphical_abstract.py", desc: "데이터부터 재창출 후보물질까지 연구 전체 워크플로우를 요약하는 graphical abstract 파이프라인 도식(matplotlib) 생성." },
      { file: "24_gsea_running_score.R", desc: "clusterProfiler::GSEA로 Hallmark GSEA를 재실행(script 02의 fgsea와 동일한 랭킹 지표 사용)하고, enrichplot::gseaplot2로 각 장기 상위 2개 pathway에 대한 고전적 running-enrichment-score plot을 생성 — Figure 3C-F로 추가." },
      { file: "25_umap_featureplot_condition.R", desc: "GSE136103 아틀라스에서 Sdc1/Sdc4/Angptl4에 대해 조건별(healthy/cirrhotic)로 나눈 UMAP FeaturePlot(Seurat) 생성 — 기존 dot plot과 합쳐 Figure S3 구성." },
      { file: "26_relaxed_threshold_recheck.R", desc: "padj<0.05, |log2FC|>1.0으로 완화한 기준에서 캐시된 DESeq2 객체를 다시 필터링하고 CellChatDB 매칭을 재실행하는 최초의 탐색적 민감도 분석 — 간→LV 방향에서 3건의 새 매칭이 나타남을 처음 발견 (이후 스크립트 01-03 자체가 이 기준을 기본값으로 채택하면서 공식 파이프라인에 흡수됨)." },
      { file: "28_liver_to_heart_candidate_network.R", desc: "Sema5b/Plxna1/Plxna3를 seed로 STRING 네트워크를 확장. C4a는 마우스 STRING DB에 노드가 없음을 Ensembl ID/심볼 양쪽으로 확인 후 제외." },
      { file: "29_liver_to_heart_druggability_check.R", desc: "Sema5b/Plxna1/Plxna3/Plxna4/Nrp1/Nrp2에 대해 DGIdb GraphQL API 조회." },
      { file: "30_semaphorin_structure_check.R", desc: "PLXNA1/PLXNA3/SEMA5B/NRP1/NRP2의 UniProt PDB 교차참조 조회. gene:NRP1/NRP2 검색이 NELL1/NELL2(오래된 별칭)와 충돌하는 문제를 발견하고, 1차 유전자명 정확 일치 검증으로 수정." },
      { file: "31_semaphorin_stitch.R", desc: "위 6개 유전자의 STITCH 화학적 파트너 조회, PubChem CID를 화합물명으로 변환." },
      { file: "32_sema5b_liver_localization.R", desc: "GSE136103 아틀라스(이미 구축됨)를 재사용해 SEMA5B/PLXNA1/PLXNA3/NRP1/NRP2의 간 내 세포유형 DotPlot 생성." },
      { file: "33_tabula_muris_heart_check.R", desc: "Tabula Muris droplet Heart+Aorta atlas(624세포)를 조회해 Plxna1/Plxna3/Sema5b/Nrp1/Nrp2의 심장 내 세포유형별 발현을 마우스 자체에서 직접 확인." },
      { file: "34_prepare_dual_receptors.py", desc: "Nrp1(PDB 6FMC, EG01377 리간드 무게중심 기준 포켓 특이적 box)과 Plxna1(PDB 7Y4P, UniProt Sema domain 잔기 27-512 Cα 무게중심 기준 domain-level box) 양쪽의 Meeko 수용체 PDBQT 생성." },
      { file: "35_build_dual_axis_ligand_library.py", desc: "11개 화합물 라이브러리 구성: EG01377(RCSB 화학성분 사전에서 SMILES 직접 확보, 자기도킹 대조군) + STITCH 확인 화합물 6종 + 무관 대조군 4종." },
      { file: "36_prepare_dual_axis_ligands.py", desc: "11개 리간드 전체에 대해 3차원 구조 생성 및 Meeko PDBQT 변환." },
      { file: "37_run_dual_axis_vina_screening.py", desc: "준비된 두 수용체(Nrp1, Plxna1) 각각에 대해 11개 리간드 전체로 AutoDock Vina 실행." },
      { file: "38_dual_axis_vina_results_plot.R", desc: "두 표적의 Vina 결과를 화합물 분류별 막대그래프로 시각화(Figure 10)." },
      { file: "39_diffdock_distance_check.py", desc: "DiffDock 최상위 pose 중심점과 Vina box 중심점 사이 거리를 계산해 두 방법의 수렴/발산 여부를 정량화." },
      { file: "40_dual_axis_pose_figures.py", desc: "script 15와 동일한 matplotlib 파이프라인으로 두 표적의 DiffDock pose 및 접촉 잔기 정적 figure 생성(Figure 11)." },
      { file: "41_liver_to_heart_network_ggraph.R", desc: "script 21과 동일한 ggraph 파이프라인으로 Sema5b-Plxna1/Plxna3 STRING 네트워크 재구축(Figure 8)." },
      { file: "42_graphical_abstract_dual_axis.py", desc: "Graphical abstract를 heart→liver·liver→heart 두 열로 재구성해 양방향 회로를 한눈에 요약하도록 재제작." },
    ],
    reproNote:
      "소프트웨어 버전: R 4.5.2(DESeq2, apeglm, clusterProfiler, fgsea, msigdbr, CellChat, igraph, " +
      "httr/jsonlite, EnhancedVolcano, pheatmap); Python 3.14(RDKit, Meeko, PyMuPDF, matplotlib, " +
      "py3Dmol); AutoDock Vina 1.2.7; PyMOL(오픈소스 빌드, 전용 Miniconda 환경으로 설치); " +
      "Cytoscape 3.10.4(설치 완료, 수동 활용 가능). DiffDock은 이 컴퓨터에 CUDA 지원 GPU가 없어 " +
      "로컬에 설치하지 않았으며, 대신 원 저자 코드(gcorso/DiffDock)를 그대로 구동하는 공개 Gradio " +
      "웹 인터페이스를 통해 Vina 상위 화합물(heart→liver 축: Resmetirom, Ezetimibe, " +
      "Pioglitazone; liver→heart 축: 두 표적 각각의 Vina 1위 화합물 Imatinib)에 한해서만 " +
      "실행하였다. 저장소의 전체 커밋 이력은 " +
      "실제로 수행된 분석 과정 — 최초의 (간→심장) 가설, 그것이 데이터로 뒷받침되지 않는다고 확인된 " +
      "시점, 이후 표적과 스크리닝 전략이 재조정된 과정 — 을 시간순으로 완전하게 기록하고 있다.",
  },

  supplemental: {
    docTitle: "Supplemental Data",
    docSubtitle: "심장-간 양방향 신호 축: Angptl4-Sdc/Cdh5(심장→간)와 Sema5b-Nrp1(간→심장) 축의 " +
                 "구조 기반 표적 재조정 및 약물 재창출 — Supplemental Figures, Tables, and Text",
    labels: { figures: "Supplemental Figures", tables: "Supplemental Tables", text: "Supplemental Text", code: "코드 및 분석 워크플로우" },
    figures: [
      { file: "figures/composite/FigureS_GO_combined.png",
        caption: "Figure S1. 간 GO Biological Process 농축분석(유의 항목 41개, padj<0.05). LV는 " +
                 "동일 기준에서 유의 항목이 0개였다 — DEG 입력 유전자 수가 20개에서 63개로 3배 " +
                 "이상 늘었음에도 유의 GO-BP 항목이 오히려 사라진 결과이며, 이를 생략하지 않고 " +
                 "그대로 보고한다(3.2절 참조, ORA는 GSEA와 달리 기준에 의존적임). Figure 3의 " +
                 "Hallmark GSEA와 겹치지 않는 상보적 온톨로지로 결과를 보완한다." },
      { file: "figures/composite/FigureKEGG_combined.png",
        caption: "Figure S2. KEGG 경로 농축분석(padj<0.05). (A) 간(유의 경로 15개). (B) LV" +
                 "(유의 경로 1개, Ovarian steroidogenesis) — 이전 더 엄격한 기준에서는 LV에 유의 " +
                 "KEGG 경로가 전혀 없었으나, 완화된 기준에서 1개가 새로 나타났다." },
      { file: "figures/composite/FigureS3_condition_combined.png", maxHeightPx: 700,
        caption: "Figure S3. 질환 상태(건강 vs. 간경변)별로 나눈 Angptl4 축 유전자의 간 세포유형 국소화(GSE136103 종간 참조 아틀라스; 구축 과정은 Methods 2.6 및 Supplemental Text S3 참조). Figure 5에 더해, 단순 발현량뿐 아니라 국소화 패턴 자체가 질환 상태에 따라 달라지는지를 보여주기 위해 추가하였다. (A) 전체 6개 축 유전자에 대한 dot plot(y축에 세포유형 표기). (B) UMAP feature plot(SDC1, SDC4, ANGPTL4), 건강 vs. 간경변을 나란히 배치하여 세포유형별 요약 수치가 아니라 발현 세포의 UMAP 전체 상 분포 변화로 동일한 변화를 보여준다. 클러스터 정체성은 (A)의 dot plot 및 Supplemental Text S3의 주석된 UMAP과 일치한다." },
      { file: "figures/TabulaMuris_liver_dotplot.png",
        caption: "Figure S4. Angptl4 축 유전자 국소화의 독립적인 마우스 자체 교차검증(Tabula Muris, FACS/Smart-seq2 간 아틀라스, n=714 세포, 5개 주석 세포유형). Sdc4(91.8%)와 Sdc1(68.3%)은 주로 간세포에서, Sdc3(80.3%)는 Kupffer 세포에서, Cdh5(98.4%)는 간 동양혈관 내피세포에서 검출되어 — bulk 코호트와 동일한 종에서 Figure 5의 인간 아틀라스 패턴을 직접 재현하였다." },
    ],
    tableIntros: {
      S1: "Figure 1A 및 3.1절에서 보고한 228개 유전자 수의 근거가 되는 간 DEG 전체 테이블(DESeq2/apeglm 산출 전체 컬럼: baseMean, log2FoldChange, lfcSE, pvalue, padj, gene_name).",
      S2: "Figure 1B 및 3.1절에서 보고한 63개 유전자 수의 근거가 되는 LV DEG 전체 테이블.",
      S3: "Figure S1의 근거가 되는 간 GO-BP 농축분석 전체 테이블.",
      S4: "LV GO-BP 농축분석 결과(0개 행 — 3.2절 및 Figure S1 캡션 참조).",
      S5: "Figure S2의 근거가 되는 간·LV KEGG 농축분석 전체 테이블.",
      S6: "3.4절에서 논의한 Sdc1/Sdc4 중심성의 근거가 되는 STRING 네트워크 hub 유전자 전체 순위(degree, betweenness).",
      S7: "3.8절에서 다룬 21개 전체 스크리닝 화합물의 AutoDock Vina 전체 순위(본문 Table 4 상위 5개 요약에서 생략된 지방산·무관 대조군 그룹 포함).",
      S8: "3.6절에서 다룬 Angptl4 축 전체 유전자의 STITCH 화학적 파트너 조회 전체 결과(PubChem으로 확인한 화합물 정보 포함).",
      S9: "Table 3 및 3.7절의 표적 선정 근거가 되는 DGIdb druggability 조회 전체 결과.",
      S10: "3.10절/Figure 8의 근거가 되는 Sema5b-Plxna1/Plxna3 축 STRING 네트워크 hub 유전자 전체 순위(degree, betweenness).",
      S11: "3.11절/Figure 9B의 근거가 되는 Tabula Muris 마우스 심장(Heart+Aorta droplet atlas) 세포유형별 발현 전체 결과(pct_expressed, avg_expr, n_cells).",
      S12: "3.12절/Table 6의 근거가 되는 Sema5b-Plxna1 축 전체 유전자의 STITCH 화학적 파트너 조회 전체 결과.",
      S13: "3.14절/Table 8의 근거가 되는 Sema5b-Plxna1 축 전체 유전자의 DGIdb druggability 조회 전체 결과.",
      S14: "3.15절/Figure 10의 근거가 되는 Nrp1·Plxna1 이중 표적 AutoDock Vina 전체 순위(11개 화합물 전체, 두 표적 각각).",
    },
    tableTitles: {
      S1: "Table S1. 간 유의 DEG 전체 목록 (n=228, padj<0.05, |log2FC|>1.0)",
      S2: "Table S2. LV 유의 DEG 전체 목록 (n=63, padj<0.05, |log2FC|>1.0)",
      S3: "Table S3. 간 GO-BP 농축분석 (전체, padj<0.05)",
      S4: "Table S4. LV GO-BP 농축분석 (0개 행)",
      S5: "Table S5. 간·LV KEGG 경로 농축분석 (전체, padj<0.05)",
      S6: "Table S6. STRING 네트워크 hub 유전자 (Angptl4-Sdc/Cdh5 축 + 첫 번째 상호작용 파트너)",
      S7: "Table S7. AutoDock Vina 전체 순위 (21개 화합물 전체, ANGPTL4)",
      S8: "Table S8. Angptl4 축 유전자의 STITCH 화학적 파트너 (전체)",
      S9: "Table S9. DGIdb druggability 요약 (Angptl4 축)",
      S10: "Table S10. STRING 네트워크 hub 유전자 (Sema5b-Plxna1/Plxna3 축 + 첫 번째 상호작용 파트너)",
      S11: "Table S11. Tabula Muris 마우스 심장 세포유형별 발현 전체 결과 (Sema5b-Plxna1 축)",
      S12: "Table S12. Sema5b-Plxna1 축 유전자의 STITCH 화학적 파트너 (전체)",
      S13: "Table S13. DGIdb druggability 요약 (Sema5b-Plxna1 축)",
      S14: "Table S14. Nrp1·Plxna1 이중 표적 AutoDock Vina 전체 순위 (11개 화합물 전체)",
    },
    textTitles: {
      S1: "Text S1. 최종 표적 선정 근거 (양방향 축)",
      S2: "Text S2. DiffDock 교차검증 요약 (양방향 축)",
      S3: "Text S3. 본 연구의 기반이 된 인간 코호트 분석(GSE135251, GSE136103)의 전체 방법론",
    },
    textS1: [
      "Angptl4-Sdc/Cdh5 축에서 나온 다섯 개 후보 — Angptl4 자체와 그 큐레이션된 수용체 Sdc1, " +
      "Sdc2, Sdc3, Cdh5 — 를 최종 구조 기반 스크리닝 표적으로 평가하였다.",
      "Sdc1은 네트워크에서 가장 중심적인 hub(degree 16)이며 간세포에 국소화되지만, DGIdb에 3건의 " +
      "기존 상호작용(heparin, 항체-약물접합체인 indatuximab ravtansine)이 등재되어 있고, 더 " +
      "결정적으로는 유일하게 해결된 구조(PDB 4GVC/4GVD/6EJE 등)가 도킹 가능한 리간드 결합 포켓이 " +
      "아니라 작은 세포외 단편만을 포함하고 있다.",
      "Sdc4는 두 번째 네트워크 hub(degree 14)이며 마찬가지로 간세포에 국소화되지만, 유일하게 " +
      "해결된 구조(PDB 8BLV 등)는 세포질 꼬리가 syntenin PDZ 도메인과 결합한 복합체를 보여줄 " +
      "뿐이다 — 이는 Angptl4와 같은 분비 리간드가 실제로 결합하는 막의 반대쪽이다. 또한 DGIdb의 " +
      "유일한 hit인 repotrectinib(종양학적 키나아제 억제제)은 Sdc4와 기전적으로 타당한 연관성이 " +
      "없어 텍스트마이닝 오탐일 가능성이 높다.",
      "Sdc3는 해결된 구조가 전혀 없고 DGIdb 상호작용도 0건이다. 완전히 미개발 상태이기는 하나 " +
      "구조적으로 전혀 액셔너블하지 않다.",
      "Cdh5는 네트워크에서 고립된 노드(Angptl4와만 연결)이며 Endothelia에 국소화된다(이 표지자 " +
      "입장에서는 예상된 전형적 결과로, 국소화 방법론에 대한 양성대조군 역할을 할 뿐 질환 " +
      "특이적 발견은 아니다). DGIdb의 유일한 hit인 FX06은 소분자가 아니라 피브린 유래 " +
      "펩타이드이다.",
      "이에 최종적으로 Angptl4 자체를 선정하였다: DGIdb 기준 약물 상호작용이 0건으로 완전히 " +
      "미개발되어 있으며, C-말단 fibrinogen-like domain의 2.3Å 결정구조(PDB 6EUB)가 리간드를 " +
      "수용할 수 있는 표면과 함께 해결되어 있고(등록된 구조에서 결정화 완충액 유래의 " +
      "pentaethylene glycol 분자가 바로 이 부위를 차지하고 있어, 이는 전산으로 예측된 것이 " +
      "아니라 실재하는 표면 포켓임을 나타낸다), 본 연구 자체의 더 엄격한 DEG 재분석(LV 상향, " +
      "3.1절)과 심장 섬유아세포 특이적 Angptl4 분비를 HFpEF에서 입증한 2024년 독립적 단일세포 " +
      "연구(Li et al., 2024)라는 두 개의 독립적 근거로 검증되었다.",
      "이로 인해 발생하는 한계를 명시적으로 밝혀둔다: 이 선택은 도킹 표적을 네트워크 중심성 " +
      "hub 유전자(Sdc1/Sdc4)에서 리간드 자체로 재조정한 것이며, 이는 순전히 구조생물학적 제약" +
      "(활용 가능한 수용체 세포외 도메인 구조의 부재) 때문이지 네트워크 분석 자체가 syndecan을 " +
      "배제했기 때문이 아니다. Sdc1/Sdc4는 여전히 이 축의 최상위 전산 hub이며, 이들의 헤파란황산 " +
      "함유 세포외 도메인 구조가 확보되는 대로 재검토되어야 한다.",
      "liver→heart 축(Sema5b-Plxna1/Plxna3, 3.10-3.16절)에서는 CellChatDB가 직접 매칭한 " +
      "수용체(Plxna1, Plxna3)와 그 첫 번째 STRING 상호작용 파트너 중 구조·발현·druggability " +
      "데이터가 가장 풍부한 Nrp1, 총 세 후보를 최종 표적 후보로 평가하였다.",
      "Plxna1은 이 축에서 가장 중심적인 hub(degree 17)이자 CellChatDB가 직접 매칭한 수용체이지만, " +
      "Tabula Muris 마우스 심장에서 실제 발현이 미약하였다(심근세포 5.0%, 3.11절). 유일하게 " +
      "해결된 구조(PDB 7Y4P/7Y4Q)는 apo 상태의 ectodomain 단편으로 소분자 결합 포켓이 알려져 " +
      "있지 않으며, DGIdb 상호작용도 0건이다.",
      "Plxna3는 두 번째 hub(degree 16)이며 마찬가지로 심장 내 발현이 미약하였다(1.6-3.1%). " +
      "해결된 구조가 전혀 없고 DGIdb 상호작용도 0건이어서, Plxna1보다도 구조적으로 더 " +
      "액셔너블하지 않다.",
      "Nrp1은 CellChatDB가 직접 매칭한 수용체가 아니라 Plxna1/Plxna3의 첫 번째 STRING " +
      "상호작용 파트너(degree 13)로 발견되었으나, Tabula Muris 마우스 심장에서 심내막세포의 " +
      "96.8%, 내피세포의 94.9%, 섬유아세포의 74.8%에서 검출되어 압도적으로 강한 발현을 " +
      "보였다. 소분자 저해제 EG01377이 결합된 0.90Å 초고해상도 구조(PDB 6FMC; Powell et al., " +
      "2018)를 가지고 있으며, DGIdb에 5건(Palifermin, Pegaptanib, Vesencumab, EG01377, " +
      "EG00229), STITCH에 실제 승인/후기임상 화합물 다수가 등재되어 있다.",
      "이에 이 축의 구조 기반 스크리닝은 Plxna1과 Nrp1 양쪽 모두를 도킹하는 방식을 " +
      "채택하였다(어느 한쪽도 사전에 배제하지 않음). 최종적으로 Vina·DiffDock 두 독립적 " +
      "방법이 문헌상 알려진 결합 부위로 함께 수렴한 Nrp1을 구조적으로 뒷받침되는 표적으로, " +
      "두 방법이 서로 다른 부위를 가리킨 Plxna1을 가설 생성적 결과로 구분하여 보고한다" +
      "(3.15-3.16절). 이로 인해 발생하는 한계를 명시적으로 밝혀둔다: Nrp1으로의 재조정은 " +
      "Angptl4로의 재조정(같은 분자의 다른 도메인)과 달리 완전히 다른 분자로 옮겨가는 것이며, " +
      "Nrp1이 실제로 Sema5b-Plxna1 신호전달의 보조수용체로 기능하는지는 문헌상 확립되어 있지 " +
      "않다(4절 참조). Plxna1/Plxna3는 여전히 이 축의 최상위 전산 hub이자 CellChatDB의 직접 " +
      "매칭 수용체이며, 소분자 결합 구조가 확보되는 대로 재검토되어야 한다.",
    ],
    textS2: [
      "Vina 상위 화합물 중 세 개 — Vina 순위 1, 2위인 Resmetirom과 Ezetimibe, 그리고 순위와 " +
      "무관하게 STITCH에서 이미 독립적으로 실제 ANGPTL4 화학적 파트너로 확인되어 추가한 " +
      "Pioglitazone — 을 DiffDock으로 교차검증하였다.",
      "Pioglitazone과 Ezetimibe가 교차검증된 후보로 부상하였다: 결합 부위를 사전에 지정하지 " +
      "않는 독립적 방법(DiffDock)이 두 화합물 모두에 대해 Vina가 제한적으로 탐색한 것과 사실상 " +
      "동일한 표면 포켓으로 독자적으로 수렴하였다 — Pioglitazone의 최상위 pose는 Vina 포켓 " +
      "무게중심으로부터 3.9Å(confidence −1.06, 셋 중 최고), Ezetimibe는 3.5Å(confidence " +
      "−1.32) 떨어져 있었다. 두 pose는 접촉 잔기 대부분(Leu304, Leu312, Gly313, Ala314, " +
      "Leu322, Val324, Gly352, Thr353, His356)을 공유하였고, Pioglitazone은 추가로 Ala309, " +
      "Val317, Lys381과도 접촉하였다. 화학구조가 서로 무관한 두 화합물을 독립적으로 도킹했을 " +
      "때 이러한 중첩이 나타난다는 사실 자체가, 이 부위가 우연한 표면 함몰이 아니라 실제 " +
      "도킹 가능한 포켓임을 뒷받침하는 근거이다.",
      "Resmetirom은 사전에 정의된 포켓만을 탐색한 Vina에서 최고 점수를 얻었으나, 제약 없이 " +
      "탐색하는 DiffDock은 완전히 다른 표면 영역(접촉 잔기 Trp280, Asp281, Ile367, Leu374, " +
      "Tyr387, Tyr388, Pro389)을 선호하였다. 이를 얼버무리지 않고 진짜 괴리로 보고한다: " +
      "Resmetirom의 Vina 최고 점수는 'ANGPTL4에서 선호하는 결합 부위라는 강력한 독립적 증거'가 " +
      "아니라, '우리가 탐색한 포켓 내에서 가장 잘 맞는 pose'로 해석해야 한다.",
      "세 DiffDock confidence 값(Resmetirom −2.06, Ezetimibe −1.32, Pioglitazone −1.06) " +
      "모두 해당 방법 자체의 저–중간 신뢰 구간에 속한다(공개된 벤치마크는 confidence 점수 0 " +
      "이상을 고신뢰로 간주한다). 따라서 세 결과 모두 확정적 결합제로 과대 포장해서는 안 되며, " +
      "이번 스크리닝의 가설 생성적 선도물질일 뿐 검증된 hit는 아니다. 다만 세 화합물 중 " +
      "Pioglitazone은 STITCH 연관성·Vina 순위·DiffDock 포켓 수렴이라는 독립적 근거를 " +
      "가장 일관되게 갖춘 화합물이다.",
      "DiffDock은 로컬에서 구동하지 않았다: 이 컴퓨터에는 CUDA 지원 GPU가 없어, PyTorch, " +
      "PyTorch Geometric, e3nn, ESM 단백질 언어모델을 포함한 로컬 처음부터의 설치는 단 하나의 " +
      "복합체에 대해서도 CPU 전용 추론을 비현실적으로 느리게 만들었을 것이다. 대신 원 저자 " +
      "코드(gcorso/DiffDock)를 그대로 구동하는 공개 DiffDock Gradio Space" +
      "(swcanner/DiffDock-Web)를 웹 인터페이스를 통해 승인된 상위 화합물(Resmetirom, " +
      "Ezetimibe, Pioglitazone)에 한해서만 사용하였으며, 이는 DiffDock을 21개 전체 화합물이 " +
      "아니라 최종 소수 후보로 제한한다는 앞서의 CPU 예산 결정과 일치한다.",
      "liver→heart 축(Nrp1, Plxna1; 3.15-3.16절)에서는 두 표적 각각의 Vina 1위 화합물" +
      "(공교롭게도 둘 다 Imatinib)을 동일한 웹 인터페이스로 교차검증하였다. 결과는 " +
      "heart→liver 축과 달리 두 표적 사이에서 뚜렷하게 갈렸다: Nrp1에서는 DiffDock 최상위 " +
      "pose(confidence −1.51)가 Vina box 중심(EG01377 무게중심)으로부터 1.9Å 이내로 " +
      "수렴하였고, 접촉 잔기(Tyr297, Trp301, Thr316, Asp320, Glu348, Thr349, Lys350, " +
      "Lys351, Tyr353, Thr413, Gly414, Ile415)는 문헌상 VEGF-A/Sema3A의 C-말단 아르기닌 " +
      "및 EG-계열 저해제가 결합하는 것으로 알려진 바로 그 b1 domain 포켓과 일치하였다. " +
      "Plxna1에서는 DiffDock 최상위 pose(confidence −1.65)가 Sema domain 중심 Vina box로부터 " +
      "22.7Å 떨어진 완전히 다른 부위(접촉 잔기 Lys156, Glu196, Gln221, Ser226, Gln228, " +
      "Leu229, Lys230, Phe292, Leu388, Gln413, Pro414)에 위치하였다.",
      "이 결과는 3.15절에서 이미 제기된 우려 — Plxna1에서는 Nrp1 전용으로 설계된 자기도킹 " +
      "대조군(EG01377)이 실제 Vina 1위 화합물과 거의 동률(−9.15 vs. −9.96 kcal/mol)이었다는 " +
      "점 — 을 독립적인 두 번째 방법으로 재확인한다. Vina와 DiffDock 모두 Plxna1의 " +
      "domain-level blind box 결과에 신뢰를 주지 않으며, 이는 Nrp1에서 두 방법이 서로를 " +
      "뒷받침한 것과 정확히 대조된다. 두 DiffDock confidence 값(−1.51, −1.65) 자체는 모두 " +
      "저–중간 신뢰 구간에 속하므로 어느 쪽도 확정적 결합제로 과대 포장해서는 안 되지만, " +
      "'두 독립적 방법이 동일 부위로 수렴하는가'라는 기준에서는 Nrp1과 Plxna1이 명확히 " +
      "구분된다.",
    ],
    textS3: [
      { type: "p", text:
        "서론과 Methods 2.6에서는 본 연구 조사의 첫 두 단계를 기술한다 — (a) 본 연구의 더 넓은 " +
        "연구 프로그램을 촉발한 후보 " +
        "유전자 목록을 도출한 인간 코호트 bulk RNA-seq 분석, 그리고 (b) 3.5절/Figure 5에서 " +
        "독립적인 종간 참조 자료로 사용하기 위해 구축한 인간 " +
        "간 scRNA-seq 아틀라스이다. 이 두 분석은 별도로 출판되어 있지 않으므로, 본 절에서는 " +
        "그 방법론과 " +
        "결과를 각각의 핵심 figure와 함께 빠짐없이 기술하여 본 원고가 완전히 자기완결적이도록 한다." },

      { type: "p", text:
        "분석 1 — GSE135251(bulk RNA-seq, 인간 간생검 216례; Govaere et al., 2020): 이 공개 " +
        "MASLD 코호트는 생검으로 확진된 MASLD/NAFLD 환자 206명(섬유화 병기 F0-F4)과 건강대조군 " +
        "10명으로 구성된다. 건강대조군 10명은 제외하고, 206명의 MASLD 환자를 초기 섬유화군(F0-F1, " +
        "n=85)과 중등도/진행성 섬유화군(F2-F4, n=121)으로 나누었다. 차등발현은 DESeq2(Wald test, " +
        "apeglm log2FC 축소; count≥10인 유전자를 ≥20개 표본에서 사전 필터링, 64,258개에서 " +
        "17,421개 유전자로 검정 대상 축소)로 계산하였으며, 진행성 대 초기 섬유화에서 유의하게 " +
        "상향된 유전자 167개, 하향된 유전자 5개를 확인하였다(padj<0.05). 유전자 집합 농축분석" +
        "(fgsea, Wald 통계량으로 순위화; MSigDB Hallmark 및 KEGG_MEDICUS)은 진행성 섬유화에서 " +
        "EMT, TNFA/NFKB 신호전달, 혈관신생이 농축되고 지방산대사·산화적인산화가 결핍됨을 보였고, " +
        "GO/KEGG 과대표현분석(clusterProfiler)은 세포외기질 조직화, 콜라겐 원섬유 조직화, 인테그린 " +
        "신호전달을 주요 농축 용어로 반환하였다. 유의 DEG 172개를 STRING API(confidence " +
        "score≥700)에 조회하여 157개 노드, 60개 엣지의 네트워크를 구성하였으며, 이는 케모카인/면역 " +
        "동원 모듈(CXCL8, CXCL1, CXCL6, CCL19, CCL20, CCL21)과 COL1A1을 중심으로 한 콜라겐/ECM " +
        "모듈로 나뉘었다(아래 그림). hub 유전자 15개(degree≥3)를 DGIdb에 조회하고, 이미 잘 알려진 섬유화 " +
        "유전자 약 26개(collagen 계열, 핵심 TGF-β/근섬유아세포 축)의 수기 큐레이션 목록과 " +
        "대조하여 이 목록을 제외한 결과, 이 특정 코호트에서 아직 깊이 다루어지지 않은 druggable, " +
        "네트워크 중심적 후보 7개가 남았다: CCL21, CXCL8, CCL20, EPCAM, LUM, THY1, THBS2. 이 7개 " +
        "유전자는 넓은 섬유화 문헌에서 문자 그대로 신규는 아니지만, 이 코호트에서 데이터 기반·" +
        "네트워크 중심성 순위로 도출된 후보로서 서론에서 언급한 후보 목록이다." },
      { type: "figure", file: "figures/prior_analyses/GSE135251_ppi_hub_network.png",
        caption: "GSE135251 hub 유전자 PPI 네트워크(분석 1). 빨강: 7개 신규 druggable 후보; " +
                 "파랑: 이미 잘 알려진/druggable하지 않은 섬유화 유전자. 케모카인/면역 동원 클러스터와 " +
                 "COL1A1 중심의 콜라겐/ECM 클러스터 두 모듈로 나뉜다." },

      { type: "p", text:
        "분석 2 — GSE136103(단일세포 RNA-seq 아틀라스 구축 및 국소화; Ramachandran et al., " +
        "2019): 이 공개 데이터셋은 인간 간 10x 표본 20개(건강 5례 + 간경변 5례, CD45+/CD45- 분리 " +
        "분획; 동일 GEO series의 혈액 및 마우스 표본은 본 질문과 무관하여 제외)로 구성된다. 원 " +
        "논문의 Methods를 따라 표본별로 세포를 품질관리 필터링(nFeature_RNA>300, percent.mt<30)해 " +
        "60,925개 세포를 확보한 뒤, 정규화·스케일링·PCA를 거쳐 Harmony(RunHarmony, batch=개별 " +
        "표본, 3회 반복만에 수렴; 통합 후 UMAP에서 세포가 환자 출처가 아니라 세포유형별로 잘 " +
        "혼합됨을 확인)로 개별 10x 실행 단위 배치보정을 수행하였다. FindClusters(Harmony 임베딩, " +
        "dims 1:15, resolution 0.6)로 20개 클러스터를 도출하였으며, 이는 동일 resolution에서 원 " +
        "논문이 보고한 클러스터 수와 일치한다. 각 클러스터는 원 논문 자체의 보충 계통(lineage) " +
        "시그니처 유전자 집합에 대해 Seurat의 AddModuleScore로 점수화하고 가장 높은 점수의 계통을 " +
        "부여하는 방식으로 12개 세포 계통(T cell, ILC, MP, B cell, Plasma cell, pDC, Mast cell, " +
        "Endothelia, Mesenchyme, Hepatocyte, Cholangiocyte, Cycling) 중 하나로 배정되었으며, 모든 " +
        "배정은 marker 유전자 dotplot으로 최종 확정 전 교차 검증되었다(아래 주석된 UMAP — " +
        "본 연구 Figure S3B의 FeaturePlot에도 재사용된 것과 동일한 임베딩)." },
      { type: "figure", file: "figures/prior_analyses/GSE136103_umap_annotated.png",
        caption: "GSE136103 주석된 UMAP(분석 2), 12개 세포 계통, 60,925개 세포. Figure 5, " +
                 "Figure S3, Figure S3B FeaturePlot 모두 이와 동일한 임베딩을 기반으로 한다." },

      { type: "p", text:
        "이 아틀라스는 본 단계에서 " +
        "GSE135251에서 도출된 7개 후보 유전자를 국소화하는 데 사용되었다(아래 그림): LUM, THY1, THBS2는 모두 " +
        "Mesenchyme 클러스터(간성상세포/문맥 섬유아세포)에 특이적으로 국소화되었고 건강 대비 " +
        "간경변에서 동일 세포유형 내 발현이 훨씬 높았다(예: THY1은 발현 세포 비율이 5.4%에서 " +
        "41.9%로 증가). EPCAM은 Cholangiocyte에 그만큼 명확하게 국소화되어 간경변 관련 담관반응" +
        "(ductular reaction)과 일치하였고, CXCL8과 CCL20은 하나의 뚜렷한 생산 세포유형으로 " +
        "수렴하지 않았다." },
      { type: "figure", file: "figures/prior_analyses/GSE136103_candidate_gene_dotplot.png",
        caption: "GSE136103에서 GSE135251 유래 7개 후보 유전자의 국소화(분석 2), 조건별 " +
                 "분리. LUM/THY1/THBS2는 Mesenchyme에 국소화되며 간경변에서 급격히 증가한다; " +
                 "EPCAM은 Cholangiocyte에 국소화된다." },

      { type: "p", text:
        "구성비 변화 검정(카이제곱 및 유형별 비율 검정, BH 보정)은 추가로 " +
        "Cholangiocyte 비율이 간경변에서 거의 3배(3.2%에서 9.1%)로, Endothelia는 2배 이상(8.9%에서 " +
        "19.3%)으로 증가한 반면, Mesenchyme 자체 비율은 LUM/THY1/THBS2 발현이 급격히 증가하는 " +
        "가운데서도 오히려 소폭 감소(4.6%에서 3.0%)함을 보였다 — 즉 섬유화 신호는 성상세포의 순 " +
        "증식이 아니라 기존 성상세포의 활성화를 반영한다." },
      { type: "figure", file: "figures/prior_analyses/GSE136103_composition_barplot.png",
        caption: "GSE136103 세포유형 구성비, 건강 vs. 간경변(분석 2). Cholangiocyte와 " +
                 "Endothelia 비율은 간경변에서 증가하지만, Mesenchyme 비율은 섬유화 유전자 발현 " +
                 "증가에도 불구하고 증가하지 않는다 — 증식이 아니라 활성화." },

      { type: "p", text:
        "본문 결과에 기술된 마우스 다중 장기 분석과의 관계: 위의 분석 1·2는 본 연구가 기반하는 " +
        "인간 배경 자료이지만, 본문 결과에 보고된 마우스 간-심장 축 자체는 GSE135251 bulk 분석이나 " +
        "그 LUM/THY1/THBS2/EPCAM 결과를 직접 재사용하지 않는다 — 해당 분석은 네트워크 중심성·" +
        "druggability 기반 " +
        "스크리닝 전략을 진정한 다중 장기 마우스 데이터셋으로 확장할 가치가 있다고 판단하게 된 " +
        "동기로 작용하였다. 반면 위에서 기술한 GSE136103 아틀라스는 3.5절/Figure 5 및 Supplemental Figure " +
        "S3에서 직접 재사용되지만, 완전히 다른 역할로 사용된다 — 즉 분석 2에서 아틀라스가 원래 국소화하도록 " +
        "구축되었던 LUM/THY1/THBS2/EPCAM 유전자와는 무관한, 본 연구 자체의 후보 유전자(Sdc1, " +
        "Sdc2, Sdc3, Sdc4, Cdh5, Angptl4)를 국소화하기 위한 독립적인 종간 참조 자료로만 사용된다. " +
        "본 연구의 세 단계 전체에 다음의 유의점이 동일하게 적용된다: GSE135251과 GSE136103은 짝지어진 " +
        "표본이 없는 서로 다른 인간 환자 코호트이며, 본 연구 자체의 마우스 코호트는 이와 완전히 " +
        "독립적인 세 번째 데이터셋이다 — 따라서 세 데이터셋 간의 모든 교차 참조(bulk-아틀라스 간, " +
        "마우스-인간 간)는 개체 내에서 직접 매칭된 검증이 아니라, 독립적인 데이터셋들에 걸쳐 도출한 " +
        "타당한 생물학적 추론이다. 분석 1·2의 전체 결과표와 분석 코드는 위에 기술되어 있으며, " +
        "교신저자에게 요청 시 열람 가능하다." },
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
