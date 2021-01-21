// ***************************** 108.Object Literal
/*

var rect = {
    width :100,
    height : 50,
    draw :function(){
        console.log("I am rectangle")
        console.log("my width is "+this.width)
        console.log("my height is "+this.height)
    }
}
rect.draw()
rect.width = 150
rect.draw()

*/

// ******************************   109.this in java script

/*
function def(){
    console.log(this)
}
new def()

var rect = {
    width :100,
    height : 50,
    draw :function(){
        console.log("I am rectangle")
        this.printProperty()
    },
    printProperty: function(){
        console.log("my width is "+this.width)
        console.log("my height is "+this.height)
    }
}
rect.draw()
rect.width = 150
rect.draw()

*/

// ****************************** 110.Factory pattern
/*
var creatRect = function(width ,height){
    return{
        width :width,
        height : height,
        draw :function(){
            console.log("I am rectangle")
            this.printProperty()
        },
        printProperty: function(){
            console.log("my width is "+this.width)
            console.log("my height is "+this.height)
        }
    }
}

var rect1 =creatRect(10,8)
rect1.draw()

var rect2 = creatRect(15,20)
rect2.draw()
*/

// **************************** 111.constructor pattern

var Ractangle = function(width,height){
    this.width = width
    this.height = height
    this.draw = function(){
        console.log("I am rectangle")
        this.printProperty()
    }
    this.printProperty = function(){
        console.log("my width is "+this.width)
        console.log("my height is "+this.height)
    }
}

var rect1 = new Ractangle(12,15)
rect1.draw()