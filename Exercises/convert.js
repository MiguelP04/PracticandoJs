function convert(string){
    let array = []
    let newString = ""
    for(i = 0; i < string.length; i++){
        
        if(string[i] == " "){
            array.push(newString)
            newString = ""
        }
        else{
            newString += string[i]
        }
    }
    array.push(newString)
    return array
    
    
}

var texto = "hola reina bella"
console.log(texto)
console.log(convert(texto))