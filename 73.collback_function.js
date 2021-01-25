function simple(a,b,cb){
    var c = a+b
    var d = a-b
    var result = cb(c,d)
    return result
}

function sum(a,b){
    return a+b
}


res = simple(5,6,sum)
console.log(res)

var result = simple(5,6,function(c,d){
    return c+d
})
console.log(result)

var result2 = simple(5,6,function(c,d){
    return c*d
})

console.log(result2)


function explainCallback(namee ,age , task){
    console.log("Hello "+namee);
    console.log("Your Age ",age);
    task()
}
function washHand(){
    console.log("wash your hand");
}
function takeShower (){
    console.log("Take Shower");
}

explainCallback("mosharof Hossen",5,washHand)
explainCallback(`Jony`,6,takeShower)
explainCallback(`Shihab`,45,function(){
    console.log("Pungtami");
})