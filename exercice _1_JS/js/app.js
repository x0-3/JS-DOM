
let boxEl= document.getElementById("box-el"),
    style= window.getComputedStyle(boxEl),
    background= style.getPropertyValue("background-color"),
    color= style.getPropertyValue("color"),
    height= style.getPropertyValue("height"),
    width= style.getPropertyValue("width"),
    display= style.getPropertyValue("display"),
    fontFamily= style.getPropertyValue("font-family"),
    fontSize= style.getPropertyValue("font-size");


// when the square is clicked popup with css settings
boxEl.addEventListener("click", function(){

    alert(`Class : carre
    - Background color : ${background}
    - Color : ${color}
    - Height : ${height}
    - Width : ${width}
    - Display : ${display}
    - Display : ${fontFamily} (${fontSize})
    `);

})