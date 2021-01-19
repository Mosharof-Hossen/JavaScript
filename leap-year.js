

function isLeapyeat(year){    
    if (year % 4 ==0){
        if(year % 100 == 0){
            if(year % 400==0){
                console.log(year ,"Is leap year")
            }else{
                console.log(year ,"is not leap year")
            }
        }else{
            console.log(year , "Is  leap year")
        }
    }else{
        console.log(year , "Is Not leap year")
    }
}

isLeapyeat(1700)

function leapYear(year){
    if((year % 4 ===0) && (year % 100 != 0) || (year % 400===0)){
        console.log(year ," Is Leap year")
    }else{
        console.log(year , "is not leap year")
    }
}
leapYear(2000)
leapYear(1900)
leapYear(2017)
leapYear(2012)