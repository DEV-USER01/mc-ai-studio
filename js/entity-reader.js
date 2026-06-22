function getEntityList(files) {

    return files
        .filter(f => f.includes("entities/"))
        .map(f => f.split("/").pop().replace(".json",""));

}
