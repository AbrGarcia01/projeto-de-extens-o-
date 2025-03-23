function replay() {
    // Manter o nome do jogador registrado
    const playerName = document.getElementById("player-name").value;

    // Resetar o cronômetro para o tempo correto (dependendo da dificuldade)
    resetTimer(); // Resetar o cronômetro

    // Criar o tabuleiro e embaralhar as cartas novamente
    const images = getShuffledImages();
    createBoard(images);

    // Rehabilitar o botão "Reiniciar Jogo" e desabilitar o "Iniciar Jogo" se necessário
    document.getElementById("start-button").disabled = true;
    document.getElementById("restart-button").disabled = false;

    // Manter o nome do jogador
    document.getElementById("player-info").innerHTML = `
        <label for="player-name">Jogador:</label>
        <input type="text" id="player-name" value="${playerName}" placeholder="Digite seu nome">
    `;
}
