async function readLanguageFiles(zip) {

    const result = {
        count: 0,
        files: [],
        translations: {}
    };

    const langFiles = Object.keys(zip.files).filter(file =>
        file.endsWith(".lang")
    );

    result.count = langFiles.length;
    result.files = langFiles;

    for (const file of langFiles) {

        try {

            const text = await zip.files[file].async("string");

            const lines = text.split("\n");

            for (const line of lines) {

                const trimmed = line.trim();

                if (
                    !trimmed ||
                    trimmed.startsWith("#") ||
                    !trimmed.includes("=")
                ) continue;

                const index = trimmed.indexOf("=");

                const key = trimmed.substring(0, index).trim();

                const value = trimmed.substring(index + 1).trim();

                result.translations[key] = value;
            }

        } catch (e) {
            console.error(e);
        }
    }

    return result;
}
