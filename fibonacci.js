
var series = [0,1]
function fibonacci(num){
    for (var i=0;i<num-2;i++){
        series.push(series[i] + series[i+1]) 
    }
    return series
}
console.log(fibonacci(10))


var series2 = [0,1]
var  i = 0
function fibonacci2(num){
    if(num==0){
        return series2
    }
    else{
        series2.push(series2[i] + series2[i+1])
    i++
    fibonacci2(num-1)
    }
    

}
fibonacci2(10)
console.log(series2)


function fibonacci3(n){
    if(n == 0){
        return 0
    }
    if(n == 1){
        return 1
    }
    else{
        return fibonacci3(n-1) + fibonacci3(n-2)
    }
}
var x = fibonacci3(10)
console.log(x)


function fibonacci4(n){
    if(n == 0){
        return 0
    }
    if(n == 1){
        return 1
    }
    else{
        return fibonacci3(n-1) + fibonacci3(n-2)
    }
}