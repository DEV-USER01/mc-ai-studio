function checkFileInfo(file) {

    if (!file) {
        return {
            valid: false,
            message: "ไม่ได้เลือกไฟล์"
        };
    }

    const name = file.name.toLowerCase();

    return {
        valid:
            name.endsWith(".mcpack") ||
            name.endsWith(".mcaddon"),

        name: file.name,

        size: (file.size / 1024).toFixed(2)
    };
}

window.checkFileInfo = checkFileInfo;
