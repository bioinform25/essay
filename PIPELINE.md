# Cardio-Hepatic Axis 신규 표적 발굴 및 In silico 약물 스크리닝
## 연구 파이프라인 설계 문서 (초안, 2026-07-15)

---

## 0. 연구 개요

**작업 가제:** 다중장기(간-심장-지방조직) 전사체 통합분석 기반 Cardio-Hepatic Axis 매개 신규 표적 발굴 및 구조 기반 약물 스크리닝

**핵심 아이디어:** MASLD/MASH가 심혈관질환(특히 HFpEF, 박출률보존 심부전)으로 이어지는 경로에서, 간·지방조직이 분비하는 인자와 심장이 발현하는 수용체 간의 분자적 연결고리를 계통적으로 찾아내고, 그 중 아직 약물이 개발되지 않은 표적 하나를 선정해 구조 기반 가상 스크리닝까지 수행한다.

**선행 연구와의 관계:** `bioinform25/project3`(인간 GSE135251 MASLD 간섬유화 bulk DEG→PPI→7개 druggable 후보)와 `project4`(인간 GSE136103 scRNA로 세포유형 localization + CellChat + TF/miRNA regulator)에서 이미 LUM/THY1/THBS2(간성상세포 섬유화 유전자), EDNRB/CD44/ITGA1·ITGB1(간경변 특이적 CellChat 수용체), SMAD4/miR-29b-3p(상위 조절자) 등을 발굴한 바 있다. 이번 연구는 **종을 마우스로, 축을 간-심장 간(inter-organ)으로 확장**한 새 데이터셋 기반의 독립적 신규 연구이며, project3/4의 인간 결과는 Discussion에서 종간(cross-species) 교차검증/비교 자료로만 활용한다 (통계 모델에 직접 섞지 않음).

---

## 1. 데이터셋

### 1-1. 핵심 축: 같은 개체에서 나온 간+심장+지방조직 bulk RNA-seq (신규 재분석)

- **출처:** Schiattarella lab, *Circulation Research* 2024, "Systems Biology Approach Uncovers Candidates for Liver-Heart Interorgan Crosstalk in HFpEF" (PubMed 39206552)
- **원본 데이터:** Zenodo record 12794566 (raw counts + DE table, Liver / Left Ventricle / metadata CSV — 지방조직 포함 여부는 파일 목록 재확인 필요)
- **모델:** C57BL/6N 마우스, 2-hit HFpEF 유도(대사+고혈압 스트레스 병용 식이, 일반적으로 HFD+L-NAME 방식) vs CHOW, 각 군 n=5
- **왜 이 데이터가 이상적인가:** 서로 다른 코호트를 인위적으로 엮는 게 아니라, **동일 개체**에서 간과 심장을 동시에 채취한 진짜 장기간(inter-organ) 페어드 데이터라서 "장기 간 crosstalk"라는 연구 질문에 통계적으로 정직하게 답할 수 있다.
- **재분석 방침:** 논문 자체 결과(Saa1/Saa4)를 그대로 재현하지 않고, **더 엄격한 기준(FDR/p-adj < 0.01, |log2FC| > 1.5)** 으로 raw counts부터 DESeq2 재분석 → 논문 결과와 일치/불일치 여부를 [[feedback_validate_against_replicated_stats]] 원칙대로 정직하게 보고 (원 논문 자체가 이미 n=5 replicated 통계이므로 이번 재분석이 그보다 더 엄격한 상위 검증 역할을 함).

### 1-2. 단일세포 레이어 (독립 공개 아틀라스, cell-type localization 용도)

동일 개체 기반 간+심장 단일세포 데이터는 존재하지 않으므로, **각 장기별 독립된 공개 scRNA/snRNA-seq 아틀라스**를 별도로 활용해 "최종 후보 리간드/수용체가 어느 세포에서 발현되는가"를 확인하는 용도로만 쓴다 (두 장기를 하나의 CellChat 객체로 묶어 signaling probability를 계산하는 것은 서로 다른 연구의 세포를 섞는 것이라 통계적으로 타당하지 않음 — project4처럼 정직하게 범위를 한정).

- **심장 후보:** GSE209548 (HFD+L-NAME 유도 마우스 HFpEF 모델, 심장 간질세포 scRNA-seq, 대사 스트레스 기반 염증성 signature, SGLT2 억제제 dapagliflozin으로 반전) — bulk 코호트와 모델이 개념적으로 가장 가까움
- **간 후보:** 공개 마우스 NAFLD/MASLD 간 scRNA-seq 아틀라스(예: iScience 2021 hepatocyte/NPC landscape 계열) 중 재현성 있는 것 재확인 후 확정. 필요 시 project4의 인간 GSE136103도 종간 비교용으로 병행.
- **확정 시점:** Phase 3 진입 시 최종 후보 유전자가 나온 뒤, 그 유전자를 실제로 다루는 아틀라스인지 재확인하고 선정 (지금 미리 확정하지 않음 — 헛수고 방지).

