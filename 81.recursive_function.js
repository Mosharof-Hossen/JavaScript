function sayhi(n){
    if (n=== 0){
        return
    }
    console.log(n,"HI,I am calling")
    sayhi(n-1)
}

sayhi(10)
var s = 0
function sum(n){
    s += n
    if(n=== 0 ){
        return
    }
    sum(n-1)
}
sum(5)
console.log(s)

var arr = [1,2,3,4,5]

function sumarr(arr,lastindex){
    if(lastindex < 0){
        return 0
    }
    return arr[lastindex] + sumarr(arr,lastindex-1)
}

console.log(sumarr(arr,arr.length-1))

function fact(n){
    if (n===1){
        return 1
    }
    return n*fact(n-1)
}
console.log(fact(5))