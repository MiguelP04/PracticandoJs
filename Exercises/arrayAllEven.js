function allEven (array){
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            if(i === array.length - 1 && array[array.length - 1] % 2 === 0){
                return true
            }
        } else {
            return false
        }
    }
}

var array = [10,2,6,4,2,2,2,2]

console.log(allEven(array))