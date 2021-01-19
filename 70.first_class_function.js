//function can be stored in variable
function add(a,b){
    return a+ b
}
var sum = add
console.log(sum(5,8))
//funtion can be stored in array
var arr = []

arr.push(add)
console.log(arr)
console.log(arr[0](9,8))
// funtion can be strored in object

var obj={
    sum1 : add,
    abc : 10
}
console.log(obj)
console.log(obj["sum1"](10,20))

// we can create Function as need

setTimeout(function(){
    console.log("Ki Vaiyaaaa")
},1000)