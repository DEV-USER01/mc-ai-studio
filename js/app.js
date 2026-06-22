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

        const analysis = analyzePack(manifest, zip);

        const files = Object.keys(zip.files);

        const fileList = files.join("<br>");

        result.innerHTML = `

        <div class="manifest-box">

            <h3>✅ Minecraft Pack Loaded</h3>

            <p>📄 ชื่อไฟล์: ${check.name}</p>

            <p>📦 ขนาด: ${check.size} KB</p>

            <p>📁 จำนวนไฟล์: ${files.length}</p>

        </div>

        ${analysis}

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
