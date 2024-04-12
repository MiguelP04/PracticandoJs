var num1 = prompt("Coloca un primer número")
var num2 = prompt("Coloca un segundo número")

function higherNum (num1, num2) {
    if(num1 > num2){
        alert("El número más alto es: " + num1)
    } else {
        alert("El número más alto es: " + num2)
    }
    
}

higherNum(num1, num2)
