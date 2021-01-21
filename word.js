var speech = "I am a good   person  .I don't more and more at nicht"
var arr = speech.split(" ")
console.log(arr)
var count = 0
for(var i = 0;i<speech.length ; i++){
    if(speech[i]==" " && speech[i-1] !=" "){
        count ++
    }
}
count++
console.log(count)