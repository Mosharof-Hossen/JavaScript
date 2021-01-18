// pass function as an arguments

function add(a , b){
    return a+  b
}

function manipulate(a,b,func){
    var c = a+ b 
    var d = a - b
    function multiply(){
        var m = func( a , b )
        return c*d*m
    }
    return multiply
    
}

var mul = manipulate(2,3,add)
console.log(mul())

