function sacula () {
    return  Math.floor(Math.random() * 128)
    console.log(sacula);
}

function newColor (e){   
    const newColor = `rgb(${sacula()},${sacula()},${sacula()})`;
    let cell= e.target
    cell.style.backgroundColor = newColor
}

function makeCell(rows = 16, cols = 16) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", newColor)
        container.appendChild(cell).className = "grid-item";
    };
};

function reSize (){
    let size = Number(prompt("Enter a value between 0 to 100"))
    if (0 < size && size <= 100){
        makeCell(size, size)}
    else if(size > 100){
        makeCell()
        alert ("the value must be between o to 100")}
}

const container = document.querySelector(".grid-container");
makeCell();

const button = document.getElementById("button");
button.addEventListener ("click", reSize)