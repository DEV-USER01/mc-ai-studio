function countWorldFiles(files) {

    return files.filter(file =>

        file.includes("world") ||
        file.includes("level.dat") ||
        file.includes("db/") ||
        file.includes("structures/")

    ).length;

}

function analyzeWorld(files) {

    return {

        levelDat:
            files.some(file =>
                file.includes("level.dat")
            ),

        db:
            files.filter(file =>
                file.includes("db/")
            ).length,

        structures:
            files.filter(file =>
                file.includes("structures/")
            ).length

    };

}