---

## 2. Phase 1 — 다중오믹스 기반 target 추출 (R)

1. **전처리:** Zenodo raw counts 3세트(Liver/LV/[WAT]) 확보 → 각 장기별 독립 DESeq2 모델 (order effect 없음, n=5 vs 5 그대로 사용, 배치보정 불요 — 단일 batch 실험)
2. **통계 기준:** FDR(padj) < 0.01, |log2FC| > 1.5 (project3/4와 동일한 엄격 기준 유지, 논문 원 기준보다 보수적)
3. **시각화:** 장기별 Volcano plot + Heatmap
4. **심화 pathway 분석:** 장기별 GSEA(Hallmark/Reactome) + GO + KEGG — 특히 지질대사, 염증, 섬유화, 미토콘드리아 기능 경로에 주목 (선행 문헌에서 이 축의 핵심 경로로 반복 보고됨)
5. **분비인자 예측:** 간·지방조직 DEG 중 상향된 유전자를 분비단백질 DB(Human Protein Atlas secretome 목록 등)로 필터링 → "심장으로 갈 수 있는 후보 리간드" 목록 확보

## 3. Phase 2 — 장기 간 리간드-수용체 인터랙톰 매칭 + 네트워크 약리학

1. **인터랙톰 매칭:** Phase1에서 뽑은 간/지방 분비 리간드 후보 vs 심장 DEG 중 상향된 수용체 후보를 CellChatDB/CellPhoneDB의 **큐레이션된 L-R 쌍 목록을 참조 테이블로만** 사용해 매칭 (신호전달 확률 계산이 아니라 "알려진 리간드-수용체 쌍인가"를 스크리닝하는 방식 — 원 논문의 systems-biology 접근을 계승하되 더 체계화)
2. **PPI 네트워크:** 매칭된 후보 유전자들을 STRING DB(confidence ≥ 0.7)에 입력 → Cytoscape + CytoHubba로 hub 유전자(degree/betweenness 상위 10~20개) 식별
3. **Network Pharmacology:** STITCH로 hub 유전자-기존 화합물 상호작용 네트워크 확인
4. **세포유형 localization (단일세포):** 최종 후보 리간드/수용체를 1-2절의 독립 아틀라스에 대입해 어느 세포가 분비/수용하는지 확인 (project4 방식 재사용 — Seurat AddModuleScore/DotPlot)

## 4. Phase 3 — Druggability 평가 및 신규 target 확정

1. DGIdb + DrugBank로 hub 유전자별 기존 승인 약물/임상 이력 조사
2. project3/4에서 이미 다룬 TGF-β 축, LUM/THY1/THBS2 계열은 "이미 깊게 판 영역"이므로 **제외**하고, 이번 장기간 축에서 새로 나온 hub 중 **약물이 없는(Novel target) 1개**를 최종 선정 (project4의 EDNRB 사례처럼 "관련은 있지만 이 맥락엔 안 맞음"으로 걸러진 후보들의 패턴을 참고)
3. 최종 target의 3D 구조 확보: PDB 우선, 없으면 AlphaFold DB

## 5. Phase 4 — 구조 기반 가상 스크리닝

1. **리간드 라이브러리:** ZINC/PubChem에서 Lipinski's Rule of 5 만족 화합물 다운로드
2. **AutoDock Vina (메인 엔진, 설치 완료):** 전체 라이브러리 스크리닝 → binding affinity 기준 top 5 선정 (≤ -8.0 kcal/mol 기준 참고)
3. **DiffDock (보조, CPU):** Vina top 1-2개 화합물에 한해서만 시도 — 전체 라이브러리 스크리닝 용도가 아니라 top 후보의 pose 신뢰도를 교차검증하는 용도. GPU 부재로 인한 처리시간 제약을 Limitations에 명시.
4. **시각화:** PyMOL로 단백질-리간드 결합부위 3D 이미지 (수소결합/소수성 상호작용 표시)

## 6. 산출물

- 본문 논문 (5~10장 제한 무시하고 작성 후, 필요시 축약본 별도 준비)
- Supplemental data (전체 DEG 테이블, 모든 figure, 스크리닝 전체 결과)
- 모든 코드/데이터/결과는 `bioinform25/essay` repo에 축적

## 7. 유의사항 (Figure 캡처 관련)

Figure 캡처 시 제목이 잘리는 문제가 반복되었으므로, 저장 전 반드시 전체 캡션이 프레임 안에 들어오는지 확인 (필요시 제목 폰트 축소 또는 캡션을 이미지 하단 여백에 배치 후 크롭).

---

**진행 상태:** 설계 확정 대기 — 사용자 최종 확인 후 Phase 1 착수
