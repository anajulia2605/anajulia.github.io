document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    const resetButton = document.getElementById('reset-button');

    let currentPlayer = 'X';
    let gameStatus = ['','','','','','','','','']; // Representa os espaços vazios do tabuleiro

    // Função para inicializar o jogo
    function initGame() {
        currentPlayer = 'X';
        gameStatus = ['','','','','','','','',''];
        renderBoard();
        status.textContent = `É a vez do jogador ${currentPlayer}`;
    }

    // Função para renderizar o tabuleiro
    function renderBoard() {
        board.innerHTML = '';
        gameStatus.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.textContent = cell;
            cellElement.classList.add('cell');
            cellElement.addEventListener('click', () => handleCellClick(index));
            board.appendChild(cellElement);
        });
    }

    // Função para lidar com o clique em uma célula
    function handleCellClick(index) {
        if (gameStatus[index] === '' && !checkWinner()) { // Verifica se a célula está vazia e se o jogo não acabou
            gameStatus[index] = currentPlayer;
            renderBoard();
            if (checkWinner()) {
                status.textContent = `O jogador ${currentPlayer} venceu!`;
            } else if (gameStatus.every(cell => cell !== '')) {
                status.textContent = 'Empate!';
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `É a vez do jogador ${currentPlayer}`;
            }
        }
    }

    // Função para verificar se há um vencedor
    function checkWinner() {
        const winningConditions = [
            [0, 1, 2], // Linhas
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], // Colunas
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], // Diagonais
            [2, 4, 6]
        ];

        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (gameStatus[a] !== '' && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
                return true;
            }
        }
        return false;
    }

    // Event listener para o botão de reiniciar jogo
    resetButton.addEventListener('click', initGame);

    // Inicializa o jogo pela primeira vez
    initGame();
});
