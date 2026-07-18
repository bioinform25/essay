"""Stitch paired sub-figures into single composite Figure images (panel A / B
side by side, with a bold panel-letter tag), matching the convention seen in
published papers (e.g. Fig. 1A-D combined as one figure with one legend)."""
from PIL import Image, ImageDraw, ImageFont
import os

FIG_DIR = "figures"
OUT_DIR = "figures/composite"
os.makedirs(OUT_DIR, exist_ok=True)

try:
    FONT = ImageFont.truetype("arialbd.ttf", 56)
except Exception:
    FONT = ImageFont.load_default()

GAP = 30
PAD = 10


def load_flat(path):
    """Open an image and flatten it onto a white RGB background, handling
    any alpha channel correctly (plain .convert("RGB") on an RGBA image
    drops the alpha and leaves transparent pixels black, not white)."""
    im = Image.open(path)
    if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, "white")
        bg.paste(im, mask=im.split()[-1])
        return bg
    return im.convert("RGB")


def stitch(pairs, out_name, align="min"):
    """pairs: list of (image_filename, letter) to place left-to-right.
    align="min": downscale all panels to the shortest panel's height (default;
      fine when panels were rendered at similar font sizes/resolutions).
    align="max": keep every panel at its native resolution (no downscaling,
      so small text like heatmap row labels never shrinks) and pad shorter
      panels with white space so they still line up at the top.
    """
    imgs = [load_flat(os.path.join(FIG_DIR, fn)) for fn, _ in pairs]

    if align == "min":
        target_h = min(im.height for im in imgs)
        resized = []
        for im in imgs:
            w = int(im.width * (target_h / im.height))
            resized.append(im.resize((w, target_h), Image.LANCZOS))
    else:
        target_h = max(im.height for im in imgs)
        resized = []
        for im in imgs:
            if im.height == target_h:
                resized.append(im)
            else:
                padded = Image.new("RGB", (im.width, target_h), "white")
                padded.paste(im, (0, 0))
                resized.append(padded)

    total_w = sum(im.width for im in resized) + GAP * (len(resized) - 1)
    canvas = Image.new("RGB", (total_w, target_h), "white")
    x = 0
    draw = ImageDraw.Draw(canvas)
    for (im, (fn, letter)) in zip(resized, pairs):
        canvas.paste(im, (x, 0))
        draw.text((x + PAD, PAD), letter, fill="black", font=FONT)
        x += im.width + GAP

    out_path = os.path.join(OUT_DIR, out_name)
    canvas.save(out_path)
    print("Wrote", out_path, canvas.size)
    return out_path


def grid(rows, out_name, base_dir=None):
    """rows: list of row-lists, each a list of (image_filename, letter) placed
    left-to-right within that row (via stitch(), min-height aligned within
    the row), then stacked top-to-bottom. Narrower rows are left-aligned on
    a white canvas at the widest row's width (no rescaling across rows, so
    text size stays consistent)."""
    src_dir = base_dir or FIG_DIR
    row_imgs = []
    for row in rows:
        imgs = [load_flat(os.path.join(src_dir, fn)) for fn, _ in row]
        target_h = min(im.height for im in imgs)
        resized = [im.resize((int(im.width * (target_h / im.height)), target_h), Image.LANCZOS) for im in imgs]
        row_w = sum(im.width for im in resized) + GAP * (len(resized) - 1)
        row_canvas = Image.new("RGB", (row_w, target_h), "white")
        draw = ImageDraw.Draw(row_canvas)
        x = 0
        for im, (fn, letter) in zip(resized, row):
            row_canvas.paste(im, (x, 0))
            draw.text((x + PAD, PAD), letter, fill="black", font=FONT)
            x += im.width + GAP
        row_imgs.append(row_canvas)

    max_w = max(im.width for im in row_imgs)
    total_h = sum(im.height for im in row_imgs) + GAP * (len(row_imgs) - 1)
    canvas = Image.new("RGB", (max_w, total_h), "white")
    y = 0
    for im in row_imgs:
        canvas.paste(im, (0, y))
        y += im.height + GAP

    out_path = os.path.join(OUT_DIR, out_name)
    canvas.save(out_path)
    print("Wrote", out_path, canvas.size)
    return out_path


stitch([("Liver_volcano.png", "A"), ("LV_volcano.png", "B")], "Figure1_volcano_combined.png")
stitch([("Liver_heatmap.png", "A"), ("LV_heatmap.png", "B")], "Figure2_heatmap_combined.png", align="max")
grid([
    [("Liver_GSEA_hallmark_top20.png", "A"), ("LV_GSEA_hallmark_top20.png", "B")],
    [("gsea_running_Liver_1.png", "C"), ("gsea_running_Liver_2.png", "D")],
    [("gsea_running_LV_1.png", "E"), ("gsea_running_LV_2.png", "F")],
], "Figure3_GSEA_combined.png")
stitch([("Pioglitazone_binding_pose_pymol.png", "A"), ("Ezetimibe_binding_pose_pymol.png", "B"), ("Resmetirom_binding_pose_pymol.png", "C")], "Figure7_pose_combined.png")
stitch([("Liver_GO_BP_dotplot.png", "A"), ("LV_GO_BP_dotplot.png", "B")], "FigureS_GO_combined.png")
grid([
    [("Angptl4axis_liver_localization_by_condition.png", "A")],
    [("Angptl4axis_UMAP_featureplot_by_condition.png", "B")],
], "FigureS3_condition_combined.png")
