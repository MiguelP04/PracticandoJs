var angle1 = parseInt(prompt("Cual es el primer ángulo?"))
var angle2 = parseInt(prompt("Cual es el segundo ángulo?"))
var angle3 = parseInt(prompt("Cual es el tercer ángulo?"))
function confirmTriangle (angle1, angle2, angle3){
    
    let sumAngles = angle1 + angle2 + angle3
    console.log(sumAngles)
    if (sumAngles === 180){
        alert("Tu triángulo es correcto")
    } else{
        alert("Tu triangulo es incorrecto")
    }
}

confirmTriangle(angle1, angle2, angle3)