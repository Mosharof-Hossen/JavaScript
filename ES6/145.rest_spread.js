// function sum(){
//     let sum = 0
//     for(let i = 0;i<arguments.length;i++){
//         sum += arguments[i]
//     }
//     return sum
// }

// console.log(sum(15,25,25))

function sum(num1,...rest){
    let sum = 0
    console.log(rest)
    for (let i = 0 ;i<rest.length ; i++){
        sum += rest[i]
    }
    return sum + num1
}

console.log( sum(1,10,20,30))

let  a = [1,2,3,4,5]
console.log(a);
console.log(...a)

let obj = {
    a : 10,
    b : 20,
    c : 30
}

let obj2 = {
    ...obj
}
console.log(obj2)
console.log(obj === obj2)
let obj3 = obj2

console.log(obj3 === obj2);