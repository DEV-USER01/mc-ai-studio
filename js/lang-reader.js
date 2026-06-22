async function readLanguageFiles(zip) {

    const files = Object.keys(zip.files);

    const langFiles = files.filter(file =>
        file.endsWith(".lang") ||
        file.endsWith(".json")
    );

    return {
        count: langFiles.length,
        files: langFiles.slice(0,20)
    };
}

window.readLanguageFiles = readLanguageFiles;
