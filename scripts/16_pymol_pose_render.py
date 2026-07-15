"""Headless PyMOL rendering of ANGPTL4 (6EUB) top DiffDock poses.
Run with: pymol -cq 16_pymol_pose_render.py -- <protein_pdb> <ligand_sdf> <out_png> <title>
"""
import sys
from pymol import cmd

argv = sys.argv[1:]
protein_pdb, ligand_sdf, out_png, title = argv[0], argv[1], argv[2], argv[3]

cmd.load(protein_pdb, "receptor")
cmd.load(ligand_sdf, "ligand")

cmd.hide("everything")
cmd.bg_color("white")
cmd.set("ray_opaque_background", 1)

cmd.show("cartoon", "receptor")
cmd.color("grey80", "receptor")
cmd.set("cartoon_transparency", 0.2, "receptor")

cmd.show("sticks", "ligand")
cmd.color("cyan", "ligand and elem C")
cmd.util.cnc("ligand")

cmd.select("pocket", "byres (receptor within 4.5 of ligand)")
cmd.show("sticks", "pocket")
cmd.color("wheat", "pocket and elem C")
cmd.util.cnc("pocket")

cmd.set("stick_radius", 0.18)
cmd.set("cartoon_fancy_helices", 1)
cmd.set("ray_shadows", 0)
cmd.set("antialias", 2)
# no residue labels baked into the image -- contact-residue identities are
# listed in the figure caption text instead, to avoid overlapping labels

cmd.orient("ligand")
cmd.zoom("ligand", 6)

cmd.set("ray_trace_mode", 0)
cmd.png(out_png, width=1600, height=1400, dpi=200, ray=1)
print("Wrote", out_png)
