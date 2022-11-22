console.log("Bienvenue");
let r = Math.floor(Math.random() * 101);
for(let i = 0; i < 6; i++){
    let q = prompt("Entrez un nombre");
    if(q < r){
        alert("le chiffre est plus petit");
    }else if(q > r){
        alert("le chiffre est plus grand");
    }else{
        alert("Bravo tu la trouver");
    }
}
console.log(r);