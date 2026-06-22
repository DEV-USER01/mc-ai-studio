function countScripts(files) {

    return files.filter(file =>

        file.endsWith(".js") ||
        file.endsWith(".ts") ||
        file.includes("scripts/")

    ).length;

}
