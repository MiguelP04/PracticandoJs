function reverseArray (array){
    let newArray = [];
    let indexArray = array.length - 1
    let x = 0
    while(0 <= indexArray){
        newArray[x] = array[indexArray]
        indexArray--
        x++
    }
    return newArray
}

function reverseArrayInPlace (array){
    let indexArray = array.length - 1
    console.log(indexArray)
    let x = 0
    let arrayTemp = []
    while(0 <= indexArray){
        arrayTemp[x] = array[indexArray]
        indexArray--
        x++
    }
    return arrayTemp
}

var numeros = [2,4,6,3,8,6,9]
console.log(reverseArrayInPlace(numeros))

console.log(numeros)


