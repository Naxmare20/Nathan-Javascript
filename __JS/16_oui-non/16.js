let question = prompt("Ni Oui Ni non")
if(question === "oui" || question === "non") {
    alert("On t'a eux ^^")
}else{
    do {
        alert(":/");
        question = prompt("Entrez un nombre")
    } while (question === "oui" || question === "non")
    document.write("")
}