let question = prompt("Combien ")
let etoile = "*";
for(let i = 0; i < question; i++){
    for(let j = 0; j < question; j++){
        document.write("<p style='text-align: center; height: 3px'>" + etoile + "</p>")
        etoile += "*";

    }

}