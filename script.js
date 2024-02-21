const grid = document.querySelector("#grid");

// default grid
createGrid(16);

let squares = document.querySelectorAll(".square");
squareListener(squares, 30);

const adjustBtn = document.querySelector("#adjust-grid");
adjustBtn.addEventListener("click", ()=> {
    // prompt for grid size
    let gridSize = 0;
    while(gridSize > 100 || gridSize <= 0){
        gridSize = prompt("Choose the number of squares per side for the new grid (100 max)");
    }
    
    // clear the grid
    clearGrid();

    // create new grid
    createGrid(gridSize);

    squares = document.querySelectorAll(".square");

    let size = (496 - gridSize)/gridSize;

    squareListener(squares, size);
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    squares.forEach((square) => {
        square.style.cssText ="background-color: white";
    });
});

let colorBtn = document.querySelector("#color");
colorBtn.addEventListener("click", ()=> {
    if (colorBtn.textContent === "Make Rainbow"){
        squareListenerColor(squares, document.querySelector(".square").style.width);
        colorBtn.textContent = "Make B&W";
    } else {
        squareListener(squares, document.querySelector(".square").style.width);
        colorBtn.textContent = "Make Rainbow";
    }
    
});

// functions ---------------------
function squareListener(item, size){
    item.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.cssText = `background-color: rgb(100, 100, 100); width: ${size}px`;
        });
    });
}

function squareListenerColor(item, size){
    item.forEach((square) => {
        square.addEventListener("mouseover", () => {
            let num1 = Math.floor(Math.random() * 256);
            let num2 = Math.floor(Math.random() * 256);
            let num3 = Math.floor(Math.random() * 256);
            square.style.cssText = `background-color: rgb(${num1}, ${num2}, ${num3}); width: ${size}px`;
        });
    });
}

function createGrid(size){
    let newSize = (496-size)/size;
    // create new grid
    for(let i = 0; i < (size*size); i++){
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
        square.style.cssText = `width: ${newSize}px`;
    }
}

function clearGrid(){
    squares.forEach((square) => {
        grid.removeChild(square);
    });
}



