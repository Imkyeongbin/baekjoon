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
    console.log(input[0] + input[1])
})