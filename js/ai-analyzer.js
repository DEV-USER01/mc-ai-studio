function analyzePack(manifest) {

    if (!manifest) {
        return `
        <div class="info-box">
            ❌ ไม่พบ manifest.json
        </div>
        `;
    }

    const header = manifest.header || {};
    const modules = manifest.modules || [];

    let packType = "Unknown";

    if(modules.some(m=>m.type==="resources"))
        packType = "Resource Pack";

    if(modules.some(m=>m.type==="data"))
        packType = "Behavior Pack";

    if(modules.some(m=>m.type==="world_template"))
        packType = "World Template";

    let score = 0;

    if(header.name) score += 20;
    if(header.description) score += 20;
    if(header.uuid) score += 20;
    if(header.version) score += 20;
    if(modules.length) score += 20;

    return `
    <div class="info-box">

        <div class="info-title">
            📦 ข้อมูล Manifest
        </div>

        <div class="info-row">
            🏷️ <b>ชื่อ Pack:</b>
            ${header.name || "-"}
        </div>

        <div class="info-row">
            📝 <b>คำอธิบาย:</b>
            ${header.description || "-"}
        </div>

        <div class="info-row">
            🔢 <b>เวอร์ชัน:</b>
            ${(header.version || []).join(".")}
        </div>

        <div class="info-row">
            ⚙️ <b>Minecraft:</b>
            ${(header.min_engine_version || []).join(".")}
        </div>

        <div class="info-row">
            🧩 <b>ประเภท:</b>
            ${packType}
        </div>

        <div class="info-row">
            🆔 <b>UUID:</b>
            ${header.uuid || "-"}
        </div>

        <div class="info-row">
            ⭐ <b>คะแนน:</b>
            ${score}/100
        </div>

        <div class="info-row">
            📦 <b>Modules:</b>
            ${modules.length}
        </div>

    </div>
    `;
}

window.analyzePack = analyzePack;
