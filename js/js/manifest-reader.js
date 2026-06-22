async function readManifest(zip){

    for(const filename of Object.keys(zip.files)){

        if(filename.endsWith("manifest.json")){

            const text =
                await zip.files[filename].async("string");

            return JSON.parse(text);
        }
    }

    return null;
}
