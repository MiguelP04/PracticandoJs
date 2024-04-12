function splitElFive (num){
    if(num % 5 == 0){
        alert("Tu número es divisible entre 5")
    } else if(num % 11 == 0){
        alert("Tú numero es divisible entre 11")
    } else {
        alert("Tu número no es divisible entre 11 o 5")
    }
}

var num = prompt("Coloca un número")

splitElFive(num);
