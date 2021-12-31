const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on("line", function (line) {
    input = line.split(" ")
    rl.close()
})

rl.on("close", function () {
    var a = parseInt(input[0])
    var sum
    for (var i = 1; i <= a; i++) {
        sum += i
    }
    console.log(sum)
})

// 백준 용

// var fs = require("fs")
// var input = fs.readFileSync("/dev/stdin").toString().split(" ")
// var a = parseInt(input[0])
// var sum = 0
// for (var i = 1; i <= a; i++) {
//     sum += i
// }
// console.log(sum)
