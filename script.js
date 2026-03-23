function generatePDF() {
    var doc = new jsPDF();

    let y = 10;

    function line(text) {
        doc.text(text, 10, y);
        y += 8;
    }

    // TITLE
    doc.setFontSize(16);
    doc.text("FIRST INFORMATION REPORT (FIR)", 40, y);
    y += 10;

    doc.setFontSize(12);

    // 1. Police Station Details
    line("1. Police Station Details");
    line("Police Station: SEV Digital Unit");
    line("FIR Number: 001/2026");
    line("Date: " + new Date().toLocaleDateString());
    line("Time: " + new Date().toLocaleTimeString());
    y += 5;

    // 2. Complainant Details
    line("2. Complainant Details");
    line("Name: " + localStorage.getItem("name"));
    line("Age: " + localStorage.getItem("age"));
    line("Gender: " + localStorage.getItem("sex"));
    line("Address: " + localStorage.getItem("address"));
    line("Contact: " + localStorage.getItem("phone"));
    y += 5;

    // 3. Accused Details
    line("3. Accused Details");
    line("Name: " + localStorage.getItem("accused"));
    line("Relationship: " + localStorage.getItem("relation"));
    y += 5;

    // 4. Occurrence
    line("4. Occurrence of Offence");
    line("Date & Time: " + new Date().toLocaleString());
    line("Place: Not Specified");
    y += 5;

    // 5. Type of Offence
    line("5. Type of Offence");
    line("Nature: " + localStorage.getItem("crime"));
    line("Section: IPC (Demo)");
    y += 5;

    // 6. Description
    line("6. Brief Description");
    let desc = localStorage.getItem("desc") || "";
    doc.text(doc.splitTextToSize(desc, 180), 10, y);
    y += 15;

    // 7. Evidence
    line("7. Evidence Details");
    line("Evidence uploaded (if any)");
    y += 5;

    // 8. Action Taken
    line("8. Action Taken");
    line("FIR Registered");
    line("Investigating Officer: Digital SEV System");
    y += 10;

    // Signature
    line("Signature of Complainant: __________");
    line("Officer Signature: __________");

    // SAVE
    doc.save("FIR_Report_SEV.pdf");
}
