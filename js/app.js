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

        const files = Object.keys(zip.files);

        const fileList = files.join("<br>");

        const analysis = analyzePack(manifest, zip);

        const header = manifest?.header || {};
        const modules = manifest?.modules || [];

        const packType =
            typeof detectPackType === "function"
            ? detectPackType(modules)
            : "Unknown";

        const validation =
            typeof validatePack === "function"
            ? validatePack(manifest)
            : { score: 100, issues: [] };

        const report =
            typeof generateReport === "function"
            ? generateReport({
                name: header.name || "Unknown",
                version: Array.isArray(header.version)
                    ? header.version.join(".")
                    : "Unknown",
                type: packType,
                uuid: header.uuid || "Unknown",
                score: validation.score,
                issues: validation.issues
            })
            : "Report not available";

        const iconUrl =
            typeof extractPackIcon === "function"
            ? await extractPackIcon(zip)
            : null;

        const langData =
            typeof readLanguageFiles === "function"
            ? await readLanguageFiles(zip)
            : { count: 0, files: [] };

        const dependencyData =
            typeof checkDependencies === "function"
            ? checkDependencies(manifest)
            : { count: 0, items: [] };

        result.innerHTML = `

        <div class="manifest-box">

            <h3>✅ Minecraft Pack Loaded</h3>

            <p>📄 ชื่อไฟล์: ${check.name}</p>

            <p>📦 ขนาด: ${check.size} KB</p>

            <p>📁 จำนวนไฟล์: ${files.length}</p>

        </div>

        <div class="manifest-box">

            <h3>🖼 Pack Icon</h3>

            ${
                iconUrl
                ? `<img src="${iconUrl}"
                    style="
                    width:128px;
                    height:128px;
                    border-radius:12px;
                    border:1px solid #444;
                    ">`
                : "<p>ไม่พบ pack_icon.png</p>"
            }

        </div>

        <div class="manifest-box">

            <h3>🌐 Language Analysis</h3>

            <p>จำนวนไฟล์ภาษา: ${langData.count}</p>

        </div>

        <div class="manifest-box">

            <h3>🔗 Dependencies</h3>

            <p>จำนวน: ${dependencyData.count}</p>

        </div>

        ${analysis}

        <div class="manifest-box">

            <h3>📄 AI Report</h3>

            <pre style="
                white-space:pre-wrap;
                line-height:1.5;
            ">${report}</pre>

        </div>

        <div class="file-list">

            <h3>📂 รายการไฟล์ (${files.length})</h3>

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
