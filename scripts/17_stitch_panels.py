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


def stitch(pairs, out_name, align="min"):
    """pairs: list of (image_filename, letter) to place left-to-right.
    align="min": downscale all panels to the shortest panel's height (default;
      fine when panels were rendered at similar font sizes/resolutions).
    align="max": keep every panel at its native resolution (no downscaling,
      so small text like heatmap row labels never shrinks) and pad shorter
      panels with white space so they still line up at the top.
    """
    imgs = [Image.open(os.path.join(FIG_DIR, fn)).convert("RGB") for fn, _ in pairs]

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


stitch([("Liver_volcano.png", "A"), ("LV_volcano.png", "B")], "Figure1_volcano_combined.png")
stitch([("Liver_heatmap.png", "A"), ("LV_heatmap.png", "B")], "Figure2_heatmap_combined.png", align="max")
stitch([("Liver_GSEA_hallmark_top20.png", "A"), ("LV_GSEA_hallmark_top20.png", "B")], "Figure3_GSEA_combined.png")
stitch([("Pioglitazone_binding_pose_pymol.png", "A"), ("Ezetimibe_binding_pose_pymol.png", "B"), ("Resmetirom_binding_pose_pymol.png", "C")], "Figure7_pose_combined.png")
stitch([("Liver_GO_BP_dotplot.png", "A"), ("LV_GO_BP_dotplot.png", "B")], "FigureS_GO_combined.png")
