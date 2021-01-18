var arr = [1,2,3,15,4,5,6,7,8,9]

// var result = arr.find(function(value){
//     return value === 7
// })

// console.log(result)

// var result = arr.findIndex(function(value){
//     return value == 7
// })

// console.log(result)

function fin(arr ,cb){
    
    for (var i = 0 ; i<arr.length ; i++){
        if(cb(arr[i])){
            
            return i
        }
    }
}

var result = fin(arr,function(value ,index){
    return value == 15
})

console.log(result)