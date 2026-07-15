const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  ImageRun, Table, TableRow, TableCell, WidthType, PageBreak, BorderStyle,
} = require("docx");
const content = require("./content");

const FIG_DIR = path.join(__dirname, "..", "figures");
const PAGE_WIDTH_DXA = 12240; // US-unused here; using A4 default (11906 x 16838)
const A4_WIDTH_DXA = 11906;
const MARGIN_DXA = 1440;
const USABLE_WIDTH_DXA = A4_WIDTH_DXA - 2 * MARGIN_DXA; // ~9026 dxa
const USABLE_WIDTH_PX = Math.round(USABLE_WIDTH_DXA / 1440 * 96); // ~601 px

function bodyPar(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, size: 22 })],
    spacing: { after: 200, line: 360 },
    alignment: AlignmentType.JUSTIFIED,
    ...opts,
  });
}

function heading1(text) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_1, spacing: { before: 300, after: 150 } });
}
function heading2(text) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } });
}

function figureBlock(filename, captionText) {
  const p = path.join(FIG_DIR, filename);
  const buf = fs.readFileSync(p);
  const dims = require("image-size").imageSize(fs.readFileSync(p));
  const w = USABLE_WIDTH_PX;
  const h = Math.round(dims.height * (w / dims.width));
  return [
    new Paragraph({
      children: [new ImageRun({ data: buf, transformation: { width: w, height: h }, type: "png" })],
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 100 },
    }),
    new Paragraph({
      children: [new TextRun({ text: captionText, size: 18, italics: true })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
    }),
  ];
}

function simpleTable(headerRow, rows, widths) {
  const mkCell = (text, bold) => new TableCell({
    children: [new Paragraph({ children: [new TextRun({ text: String(text), size: 18, bold: !!bold })] })],
    margins: { top: 60, bottom: 60, left: 80, right: 80 },
  });
  return new Table({
    width: { size: USABLE_WIDTH_DXA, type: WidthType.DXA },
    columnWidths: widths,
    rows: [
      new TableRow({ children: headerRow.map((h) => mkCell(h, true)) }),
      ...rows.map((r) => new TableRow({ children: r.map((c) => mkCell(c)) })),
    ],
  });
}

function buildMethodsParagraphs() {
  const out = [];
  content.methods.forEach((m) => {
    out.push(heading2(m.h));
    out.push(bodyPar(m.p));
  });
  return out;
}

function buildResultsParagraphs() {
  const out = [];
  content.results.forEach((r) => {
    out.push(heading2(r.h));
    out.push(bodyPar(r.p));
  });
  return out;
}

const children = [];

// --- Title page (page 1: title, author, abstract, keywords) ---
children.push(new Paragraph({
  children: [new TextRun({ text: content.title, bold: true, size: 30 })],
  alignment: AlignmentType.CENTER,
  spacing: { after: 300 },
}));
children.push(new Paragraph({
  children: [new TextRun({ text: content.studentLine, size: 22 })],
  alignment: AlignmentType.CENTER,
  spacing: { after: 400 },
}));
children.push(heading2("Abstract"));
children.push(bodyPar(content.abstract));
children.push(bodyPar(content.keywords, { spacing: { after: 200 } }));

children.push(new Paragraph({ children: [new PageBreak()] }));

// --- 1. Introduction ---
children.push(heading1("1. 서론 (Introduction)"));
content.introduction.forEach((p) => children.push(bodyPar(p)));

// --- 2. Methods ---
children.push(heading1("2. 실험 방법 (Methods)"));
children.push(...buildMethodsParagraphs());

// --- 3. Results ---
children.push(heading1("3. 결과 (Results)"));
children.push(...buildResultsParagraphs());

children.push(heading2("Figures"));

children.push(...figureBlock("Liver_volcano.png",
  "Figure 1A. Liver DEG volcano plot (HFpEF vs Chow, padj<0.01, |log2FC|>1.5)."));
children.push(...figureBlock("LV_volcano.png",
  "Figure 1B. Left ventricle (LV) DEG volcano plot (HFpEF vs Chow, padj<0.01, |log2FC|>1.5)."));
children.push(...figureBlock("Liver_heatmap.png",
  "Figure 2A. Liver significant DEG heatmap (z-scored VST counts)."));
children.push(...figureBlock("LV_heatmap.png",
  "Figure 2B. LV significant DEG heatmap (z-scored VST counts)."));
children.push(...figureBlock("Liver_GSEA_hallmark_top20.png",
  "Figure 3A. Liver Hallmark GSEA, top pathways (padj<0.05)."));
children.push(...figureBlock("LV_GSEA_hallmark_top20.png",
  "Figure 3B. LV Hallmark GSEA, top pathways (padj<0.05)."));
children.push(...figureBlock("Angptl4axis_network.png",
  "Figure 4. STRING protein-protein interaction network centered on the Angptl4-Sdc/Cdh5 axis " +
  "(confidence>=0.7, +15 first-shell interactors). Red: seed genes; blue: STRING interactors."));
children.push(...figureBlock("Angptl4axis_liver_localization_dotplot.png",
  "Figure 5. Liver cell-type localization of Angptl4-axis genes, cross-species reference " +
  "(project4, human GSE136103)."));
