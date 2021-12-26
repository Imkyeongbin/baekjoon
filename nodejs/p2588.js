const readline = require("readline")

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

var protoInputArray = []
rl.on("line", function(line){
    protoInputArray.push(line)
}).on("close", function(){
    var inputArray = protoInputArray.map((el) => parseInt(el))
    var a = inputArray[0]
    var b = protoInputArray[1]
    var b1 = parseInt(b.charAt(2))
    var b10 = parseInt(b.charAt(1))
    var b100 = parseInt(b.charAt(0))
    console.log(b1*a)
    console.log(b10*a)
    console.log(b100*a)
    console.log(a*parseInt(b))
})


// 백준 용

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
// var a = Number(input[0])
// var b = input[1]
// var b1 = parseInt(b.charAt(2))
// var b10 = parseInt(b.charAt(1))
// var b100 = parseInt(b.charAt(0))
// console.log(b1*a)
// console.log(b10*a)
// console.log(b100*a)
// console.log(a*parseInt(b))