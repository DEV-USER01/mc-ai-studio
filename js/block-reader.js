function countBlocks(files) {
    return files.filter(file =>
        file.includes("blocks/") &&
        file.endsWith(".json")
    ).length;
}