children.push(...figureBlock("Vina_screening_ranked.png",
  "Figure 6. AutoDock Vina virtual screening of 21 compounds against the ANGPTL4 fibrinogen-like " +
  "domain (PDB 6EUB), ranked by best binding affinity."));
children.push(...figureBlock("Ezetimibe_binding_pose.png",
  "Figure 7A. Ezetimibe top DiffDock pose (confidence -1.32), converging within 3.5 A of the " +
  "Vina-defined pocket."));
children.push(...figureBlock("Resmetirom_binding_pose.png",
  "Figure 7B. Resmetirom top DiffDock pose (confidence -2.06), 23.5 A from the Vina-defined " +
  "pocket (a distinct site)."));

children.push(heading2("Tables"));
children.push(new Paragraph({ children: [new TextRun({ text: "Table 1. LV-to-liver ligand-receptor matches (CellChatDB).", size: 18, bold: true })], spacing: { before: 150, after: 80 } }));
children.push(simpleTable(
  ["Interaction", "Ligand", "Receptor", "Pathway", "Evidence"],
  [
    ["ANGPTL4_CDH5", "Angptl4", "Cdh5", "ANGPTL", "PMID: 30049845"],
    ["ANGPTL4_SDC1", "Angptl4", "Sdc1", "ANGPTL", "PMID: 29017031"],
    ["ANGPTL4_SDC2", "Angptl4", "Sdc2", "ANGPTL", "PMID: 29017031"],
    ["ANGPTL4_SDC3", "Angptl4", "Sdc3", "ANGPTL", "PMID: 29017031"],
    ["ANGPTL4_SDC4", "Angptl4", "Sdc4", "ANGPTL", "PMID: 29017031"],
  ],
  [2200, 1300, 1300, 1500, 2726]
));

children.push(new Paragraph({ children: [new TextRun({ text: "Table 2. STITCH-identified chemical partners of Angptl4-axis genes (selected).", size: 18, bold: true })], spacing: { before: 200, after: 80 } }));
children.push(simpleTable(
  ["Gene", "Compound"],
  [
    ["Angptl4", "Linoleic acid (9,12-octadecadienoic acid)"],
    ["Angptl4", "Palmitic acid"],
    ["Angptl4", "Eicosapentaenoic acid"],
    ["Angptl4", "Pioglitazone (approved drug)"],
    ["Sdc1 / Sdc2 / Sdc3", "Iduronic acid (heparan/dermatan sulfate GAG unit)"],
    ["Cdh5", "Calcium cation"],
  ],
  [3013, 6013]
));

children.push(new Paragraph({ children: [new TextRun({ text: "Table 3. DGIdb druggability summary for Angptl4-axis genes.", size: 18, bold: true })], spacing: { before: 200, after: 80 } }));
children.push(simpleTable(
  ["Gene", "# interactions", "# approved", "Example drugs"],
  [
    ["SDC2", "1", "0", "Heparan sulfate"],
    ["SDC4", "1", "1", "Repotrectinib (likely unrelated text-mining hit)"],
    ["CDH5", "1", "0", "FX06 (peptide)"],
    ["SDC3", "0", "0", "-"],
    ["SDC1", "3", "0", "Heparin; Indatuximab ravtansine (ADC)"],
    ["ANGPTL4", "0", "0", "- (genuinely undrugged; final target)"],
  ],
  [1800, 1800, 1500, 3926]
));

children.push(new Paragraph({ children: [new TextRun({ text: "Table 4. AutoDock Vina top 5 hits vs ANGPTL4 (PDB 6EUB).", size: 18, bold: true })], spacing: { before: 200, after: 80 } }));
children.push(simpleTable(
  ["Rank", "Compound", "Best affinity (kcal/mol)", "Class"],
  [
    ["1", "Resmetirom", "-9.07", "Cardiometabolic/MASH drug"],
    ["2", "Ezetimibe", "-8.88", "Cardiometabolic/MASH drug"],
    ["3", "Pioglitazone", "-8.28", "Cardiometabolic/MASH drug"],
    ["4", "Fenofibrate", "-8.21", "Cardiometabolic/MASH drug"],
    ["5", "Empagliflozin", "-8.14", "Cardiometabolic/MASH drug"],
  ],
  [900, 2500, 3100, 2526]
));

children.push(new Paragraph({ children: [new PageBreak()] }));

// --- 4. Discussion ---
children.push(heading1("4. 고찰 (Discussion)"));
content.discussion.forEach((p) => children.push(bodyPar(p)));

// --- 5. Conclusion ---
children.push(heading1("5. 결론 및 향후 연구 방향 (Conclusion and Future Directions)"));
children.push(bodyPar(content.conclusion));

// --- References ---
children.push(heading1("참고문헌 (References)"));
content.references.forEach((r, i) => {
  children.push(new Paragraph({
    children: [new TextRun({ text: `${i + 1}. ${r}`, size: 20 })],
    spacing: { after: 120 },
  }));
});

const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: A4_WIDTH_DXA, height: 16838 },
        margin: { top: MARGIN_DXA, bottom: MARGIN_DXA, left: MARGIN_DXA, right: MARGIN_DXA },
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const outPath = path.join(__dirname, "manuscript.docx");
  fs.writeFileSync(outPath, buf);
  console.log("Wrote", outPath);
});
