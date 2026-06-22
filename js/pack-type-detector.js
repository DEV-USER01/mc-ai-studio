function detectPackType(modules = []) {

    if (modules.some(m => m.type === "resources")) {
        return "Resource Pack";
    }

    if (modules.some(m => m.type === "data")) {
        return "Behavior Pack";
    }

    if (modules.some(m => m.type === "world_template")) {
        return "World Template";
    }

    if (modules.some(m => m.type === "skin_pack")) {
        return "Skin Pack";
    }

    return "Unknown";
}
