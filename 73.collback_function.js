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