function draw (lado){
    for (let i = 1 ; i <= lado ; i++){
        for (let j = 1 ; j <= lado ; j++ ){
            let area = document.createElement ("div")
            area.className = "div";
            area.addEventListener("mouseover", hovering)
            container.appendChild(area)
        }
    }
}

function hovering (e){
    e.target.style.backgroundColor = "green";
}

function reset (e){
    lado = Number(prompt ("introduzca numero"))
    draw(lado)
}

let container = document.querySelector (".container")
let lado = 16
draw(lado)
let btn = document.createElement ("button")
btn.innerText = "Reset"
btn.addEventListener("click", reset)
document.body.insertBefore(btn, container);