let nbm = Number(prompt("Entrez une table"));
if(nbm <= 2 || nbm >= 9){
    do {
        alert("Ce chiffre est pas compris entre 2 et 9");
        nbm = Number(prompt("Entrez un nombre"))
    } while (nbm <= 2 || nbm >= 9)
    for(let i = 1; i < 11; i++){
        document.write(nbm * i)
        document.write("<br>")
    }
}else {
    for(let j = 1; j < 11; j++){
        document.write(nbm * j)
        document.write("<br>")
    }
}
