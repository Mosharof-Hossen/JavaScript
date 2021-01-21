var num = 2.51558845
var result = Number.parseFloat((num).toFixed(3))

console.log( result)


var dice = Math.round(Math.random() * 100)

console.log(dice)


function randomNumber(min ,max){
    return Math.round((Math.random())*(max-min) + min)
}

console.log(randomNumber(100,200))

