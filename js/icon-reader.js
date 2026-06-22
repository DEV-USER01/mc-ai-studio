async function extractPackIcon(zip) {

    const iconFile = zip.file("pack_icon.png");

    if (!iconFile) {
        return null;
    }

    const blob = await iconFile.async("blob");

    return URL.createObjectURL(blob);
}

window.extractPackIcon = extractPackIcon;
