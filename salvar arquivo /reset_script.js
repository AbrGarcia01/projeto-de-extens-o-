function reset() {
    // Limpar o nome do jogador
    document.getElementById("player-name").value = "";

    // Parar o cronômetro e resetar
    resetTimer();

    // Limpar o tabuleiro de cartas
    const gameContainer = document.querySelector(".memory-game");
    gameContainer.innerHTML = "";  // Limpa todas as cartas

    // Habilitar o botão de "Iniciar Jogo"
    document.getElementById("start-button").disabled = false;
    document.getElementById("restart-button").disabled = true;

    // Voltar ao estado 0, sem jogador registrado e sem cronômetro ativo
}
