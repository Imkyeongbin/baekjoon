const readline = require("readline")

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

rl.on("line", function(line){
    input = line.split(' ').map((el) => parseInt(el))
    rl.close()
})

rl.on("close", function(){
    var a = input[0]
    var b = input[1]
    var c = input[2]

    console.log((a+b)%c)
    console.log(((a%c) + (b%c))%c)
    console.log((a*b)%c)
    console.log(((a%c) * (b%c))%c)
})
// 백준 용

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' '); 
// var a = Number(input[0])
// var b = Number(input[1])
// var c = Number(input[2])
// console.log((a+b)%c)
// console.log( ((a%c) + (b%c))%c )
// console.log((a*b)%c)
// console.log(((a%c) * (b%c))%c)