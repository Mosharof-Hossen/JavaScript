console.log("mosharof".split(" "))
function something (greet,name){
    function getName(){
        if (name){
            return name.split(" ")[0]
        }else{
            return ""
        }
    }
    var msg = greet + " " + getName()
    console.log(msg)
}

something("good Morning","Mosharof Hossen")
