function analyzePack(files){

    if(files.some(f=>f.startsWith("texts/")))
        return "Language Pack";

    if(files.some(f=>f.startsWith("textures/")))
        return "Resource Pack";

    if(files.some(f=>f.startsWith("entities/")))
        return "Behavior Pack";

    return "Unknown";
}
