function countLoot(files) {

    return files.filter(file =>

        file.includes("loot_tables/") &&
        file.endsWith(".json")

    ).length;

}
