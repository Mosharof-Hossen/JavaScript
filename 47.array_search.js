var arr = [4,7,2,6,8,4,55,9,89,29]

var find = 89
var isfound = false
for (var i = 0 ; i< arr.length;i++){
    if (find === arr[i]){
        console.log("Find index :",arr[i] , "is",i)
        isfound = true
        break

    }
}

if(!isfound){
    console.log("Data Not Found")
}