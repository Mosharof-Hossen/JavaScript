//  console.log("mosh arof".split(" "))
// function something (greet,name){
//     function getName(){
//         if (name){
//             return name.split(" ")[0]
//         }else{
//             return ""
//         }
//     }
//     var msg = greet + " " + getName()
//     console.log(msg)
// }

// something("good Morning","Mosharof Hossen")


function something(great , name){
    function sayHi(){
        return name.split(" ")[1]
    }
    var msg = great + " " +sayHi()
    console.log(msg)
}
something(3.33,"Mosharof Hossen")
