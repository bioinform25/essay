import csv, subprocess, os, sys
from rdkit import Chem
from rdkit.Chem import AllChem

MK_PREPARE_LIGAND = r"C:\Users\SAMSUNG\AppData\Local\Python\pythoncore-3.14-64\Scripts\mk_prepare_ligand.exe"

os.makedirs("docking/ligands/sdf", exist_ok=True)
os.makedirs("docking/ligands/pdbqt", exist_ok=True)

with open("docking/ligands/library.csv") as f:
    rows = list(csv.DictReader(f))

ok, failed = [], []
for row in rows:
    label, smiles = row["label"], row["smiles"]
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        failed.append((label, "RDKit could not parse SMILES"))
        continue
    mol = Chem.AddHs(mol)
    params = AllChem.ETKDGv3()
    params.randomSeed = 42
    embed_ok = AllChem.EmbedMolecule(mol, params)
    if embed_ok != 0:
        failed.append((label, "3D embedding failed"))
        continue
    AllChem.MMFFOptimizeMolecule(mol)

    sdf_path = f"docking/ligands/sdf/{label}.sdf"
    w = Chem.SDWriter(sdf_path)
    w.write(mol)
    w.close()

    pdbqt_path = f"docking/ligands/pdbqt/{label}.pdbqt"
    cmd = [MK_PREPARE_LIGAND, "-i", sdf_path, "-o", pdbqt_path]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0 or not os.path.exists(pdbqt_path):
        failed.append((label, f"mk_prepare_ligand failed: {res.stderr[:200]}"))
        continue
    ok.append(label)

print(f"\nPrepared {len(ok)}/{len(rows)} ligands successfully.")
if failed:
    print("Failed:")
    for label, reason in failed:
        print(" -", label, ":", reason)
