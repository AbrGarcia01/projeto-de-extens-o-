// regras_script.js

// Função para adicionar o cronômetro no modo 'dificil' e 'padrao'.
function aplicarCronometro() {
    // Exibindo o cronômetro no padrão e no difícil
    if (dificuldade === "dificil" || dificuldade === "padrao") {
        document.getElementById("timer").style.display = "block"; // Exibe o cronômetro
    } else {
        document.getElementById("timer").style.display = "none"; // Esconde o cronômetro nos outros modos
    }
}

// Função para controlar o cronômetro com a regra do 'dificil' (1.5x mais rápido)
function startTimer() {
    let tempoMult = (dificuldade === "dificil") ? 0.6667 : 1;  // Para 'dificil', o cronômetro será 1.5x mais rápido (multiplicador de 0.6667)
    timer = setInterval(function () {
        timeElapsed++;
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }, 1000 * tempoMult);  // O intervalo agora depende do multiplicador
}

// Função para vitória automática ao pressionar 'Enter' nos modos 'facil' e 'padrao'.
function aplicarVitóriaAutomaticar() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && gameStarted) {
            // Somente para 'facil' e 'padrao'
            if (dificuldade === "facil" || dificuldade === "padrao") {
                document.querySelectorAll(".memory-card").forEach(card => {
                    card.classList.add("flip");
                    card.removeEventListener("click", flipCard); // Desabilita o clique das cartas
                });
                matchedPairs = images.length / 2;
                setTimeout(() => {
                    stopTimer();
                    if (confirm("Parabéns! Você venceu! Deseja jogar novamente?")) {
                        resetGame();
                        startGame();
                    } else {
                        resetGame();
                    }
                }, 500);
            }
        }
    });
}

// Função que é chamada ao carregar a página ou reiniciar o jogo
function aplicarRegras() {
    aplicarCronometro();  // Adiciona o cronômetro conforme a dificuldade
    aplicarVitóriaAutomaticar();  // Adiciona a vitória automática ao pressionar 'Enter'
}

// Chama a função ao carregar as regras
aplicarRegras();
