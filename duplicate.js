var namee =[2,3,5,8,7,9,5,4,2,5,81,5,2,3,6,89]
var uniqueName = []

for (var i = 0;i<namee.length ; i++){
    var element = namee[i]
    var index = uniqueName.indexOf(element)
    if (index == -1){
        uniqueName.push(element)
    }
}

console.log(uniqueName)

function add(a,b){
    return a+b
}
console.log(add("adam"+"eve"))