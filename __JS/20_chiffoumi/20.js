let p = prompt("ChiFouMi")
let r = Math.floor(Math.random() * 3);
let pierre = "";
let feuille = "";
let ciseaux = "";
if(r === 0){
    ciseaux += "ciseaux";
}else if (r === 1){
    pierre += "pierre";
}else if(r === 2){
    feuille += "feuille";
}
if(p === "ciseaux" && ciseaux === "ciseaux"){
    document.write("<h1>Egalité</h1>")
}else if(p === "pierre" && ciseaux === "ciseaux"){
    document.write("<h1>Vous avez gagner</h1>")
}else if (p === "feuille" && ciseaux === "ciseaux") {
    document.write("<h1>Vous avez perdu</h1>")
}
if(p === "pierre" && pierre === "pierre"){
    document.write("<h1>Egalité</h1>")
}else if(p === "ciseaux" && pierre === "pierre"){
    document.write("<h1>Vous avez perdu</h1>")
}else if (p === "feuille" && pierre === "pierre") {
    document.write("<h1>Vous avez gagner</h1>")
}
if(p === "feuille" && feuille === "feuille"){
    document.write("<h1>Egalité</h1>")
}else if(p === "pierre" && feuille === "feuille"){
    document.write("<h1>Vous avez perdu</h1>")
}else if (p === "ciseaux" && feuille === "feuille") {
    document.write("<h1>Vous avez gagner</h1>")
}