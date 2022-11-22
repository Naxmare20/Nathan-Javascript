let saisie = Number(prompt("Entrez un nombre"));
    do {
        alert("ok");
        saisie = parseInt(prompt("Entrez un nombre"));
    } while (isNaN(saisie))
    document.write('Merci vous avez saisie ' + saisie);