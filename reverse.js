var stat = "Mosharof hossen"
var reverse =""
for (var i=0;i<stat.length;i++){
    var char = stat[i]
    reverse = char + reverse
}
console.log(reverse)

console.log(stat.split("").reverse().join(""))