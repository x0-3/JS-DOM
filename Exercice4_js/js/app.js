let boxEl = document.getElementById("box-el");

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 40) {
    console.log("Down arrow key pressed");
    // Create a new box with a random color
    let newBox = document.createElement("div");
    newBox.style.width = "60px";
    newBox.style.height = "60px";
    newBox.style.backgroundColor = getRandomColor();
    boxEl.appendChild(newBox);
  } else if (event.keyCode === 38) {
    console.log("Up arrow key pressed");
    // Remove the last box added
    let boxes = boxEl.getElementsByTagName("div");
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
