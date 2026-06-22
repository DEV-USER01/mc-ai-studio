function countItems(files) {

    return files.filter(file =>
        file.includes("items/") &&
        file.endsWith(".json")
    ).length;

}

function getItemList(files) {

    return files
        .filter(file =>
            file.includes("items/") &&
            file.endsWith(".json")
        )
        .map(file =>
            file.split("/").pop().replace(".json", "")
        );

}
