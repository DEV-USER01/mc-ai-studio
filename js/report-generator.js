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

Status:
${data.issues.length === 0
? "Excellent"
: "Needs Review"}

Issues:
${data.issues.length
? data.issues.join("\n")
: "No issues found"}

`;

}
