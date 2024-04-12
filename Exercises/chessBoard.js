var size = 8;
var board = "";

for(i = 0; i < size; i++){
    if((i+j) % 2 !== 0){
        board += "#";
    } else {
        board += " ";
    }
    board += "\n"
}
console.log(board)