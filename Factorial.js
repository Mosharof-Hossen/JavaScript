
function factorial(num){
    list = ""
    value = 1
    for(i = 1 ; i<=num ; i++){
        value *= i
        console.log(i)
        if (i==num){
            list += i + "= " +value
        }else{
            list += i + "* "
        }
    }
    console.log(num , "Factorial is")
    console.log (list)
}
factorial(5)

function factorialWile(num){
    value=1
    i = 1
    while( i<=num){
        value *= i
        i++

    }
    console.log(value)
}

factorialWile(5)
function factorial(n){
    if (n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

var value = factorial(0)
console.log(value)
