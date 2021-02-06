// console.log("I am line One");

// setTimeout(() => {
//     console.log("I am line Two");
// },3000)

// setTimeout(() => {
//     console.log("I am line Three");
// },0)

// console.log("I am line Four");

// setTimeout(() => {
//     console.log("I am line Five");
// },1000)
// setTimeout(() => {
//     console.log("I have Done");
// },1000)

function sayName(namee){
    let result 
    setTimeout(() => {
        result = namee
        console.log("I have done");
    }, 3000);
    return result
}

let output = sayName("Mosharof Hossen")
console.log(output);