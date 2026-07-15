# Phase 2 (step 3b): STITCH network pharmacology - which existing chemicals are
# already known/predicted to interact with the Angptl4-axis hub genes?
# (STITCH's "network" method used by some tutorials isn't available on this
# API version; "interactors" is the valid endpoint -- it returns a flat list of
# STRING-style protein ids (species prefix) and chemical ids ("-10.CIDxxxxxx"),
# which we then resolve to compound names via PubChem PUG-REST.)
suppressPackageStartupMessages({ library(httr); library(jsonlite); library(dplyr) })
dir.create("results", showWarnings = FALSE)

hub_genes <- c("Angptl4", "Sdc1", "Sdc4", "Sdc3", "Sdc2", "Cdh5")

get_chemical_partners <- function(gene, n = 30) {
  resp <- GET("http://stitch.embl.de/api/tsv/interactors",
              query = list(identifier = gene, species = 10090, limit = n))
  if (status_code(resp) != 200) return(data.frame())
  txt <- content(resp, as = "text", encoding = "UTF-8")
  ids <- readLines(textConnection(txt))[-1]  # drop header
  cids <- ids[grepl("^-10\\.CID", ids)]
  if (length(cids) == 0) return(data.frame())
  data.frame(gene = gene, cid = sub("^-10\\.CID1?0*", "", cids), raw_id = cids)
}

all_hits <- bind_rows(lapply(hub_genes, get_chemical_partners))
cat("Raw chemical partner hits across hub genes:", nrow(all_hits), "\n")
print(all_hits)

# resolve PubChem CIDs to compound names
resolve_cid_name <- function(cid) {
  url <- sprintf("https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/%s/property/Title/JSON", cid)
  resp <- tryCatch(GET(url), error = function(e) NULL)
  if (is.null(resp) || status_code(resp) != 200) return(NA_character_)
  js <- tryCatch(fromJSON(content(resp, as = "text", encoding = "UTF-8")), error = function(e) NULL)
  if (is.null(js)) return(NA_character_)
  js$PropertyTable$Properties$Title[1]
}

if (nrow(all_hits) > 0) {
  unique_cids <- unique(all_hits$cid)
  name_map <- setNames(sapply(unique_cids, resolve_cid_name), unique_cids)
  Sys.sleep(0.3)
  all_hits$compound_name <- name_map[all_hits$cid]
}

write.csv(all_hits, "results/STITCH_hub_gene_chemical_partners.csv", row.names = FALSE)
cat("\n--- Chemical partners with resolved names ---\n")
print(all_hits)
