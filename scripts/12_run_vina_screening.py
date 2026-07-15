import subprocess, os, glob, csv, re

VINA = r"C:\Users\SAMSUNG\bin\vina.exe"
RECEPTOR = "docking/receptor/6EUB_receptor.pdbqt"

with open("docking/receptor/box_center.txt") as f:
    cx, cy, cz = map(float, f.read().split())

os.makedirs("docking/results", exist_ok=True)

ligand_files = sorted(glob.glob("docking/ligands/pdbqt/*.pdbqt"))
print(f"Screening {len(ligand_files)} ligands against ANGPTL4 (PDB 6EUB) fibrinogen-like domain\n")

results = []
for lig_path in ligand_files:
    label = os.path.splitext(os.path.basename(lig_path))[0]
    out_path = f"docking/results/{label}_out.pdbqt"
    log_path = f"docking/results/{label}_log.txt"
    cmd = [VINA, "--receptor", RECEPTOR, "--ligand", lig_path,
           "--center_x", str(cx), "--center_y", str(cy), "--center_z", str(cz),
           "--size_x", "24", "--size_y", "24", "--size_z", "24",
           "--exhaustiveness", "16", "--num_modes", "5", "--seed", "42",
           "--out", out_path]
    res = subprocess.run(cmd, capture_output=True, text=True)
    with open(log_path, "w") as f:
        f.write(res.stdout + "\n" + res.stderr)

    best_affinity = None
    for line in res.stdout.splitlines():
        m = re.match(r"^\s*1\s+(-?\d+\.?\d*)", line)
        if m:
            best_affinity = float(m.group(1))
            break
    status = "OK" if best_affinity is not None else "FAILED"
    print(f"{label:25s} best affinity: {best_affinity} kcal/mol  [{status}]")
    results.append({"label": label, "best_affinity_kcal_mol": best_affinity, "status": status})

results.sort(key=lambda r: (r["best_affinity_kcal_mol"] is None, r["best_affinity_kcal_mol"]))
with open("docking/results/vina_summary.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["label", "best_affinity_kcal_mol", "status"])
    w.writeheader()
    w.writerows(results)

print("\n=== Ranked results (strongest binding first) ===")
for r in results:
    print(f"{r['label']:25s} {r['best_affinity_kcal_mol']}")
