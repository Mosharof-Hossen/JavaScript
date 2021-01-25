/* ***************** 140.template-string.js

var a = `      dflkjdfkjdsf
tytrrrrry   
    fdf
            yyyyyyyyyyrt   `
console.log("HI")
console.log(a.trim())

var age = 17 
var namee = `Mosharof Hossen`

console.log(`My name is `+ namee + ` and I am `+age+` Years old`)
console.log(`My name is ${namee} and i am ${age} Years old.I am ${age<18 ? 'Not':""} adult`)
console.log(namee.padStart(20 ,"*"))
console.log(namee.padEnd(20,"@"))
console.log("F".repeat(10))

*/
//  ****************141. let vs const vs var

let a = 15
a = 12
console.log(a);

//  **************142.arrow function  

function add(a,b){
    return a+b
}
