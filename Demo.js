

var series2 = [0,1]
var  i = 0
function fibonacci2(num){
    if(num==0){
        return series2
    }
    else if(num==1){
        return series2
    }
    else{
        series2.push(series2[i] + series2[i+1])
        i++
        fibonacci2(num-1)
        return series2
    }
    

}
fibonacci2(10)
console.log(series2)