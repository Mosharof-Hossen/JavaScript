var arr = [1,2,3,4,5,1]

// var sum = arr.reduce(function(prev,curv){
//     return prev + curv
// })

// var max = arr.reduce(function(prev,curv){
//     return Math.max(prev,curv)
// })

// console.log(sum)
// console.log(max)

function myReduce(arr,cb,acc){
    for (var i = 0;i<arr.length ;i++){
        acc = cb(acc , arr[i])
    }
    return acc
}

var sum = myReduce(arr ,function (prev , curv){
    return prev + curv
} , 0)

console.log(sum)