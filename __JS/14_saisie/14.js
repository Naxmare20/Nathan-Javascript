let nbm = Number(prompt("Entrez un nombre svp ?"));
if(nbm <= 50 || nbm >= 100){
    do {
        alert("ok");
        nbm = Number(prompt("Entrez un nombre"))
    } while (nbm <= 50 || nbm >= 100)
    console.log(nbm)
}else {
    console.log(nbm)
}
