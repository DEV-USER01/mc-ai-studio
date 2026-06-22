function analyzePack(manifest, zip) {

    if (!manifest) {
        return `
        <div class="manifest-box">
            <h3>❌ ไม่พบ manifest.json</h3>
        </div>
        `;
    }

    const header = manifest.header || {};
    const modules = manifest.modules || [];

    const packName = header.name || "Unknown";
    const description = header.description || "-";

    const version = Array.isArray(header.version)
        ? header.version.join(".")
        : "Unknown";

    const minEngineVersion = Array.isArray(header.min_engine_version)
        ? header.min_engine_version.join(".")
        : "Unknown";

    const uuid = header.uuid || "Unknown";

    let packType = "Unknown";

    modules.forEach(module => {

        if (module.type === "resources") {
            packType = "🎨 Resource Pack";
        }

        if (module.type === "data") {
            packType = "⚙️ Behavior Pack";
        }

        if (module.type === "world_template") {
            packType = "🌍 World Template";
        }

    });

    const files = Object.keys(zip.files);

    let entityCount = 0;
    let animationCount = 0;
    let recipeCount = 0;
    let lootCount = 0;

    files.forEach(file => {

        if (file.startsWith("entities/")) {
            entityCount++;
        }

        if (file.startsWith("animations/")) {
            animationCount++;
        }

        if (file.startsWith("recipes/")) {
            recipeCount++;
        }

        if (file.startsWith("loot_tables/")) {
            lootCount++;
        }

    });

    let score = 100;

    if (!header.name) score -= 10;
    if (!header.description) score -= 10;
    if (!header.uuid) score -= 20;
    if (!header.version) score -= 10;
    if (modules.length === 0) score -= 20;

    let status = "🟢 สมบูรณ์";

    if (score < 80) {
        status = "🟡 ควรตรวจสอบ";
    }

    if (score < 50) {
        status = "🔴 มีปัญหา";
    }

    const scoreColor =
        score >= 80
            ? "#00ff88"
            : score >= 50
            ? "#ffd700"
            : "#ff4444";

    let aiText = "";

    if (packType.includes("Behavior")) {

        aiText += `
        Addon นี้เป็น Behavior Pack<br>
        `;

        if (entityCount > 0) {
            aiText += `📦 พบ Entity ${entityCount} รายการ<br>`;
        }

        if (animationCount > 0) {
            aiText += `🎬 พบ Animation ${animationCount} รายการ<br>`;
        }

        if (recipeCount > 0) {
            aiText += `🍖 พบ Recipe ${recipeCount} รายการ<br>`;
        }

        if (lootCount > 0) {
            aiText += `🎁 พบ Loot Table ${lootCount} รายการ<br>`;
        }

    }

    if (packType.includes("Resource")) {

        aiText += `
        Addon นี้เป็น Resource Pack<br>
        เหมาะสำหรับเปลี่ยน Texture, UI และภาษาเกม<br>
        `;
    }

    if (files.length > 1000) {

        aiText += `
        🚀 เป็นแพ็กขนาดใหญ่ (${files.length} ไฟล์)<br>
        เหมาะสำหรับเซิร์ฟเวอร์หรือโปรเจกต์ขนาดใหญ่<br>
        `;
    }

    return `
    <div class="manifest-box">

        <h3>📦 ข้อมูล Manifest</h3>

        <p>🏷️ ชื่อ Pack: ${packName}</p>

        <p>📝 คำอธิบาย: ${description}</p>

        <p>🔢 เวอร์ชัน: ${version}</p>

        <p>⚙️ Minecraft ขั้นต่ำ: ${minEngineVersion}</p>

        <p>🧩 ประเภท: ${packType}</p>

        <p>🆔 UUID: ${uuid}</p>

        <p style="color:${scoreColor};font-weight:bold;">
            ⭐ คะแนน: ${score}/100
        </p>

        <p>${status}</p>

        <hr>

        <h3>🤖 AI วิเคราะห์</h3>

        <p>${aiText}</p>

        <hr>

        <h3>📊 สถิติ Addon</h3>

        <p>📁 จำนวนไฟล์ทั้งหมด: ${files.length}</p>

        <p>📦 Entity: ${entityCount}</p>

        <p>🎬 Animation: ${animationCount}</p>

        <p>🍖 Recipe: ${recipeCount}</p>

        <p>🎁 Loot Table: ${lootCount}</p>

    </div>
    `;
}
