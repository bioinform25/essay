# Phase 2 (step 3b, liver-to-heart axis): STITCH chemical partners for the
# Sema5b-Plxna1 axis hub genes, mirroring script 07 for the Angptl4 axis.
suppressPackageStartupMessages({ library(httr); library(jsonlite); library(dplyr) })
dir.create("results", showWarnings = FALSE)

hub_genes <- c("Sema5b", "Plxna1", "Plxna3", "Nrp1", "Nrp2")

get_chemical_partners <- function(gene, n = 30) {
  resp <- GET("http://stitch.embl.de/api/tsv/interactors",
              query = list(identifier = gene, species = 10090, limit = n))
  if (status_code(resp) != 200) return(data.frame())
  txt <- content(resp, as = "text", encoding = "UTF-8")
  ids <- readLines(textConnection(txt))[-1]
  cids <- ids[grepl("^-10\\.CID", ids)]
  if (length(cids) == 0) return(data.frame())
  data.frame(gene = gene, cid = sub("^-10\\.CID1?0*", "", cids), raw_id = cids)
}

all_hits <- bind_rows(lapply(hub_genes, get_chemical_partners))
cat("Raw chemical partner hits across hub genes:", nrow(all_hits), "\n")
print(all_hits)

resolve_cid_name <- function(cid) {
  url <- sprintf("https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/%s/property/Title/JSON", cid)
  resp <- tryCatch(GET(url), error = function(e) NULL)
  Sys.sleep(0.2)
  if (is.null(resp) || status_code(resp) != 200) return(NA_character_)
  js <- tryCatch(fromJSON(content(resp, as = "text", encoding = "UTF-8")), error = function(e) NULL)
  title <- tryCatch(js$PropertyTable$Properties$Title[1], error = function(e) NULL)
  if (is.null(title) || length(title) == 0) return(NA_character_)
  as.character(title)
}

if (nrow(all_hits) > 0) {
  unique_cids <- unique(all_hits$cid)
  name_map <- vapply(unique_cids, resolve_cid_name, character(1))
  names(name_map) <- unique_cids
  all_hits$compound_name <- unname(name_map[all_hits$cid])
}

write.csv(all_hits, "results/STITCH_semaphorin_axis_chemical_partners.csv", row.names = FALSE)
cat("\n--- Chemical partners with resolved names ---\n")
print(all_hits)
