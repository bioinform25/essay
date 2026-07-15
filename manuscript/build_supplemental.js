const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  ImageRun, Table, TableRow, TableCell, WidthType, PageBreak,
} = require("docx");

const RESULTS_DIR = path.join(__dirname, "..", "results");
const FIG_DIR = path.join(__dirname, "..", "figures");
const A4_WIDTH_DXA = 11906;
const MARGIN_DXA = 1440;
const USABLE_WIDTH_DXA = A4_WIDTH_DXA - 2 * MARGIN_DXA;
const USABLE_WIDTH_PX = Math.round(USABLE_WIDTH_DXA / 1440 * 96);

function heading1(text) { return new Paragraph({ text, heading: HeadingLevel.HEADING_1, spacing: { before: 300, after: 150 } }); }
function heading2(text) { return new Paragraph({ text, heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }); }
function bodyPar(text) {
  return new Paragraph({ children: [new TextRun({ text, size: 20 })], spacing: { after: 150, line: 320 }, alignment: AlignmentType.JUSTIFIED });
}

function figureBlock(filename, captionText) {
  const p = path.join(FIG_DIR, filename);
  const buf = fs.readFileSync(p);
  const dims = require("image-size").imageSize(buf);
  const w = USABLE_WIDTH_PX;
  const h = Math.round(dims.height * (w / dims.width));
  return [
    new Paragraph({ children: [new ImageRun({ data: buf, transformation: { width: w, height: h }, type: "png" })], alignment: AlignmentType.CENTER, spacing: { before: 200, after: 100 } }),
    new Paragraph({ children: [new TextRun({ text: captionText, size: 18, italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }),
  ];
}

function csvToTable(csvPath, maxCols, colWidthsDxa) {
  const raw = fs.readFileSync(csvPath, "utf-8");
  const records = parse(raw, { columns: true, skip_empty_lines: true });
  if (records.length === 0) return [new Paragraph({ children: [new TextRun({ text: "(no rows)", italics: true, size: 18 })] })];
  let cols = Object.keys(records[0]);
  if (maxCols) cols = cols.slice(0, maxCols);
  const widths = colWidthsDxa || cols.map(() => Math.floor(USABLE_WIDTH_DXA / cols.length));
  const mkCell = (text, bold) => new TableCell({
    children: [new Paragraph({ children: [new TextRun({ text: String(text).slice(0, 120), size: 15, bold: !!bold })] })],
    margins: { top: 40, bottom: 40, left: 60, right: 60 },
  });
  return [new Table({
    width: { size: USABLE_WIDTH_DXA, type: WidthType.DXA },
    columnWidths: widths,
    rows: [
      new TableRow({ children: cols.map((c) => mkCell(c, true)), tableHeader: true }),
      ...records.map((r) => new TableRow({ children: cols.map((c) => mkCell(r[c] ?? "")) })),
    ],
  })];
}

const children = [];

children.push(new Paragraph({
  children: [new TextRun({ text: "Supplemental Data", bold: true, size: 32 })],
  alignment: AlignmentType.CENTER, spacing: { after: 100 },
}));
children.push(new Paragraph({
  children: [new TextRun({
    text: "다중장기 전사체 통합분석을 통한 Angptl4-Syndecan/Cadherin 축 매개 심장-간 증후군 " +
          "신규 표적 발굴 및 구조 기반 약물 스크리닝 — Supplemental Figures and Tables",
    size: 20, italics: true,
  })],
  alignment: AlignmentType.CENTER, spacing: { after: 400 },
}));

// --- Supplemental Figures ---
children.push(heading1("Supplemental Figures"));

children.push(...figureBlock("Liver_GO_BP_dotplot.png", "Figure S1. Liver GO Biological Process enrichment (34 significant terms, padj<0.05)."));
children.push(...figureBlock("LV_GO_BP_dotplot.png", "Figure S2. LV GO Biological Process enrichment (10 significant terms, padj<0.05)."));
children.push(...figureBlock("Liver_KEGG_dotplot.png", "Figure S3. Liver KEGG pathway enrichment (9 significant pathways, padj<0.05). No KEGG pathway reached significance in LV."));
children.push(...figureBlock("Angptl4axis_liver_localization_by_condition.png", "Figure S4. Liver localization of Angptl4-axis genes split by condition (healthy vs. cirrhotic; project4 GSE136103 cross-species reference)."));

children.push(new Paragraph({ children: [new PageBreak()] }));

// --- Supplemental Tables ---
children.push(heading1("Supplemental Tables"));

children.push(heading2("Table S1. Full significant DEG list, Liver (n=86, padj<0.01, |log2FC|>1.5)"));
children.push(...csvToTable(path.join(RESULTS_DIR, "Liver_DEG_sig_padj01_lfc1.5.csv"), 7,
  [2400, 1100, 1300, 1000, 1300, 1226, 1700]));

children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(heading2("Table S2. Full significant DEG list, LV (n=20, padj<0.01, |log2FC|>1.5)"));
children.push(...csvToTable(path.join(RESULTS_DIR, "LV_DEG_sig_padj01_lfc1.5.csv"), 7,
  [2400, 1100, 1300, 1000, 1300, 1226, 1700]));

children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(heading2("Table S3. Liver GO-BP enrichment (full, padj<0.05)"));
children.push(...csvToTable(path.join(RESULTS_DIR, "Liver_GO_BP.csv"), 6,
  [1400, 3200, 1300, 1300, 1300, 926]));

children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(heading2("Table S4. LV GO-BP enrichment (full, padj<0.05)"));
children.push(...csvToTable(path.join(RESULTS_DIR, "LV_GO_BP.csv"), 6,
  [1400, 3200, 1300, 1300, 1300, 926]));

children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(heading2("Table S5. Liver KEGG pathway enrichment (full, padj<0.05)"));
children.push(...csvToTable(path.join(RESULTS_DIR, "Liver_KEGG.csv"), 6,
  [1000, 3200, 1300, 1300, 1300, 1226]));

children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(heading2("Table S6. STRING network hub genes (Angptl4-Sdc/Cdh5 axis + first-shell interactors)"));
children.push(...csvToTable(path.join(RESULTS_DIR, "Angptl4axis_hub_genes.csv")));

children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(heading2("Table S7. Full AutoDock Vina ranking (all 21 compounds)"));
children.push(...csvToTable(path.join(__dirname, "..", "docking", "results", "vina_summary.csv")));

children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(heading2("Table S8. STITCH chemical partners of Angptl4-axis genes (full)"));
children.push(...csvToTable(path.join(RESULTS_DIR, "STITCH_hub_gene_chemical_partners.csv")));

children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(heading2("Table S9. DGIdb druggability summary"));
children.push(...csvToTable(path.join(RESULTS_DIR, "DGIdb_druggability_summary.csv")));

children.push(new Paragraph({ children: [new PageBreak()] }));

// --- Supplemental Text ---
children.push(heading1("Supplemental Text"));
children.push(heading2("Text S1. Final target selection rationale"));
const rationale = fs.readFileSync(path.join(RESULTS_DIR, "target_selection_rationale.md"), "utf-8");
rationale.split("\n").filter((l) => l.trim() && !l.startsWith("#") && !l.startsWith("|")).forEach((line) => {
  children.push(bodyPar(line.replace(/\*\*/g, "").replace(/`/g, "")));
});

children.push(heading2("Text S2. DiffDock cross-check summary"));
const crosscheck = fs.readFileSync(path.join(RESULTS_DIR, "diffdock_crosscheck_summary.md"), "utf-8");
crosscheck.split("\n").filter((l) => l.trim() && !l.startsWith("#") && !l.startsWith("|")).forEach((line) => {
  children.push(bodyPar(line.replace(/\*\*/g, "").replace(/`/g, "")));
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
  const outPath = path.join(__dirname, "supplemental_data.docx");
  fs.writeFileSync(outPath, buf);
  console.log("Wrote", outPath);
});
