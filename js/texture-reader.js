function countTextures(files) {

    return files.filter(file =>

        file.includes("textures/") ||
        file.endsWith(".png") ||
        file.endsWith(".tga")

    ).length;

}
