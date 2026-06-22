function analyzeWorld(files) {

    return {
        levelDat: files.some(f => f.includes("level.dat")),
        db: files.filter(f => f.includes("db/")).length,
        structures: files.filter(f => f.includes("structures/")).length
    };

}
