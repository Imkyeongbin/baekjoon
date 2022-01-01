const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
var input = []
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    var input0Array = input[0].split(" ")
    var input1Array = input[1].split(" ")
    var len = input0Array[0]
    var compareNum = parseInt(input0Array[1])
    var result = input1Array
        .map((value) => parseInt(value))
        .filter((value) => value < compareNum)
        .toString()
        .replace(/,/g, " ")
    console.log(result)
})

// 백준 용

// var fs = require("fs")
// var input = fs.readFileSync("/dev/stdin").toString().split("\n")
// var input0Array = input[0].split(" ")
// var input1Array = input[1].split(" ")
// var len = input0Array[0]
// var compareNum = parseInt(input0Array[1])
// var result = input1Array
//     .map((value) => parseInt(value))
//     .filter((value) => value < compareNum)
//     .toString()
//     .replace(/,/g, " ")
// console.log(result)
