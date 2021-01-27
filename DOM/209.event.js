let btn = document.getElementById("btn")

btn.onclick = function(e){
    console.log(e)
}
let list = document.getElementById("list")
btn.addEventListener('click',function(event){
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = "Newly Created Item"
    list.appendChild(item)
})

// let lists = list.children
// console.log(lists);
// for(let i = 0;i<lists.length;i++){
//     lists[i].addEventListener("click",function(event){
//         event.target.remove()
//     })
// }

list.addEventListener("click",function(event){
    // console.log(this.contains(event.target));
    if(this.contains(event.target)){
        event.target.remove()
    }
})


let box = document.getElementById('box')

box.addEventListener("mousemove",function(event){
    document.getElementById("x-value").innerHTML = event.offsetX         //clientX
    document.getElementById("y-value").innerHTML = event.offsetY          //clientY
})