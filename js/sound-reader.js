function countSounds(files) {
    return files.filter(file =>
        file.includes("sounds/")
    ).length;
}
