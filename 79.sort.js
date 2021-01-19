var arr = [1,2,-5,8,6,78,-1,1,2,5,7,-8,41,5,41,1,3,6,2]



var person = [
    {
        name:"A",
        age:24
    },
    {
        name:"C",
        age:19
    },
    {
        name:"B",
        age:26
    },
    {
        name:"D",
        age:21
    }
   
]
arr.sort()
console.log(arr)

person.sort()
console.log(person)

arr.sort(function(a,b){
    if (a>b){
        return 1
    }else if(a<b){
        return - 1
    }else{
        return 0
}
})
console.log(arr)
person.sort(function(a,b){
    if (a.age>b.age){
        return 1
    }else if(a.age<b.age){
        return - 1
    }else{
        return 0
}
})
console.log(person)

var res1 = arr.every(function(value){
    return value % 2 == 0
})

console.log(res1)
var res2 = arr.every(function(value){
    return value>-100
})
console.log(res2)
