var date = new Date()


var today = date.getDate()
console.log(today)

switch(6){
    case 0 :
        console.log("Today is Sunday ")
        break
    case 1 :
        console.log("Today is Monday")
        break  
    case 2 :
        console.log("Today is Tuesday")
        break
    case 3 :
        console.log("Today is Wednesday")
        break         
    case 4 :
        console.log("Today is Thursday")
        break
    case 5 :
        console.log("Today is Friday")
        break 
    case 6 :
        console.log("Today is Birthday")
        break
    case 7 :
        console.log("Today is Prayday")
        break  
    default:
        console.log("Not Valid Number")                      
}