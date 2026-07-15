import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D  # noqa
import numpy as np

ELEMENT_COLOR = {"C": "#2b2b2b", "N": "#3050f8", "O": "#ff0d0d", "F": "#90e050",
                  "S": "#ffff30", "Cl": "#1ff01f", "H": "#dddddd"}

def parse_pdb_atoms(path):
    atoms = []
    with open(path) as f:
        for line in f:
            if line.startswith(("ATOM", "HETATM")):
                atoms.append({
                    "resname": line[17:20].strip(),
                    "resseq": line[22:26].strip(),
                    "chain": line[21],
                    "name": line[12:16].strip(),
                    "elem": (line[76:78].strip() or line[12:14].strip())[:2].strip(".0123456789"),
                    "x": float(line[30:38]), "y": float(line[38:46]), "z": float(line[46:54]),
                })
    return atoms

def parse_sdf_atoms_bonds(path):
    with open(path) as f:
        lines = f.readlines()
    natoms, nbonds = int(lines[3][0:3]), int(lines[3][3:6])
    atoms = []
    for line in lines[4:4+natoms]:
        parts = line.split()
        atoms.append({"x": float(parts[0]), "y": float(parts[1]), "z": float(parts[2]), "elem": parts[3]})
    bonds = []
    for line in lines[4+natoms:4+natoms+nbonds]:
        a, b = int(line[0:3]) - 1, int(line[3:6]) - 1
        bonds.append((a, b))
    return atoms, bonds

def make_figure(protein_pdb, ligand_sdf, title, out_png, contact_cutoff=4.5):
    prot_atoms = parse_pdb_atoms(protein_pdb)
    lig_atoms, lig_bonds = parse_sdf_atoms_bonds(ligand_sdf)

    lig_xyz = np.array([[a["x"], a["y"], a["z"]] for a in lig_atoms])
    prot_xyz = np.array([[a["x"], a["y"], a["z"]] for a in prot_atoms])

    dists = np.linalg.norm(prot_xyz[:, None, :] - lig_xyz[None, :, :], axis=2).min(axis=1)
    contact_mask = dists <= contact_cutoff
    contact_residues = sorted(set((prot_atoms[i]["chain"], prot_atoms[i]["resname"], prot_atoms[i]["resseq"])
                                   for i in np.where(contact_mask)[0]),
                               key=lambda r: int(r[2]))

    fig = plt.figure(figsize=(9, 8))
    ax = fig.add_subplot(111, projection="3d")

    # protein backbone (CA trace) as thin grey line, contact-residue atoms as small dots
    ca = [a for a in prot_atoms if a["name"] == "CA"]
    if ca:
        ca_xyz = np.array([[a["x"], a["y"], a["z"]] for a in ca])
        # only draw CA trace near the pocket to keep the plot readable
        near = np.linalg.norm(ca_xyz - lig_xyz.mean(axis=0), axis=1) < 20
        ax.plot(ca_xyz[near, 0], ca_xyz[near, 1], ca_xyz[near, 2], color="lightgrey", linewidth=1.2, alpha=0.6)

    contact_xyz = prot_xyz[contact_mask]
    contact_elems = [prot_atoms[i]["elem"] for i in np.where(contact_mask)[0]]
    colors = [ELEMENT_COLOR.get(e, "grey") for e in contact_elems]
    ax.scatter(contact_xyz[:, 0], contact_xyz[:, 1], contact_xyz[:, 2], c=colors, s=25, alpha=0.85, depthshade=True)

    # ligand as sticks (bonds) + colored atoms
    for a, b in lig_bonds:
        ax.plot([lig_xyz[a, 0], lig_xyz[b, 0]], [lig_xyz[a, 1], lig_xyz[b, 1]], [lig_xyz[a, 2], lig_xyz[b, 2]],
                color="black", linewidth=2.5)
    lig_colors = [ELEMENT_COLOR.get(a["elem"], "magenta") for a in lig_atoms]
    ax.scatter(lig_xyz[:, 0], lig_xyz[:, 1], lig_xyz[:, 2], c=lig_colors, s=60, edgecolors="black", linewidths=0.5)

    ax.set_title(title, fontsize=12)
    ax.set_xlabel("x (A)"); ax.set_ylabel("y (A)"); ax.set_zlabel("z (A)")
    center = lig_xyz.mean(axis=0)
    r = 10
    ax.set_xlim(center[0]-r, center[0]+r); ax.set_ylim(center[1]-r, center[1]+r); ax.set_zlim(center[2]-r, center[2]+r)

    res_str = ", ".join(f"{rn}{rs}" for _, rn, rs in contact_residues[:12])
    fig.text(0.5, 0.02, f"Contact residues (<{contact_cutoff} A): {res_str}", ha="center", fontsize=8, wrap=True)

    plt.tight_layout(rect=[0, 0.05, 1, 1])
    plt.savefig(out_png, dpi=200)
    plt.close()
    print("Saved", out_png, "| contact residues:", res_str)

make_figure("docking/diffdock/Ezetimibe/complex_0/6EUB.pdb",
            "docking/diffdock/Ezetimibe/complex_0/rank1_confidence-1.32.sdf",
            "ANGPTL4 (6EUB) - Ezetimibe top DiffDock pose (confidence -1.32)\nconverges within 3.5 A of the Vina-defined pocket",
            "figures/Ezetimibe_binding_pose.png")

make_figure("docking/diffdock/Resmetirom/complex_0/6EUB.pdb",
            "docking/diffdock/Resmetirom/complex_0/rank1_confidence-2.06.sdf",
            "ANGPTL4 (6EUB) - Resmetirom top DiffDock pose (confidence -2.06)\n23.5 A from the Vina-defined pocket (different site)",
            "figures/Resmetirom_binding_pose.png")
