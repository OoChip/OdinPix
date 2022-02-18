//Generate a random number between 0 and 255 to be used as RGB code.
function random (){return Math.round(Math.random() * 255)}

//Generates a new RGB color and paints with it the cell that generated the event (mouseover).
function newColor (e){e.target.style.backgroundColor = `rgb(${random()},${random()},${random()})`}

//Generates all the cells and fills the grid with them.
function buildCells(rows = 16, cols = 16) {
    container.style.setProperty("--grid-rows", rows)
    container.style.setProperty("--grid-cols", cols)
    container.innerHTML = "" //Important. Clean the grid before adding the new cells (source of all evil).
    for (i = 0; i < (rows * cols); i++) {
        const cell = document.createElement("div")
        cell.className = "grid-item"
        cell.addEventListener("mouseenter", newColor)
        container.appendChild(cell)
    }
}

//Rebuild the grid.
function rebuild (){
    let size = Number(prompt("Enter a value between 0 to 100"))
    if (0 < size && size <= 100){
        buildCells(size, size)
    } else {
        buildCells()
        alert ("The value must be between o to 100")}
}

const container = document.querySelector(".grid-container");
buildCells()

const button = document.querySelector(".button");
button.addEventListener ("click", rebuild)