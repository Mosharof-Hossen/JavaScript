function ab (){
    console.log(arguments)
    console.log(arguments[0])
}
ab(50,45)

let a = "abc"


function x(){
    var a = 10
    function y(){
        var a = 5
        console.log(a)
    }
    console.log(a)
    y()
}
x()