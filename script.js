const container = document.getElementById("container");
let rows;
let squares;

let defaultRow = 16, defaultColumn = 16;
let row = 16, column = 16;
let maximumRow = 100, maximumColumn = 100;

function createGrid(row, column, msg) {
    createRow(row, msg);
    createColumn(column, msg);
}

function createRow(row, msg) {
    /* debug message */
    console.log("create row from " + msg);

    for (let i = 0; i < row; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "row";
    }
}

function createColumn(column, msg) {
    /* debug message */
    console.log("create column " + column + " from " + msg);
    rows = document.getElementsByClassName("row");
    rows = Array.from(rows);
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < column; j++) {
            let square = document.createElement("div");
            rows[i].appendChild(square).className = "square";
        }
    }
}

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    let rvalue = document.createAttribute("rvalue");
    let gvalue = document.createAttribute("gvalue");        
    let bvalue = document.createAttribute("bvalue");
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    rvalue.value = randomR, gvalue.value = randomG, bvalue.value = randomB;
    
}

function popUpMessage() {
    row = prompt("Please enter number of grid rows (Maximum: 100)");
    while (row > maximumRow) {
        prompt("value out of range!");
        row = prompt("Please enter number of grid rows");
    }
    column = prompt("Please enter number of grid columns (Maximum: 100)");
    while (column > maximumColumn) {
        prompt("value out of range!");
        column = prompt("Please enter number of grid columns");
    }
    console.log("row number: " + row + ", column number: " + column);
}

function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.remove();
    });
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.remove();
    });
}

function setUpGrid() {
    squares = document.getElementsByClassName("square");
    squares = Array.from(squares);
    for (let i = 0; i < row * column; i++) {
        squares[i].addEventListener('mouseover', changeColor);
    }
}

function recreateGrid() {
    createGrid(row, column, "recreateGrid");
    setUpGrid();
}

function reloadGrid() {
    popUpMessage();
    clearGrid();
    recreateGrid();
}

function setReloadButton() {
    const settingButton = document.getElementById('setting-btn');
    settingButton.addEventListener('click', reloadGrid);
}

function main() {
    createGrid(defaultRow, defaultColumn, "first create grid");
    setUpGrid();
    setReloadButton();
}

main();
