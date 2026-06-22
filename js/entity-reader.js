function countEntities(files) {
    return files.filter(file =>
        file.includes("entities/") &&
        file.endsWith(".json")
    ).length;
}
