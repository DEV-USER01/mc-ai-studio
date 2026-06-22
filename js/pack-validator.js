function validatePack(manifest) {

    let issues = [];

    if (!manifest.header?.name)
        issues.push("ไม่มีชื่อ Pack");

    if (!manifest.header?.description)
        issues.push("ไม่มีคำอธิบาย");

    if (!manifest.header?.uuid)
        issues.push("ไม่มี UUID");

    if (!manifest.modules?.length)
        issues.push("ไม่มี Modules");

    return {
        score: Math.max(0, 100 - issues.length * 20),
        issues
    };
}
