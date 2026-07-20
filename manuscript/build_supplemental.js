const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  ImageRun, Table, TableRow, TableCell, WidthType, PageBreak, ExternalHyperlink,
} = require("docx");
const CITATIONS = require("./citations.js");

const BASE_DIR = path.join(__dirname, "..");
const A4_WIDTH_DXA = 11906;
const MARGIN_DXA = 1440;
const USABLE_WIDTH_DXA = A4_WIDTH_DXA - 2 * MARGIN_DXA;
const USABLE_WIDTH_PX = Math.round(USABLE_WIDTH_DXA / 1440 * 96);

const CITATION_PATTERN = new RegExp(
  "(" + Object.keys(CITATIONS.inText)
    .sort((a, b) => b.length - a.length)
    .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|") + ")",
  "g"
);

function linkifyCitations(text, size) {
  return text.split(CITATION_PATTERN).filter(Boolean).map((part) => {
    const url = CITATIONS.inText[part];
    if (!url) return new TextRun({ text: part, size });
    return new ExternalHyperlink({
      link: url,
      children: [new TextRun({ text: part, size, color: "0563C1", underline: {} })],
    });
  });
}

function heading1(text, opts = {}) { return new Paragraph({ text, heading: HeadingLevel.HEADING_1, spacing: { before: 300, after: 150 }, ...opts }); }
function heading2(text, opts = {}) { return new Paragraph({ text, heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 }, ...opts }); }
function bodyPar(text) {
  return new Paragraph({ children: linkifyCitations(text, 20), spacing: { after: 150, line: 320 }, alignment: AlignmentType.JUSTIFIED });
}
function italicPar(text) {
  return new Paragraph({ children: [new TextRun({ text, size: 19, italics: true })], spacing: { after: 150, line: 300 } });
}

function figureBlock(relFile, captionText, maxHeightPx) {
  const p = path.join(BASE_DIR, relFile);
  const buf = fs.readFileSync(p);
  const dims = require("image-size").imageSize(buf);
  let w = USABLE_WIDTH_PX;
  let h = Math.round(dims.height * (w / dims.width));
  if (maxHeightPx && h > maxHeightPx) {
    h = maxHeightPx;
    w = Math.round(dims.width * (h / dims.height));
  }
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

function build(lang) {
  const content = require(`./content_${lang}.js`);
  const S = content.supplemental;
  const RESULTS_DIR = path.join(BASE_DIR, "results");
  const children = [];

  children.push(new Paragraph({ children: [new TextRun({ text: S.docTitle, bold: true, size: 32 })], alignment: AlignmentType.CENTER, spacing: { after: 100 } }));
  children.push(new Paragraph({ children: [new TextRun({ text: S.docSubtitle, size: 20, italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 400 } }));

  // --- Code and Analysis Workflow (new) ---
  children.push(heading1(S.labels.code));
  children.push(bodyPar(content.codeWalkthrough.intro));
  const cw = content.codeWalkthrough.items;
  const mkCell = (text, bold) => new TableCell({
    children: [new Paragraph({ children: [new TextRun({ text, size: 17, bold: !!bold })] })],
    margins: { top: 60, bottom: 60, left: 80, right: 80 },
  });
  children.push(new Table({
    width: { size: USABLE_WIDTH_DXA, type: WidthType.DXA },
    columnWidths: [2800, 6226],
    rows: [
      new TableRow({ children: [mkCell("Script", true), mkCell(lang === "kr" ? "설명" : "Description", true)] }),
      ...cw.map((it) => new TableRow({ children: [mkCell(it.file), mkCell(it.desc)] })),
    ],
  }));
  children.push(new Paragraph({ text: "", spacing: { after: 150 } }));
  children.push(bodyPar(content.codeWalkthrough.reproNote));

  // --- Supplemental Figures ---
  children.push(heading1(S.labels.figures, { pageBreakBefore: true }));
  S.figures.forEach((f) => children.push(...figureBlock(f.file, f.caption, f.maxHeightPx)));

  // --- Supplemental Tables ---
  children.push(heading1(S.labels.tables, { pageBreakBefore: true }));

  const tableSpecs = [
    { key: "S1", file: "Liver_DEG_sig_padj05_lfc1.0.csv", maxCols: 7, widths: [2400, 1100, 1300, 1000, 1300, 1226, 1700] },
    { key: "S2", file: "LV_DEG_sig_padj05_lfc1.0.csv", maxCols: 7, widths: [2400, 1100, 1300, 1000, 1300, 1226, 1700] },
    { key: "S3", file: "Liver_GO_BP.csv", maxCols: 6, widths: [1400, 3200, 1300, 1300, 1300, 926] },
    { key: "S4", file: "LV_GO_BP.csv", maxCols: 6, widths: [1400, 3200, 1300, 1300, 1300, 926] },
    { key: "S5", file: "Liver_LV_KEGG_combined.csv", maxCols: 7, widths: [900, 900, 2800, 1200, 1200, 1200, 1026] },
    { key: "S6", file: "Angptl4axis_hub_genes.csv", maxCols: null, widths: null },
    { key: "S7", file: path.join("..", "docking", "results", "vina_summary.csv"), maxCols: null, widths: null },
    { key: "S8", file: "STITCH_hub_gene_chemical_partners.csv", maxCols: null, widths: null },
    { key: "S9", file: "DGIdb_druggability_summary.csv", maxCols: null, widths: null },
    { key: "S10", file: "LiverToHeart_candidate_hub_genes.csv", maxCols: null, widths: null },
    { key: "S11", file: "TabulaMuris_heart_Sema5bAxis_expression.csv", maxCols: null, widths: null },
    { key: "S12", file: "STITCH_semaphorin_axis_chemical_partners.csv", maxCols: null, widths: null },
    { key: "S13", file: "LiverToHeart_DGIdb_druggability.csv", maxCols: null, widths: null },
    { key: "S14", file: path.join("..", "docking", "results_dual", "vina_summary_combined.csv"), maxCols: null, widths: null },
  ];

  tableSpecs.forEach((spec, idx) => {
    children.push(heading2(S.tableTitles[spec.key], idx > 0 ? { pageBreakBefore: true } : {}));
    children.push(italicPar(S.tableIntros[spec.key]));
    const csvPath = spec.file.startsWith("..") ? path.join(RESULTS_DIR, spec.file) : path.join(RESULTS_DIR, spec.file);
    children.push(...csvToTable(csvPath, spec.maxCols, spec.widths));
  });

  // --- Supplemental Text ---
  children.push(heading1(S.labels.text, { pageBreakBefore: true }));
  children.push(heading2(S.textTitles.S1));
  S.textS1.forEach((p) => children.push(bodyPar(p)));

  children.push(heading2(S.textTitles.S2));
  S.textS2.forEach((p) => children.push(bodyPar(p)));

  children.push(heading2(S.textTitles.S3, { pageBreakBefore: true }));
  S.textS3.forEach((block) => {
    if (block.type === "figure") children.push(...figureBlock(block.file, block.caption));
    else children.push(bodyPar(block.text));
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

  return Packer.toBuffer(doc).then((buf) => {
    const outPath = path.join(__dirname, `supplemental_data_${lang.toUpperCase()}.docx`);
    fs.writeFileSync(outPath, buf);
    console.log("Wrote", outPath);
  });
}

Promise.all([build("kr"), build("en")]);
