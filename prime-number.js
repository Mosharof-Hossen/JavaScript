const n = 31
value = 0



for(i = 2 ; i<n;i++){
    if(n%i == 0){
        console.log("Not Prime",i)
        value ++
        break
    }
    
}
if(value == 0){
    console.log("Prime number")
}

function isPrime(n){
    for(i = 2 ;i<n ; i++){
        if( n % i == 0){
            return "Not a prime Number"
        }
    }
    return "Prime Number"
}
console.log(isPrime(53),isPrime(57),isPrime(59),isPrime(61))