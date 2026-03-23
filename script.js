function nextPage(page) {
    window.location.href = page;
}

function saveVictim() {
    localStorage.setItem("name", name.value);
    localStorage.setItem("age", age.value);
    localStorage.setItem("phone", phone.value);
    nextPage("crime.html");
}

function saveCrime() {
    localStorage.setItem("crime", crime.value);
    localStorage.setItem("accused", accused.value);
    localStorage.setItem("desc", desc.value);
    nextPage("evidence.html");
}

function generatePDF() {
    var doc = new jsPDF();

    doc.text("Silent Evidence Vault Report", 10, 10);

    doc.text("Name: " + localStorage.getItem("name"), 10, 20);
    doc.text("Age: " + localStorage.getItem("age"), 10, 30);
    doc.text("Crime: " + localStorage.getItem("crime"), 10, 40);
    doc.text("Accused: " + localStorage.getItem("accused"), 10, 50);

    doc.save("SEV_Report.pdf");
}
