let moyenne = parseInt(prompt("Quel est ta moyenne au bac ???"))
if (moyenne > 20){
    alert("tu n'a pas entrez un moyenne valide , recommence")
} else if(moyenne >= 12){
    alert("Bravo vous avez votre bac ^^")
} else if (moyenne < 10){
    alert("recalé")
} else if (moyenne >= 10) {
    alert("tu as eu le bac")
} else {
    alert("tu n'a rien entrez")
}