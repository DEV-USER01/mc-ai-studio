function checkDependencies(manifest) {

    const dependencies =
        manifest.dependencies || [];

    return {
        count: dependencies.length,
        items: dependencies
    };
}

window.checkDependencies = checkDependencies;
