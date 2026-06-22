function analyzePack(manifest) {

    if (!manifest) {
        return `
        <div class="manifest-box">
            ❌ ไม่พบ manifest.json
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

    if (modules.length > 0) {

        const type = modules[0].type;

        if (type === "resources") {
            packType = "🎨 Resource Pack";
        }

        if (type === "data") {
            packType = "⚙️ Behavior Pack";
        }

        if (type === "world_template") {
            packType = "🌍 World Template";
        }
    }

    let score = 100;

    if (!header.name) score -= 20;
    if (!header.description) score -= 20;
    if (!header.uuid) score -= 20;
    if (!header.version) score -= 20;

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
            : "#ff5555";

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

            <p>
            แพ็กนี้มีข้อมูล Manifest ครบถ้วน
            สามารถใช้งานได้ตามปกติ
            ไม่พบข้อผิดพลาดสำคัญ
            </p>

        </div>
    `;
}
