function rangeNum (start, end){
    let array =  []
    if(start < end){
        for(i = start; i <= end; i++){
            array[i] = start
        }
    } else{
        (console.log("Error: El segundo número es menor"))
    }
    return array
}

console.log(rangeNum(4, 10))