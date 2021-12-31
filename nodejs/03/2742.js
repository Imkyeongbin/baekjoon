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
    var ans = ""
    for (var i = a; i >= 1; i--) {
        ans += i + "\n"
    }
    ans = ans.slice(0, -1)

    console.log(ans)
})

// 백준 용

// var fs = require("fs")
// var input = fs.readFileSync("/dev/stdin").toString().split(" ")
// var a = parseInt(input[0])
// var ans = ""
// for (var i = a; i >= 1; i--) {
//     ans += i + "\n"
// }
// ans = ans.slice(0, -1)

// console.log(ans)
