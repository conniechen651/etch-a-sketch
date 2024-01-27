const grid = document.querySelector("#grid");

for(let i = 0; i < (16*16); i++){
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}

const squares = document.querySelectorAll(".square");
console.log(squares);

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.cssText = "background-color: rgb(100, 100, 100)";
    });
});
