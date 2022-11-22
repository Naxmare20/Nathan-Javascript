let nb1 = Number(prompt("Entrez nb1 :"));
let nb2 = Number(prompt("Entrez nb2 :"));
let nb3 = Number(prompt("Entrez nb3 :"));
let Querry1 = document.querySelector("#nb1");
let Querry2 = document.querySelector("#nb2");
let Querry3 = document.querySelector("#nb3");
if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}
Querry1.innerHTML = nb1;
Querry2.innerHTML = nb2;
Querry3.innerHTML = nb3;
document.write("Le nombre 1 vaut au final " + nb1);
document.write("<br>");
document.write("Le nombre 2 vaut au final " + nb2);
document.write("<br>");
document.write("Le nombre 3 vaut au final " + nb3);