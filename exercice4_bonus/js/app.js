let boxEl = document.getElementById("box-el");


document.addEventListener("keydown", function(event) {
  let boxes = boxEl.getElementsByTagName("div");

  if (event.key === "ArrowDown") {
    // Create a new box with a random color
    let newBox = document.createElement("div");
    newBox.style.width = "60px";
    newBox.style.height = "60px";
    newBox.style.backgroundColor = getRandomColor();
    boxEl.appendChild(newBox);

    //  when we have a total of at least 15 boxes change color to black when box is clicked 
    if (boxes.length >= 15){
      console.log("15")
      newBox.addEventListener("click", function(){
        newBox.style.backgroundColor = "black";
      })
    }

  } else if (event.key === "ArrowUp") {
    // Remove the last box added
    if (boxes.length > 0) {
      boxEl.removeChild(boxes[boxes.length - 1]);
    }
  }
});

// Function to generate a random color
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

