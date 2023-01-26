var cells = document.querySelectorAll("td");
for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        // Aquí puedes agregar el código para marcar la celda y alternar entre jugadores
    });
}

var currentPlayer = "X";
function markCell(cell) {
    if (cell.getAttribute("data-ocupado")){
        alert("La celda está ocupada, elige otra celda");
    }else{
        cell.innerHTML = currentPlayer;
        cell.setAttribute("data-ocupado", "true");
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
function checkForWin() {
    var cells = document.querySelectorAll("td");
    var winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < winningCombinations.length; i++) {
        if (cells[winningCombinations[i][0]].innerHTML === cells[winningCombinations[i][1]].innerHTML && cells[winningCombinations[i][1]].innerHTML === cells[winningCombinations[i][2]].innerHTML && cells[winningCombinations[i][0]].innerHTML !== "") {
            alert("Player " + cells[winningCombinations[i][0]].innerHTML + " wins!");
            resetGame();
        }
    }
}

function markCell(cell) {
    if (cell.getAttribute("data-ocupado")){
        alert("La celda está ocupada, elige otra celda");
    }else{
        cell.innerHTML = currentPlayer;
        cell.setAttribute("data-ocupado", "true");
        cell.style.backgroundColor = currentPlayer === "X" ? "yellow" : "blue";
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}



