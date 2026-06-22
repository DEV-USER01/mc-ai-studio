async function checkFile() {

    const input =
        document.getElementById("fileInput");

    const result =
        document.getElementById("result");

    const file = input.files[0];

    const check =
        checkFileInfo(file);

    if (!check.valid) {

        result.innerHTML =
            "❌ " + check.message;

        return;
    }

    try {

        result.innerHTML =
            "⏳ กำลังวิเคราะห์...";

        const zip =
            await JSZip.loadAsync(file);

        const manifest =
            await readManifest(zip);

        const analysis =
            analyzePack(manifest);

        const files =
            Object.keys(zip.files);

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

${analysis}

<hr>

📂 รายการไฟล์

<br><br>

${files.slice(0,50).join("<br>")}
`;

    }
    catch(error) {

        result.innerHTML =
            "❌ เปิดไฟล์ไม่ได้";

        console.error(error);
    }
}

window.checkFile = checkFile;
