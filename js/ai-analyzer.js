function getPackType(manifest) {

    if (!manifest || !manifest.modules) {
        return "Unknown";
    }

    const types = manifest.modules.map(m => m.type);

    if (types.includes("resources")) {
        return "Resource Pack";
    }

    if (types.includes("data")) {
        return "Behavior Pack";
    }

    return "Unknown";
}

function analyzePack(manifest) {

    if (!manifest) {
        return "❌ ไม่พบ manifest.json";
    }

    const packType = getPackType(manifest);

    return `
    <hr>

    <h3>📦 ข้อมูล Manifest</h3>

    🏷️ ชื่อ Pack:
    ${manifest.header?.name || "Unknown"}

    <br><br>

    📝 คำอธิบาย:
    ${manifest.header?.description || "-"}

    <br><br>

    🔢 เวอร์ชัน:
    ${(manifest.header?.version || []).join(".")}

    <br><br>

    ⚙️ Minecraft ขั้นต่ำ:
    ${(manifest.header?.min_engine_version || []).join(".")}

    <br><br>

    🧩 ประเภท:
    ${packType}

    <br><br>

    🆔 UUID:
    ${manifest.header?.uuid || "-"}

    `;
}
