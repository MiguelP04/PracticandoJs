var dividir = (num) => {
    return num / 10
}

var div = prompt("Coloca un número para dividirlo entre 10")
div = parseInt(div)

var resultado = dividir(div)

alert("El resultado es " + resultado)