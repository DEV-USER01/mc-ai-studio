function countSounds(files) {

    return files.filter(file =>

        file.includes("sounds/") ||
        file.endsWith(".ogg") ||
        file.endsWith(".fsb")

    ).length;

}
