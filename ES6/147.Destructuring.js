var person = {
    namee : "Mosharof Hossen",
    email : "mosharofhossen1998@gmail.com",
    address:{
        city : "Mymensingh",
        country : "Bangladesh"
    }
}
let {namee , email ,address:{city,country}} = person
console.log(namee , email  ,city , country);

