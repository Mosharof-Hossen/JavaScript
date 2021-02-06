fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(json => displayCountries(json))

function displayCountries(data){
    for(let i = 0; i<data.length ;i++){
        let ul = document.getElementById("list")
        let li = document.createElement("li")
        li.innerText = data[i].name
        ul.appendChild(li)
    }
    detail()
}

function detail(){
        document.getElementById("list").addEventListener("click",function(event){
            console.log(event.target.innerText)
            let country = event.target.innerText
            fetch(`https://restcountries.eu/rest/v2/name/${country}`) 
            .then(res => res.json())
            .then(data => details(data))
        })
}
function details(data){
    let country = data[0]
    console.log(country);
    document.getElementById("Country-Name").innerText = country.name
    document.getElementById("flagImg").src = country.flag
    document.getElementById("Native-Name").innerText = country.nativeName
    document.getElementById("Capital").innerText = country.capital
    document.getElementById("Area").innerText = country.area
    document.getElementById("Languages").innerText = country.languages[0].name
    document.getElementById("Population").innerText = country.population
    document.getElementById("Region").innerText = country.region
}