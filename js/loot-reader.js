function countLoot(files) {
    return files.filter(file =>
        file.includes("loot_tables/")
    ).length;
}
