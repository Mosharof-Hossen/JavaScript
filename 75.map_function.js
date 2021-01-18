var arr = [1,2,3,4]

// var sqrt = arr.map(function(value){
//     // return Math.round(Math.random())*100
//     return value * value

// })


// console.log(arr)
// console.log(sqrt)


function map(arr , cb){
    var newArr = []
    for (var i = 0 ; i< arr.length ;i++){
        var temp = cb(arr[i],i,arr)
        newArr.push(temp)
    }
    return newArr
}

var qv = map(arr,function cb(value,index,arrr){
    
    return value * value
    
})
console.log(qv)