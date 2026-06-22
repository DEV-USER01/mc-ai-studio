async function openPack(file){
    const data = await file.arrayBuffer();
    return await JSZip.loadAsync(data);
}
