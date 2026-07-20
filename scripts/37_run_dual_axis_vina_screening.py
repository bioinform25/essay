import subprocess, os, glob, csv, re

VINA = r"C:\Users\SAMSUNG\bin\vina.exe"

TARGETS = {
    "Nrp1": {
        "receptor": "docking/receptor_nrp1/6FMC_receptor.pdbqt",
        "box_center": "docking/receptor_nrp1/box_center.txt",
        "size": 24,
        "results_dir": "docking/results_nrp1",
    },
    "Plxna1": {
        "receptor": "docking/receptor_plxna1/7Y4P_receptor.pdbqt",
        "box_center": "docking/receptor_plxna1/box_center.txt",
        "size": 30,
        "results_dir": "docking/results_plxna1",
    },
}

ligand_files = sorted(glob.glob("docking/ligands_dual/pdbqt/*.pdbqt"))

for target_name, cfg in TARGETS.items():
    os.makedirs(cfg["results_dir"], exist_ok=True)
    with open(cfg["box_center"]) as f:
        cx, cy, cz = map(float, f.read().split())
    size = cfg["size"]
    print(f"\n=== Screening {len(ligand_files)} ligands against {target_name} ===")
    results = []
    for lig_path in ligand_files:
        label = os.path.splitext(os.path.basename(lig_path))[0]
        out_path = f"{cfg['results_dir']}/{label}_out.pdbqt"
        log_path = f"{cfg['results_dir']}/{label}_log.txt"
        cmd = [VINA, "--receptor", cfg["receptor"], "--ligand", lig_path,
               "--center_x", str(cx), "--center_y", str(cy), "--center_z", str(cz),
               "--size_x", str(size), "--size_y", str(size), "--size_z", str(size),
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
        print(f"{label:15s} best affinity: {best_affinity} kcal/mol  [{status}]")
        results.append({"label": label, "target": target_name, "best_affinity_kcal_mol": best_affinity, "status": status})

    results.sort(key=lambda r: (r["best_affinity_kcal_mol"] is None, r["best_affinity_kcal_mol"]))
    with open(f"{cfg['results_dir']}/vina_summary.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["label", "target", "best_affinity_kcal_mol", "status"])
        w.writeheader()
        w.writerows(results)

    print(f"\n=== {target_name} ranked results (strongest binding first) ===")
    for r in results:
        print(f"{r['label']:15s} {r['best_affinity_kcal_mol']}")
