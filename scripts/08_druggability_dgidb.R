# Phase 3: DGIdb druggability screen for the Angptl4-axis hub genes
# (DGIdb indexes human HGNC symbols; query the human orthologs of our mouse
# hub genes -- same symbol, just uppercase, no orthology ambiguity here)
suppressPackageStartupMessages({ library(httr); library(jsonlite); library(dplyr) })
dir.create("results", showWarnings = FALSE)

hub_genes_human <- c("ANGPTL4", "SDC1", "SDC2", "SDC3", "SDC4", "CDH5")

gql_query <- function(gene_names) {
  q <- list(
    query = "query genes($names: [String!]) { genes(names: $names) { nodes { name interactions { drug { name approved } interactionScore } } } }",
    variables = list(names = as.list(gene_names))
  )
  r <- POST("https://dgidb.org/api/graphql",
            body = toJSON(q, auto_unbox = TRUE),
            content_type("application/json"))
  stopifnot(status_code(r) == 200)
  fromJSON(content(r, "text", encoding = "UTF-8"), simplifyVector = FALSE)
}

res <- gql_query(hub_genes_human)
nodes <- res$data$genes$nodes

drug_summary <- lapply(nodes, function(n) {
  drugs <- vapply(n$interactions, function(i) if (is.null(i$drug$name)) NA_character_ else i$drug$name, character(1))
  approved <- vapply(n$interactions, function(i) isTRUE(i$drug$approved), logical(1))
  data.frame(
    gene = n$name,
    n_interactions = length(drugs),
    n_approved = sum(approved),
    example_drugs = paste(unique(drugs)[seq_len(min(8, length(unique(drugs))))], collapse = "; "),
    stringsAsFactors = FALSE
  )
}) %>% bind_rows()

# genes DGIdb has no record for at all won't appear in nodes -> add as zero rows
missing <- setdiff(hub_genes_human, drug_summary$gene)
if (length(missing) > 0) {
  drug_summary <- bind_rows(drug_summary,
    data.frame(gene = missing, n_interactions = 0, n_approved = 0, example_drugs = ""))
}

write.csv(drug_summary, "results/DGIdb_druggability_summary.csv", row.names = FALSE)
cat("\n--- DGIdb druggability summary ---\n")
print(drug_summary)
