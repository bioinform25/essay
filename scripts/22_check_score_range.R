net <- readRDS("results/angptl4axis_network.rds")
cat("score range:", range(net$edges$score), "\n")
