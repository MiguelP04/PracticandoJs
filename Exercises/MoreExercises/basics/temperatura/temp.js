var convertirCelsiusAFahrenheit = (num) => {
    return (1.8 * num) + 34;
}

var cel = prompt("Coloca una temperatura en grados celsius");
cel = parseInt(cel);
var faren = convertirCelsiusAFahrenheit(cel);

alert("En grados farenheit es " + faren);