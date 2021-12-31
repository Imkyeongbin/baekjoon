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
    if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
        console.log(1)
    } else {
        console.log(0)
    }
})

// 백준 용

var fs = require("fs")
var input = fs.readFileSync("/dev/stdin").toString().split(" ")
var a = parseInt(input[0])
if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
    console.log(1)
} else {
    console.log(0)
}
