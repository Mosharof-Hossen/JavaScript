let name = document.getElementById("name")


name.addEventListener("keypress",function(event){
    // console.log(event)
    if(event.key === "Enter"){
        // console.log(event.target.value);
        document.getElementById("show-name").innerHTML = `Your name is ${event.target.value}`
        event.target.value = ''
    }
})

let skills = document.getElementsByName("skills")
let checkedSkills = [];
let result = document.getElementById("result")


for(let i = 0;i<skills.length;i++){
    skills[i].addEventListener("change",function(event){
        // console.log(event.target.checked)
        if(event.target.checked){
            checkedSkills.push(event.target.value)
            // console.log(checkerSkills)
            outputSkills(result,checkedSkills)
        }else{
            let ind = checkedSkills.indexOf(event.target.value)
            checkedSkills.splice(ind,1);
            outputSkills(result,checkedSkills)
        }
    })
}
console.log(checkedSkills)

function outputSkills(parent,skills){
    let results = ""
    for(let i = 0 ; i<skills.length ;i++){
        results += ` (${i+1})${skills[i]}`
    }
    parent.innerHTML = results
}

let list = document.getElementById("list")
list.addEventListener("dblclick",function(event){
    if(this.contains(event.target)){
        let innerText = event.target.innerText
        event.target.innerHTML = ''
        let inputBox = creatInputBox(innerText)
        event.target.appendChild(inputBox)

        inputBox.addEventListener("keypress",function(e){
            if(e.key === "Enter"){
                event.target.innerHTML = e.target.value
            }
        })
    }
})
function creatInputBox(value){
    let inp = document.createElement("input")
    inp.type = "text"
    inp.className = "form-control"
    inp.value = value

    return inp
}
