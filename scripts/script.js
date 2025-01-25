let gameBoard = Array.from({ length: 6 }, () => Array(7).fill(null)); // 6 rows, 7 columns

let moveNr = 1; 
let currentPlayer = 1; 
let gameOver = false;

document.addEventListener('DOMContentLoaded', () => {
    const gameBoardElement = document.getElementById('game-board');
    const reloadButton = document.getElementById('reload-button');

    // Create the game board
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('data-row', i);
            cell.setAttribute('data-col', j);

            cell.addEventListener('click', (event) => {
                if (gameOver) {
                    console.log("Game is over");
                    return;
                }
                const row = event.target.getAttribute('data-row');
                const col = event.target.getAttribute('data-col');
                if (gameBoard[row][col] !== null) {
                    console.log("This cell is already chosen");
                    return;
                }

                console.log(`Player ${currentPlayer} clicked on cell with row ${row} and col ${col}`);

                changeColor(cell, row, col);

                if (checkWinner()) {
                    notifyWinner(currentPlayer);
                    reloadButton.style.display = 'block'; // Show the reload button
                    return;
                }

                togglePlayer();
            });
            gameBoardElement.appendChild(cell);
        }
    }
    
    reloadButton.addEventListener('click', () => {
        resetGame();
    });
});

function togglePlayer() {
    currentPlayer = moveNr % 2 === 0 ? 1 : 2;
    console.log(`Current player: ${currentPlayer}`);
    moveNr++;
}

function changeColor(cell, row, col) {
    if (currentPlayer === 1) {
        cell.style.backgroundColor = 'rgb(216, 209, 0)'; 
        gameBoard[row][col] = 1;
    } else {
        cell.style.backgroundColor = 'rgb(186, 0, 0)'; 
        gameBoard[row][col] = 2;
    }
}

function checkWinner() {
    // Check horizontal
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (gameBoard[row][col] && 
                gameBoard[row][col] === gameBoard[row][col + 1] &&
                gameBoard[row][col] === gameBoard[row][col + 2] &&
                gameBoard[row][col] === gameBoard[row][col + 3]) {
                return gameBoard[row][col];
            }
        }
    }

    // Check vertical
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (gameBoard[row][col] && 
                gameBoard[row][col] === gameBoard[row + 1][col] &&
                gameBoard[row][col] === gameBoard[row + 2][col] &&
                gameBoard[row][col] === gameBoard[row + 3][col]) {
                return gameBoard[row][col];
            }
        }
    }

    // Check diagonal (bottom-left to top-right)
    for (let row = 3; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (gameBoard[row][col] && 
                gameBoard[row][col] === gameBoard[row - 1][col + 1] &&
                gameBoard[row][col] === gameBoard[row - 2][col + 2] &&
                gameBoard[row][col] === gameBoard[row - 3][col + 3]) {
                return gameBoard[row][col];
            }
        }
    }

    // Check diagonal (top-left to bottom-right)
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            if (gameBoard[row][col] && 
                gameBoard[row][col] === gameBoard[row + 1][col + 1] &&
                gameBoard[row][col] === gameBoard[row + 2][col + 2] &&
                gameBoard[row][col] === gameBoard[row + 3][col + 3]) {
                return gameBoard[row][col];
            }
        }
    }

    return null;
}

function notifyWinner(winner) {
    const winnerDiv = document.getElementById('winner');
    const player1Name = document.getElementById('player1-name').value || 'Yellow';
    const player2Name = document.getElementById('player2-name').value || 'Red';
    const winnerName = winner === 1 ? player1Name : player2Name;
    winnerDiv.textContent = `${winnerName} wins!`;
    gameOver = true;
}

function resetGame() {
    gameBoard = Array.from({ length: 6 }, () => Array(7).fill(null));
    moveNr = 1;
    currentPlayer = 1;
    gameOver = false;

    const cells = document.querySelectorAll('#game-board div');
    cells.forEach(cell => {
        cell.style.backgroundColor = '';
    });

    document.getElementById('winner').textContent = '';
    document.getElementById('reload-button').style.display = 'none';
}