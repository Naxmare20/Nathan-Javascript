let tem = prompt("Combien de Celsius");
function calculCelsius(tem) {
   return  tem * 9/5 + 32
}

document.write("1 Celsius vaut 33.8 Farhenheit")
document.write("<br>")
document.write(tem + " Celsius vaut = " + calculCelsius(tem) + " Farhenheit");
document.write("<br>")
document.write("1 Farhenheit vaut 33.8 Celsius")
document.write("<br>")
document.write(tem + " Farhenheit vaut = " + calculCelsius(tem) + " Celsius");