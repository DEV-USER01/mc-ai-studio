function countItems(files) {
    return files.filter(file =>
        file.includes("items/") &&
        file.endsWith(".json")
    ).length;
}
