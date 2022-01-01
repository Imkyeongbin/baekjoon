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
    for (var i = 0; i < a; i++) {
        var line = ""
        for (var j = 0; j <= i; j++) {
            line += "*"
        }
        console.log(line)
    }
})

// 백준 용

// var fs = require("fs")
// var input = fs.readFileSync("/dev/stdin").toString().split(" ")
// var a = parseInt(input[0])
// for (var i = 0; i < a; i++) {
//     var line = ""
//     for (var j = 0; j <= i; j++) {
//         line += "*"
//     }
//     console.log(line)
// }
