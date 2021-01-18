var arr = [1,23,2,4,5,6,7,85,82,9]

var filterarr = arr.filter(function(value){
    return value % 2 == 0
})
console.log(filterarr)


function filt (arr ,cb){
    var newArr = []
    for (var i = 0 ;i<arr.length ; i++){
        
        if (cb(arr[i],i,arr)){
            newArr.push(arr[i])
        }
        
        // if(arr[i]% 2 == 0){
        //     newArr.push(arr[i])
        // }
    }
    return newArr
}



filterarr = filt(arr,function cb(value,index,arra){
    return value % 2 == 0
})


console.log(filterarr)