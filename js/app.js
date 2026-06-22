async function checkFile() {

    const input = document.getElementById("fileInput");
    const result = document.getElementById("result");

    const file = input.files[0];

    const check = checkFileInfo(file);

    if (!check.valid) {
        result.innerHTML = "❌ " + check.message;
        return;
    }

    try {

        const zip = await JSZip.loadAsync(file);

        const manifest = await readManifest(zip);

        const analysis = analyzePack(manifest);

        const files = Object.keys(zip.files);

        result.innerHTML = `
        ✅ Minecraft Pack Loaded

        <br><br>

        📄 ชื่อไฟล์:
        ${check.name}

        <br><br>

        📦 ขนาด:
        ${check.size} KB

        <br><br>

        📁 จำนวนไฟล์:
        ${files.length}

        <br>

        ${analysis}

        <hr>

        <h3>📂 รายการไฟล์</h3>

        ${files.join("<br>")}
        `;

    } catch (error) {

        result.innerHTML = "❌ เปิดไฟล์ไม่ได้";

        console.error(error);

    }

}
