function sum(array){
    let res = 0;
    for(i = 0; i < array.length; i++){
        res += array[i]
    }
    return res
}

var numeros = [1,2,3,3,4,2,5,7,8,34]

console.log(sum(numeros))