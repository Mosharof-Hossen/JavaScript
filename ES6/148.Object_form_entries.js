
var obj = {
    a : 10,
    b : 20
}
console.log(obj);
console.log(Object.entries(obj));

var arrToObject = [
    ["a",10],
    ["b",20]
]
console.log(arrToObject);
console.log(Object.fromEntries(arrToObject));