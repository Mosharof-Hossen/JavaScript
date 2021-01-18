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
    sum : add,
    abc : 10
}

console.log(obj["sum"](10,20))