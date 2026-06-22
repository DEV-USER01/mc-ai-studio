async function readManifest(zip) {

    const manifestFile = zip.file("manifest.json");

    if (!manifestFile) {
        return null;
    }

    const text =
        await manifestFile.async("string");

    return JSON.parse(text);
}

window.readManifest = readManifest;
