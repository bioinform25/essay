import subprocess, sys

pdb_in = "docking/receptor/6EUB.pdb"
pdb_protein_only = "docking/receptor/6EUB_protein.pdb"

# strip HETATM (waters, 1PE crystallization additive) -> protein-only PDB
with open(pdb_in) as f, open(pdb_protein_only, "w") as out:
    for line in f:
        if line.startswith("HETATM") or line.startswith("ANISOU"):
            continue
        out.write(line)
print("Wrote protein-only PDB:", pdb_protein_only)

# compute 1PE ligand centroid (defines the docking box center: the only
# observed small-molecule-occupied surface pocket in this crystal structure)
xs, ys, zs = [], [], []
with open(pdb_in) as f:
    for line in f:
        if line.startswith("HETATM") and " 1PE " in line:
            xs.append(float(line[30:38]))
            ys.append(float(line[38:46]))
            zs.append(float(line[46:54]))
cx, cy, cz = sum(xs) / len(xs), sum(ys) / len(ys), sum(zs) / len(zs)
print(f"1PE pocket centroid: ({cx:.2f}, {cy:.2f}, {cz:.2f}), n_atoms={len(xs)}")

with open("docking/receptor/box_center.txt", "w") as f:
    f.write(f"{cx}\t{cy}\t{cz}\n")

# Meeko receptor prep -> PDBQT
MK_PREPARE_RECEPTOR = r"C:\Users\SAMSUNG\AppData\Local\Python\pythoncore-3.14-64\Scripts\mk_prepare_receptor.exe"
cmd = [MK_PREPARE_RECEPTOR,
       "--read_pdb", pdb_protein_only,
       "-o", "docking/receptor/6EUB_receptor",
       "--box_size", "24", "24", "24",
       "--box_center", str(cx), str(cy), str(cz),
       "--default_altloc", "A",
       "--write_pdbqt", "--write_vina_box"]
print("Running:", " ".join(cmd))
subprocess.run(cmd, check=True)
