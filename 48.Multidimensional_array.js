var arr = [
    [85,47,89,84],
    [58,98,77,44],
    [77,65,66,75]
]

console.log(arr[0][0])
console.log(arr[1][2])

for (var i = 0;i<arr.length;i++){
    for(j = 0 ;j<arr[i].length;j++){
        console.log(arr[i][j])
    }
}