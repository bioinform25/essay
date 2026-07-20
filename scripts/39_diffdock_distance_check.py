# Distance from each DiffDock (blind) top pose centroid to the Vina-defined
# box center, mirroring the original ANGPTL4 crosscheck logic: agreement
# between a fixed-box method (Vina) and a blind method (DiffDock) on *where*
# a ligand binds is an independent structural check, not just a re-ranking.
import numpy as np

def sdf_centroid(path):
    with open(path) as f:
        lines = f.readlines()
    natoms = int(lines[3][0:3])
    xyz = []
    for line in lines[4:4+natoms]:
        parts = line.split()
        xyz.append([float(parts[0]), float(parts[1]), float(parts[2])])
    return np.array(xyz).mean(axis=0)

def box_center(path):
    with open(path) as f:
        return np.array(list(map(float, f.read().split())))

targets = {
    "Nrp1": {
        "pose": "docking/diffdock_nrp1/extracted/complex_0/rank1_confidence-1.51.sdf",
        "box": "docking/receptor_nrp1/box_center.txt",
    },
    "Plxna1": {
        "pose": "docking/diffdock_plxna1/extracted/complex_0/rank1_confidence-1.65.sdf",
        "box": "docking/receptor_plxna1/box_center.txt",
    },
}

for name, cfg in targets.items():
    pose_c = sdf_centroid(cfg["pose"])
    box_c = box_center(cfg["box"])
    dist = np.linalg.norm(pose_c - box_c)
    print(f"{name}: DiffDock top-pose centroid {pose_c.round(2).tolist()}, "
          f"Vina box center {box_c.round(2).tolist()}, distance = {dist:.2f} A")
