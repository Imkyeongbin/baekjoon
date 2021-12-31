const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

var inputArray = []
rl.on("line", function (line) {
    inputArray.push(line)
}).on("close", function () {
    var a = parseInt(inputArray[0])
    var b = parseInt(inputArray[1])
    if (a > 0 && b > 0) {
        console.log(1)
    } else if (a < 0 && b > 0) {
        console.log(2)
    } else if (a < 0 && b < 0) {
        console.log(3)
    } else {
        console.log(4)
    }
    process.exit()
})

// 백준 용(런타임에러)

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// if (a > 0 && b > 0) {
//     console.log(1)
// } else if (a < 0 && b > 0) {
//     console.log(2)
// } else if (a < 0 && b < 0) {
//     console.log(3)
// } else {
//     console.log(4)
// }
