// Renders the final Korean manuscript (content_kr.js) into the exact visual
// format of the official school template (2026 학술제 소논문_학번_이름.docx):
// same page size/margins, 맑은 고딕 11pt body font, direct bold+size run
// formatting for headings (the template uses no named Heading style), the
// Abstract inside a single-cell F5F5F5-shaded table, and the "Keywords:"
// label matching the template's English-label convention. All instructional
// placeholder text ("[작성 방법]" boxes, the page-1 reminder note, and the
// entire "작성 유의사항" guidance section) is omitted, since that is
// guidance for the student, not part of the paper -- the template itself
// says to delete it once the paper is written. No Graphical Abstract page
// is included, since the template does not call for one and inserting one
// would push "1. 서론" off page 2, violating the template's own page-1/
// page-2 rule.
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  ImageRun, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  ExternalHyperlink,
} = require("docx");
const CITATIONS = require("./citations.js");

const BASE_DIR = path.join(__dirname, "..");
const A4_WIDTH_DXA = 11906;
const A4_HEIGHT_DXA = 16838;
const MARGIN_TOP_DXA = 1701;
const MARGIN_SIDE_DXA = 1440;
const USABLE_WIDTH_DXA = A4_WIDTH_DXA - 2 * MARGIN_SIDE_DXA;
const USABLE_WIDTH_PX = Math.round(USABLE_WIDTH_DXA / 1440 * 96);
const LINE_SPACING = { line: 276, lineRule: "auto" };
const BODY_FONT = "맑은 고딕";

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

function bodyPar(text) {
  return new Paragraph({
    children: linkifyCitations(text, 22),
    spacing: { after: 120, ...LINE_SPACING },
    alignment: AlignmentType.JUSTIFIED,
  });
}
function sectionHeading(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 26 })],
    spacing: { before: 240, after: 120, ...LINE_SPACING },
    alignment: AlignmentType.JUSTIFIED,
    ...opts,
  });
}
function subHeading(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 24 })],
    spacing: { before: 160, after: 100, ...LINE_SPACING },
    alignment: AlignmentType.JUSTIFIED,
  });
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
    new Paragraph({
      children: [new ImageRun({ data: buf, transformation: { width: w, height: h }, type: "png" })],
      alignment: AlignmentType.CENTER,
      spacing: { before: 160, after: 80 },
    }),
    new Paragraph({
      children: [new TextRun({ text: captionText, size: 18, italics: true })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
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

  // --- Title / student line / rule (matches template layout, spacing " +
  // "compressed vs. the template's blank placeholder area so the much " +
  // "longer real abstract still fits within page 1) ---
  children.push(new Paragraph({
    children: [new TextRun({ text: content.title, bold: true, size: 30 })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 0, ...LINE_SPACING },
  }));
  children.push(new Paragraph({
    children: [new TextRun({ text: content.studentLine, size: 22 })],
    alignment: AlignmentType.RIGHT,
    spacing: { after: 0, ...LINE_SPACING },
  }));
  children.push(new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, space: 1, color: "auto" } },
    spacing: { after: 0, ...LINE_SPACING },
  }));

  // --- Abstract (shaded single-cell table, matching template) ---
  children.push(new Paragraph({
    children: [new TextRun({ text: "Abstract", bold: true, size: 26 })],
    spacing: { after: 0, ...LINE_SPACING },
  }));
  children.push(new Table({
    width: { size: USABLE_WIDTH_DXA, type: WidthType.DXA },
    alignment: AlignmentType.CENTER,
    columnWidths: [USABLE_WIDTH_DXA],
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: USABLE_WIDTH_DXA, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, color: "auto", fill: "F5F5F5" },
        margins: { top: 20, left: 120, bottom: 20, right: 120 },
        children: [new Paragraph({
          children: linkifyCitations(content.abstract, 21),
          spacing: { after: 0, line: 240, lineRule: "auto" },
          alignment: AlignmentType.JUSTIFIED,
        })],
      })],
    })],
  }));

  // --- Keywords (template's "Keywords:" English label convention) ---
  const kwTerms = content.keywords.replace(/^(핵심단어|Keywords):\s*/, "");
  children.push(new Paragraph({
    children: [
      new TextRun({ text: "Keywords: ", bold: true }),
      new TextRun({ text: kwTerms }),
    ],
    spacing: { after: 0, ...LINE_SPACING },
  }));

  // --- Introduction (body starts page 2, per template rule) ---
  children.push(sectionHeading(L.introduction, { pageBreakBefore: true }));
  content.introduction.forEach((p) => children.push(bodyPar(p)));

  // --- Methods ---
  children.push(sectionHeading(L.methods));
  content.methods.forEach((m) => { children.push(subHeading(m.h)); children.push(bodyPar(m.p)); });

  // --- Results (figures and tables interleaved) ---
  children.push(sectionHeading(L.results));
  content.resultsBlocks.forEach((block) => {
    if (block.type === "heading") children.push(subHeading(block.text));
    else if (block.type === "p") children.push(bodyPar(block.text));
    else if (block.type === "figure") children.push(...figureBlock(block.file, block.caption));
    else if (block.type === "table") {
      children.push(new Paragraph({
        children: [new TextRun({ text: block.title, size: 20, bold: true })],
        spacing: { before: 160, after: 80 },
      }));
      children.push(simpleTable(block.header, block.rows, block.widths));
      children.push(new Paragraph({ spacing: { after: 120 } }));
    }
  });

  // --- Discussion ---
  children.push(sectionHeading(L.discussion));
  content.discussion.forEach((p) => children.push(bodyPar(p)));

  // --- Conclusion ---
  children.push(sectionHeading(L.conclusion));
  const C = content.conclusion;
  children.push(bodyPar(C.summary));
  children.push(bodyPar(C.planIntro));
  C.steps.forEach((s) => { children.push(subHeading(s.h)); children.push(bodyPar(s.p)); });
  children.push(bodyPar(C.closing));

  // --- References (plain numbered list, matching template's example format) ---
  children.push(sectionHeading(L.references));
  content.references.forEach((r, i) => {
    const url = CITATIONS.referenceUrls[i];
    const refChild = url
      ? new ExternalHyperlink({ link: url, children: [new TextRun({ text: r, color: "0563C1", underline: {} })] })
      : new TextRun({ text: r });
    children.push(new Paragraph({
      children: [new TextRun({ text: `${i + 1}. ` }), refChild],
      spacing: { after: 120, ...LINE_SPACING },
      alignment: AlignmentType.JUSTIFIED,
    }));
  });

  const doc = new Document({
    styles: {
      default: {
        document: { run: { font: BODY_FONT, size: 22 } },
      },
    },
    sections: [{
      properties: {
        page: {
          size: { width: A4_WIDTH_DXA, height: A4_HEIGHT_DXA },
          margin: { top: MARGIN_TOP_DXA, bottom: MARGIN_SIDE_DXA, left: MARGIN_SIDE_DXA, right: MARGIN_SIDE_DXA, header: 851, footer: 992 },
        },
      },
      children,
    }],
  });

  return Packer.toBuffer(doc).then((buf) => {
    const fileName = lang === "kr"
      ? "2026 학술제 소논문_202251154_이창우.docx"
      : "2026 학술제 소논문_202251154_이창우_EN.docx";
    const outPath = path.join(__dirname, "..", "..", fileName);
    fs.writeFileSync(outPath, buf);
    console.log("Wrote", outPath);
  });
}

Promise.all([build("kr"), build("en")]);
