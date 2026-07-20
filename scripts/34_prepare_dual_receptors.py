# Receptor prep for the liver-to-heart axis dual-target docking campaign.
#
# NRP1 (6FMC): EG01377-bound Neuropilin-1 b1 domain, 0.90 A -- pocket-defined
# exactly like the original ANGPTL4/6EUB prep (HETATM ligand centroid = box
# center). This corrects an earlier error where UniProt's gene:NRP1 query
# silently matched NELL1 (old alias "NRP1") and returned the wrong PDB (6POL,
# a NELL1-ROBO3 complex) -- caught only at this receptor-download stage when
# 6POL's own TITLE record didn't say "neuropilin" at all. 6FMC's TITLE
# ("NEUROPILIN1-B1 DOMAIN IN COMPLEX WITH EG01377") was verified before use.
#
# PLXNA1 (7Y4P): apo ectodomain, no cognate small-molecule structure exists
# for any plexin family member. Box is centered on the Sema domain (UniProt
# Q9UIW2 residues 27-512), the established semaphorin-binding 7-blade
# beta-propeller module (Antipenko et al. 2003 Neuron; Kong et al. 2016
# Neuron), rather than blind-docking the entire 27-708 ectodomain fragment.
# This is disclosed in Methods as domain-focused blind docking, a lower-
# confidence setup than the pocket-defined NRP1/ANGPTL4 runs.
import subprocess, os

MK_PREPARE_RECEPTOR = r"C:\Users\SAMSUNG\AppData\Local\Python\pythoncore-3.14-64\Scripts\mk_prepare_receptor.exe"

# ---------- NRP1 (6FMC) ----------
pdb_in = "docking/receptor_nrp1/6FMC.pdb"
protein_only = "docking/receptor_nrp1/6FMC_protein.pdb"
with open(pdb_in) as f, open(protein_only, "w") as out:
    for line in f:
        if line.startswith("HETATM") or line.startswith("ANISOU"):
            continue
        out.write(line)
print("Wrote", protein_only)

xs, ys, zs = [], [], []
with open(pdb_in) as f:
    for line in f:
        if line.startswith("HETATM") and " DUE " in line:
            xs.append(float(line[30:38])); ys.append(float(line[38:46])); zs.append(float(line[46:54]))
cx, cy, cz = sum(xs)/len(xs), sum(ys)/len(ys), sum(zs)/len(zs)
print(f"NRP1 EG01377 (DUE) pocket centroid: ({cx:.2f}, {cy:.2f}, {cz:.2f}), n_atoms={len(xs)}")
with open("docking/receptor_nrp1/box_center.txt", "w") as f:
    f.write(f"{cx}\t{cy}\t{cz}\n")

cmd = [MK_PREPARE_RECEPTOR, "--read_pdb", protein_only,
       "-o", "docking/receptor_nrp1/6FMC_receptor",
       "--box_size", "24", "24", "24",
       "--box_center", str(cx), str(cy), str(cz),
       "--default_altloc", "A", "--write_pdbqt", "--write_vina_box"]
print("Running:", " ".join(cmd))
subprocess.run(cmd, check=True)

# ---------- PLXNA1 (7Y4P) ----------
pdb_in2 = "docking/receptor_plxna1/7Y4P.pdb"
protein_only2 = "docking/receptor_plxna1/7Y4P_protein.pdb"
with open(pdb_in2) as f, open(protein_only2, "w") as out:
    for line in f:
        if line.startswith("HETATM") or line.startswith("ANISOU"):
            continue
        out.write(line)
print("Wrote", protein_only2)

# Sema domain (residues 27-512, chain A) CA centroid
xs2, ys2, zs2 = [], [], []
with open(pdb_in2) as f:
    for line in f:
        if line.startswith("ATOM") and line[12:16].strip() == "CA" and line[21] == "A":
            resnum = int(line[22:26])
            if 27 <= resnum <= 512:
                xs2.append(float(line[30:38])); ys2.append(float(line[38:46])); zs2.append(float(line[46:54]))
cx2, cy2, cz2 = sum(xs2)/len(xs2), sum(ys2)/len(ys2), sum(zs2)/len(zs2)
print(f"PLXNA1 Sema domain (res 27-512) CA centroid: ({cx2:.2f}, {cy2:.2f}, {cz2:.2f}), n_CA={len(xs2)}")
with open("docking/receptor_plxna1/box_center.txt", "w") as f:
    f.write(f"{cx2}\t{cy2}\t{cz2}\n")

cmd2 = [MK_PREPARE_RECEPTOR, "--read_pdb", protein_only2,
        "-o", "docking/receptor_plxna1/7Y4P_receptor",
        "--box_size", "30", "30", "30",
        "--box_center", str(cx2), str(cy2), str(cz2),
        "--default_altloc", "A", "--write_pdbqt", "--write_vina_box"]
print("Running:", " ".join(cmd2))
subprocess.run(cmd2, check=True)
