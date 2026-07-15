import urllib.request, urllib.parse, json, time, csv, os

os.makedirs("docking/ligands", exist_ok=True)

# Focused, thematically-coherent library (not a random ZINC pull):
# (a) the fatty-acid/PPAR-pathway ligands STITCH already flagged as real
#     ANGPTL4 chemical partners (mechanistic positive-control-like probes)
# (b) FDA-approved cardiometabolic drugs from the exact "recent trends" the
#     user's own prep notes cite (Resmetirom, Semaglutide-era MASH drugs) as
#     a repurposing-angle screen
# (c) a handful of common unrelated drugs as a rough specificity contrast
compounds = {
    # (a) STITCH-flagged endogenous ligands
    "Linoleic_acid": "linoleic acid",
    "Palmitic_acid": "palmitic acid",
    "Eicosapentaenoic_acid": "eicosapentaenoic acid",
    "Arachidonic_acid": "arachidonic acid",
    "Pioglitazone": "pioglitazone",
    # (b) cardiometabolic / MASLD-MASH-relevant approved or late-stage drugs
    "Resmetirom": "resmetirom",
    "Fenofibrate": "fenofibrate",
    "Bezafibrate": "bezafibrate",
    "Ezetimibe": "ezetimibe",
    "Atorvastatin": "atorvastatin",
    "Rosiglitazone": "rosiglitazone",
    "Empagliflozin": "empagliflozin",
    "Dapagliflozin": "dapagliflozin",
    "Obeticholic_acid": "obeticholic acid",
    "Icosapent_ethyl": "icosapent ethyl",
    "Metformin": "metformin",
    "Niacin": "niacin",
    # (c) unrelated common drugs (rough specificity contrast)
    "Aspirin": "aspirin",
    "Ibuprofen": "ibuprofen",
    "Caffeine": "caffeine",
    "Metoprolol": "metoprolol",
}

rows = []
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

with open("docking/ligands/library.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["label", "query_name", "cid", "smiles", "mw"])
    w.writeheader()
    w.writerows(rows)

print(f"\nResolved {len(rows)}/{len(compounds)} compounds -> docking/ligands/library.csv")
