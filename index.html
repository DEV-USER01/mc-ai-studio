async function checkFile() {

    const input = document.getElementById("fileInput");
    const result = document.getElementById("result");

    const file = input.files[0];

    const check = checkFileInfo(file);

    if (!check.valid) {

        result.innerHTML = `
        <div class="manifest-box">
            ❌ ${check.message}
        </div>
        `;

        return;
    }

    try {

        const zip = await JSZip.loadAsync(file);

        const manifest = await readManifest(zip);

        if (!manifest) {

            result.innerHTML = `
            <div class="manifest-box">
                ❌ ไม่พบ manifest.json
            </div>
            `;

            return;
        }

        const files = Object.keys(zip.files);

        const fileList = files.join("<br>");

        const header = manifest.header || {};
        const modules = manifest.modules || [];

        const packType = detectPackType(modules);

        const validation = validatePack(manifest);

        const report = generateReport({
            name: header.name || "Unknown",
            version: Array.isArray(header.version)
                ? header.version.join(".")
                : "Unknown",
            type: packType,
            uuid: header.uuid || "Unknown",
            score: validation.score,
            issues: validation.issues
        });

        const analysis = analyzePack(manifest, zip);

        let issuesHtml = "";

        if (validation.issues.length > 0) {

            issuesHtml = `
            <hr>

            <h3>⚠️ Validation</h3>

            ${validation.issues
                .map(issue => `<p>• ${issue}</p>`)
                .join("")}
            `;
        }

        result.innerHTML = `

        <div class="manifest-box">

            <h3>✅ Minecraft Pack Loaded</h3>

            <p>📄 ชื่อไฟล์: ${check.name}</p>

            <p>📦 ขนาด: ${check.size} KB</p>

            <p>📁 จำนวนไฟล์: ${files.length}</p>

        </div>

        <div class="manifest-box">

            <h3>📦 Manifest Enhanced</h3>

            <p>🏷️ ชื่อ Pack: ${header.name || "Unknown"}</p>

            <p>📝 คำอธิบาย: ${header.description || "-"}</p>

            <p>🔢 เวอร์ชัน:
            ${
                Array.isArray(header.version)
                ? header.version.join(".")
                : "Unknown"
            }
            </p>

            <p>🧩 ประเภท: ${packType}</p>

            <p>🆔 UUID: ${header.uuid || "Unknown"}</p>

            <p style="color:#00ff88;font-weight:bold;">
                ⭐ คะแนน: ${validation.score}/100
            </p>

            ${issuesHtml}

        </div>

        ${analysis}

        <div class="manifest-box">

            <h3>📄 Report</h3>

            <pre style="
                white-space:pre-wrap;
                line-height:1.5;
                color:#ddd;
            ">${report}</pre>

        </div>

        <div class="file-list">

            <h3>📂 รายการไฟล์</h3>

            ${fileList}

        </div>

        `;

    }
    catch(error) {

        result.innerHTML = `
        <div class="manifest-box">
            ❌ เปิดไฟล์ไม่ได้
        </div>
        `;

        console.error(error);
    }
}
