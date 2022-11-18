const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []
rl.on("line", function (line) {
    input.push(line.split(" "))
}).on("close", function () {
    let i = 0
    let result = ""
    do {
        result += Number(input[i][0]) + Number(input[i][1]) + "\n"
        i++
    } while (input[i][0] != "0" || input[i][1] != "0")
    result = result.slice(0, -1)
    console.log(result)
})

// 백준 용

// var fs = require("fs")
// var input = fs
//     .readFileSync("/dev/stdin")
//     .toString()
//     .split("\n")
//     .map((el) => el.split(" ").map((_el) => Number(_el)))
// let i = 0
// let result = ""
// do {
//     result += input[i][0] + input[i][1] + "\n"
//     i++
// } while (input[i][0] != "0" || input[i][1] != "0")
// result = result.slice(0, -1)
// console.log(result)
