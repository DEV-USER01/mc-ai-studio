function countEntities(files) {

    return files.filter(file =>
        file.includes("entities/") &&
        file.endsWith(".json")
    ).length;

}

function getEntityList(files) {

    return files
        .filter(file =>
            file.includes("entities/") &&
            file.endsWith(".json")
        )
        .map(file =>
            file.split("/").pop().replace(".json", "")
        );

}
