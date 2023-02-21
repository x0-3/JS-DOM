
const inputEl= document.getElementById("input-el")
const francsEl= document.getElementById("francs-el")
let value = inputEl.value
let convert= 6.55957


inputEl.addEventListener("input", function(){
    let total= Math.round((inputEl.value * convert)*100)/100
    francsEl.innerHTML= `${total} francs`
})

