// Atualização no play_script.js

function startGame() {
    if (gameStarted) return;
    const playerName = playerNameInput.value.trim();
    if (playerName.length < 3) {
        alert("O nome do jogador deve ter pelo menos 3 caracteres.");
        return;
    }
    gameStarted = true;
    lockBoard = false;
    startButton.disabled = true;
    restartButton.disabled = false;

    // Iniciar o cronômetro se a dificuldade for 'padrao' ou 'dificil'
    if (dificuldade === "dificil" || dificuldade === "padrao") {
        startTimer();
    }

    // Passando as imagens embaralhadas para o cartas_script.js
    const shuffledImages = getShuffledImages(); // Obtém as imagens embaralhadas
    createBoard(shuffledImages); // Chama a função createBoard passando as imagens embaralhadas
}

startButton.addEventListener("click", startGame);
