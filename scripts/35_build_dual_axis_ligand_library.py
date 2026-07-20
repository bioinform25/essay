# Ligand library for the liver-to-heart axis dual-target docking campaign
# (Nrp1 via 6FMC, Plxna1 via 7Y4P). Mirrors script 09's structure:
# (a) a self-docking positive control -- EG01377, the exact inhibitor
#     co-crystallized in our own Nrp1 receptor structure (6FMC/DUE), whose
#     SMILES is taken directly from the RCSB chemical-component dictionary
#     (not a name-search) for maximum reliability. Recovering a strong,
#     correctly-posed docking score for this compound validates the receptor
#     prep and box placement before trusting any other result.
# (b) STITCH-flagged real chemical partners of Nrp1/Nrp2 (script 31 results)
#     -- approved or investigational kinase inhibitors that already have an
#     experimentally-curated association with this receptor family.
# (c) unrelated common drugs, reused from the original ANGPTL4 library, as a
#     rough specificity contrast.
import urllib.request, urllib.parse, json, time, csv, os

os.makedirs("docking/ligands_dual/sdf", exist_ok=True)
os.makedirs("docking/ligands_dual/pdbqt", exist_ok=True)

# (a) self-docking positive control, SMILES from RCSB chemcomp DUE (EG01377)
manual_smiles = {
    "EG01377": "NCc1ccc(cc1)c2cc3ccoc3c(c2)S(=O)(=O)Nc4ccsc4C(=O)N[C@@H](CCCNC(N)=N)C(O)=O",
}

# (b) + (c) resolved by name via PubChem, same pattern as script 09
compounds = {
    "Imatinib": "imatinib",
    "Vatalanib": "vatalanib",
    "Cediranib": "cediranib",
    "Semaxinib": "semaxanib",
    "Pazopanib": "pazopanib",
    "Fasudil": "fasudil",
    "Aspirin": "aspirin",
    "Ibuprofen": "ibuprofen",
    "Caffeine": "caffeine",
    "Metoprolol": "metoprolol",
}

rows = []
for label, smiles in manual_smiles.items():
    rows.append({"label": label, "query_name": label, "cid": "NA (RCSB chemcomp DUE)", "smiles": smiles, "mw": "NA"})
    print(label, "OK (manual SMILES from PDB ligand DUE)")

for label, name in compounds.items():
    url = ("https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/"
           + urllib.parse.quote(name) + "/property/IsomericSMILES,MolecularWeight/JSON")
    try:
        with urllib.request.urlopen(url, timeout=20) as resp:
            data = json.load(resp)
        prop = data["PropertyTable"]["Properties"][0]
        smiles = next(prop[k] for k in ("SMILES", "IsomericSMILES", "CanonicalSMILES", "ConnectivitySMILES") if k in prop)
        rows.append({"label": label, "query_name": name, "cid": prop["CID"],
                     "smiles": smiles, "mw": prop["MolecularWeight"]})
        print(label, "OK", prop["CID"])
    except Exception as e:
        print(label, "FAILED:", e)
    time.sleep(0.3)

with open("docking/ligands_dual/library.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["label", "query_name", "cid", "smiles", "mw"])
    w.writeheader()
    w.writerows(rows)

print(f"\nResolved {len(rows)}/{len(compounds) + len(manual_smiles)} compounds -> docking/ligands_dual/library.csv")
