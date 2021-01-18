// var rect = {
//     width : 100,
//     height : 50,
    
//     draw: function(){
//         console.log("I am a rectangle")
//         this.printpropertis()
//         console.log(this)
//     },
//     printpropertis : function(){
//         console.log("My width is "+ this.width)
//         console.log("My height is "+ this.height)
//     }
// }

// rect.draw()

// rect.height = 150

// rect.draw()

// var rect = {
//     width : 100,
//     height : 50,
    
//     draw: function(){
//         console.log("I am a rectangle")
//         this.printpropertis()
//         console.log(this)
//     },
//     printpropertis : function(){
//         console.log("My width is "+ this.width)
//         console.log("My height is "+ this.height)
//     }
// }
// ********FActory pattern***********

// var creatrect = function(width,height){
//     return {
//         width : width,
//         height : height,
        
//         draw: function(){
//             console.log("I am a rectangle")
//             this.printpropertis()
//             console.log(this)
//         },
//         printpropertis : function(){
//             console.log("My width is "+ this.width)
//             console.log("My height is "+ this.height)
//         }
//     }
    
// }


// var rec1 = creatrect (40,20)

// rec1.draw()
// console.log("kdjfk;l")

// *********  constructor Pattern ***********

// var Rectangle = function(width , height){
//     this.width = width
//     this.height = height
    
//     this.draw = function(){
//         console.log("Rectangle is: ",width*height)
//         this.printpropertis()
//         console.log(this)
//     }
//     this.printpropertis = function(){
//         console.log("My width is "+ this.width)
//         console.log("My height is "+ this.height)
//     }
// }

// var rect1 =new Rectangle(40,50)
// rect1.draw()
// ************************bind , Call , Apply ********************

// function myfunc(c,d){
//     console.log(this)
//     console.log(this.a + this.b +c+d)
// }
// myfunc.call({a:40,b:25},10,5)
// myfunc.apply({a:400,b:250},[5,5])
// // myfunc()
// var test = myfunc.bind({a:7,b:3},5,5)
// test()
// -------------pass by value-----------------------
// var n = 10

// function change(n){
//     n += 100
//     console.log(n)
// }
// change(n)
// console.log(n)

// var obj = {
//     a:10,
//     b:20
// }

// function changeme(obj){
//     obj.a = obj.a + 100
//     obj.b += 100
//     console.log(obj)
// }

// changeme(obj)
// console.log(obj)


// --------------Abstraction ------------------

var Rectangle = function(width , height){
    var name = "Mosharof Hossen"
    this.width = width
    this.height = height

    var position = {
        x : 56,
        y : 100
    }
    
    var printpropertis = function(){
        console.log("My width is "+ this.width)
        console.log("My height is "+ this.height)
    }.bind(this)

    // this.getposition = function(){
    //     return position
    // }
    this.draw = function(){
        console.log("Rectangle is: ",width*height)
        printpropertis()
        console.log("position :X = "+position.x + "  y = "+position.y)
    }
    Object.defineProperty(this ,"position",{
        get:function(){
            return position
        },
        set: function(value){
            position = value
        }
    })
}
  
var rect7 = new Rectangle(40,50)
rect7.draw()
rect7.position = {
    x:500,
    y : 700
}
console.log(rect7.position)