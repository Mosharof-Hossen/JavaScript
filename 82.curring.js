function add(a,b,c){
    return a+ b+c
}

function currying(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

var res = currying(5)(5)(10)
console.log(res)