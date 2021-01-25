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
/*
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
*/

// ************************* 116.Bind Call Apply
/*
function myFunc(c,d){
    console.log(this)
    console.log(this.a + this.b )
}

myFunc.call({a:40,b:50},5,3)
myFunc.apply({a:40,b:50},[5,4])
var test = myFunc.call({a:40,b:50},5,5)
test()
*/

//* ************************* 119.private property
/*
var Ractangle = function(width,height){
    this.width = width
    this.height = height

    var position = {
        x :100,
        y :200
    }
    var printProperty = function(){
        console.log("my width is "+this.width)
        console.log("my height is "+this.height)
    }.bind(this)

    this.draw = function(){
        console.log("I am rectangle")
        printProperty()
        console.log("position :x="+position.x + " Y = "+position.y)
    }
    
}

var rect = new Ractangle(15,20)
rect.draw()
*/

//  ****************** 125.Constructor prototype
/*
function Person(name){
    this.name = name
}

Person.prototype.PI=4.458
var p1 = new Person("mosharof")
var p2 = new Person("Nayem")

console.log(p1)
console.log(p2)
console.log(Object.getPrototypeOf(p1))
console.log(Person.prototype)
*/
// ******************* 126/127 Instance VS prototype
/*
function Square(width){
    this.width = width
    this.getWidth = function(){
        console.log("width is :" + this.width)
        this.draw()

    }
    
}

Square.prototype = {
    draw : function(){
        console.log("draw")
        
    },
    Tostring :function(){
        return "My width is = " + this.width
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(20)

console.log(Object.keys(sqr1))

for (var i in sqr1){
    console.log(i)
}
*/
//   ****************** 130. First Prototypical in js
function Shape(){

}
Shape.prototype.common = function(){
        console.log("I am common Method")
    }



function Square(width){
    this.width = width

}
Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.draw = function(){
        console.log("Im Drowing",this.width)
}
function Circle(){

}
Circle.prototype = Object.create(Shape.prototype)

var shape = new Shape()
var sqr = new Square(45)
var cir = new Circle()
//  shape > Shape > Object
//  sqr > Square > Object
//  we want : sqr > Square >Shape > Object