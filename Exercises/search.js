function search(object, array){
    for(i = 0; i < array.length; i++){
        if(array[i] === object){
            return object
        }
    }
    return "Elemento no encontrado"
}

var numeros = ["hola", "buenos dias", "mundo", 28767977]

console.log(search("buenos dias", numeros))
