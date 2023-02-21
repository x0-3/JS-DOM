const box = document.createElement("div");
box.classList.add("box");

const board = document.querySelector("#board");


for (let i = 1; i<=4; i++){
    let newbox = box.cloneNode();
    newbox.innerText = i;
    board.appendChild(newbox);
    
    newbox.addEventListener("click", function(){
        newbox.classList.add("box-valid");

        newbox.addEventListener("click", function(){
            newbox.classList.remove("box-valid");
        })
    })


}


