function generateReport(data) {

    return `
=== MC AI Studio Report ===

Pack:
${data.name}

Version:
${data.version}

Type:
${data.type}

UUID:
${data.uuid}

Score:
${data.score}/100

Issues:
${data.issues.join("\n") || "None"}
`;
}
