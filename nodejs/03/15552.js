const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

var input = []
rl.on("line", function (line) {
    input.push(line.split(" "))
}).on("close", function () {
    var a = parseInt(input[0])
    var ans = ""
    for (var i = 0; i < a; i++) {
        ans =
            ans + (parseInt(input[1 + i][0]) + parseInt(input[1 + i][1])) + "\n"
    }
    ans = ans.slice(0, -1)
    console.log(ans)
    process.exit()
})

// 백준 용

// var fs = require("fs")
// var input = fs
//     .readFileSync("/dev/stdin")
//     .toString()
//     .split("\n")
//     .map((el) => el.split(" "))
// var a = parseInt(input[0])
// var ans = ""
// for (var i = 0; i < a; i++) {
//     ans = ans + (parseInt(input[1 + i][0]) + parseInt(input[1 + i][1])) + "\n"
// }
// ans = ans.slice(0, -1)
// console.log(ans)
