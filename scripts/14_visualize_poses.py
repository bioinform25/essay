import py3Dmol

def render(protein_pdb, ligand_sdf, out_html, title):
    with open(protein_pdb) as f:
        protein_data = f.read()
    with open(ligand_sdf) as f:
        ligand_data = f.read()

    view = py3Dmol.view(width=900, height=700)
    view.addModel(protein_data, "pdb")
    view.setStyle({"model": 0}, {"cartoon": {"color": "lightgrey"}})

    view.addModel(ligand_data, "sdf")
    view.setStyle({"model": 1}, {"stick": {"colorscheme": "cyanCarbon", "radius": 0.25}})

    view.zoomTo({"model": 1})
    view.zoom(0.5)

    html = view._make_html()
    wrapped = f"""<!doctype html><html><head><meta charset="utf-8">
<title>{title}</title>
<style>body{{margin:0;font-family:sans-serif}}
#title{{padding:10px;font-size:18px;font-weight:bold;background:#fff}}</style>
</head><body><div id="title">{title}</div>{html}</body></html>"""
    with open(out_html, "w", encoding="utf-8") as f:
        f.write(wrapped)
    print("wrote", out_html)

render("docking/diffdock/Ezetimibe/complex_0/6EUB.pdb",
       "docking/diffdock/Ezetimibe/complex_0/rank1_confidence-1.32.sdf",
       "docking/results/Ezetimibe_pose.html",
       "ANGPTL4 (6EUB) - Ezetimibe DiffDock top pose (confidence -1.32)")

render("docking/diffdock/Resmetirom/complex_0/6EUB.pdb",
       "docking/diffdock/Resmetirom/complex_0/rank1_confidence-2.06.sdf",
       "docking/results/Resmetirom_pose.html",
       "ANGPTL4 (6EUB) - Resmetirom DiffDock top pose (confidence -2.06)")
