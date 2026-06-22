function analyzePack(manifest) {

    if (!manifest) {
        return "ไม่พบ manifest.json";
    }

    return `
ชื่อแพ็ก: ${manifest.header?.name || "Unknown"}
เวอร์ชัน: ${(manifest.header?.version || []).join(".")}
`;
}
