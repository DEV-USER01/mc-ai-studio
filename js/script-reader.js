function countScripts(files) {
    return files.filter(file =>
        file.endsWith(".js")
    ).length;
}
