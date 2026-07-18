const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  ImageRun, Table, TableRow, TableCell, WidthType, PageBreak,
} = require("docx");

const BASE_DIR = path.join(__dirname, "..");
const A4_WIDTH_DXA = 11906;
const MARGIN_DXA = 1440;
const USABLE_WIDTH_DXA = A4_WIDTH_DXA - 2 * MARGIN_DXA;
const USABLE_WIDTH_PX = Math.round(USABLE_WIDTH_DXA / 1440 * 96);

function bodyPar(text) {
  return new Paragraph({
    children: [new TextRun({ text, size: 22 })],
    spacing: { after: 200, line: 360 },
    alignment: AlignmentType.JUSTIFIED,
  });
}
function heading1(text, opts = {}) { return new Paragraph({ text, heading: HeadingLevel.HEADING_1, spacing: { before: 300, after: 150 }, ...opts }); }
function heading2(text, opts = {}) { return new Paragraph({ text, heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 }, ...opts }); }

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

function build(lang) {
  const content = require(`./content_${lang}.js`);
  const L = content.labels;
  const children = [];

  // --- Title page ---
  children.push(new Paragraph({
    children: [new TextRun({ text: content.title, bold: true, size: 30 })],
    alignment: AlignmentType.CENTER, spacing: { after: 300 },
  }));
  children.push(new Paragraph({
    children: [new TextRun({ text: content.studentLine, size: 22 })],
    alignment: AlignmentType.CENTER, spacing: { after: 400 },
  }));
  children.push(heading2(L.abstract));
  children.push(bodyPar(content.abstract));
  children.push(bodyPar(content.keywords));

  // --- Graphical Abstract ---
  children.push(heading2(L.graphicalAbstract, { pageBreakBefore: true }));
  children.push(...figureBlock(content.graphicalAbstract.file, content.graphicalAbstract.caption, 720));

  // --- Introduction ---
  children.push(heading1(L.introduction, { pageBreakBefore: true }));
  content.introduction.forEach((p) => children.push(bodyPar(p)));

  // --- Methods ---
  children.push(heading1(L.methods));
  content.methods.forEach((m) => { children.push(heading2(m.h)); children.push(bodyPar(m.p)); });

  // --- Results (figures and tables interleaved) ---
  children.push(heading1(L.results));
  content.resultsBlocks.forEach((block) => {
    if (block.type === "heading") children.push(heading2(block.text));
    else if (block.type === "p") children.push(bodyPar(block.text));
    else if (block.type === "figure") children.push(...figureBlock(block.file, block.caption));
    else if (block.type === "table") {
      children.push(new Paragraph({
        children: [new TextRun({ text: block.title, size: 18, bold: true })],
        spacing: { before: 200, after: 80 },
      }));
      children.push(simpleTable(block.header, block.rows, block.widths));
    }
  });

  // --- Discussion ---
  children.push(heading1(L.discussion, { pageBreakBefore: true }));
  content.discussion.forEach((p) => children.push(bodyPar(p)));

  // --- Conclusion ---
  children.push(heading1(L.conclusion));
  const C = content.conclusion;
  children.push(bodyPar(C.summary));
  children.push(bodyPar(C.planIntro));
  C.steps.forEach((s) => { children.push(heading2(s.h)); children.push(bodyPar(s.p)); });
  children.push(bodyPar(C.closing));

  // --- References ---
  children.push(heading1(L.references));
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

  return Packer.toBuffer(doc).then((buf) => {
    const outPath = path.join(__dirname, `manuscript_${lang.toUpperCase()}.docx`);
    fs.writeFileSync(outPath, buf);
    console.log("Wrote", outPath);
  });
}

Promise.all([build("kr"), build("en")]);
