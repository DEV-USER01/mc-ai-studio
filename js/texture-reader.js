function countTextures(files) {
    return files.filter(file =>
        file.endsWith(".png") ||
        file.endsWith(".tga")
    ).length;
}
