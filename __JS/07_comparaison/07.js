let a = prompt("Entrez un chiffre")
let b = prompt("Entrez un autre chiffre")
    if(a > b){
        document.write("Le chiffre " + a + " Est plus grand que le chiffre " + b)
    } else if (a < b){
        document.write("Le chiffre " + a + " est plus petit que le chiffre " + b)
    } else if (a == b){
        document.write("Le chiffre " + a + " est egal au chiffre " + b)
    } else{
        alert("Tu as rien entrez en valeur")
    }