const grid = document.querySelector("#grid");

// default grid
for(let i = 0; i < (16*16); i++){
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}

let squares = document.querySelectorAll(".square");

function squareListener(item, size){
    item.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.cssText = `background-color: rgb(100, 100, 100); width: ${size}px`;
        });
    });
}

squareListener(squares, 30);

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
