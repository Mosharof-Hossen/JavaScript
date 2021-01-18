var name = ""

var fullname =""

if (name.length == 0){
    fullname = "Mosharof Hossen"
}else{
    fullname = name
}
console.log(fullname)

console.log(Boolean(""))

//1st

var name = ""
var fullname = name || "Mosharof Hossen 1"
console.log(fullname)

//2nd 

var isok = true

isok && console.log("Every thing is okk")