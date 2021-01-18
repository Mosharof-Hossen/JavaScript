
while(true){
    
    var rand = Math.round(Math.random() * 10 + 1)
    if (rand == 7 ){
        console.log("Winner Winner Chicken Dinner",rand)
        break
    }else{
        console.log("you have Got: ",rand)
    }
}