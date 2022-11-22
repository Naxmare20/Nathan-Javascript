let nbm = Number(prompt("Entrez un chiffre"))
for(let i = 0; i < 10; i++){
    if(nbm % 2 === 0){
        document.write(nbm + " est pair")
        document.write("<br>")
    } else {
        document.write(nbm + " est impaire")
        document.write("<br>")
    }
    nbm++
}