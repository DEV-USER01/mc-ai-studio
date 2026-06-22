function checkFile() {
    const file = document.getElementById("fileInput").files[0];
    const result = document.getElementById("result");

    if (!file) {
        result.innerHTML = "❌ กรุณาเลือกไฟล์";
        return;
    }

    result.innerHTML = `
    ✅ ชื่อไฟล์: ${file.name}<br>
    📦 ขนาด: ${(file.size / 1024).toFixed(2)} KB
    `;
}
