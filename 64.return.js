function add(){
    var sum = 0
    for (i = 0;i<arguments.length ; i++){
        sum += arguments[i]
    }
    return sum
}
var res = add(1,2,3,4)
console.log(res)