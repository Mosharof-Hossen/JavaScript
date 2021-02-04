class Rectangle {
    constructor(width , height){
        this.width = width
        this.height = height
    }
    drow(){
        console.log("Drawing");
    }
}
let rect = new Rectangle(25,20)
console.log(rect);

class Student{
    constructor(name,roll){
        this.name = name
        this.roll = roll
        this.school = "kolimullahhh"

    }
}
let student1 = new Student("mosharof",22)
let student2 = new Student("sajib",21)

console.log(student1.name)
console.log(student2);


class Parent{
    constructor() {
        this.fathername = "Ethens Father"
    }
}
class Child extends Parent{
    constructor(name){
        super()
        this.name = name
    }
    getFullName(){
        return this.name + " "  + this.fathername
    }
}

const baby = new Child("Ethen")
let baby2 = new Child("Sathil")

console.log(baby);
console.log(baby2);
console.log(baby.getFullName());