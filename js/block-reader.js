function countBlocks(files) {

    return files.filter(file =>
        file.includes("blocks/") &&
        file.endsWith(".json")
    ).length;

}

function getBlockList(files) {

    return files
        .filter(file =>
            file.includes("blocks/") &&
            file.endsWith(".json")
        )
        .map(file =>
            file.split("/").pop().replace(".json", "")
        );

}
