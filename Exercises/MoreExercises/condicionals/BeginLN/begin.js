function beginLetterOrNumber (value) { 
    let otherValue = parseInt(value)
    if (isNaN(otherValue) == true){
        alert("Este texto empieza con un tipo string")
    } else if(typeof otherValue == "number") {
        alert("Este texto empieza con un tipo number")
    } else {
        alert("Este texto no empieza ni con un tipo number ni con un tipo string")
    }
}

var value = prompt("Coloca lo que sea")

beginLetterOrNumber(value)
