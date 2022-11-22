let choisir = Number(prompt("choisissez le nombre d'un mois"))
if(choisir > 12){
    document.write("Il y a pas " + choisir + " mois dans une année")
} else if (choisir == String){
    document.write("Votre choix n'est pas un chiffre")
}
else if (choisir == 1 || choisir == 3 || choisir == 5 || choisir == 7 || choisir == 8 || choisir == 10 || choisir == 12){
    alert("Il y a 30 jours dans le " + choisir + " mois de l'année")
} else if (choisir == 2){
    alert("Il y a 28 jours dans le 2e mois de l'année")
} else if (choisir == 4 || choisir == 6 || choisir == 9 || choisir == 11) {
    alert("Il y a 31 jours dans le " + choisir + " mois de l'année")
} else {
    alert("Tu n'a pas entrez de valeur")
}