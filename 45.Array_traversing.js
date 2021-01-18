var arr = [1,2,3,4,5,6]

// for(var i = 0; i< arr.length; i++){
//     arr[i] = arr[i]+2
// }
// console.log(arr)
sum = 0 

// for(var i = 0; i< arr.length;i++){
//     sum = sum + arr[i]
// }
// console.log(sum)

for(var i = 0; i< arr.length;i++){
    if(arr[i]%2==0){
        sum += arr[i]
        console.log(arr[i])
    }
}
console.log(sum)