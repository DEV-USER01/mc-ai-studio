function analyzePack(manifest) {

    if (!manifest) {
        return `
<hr>

📋 ข้อมูล Manifest

❌ ไม่พบ manifest.json
`;
    }

    return `
<hr>

📋 ข้อมูล Manifest

🏷️ ชื่อ Pack:
${manifest.header?.name || "Unknown"}

📝 คำอธิบาย:
${manifest.header?.description || "ไม่มี"}

🔢 เวอร์ชัน:
${(manifest.header?.version || []).join(".")}

⚙️ Minecraft ขั้นต่ำ:
${(manifest.header?.min_engine_version || []).join(".")}
`;
}

window.analyzePack = analyzePack;
