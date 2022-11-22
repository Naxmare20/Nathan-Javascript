let heure = prompt("Quel heure est il")
let minute = prompt("Quel minute est il")
let second = prompt("Combien voulez vous de second")
if(second > 60){
    alert("Il y a pas " + second + " second dans une minute")
} else if (minute > 60){
    alert("Il y a pas " + minute + " minute dans une heure")
} else if (heure > 23){
    alert("Il y a pas " + heure + " heure dans une journée")
} else{
    if(second == 59){
        second -= 59

        if (minute == 59){
            minute -= 59
            if (heure == 23 ){
                heure -= 23
                console.log(heure + " h " + minute + " m " + second + " s")
            }else {
                heure++
                console.log(heure + " h " + minute + " m " + second + " s")
            }
        } else {
            minute++
            console.log(heure + " h " + minute + " m " + second + " s")
        }
    } else if (minute == 59){
        minute -= 59
        if (heure == 23 ){
            heure -= 23
            console.log(heure + " h " + minute + " m " + second + " s")
        } else {
            heure++
            console.log(heure + " h " + minute + " m " + second + " s")
        }

    } else if (heure == 23 ){
        heure -= 23
        console.log(heure + " h " + minute + " m " + second + " s")
    } else{
        console.log(heure + " h " + minute + " m " + second + " s")
    }

}
