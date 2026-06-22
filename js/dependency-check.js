function checkDependencies(manifest) {

    const dependencies =
        manifest?.dependencies ||
        manifest?.header?.dependencies ||
        [];

    const items = [];

    dependencies.forEach(dep => {

        items.push({

            uuid:
                dep.uuid ||
                "Unknown",

            version:
                Array.isArray(dep.version)
                ? dep.version.join(".")
                : "Unknown"

        });

    });

    return {

        count: items.length,

        items: items

    };

}
