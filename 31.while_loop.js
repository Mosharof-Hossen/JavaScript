var isRunning = true
var count = 0
while(isRunning){
    count += 1
    var rand = Math.round(Math.random() * 10 + 1)
    if (rand == 7 ){
        console.log("Winner Winner Chicken Dinner",rand,count)
        isRunning = false
    }else{
        console.log("you have Got: ",rand)
    }
}