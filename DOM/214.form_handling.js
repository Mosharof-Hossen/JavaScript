let form = document.getElementById("form")

form.addEventListener("submit",function(event){
    event.preventDefault();
    // console.log("Clicked")
    // console.log(this.length);
    // console.log(this.elements[1]);
    // console.log(this["password"])
    let formData = {};
    let = isValid = false;
    for(let i = 0; i<form.length-1 ; i++){
        // console.log(this.elements[i].name)
        isValid = validator(this.elements[i])
        if (isValid){
            formData[this.elements[i].name] = this.elements[i].value
        }else{
            this.elements[i].classList.add("is-invalid")
        }
        // if (this.elements[i] != "submit"){
        //     formData[this.elements[i].name] = this.elements[i].value
        // }
    }
    if(isValid){
        console.log(formData)
        
    }


    function validator(valuee){
        if(!valuee.value){
            return false
        }
        return true
    }
})