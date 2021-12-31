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
    var b = parseInt(input[1])
    if (b >= 45) {
        b -= 45
    } else {
        b = b + 60 - 45
        a = a - 1
    }
    if (a < 0) {
        a = a + 24
    }
    console.log(a, b)
})

// 백준 용

// var fs = require("fs")
// var input = fs.readFileSync("/dev/stdin").toString().split(" ")
// var a = parseInt(input[0])
// var b = parseInt(input[1])
// if (b >= 45) {
//     b -= 45
// } else {
//     b = b + 60 - 45
//     a = a - 1
// }
// if (a < 0) {
//     a = a + 24
// }
// console.log(a, b)
