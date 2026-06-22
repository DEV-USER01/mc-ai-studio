function analyzePack(manifest) {

    if (!manifest) {
        return `
        <h3>❌ ไม่พบ manifest.json</h3>
        `;
    }

    const header = manifest.header || {};
    const modules = manifest.modules || [];

    let packType = "Unknown";

    if (modules.some(m => m.type === "resources")) {
        packType = "Resource Pack";
    }

    if (modules.some(m => m.type === "data")) {
        packType = "Behavior Pack";
    }

    if (modules.some(m => m.type === "world_template")) {
        packType = "World Template";
    }

    return `
    <h3>📦 ข้อมูล Manifest</h3>

    🏷️ ชื่อ Pack: ${header.name || "ไม่พบ"}<br>
    📝 คำอธิบาย: ${header.description || "ไม่พบ"}<br>
    🔢 เวอร์ชัน: ${(header.version || []).join(".")}<br>
    ⚙️ Minecraft ขั้นต่ำ: ${(header.min_engine_version || []).join(".")}<br>
    🧩 ประเภท: ${packType}<br>
    🆔 UUID: ${header.uuid || "ไม่พบ"}<br>
    `;
}

function calculateScore(header, modules) {

    let score = 0;

    if (header.name) score += 20;
    if (header.description) score += 20;
    if (header.uuid) score += 20;
    if (header.version) score += 20;
    if (modules.length > 0) score += 20;

    return score;
}
