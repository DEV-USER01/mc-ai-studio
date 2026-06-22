function countRecipes(files) {
    return files.filter(file =>
        file.includes("recipes/") &&
        file.endsWith(".json")
    ).length;
}
