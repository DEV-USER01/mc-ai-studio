async function checkFile() {

    const input = document.getElementById("fileInput");
    const result = document.getElementById("result");

    const file = input.files[0];

    if (!file) {
        result.innerHTML = "❌ ไม่ได้เลือกไฟล์";
        return;
    }

    const name = file.name.toLowerCase();

    if (
        !name.endsWith(".mcpack") &&
        !name.endsWith(".mcaddon")
    ) {
        result.innerHTML =
        "❌ รองรับเฉพาะ .mcpack และ .mcaddon";
        return;
    }

    try {

        result.innerHTML = "⏳ กำลังวิเคราะห์...";

        const zip = await JSZip.loadAsync(file);

        const files = Object.keys(zip.files);

        const manifestFound =
            files.includes("manifest.json");

        let manifestInfo = "";

        if (manifestFound) {

            try {

                const manifestText =
                    await zip.file("manifest.json")
                    .async("string");

                const manifest =
                    JSON.parse(manifestText);

                manifestInfo = `
<hr>

📋 <b>ข้อมูล Manifest</b><br><br>

🏷️ ชื่อ Pack:<br>
${manifest.header?.name || "ไม่พบ"}<br><br>

📝 คำอธิบาย:<br>
${manifest.header?.description || "ไม่พบ"}<br><br>

🔢 เวอร์ชัน:<br>
${manifest.header?.version?.join(".") || "ไม่พบ"}<br><br>

⚙️ Minecraft ขั้นต่ำ:<br>
${manifest.header?.min_engine_version?.join(".") || "ไม่พบ"}
`;

            } catch (e) {
                manifestInfo =
                "<br><br>❌ อ่าน manifest ไม่ได้";
            }
        }

        result.innerHTML = `
✅ Minecraft Pack Loaded

<br><br>

📄 ชื่อไฟล์:<br>
${file.name}

<br><br>

📦 ขนาด:<br>
${(file.size / 1024).toFixed(2)} KB

<br><br>

📁 จำนวนไฟล์:<br>
${files.length}

<br><br>

🎮 ประเภท:<br>
${name.endsWith(".mcpack")
? "Minecraft Pack"
: "Minecraft Addon"}

<br><br>

📋 Manifest:<br>
${manifestFound ? "✅ พบ" : "❌ ไม่พบ"}

${manifestInfo}

<hr>

📂 <b>รายการไฟล์</b><br><br>

${files.slice(0,50).join("<br>")}
`;

    } catch (error) {

        result.innerHTML =
        "❌ เปิดไฟล์ไม่ได้";

        console.error(error);
    }
}

window.checkFile = checkFile;
window.startAnalyze = checkFile;
