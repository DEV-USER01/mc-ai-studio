function countWorldFiles(files) {
    return files.filter(file =>
        file.includes("structures/") ||
        file.includes("feature_rules/") ||
        file.includes("spawn_rules/")
    ).length;
}
