let tva = prompt("Prix HT :");
function CalculTva (tva){
   return tva * 1.20;
}
document.write("Le pix TTC est de " + CalculTva(tva));