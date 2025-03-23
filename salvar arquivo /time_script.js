// Variáveis do cronômetro
let timer;
let timeElapsed = 0;
const timerElement = document.getElementById("timer");

// Variável para armazenar a dificuldade do jogo
let difficulty = "normal"; // Pode ser "fácil", "normal", ou "difícil"

// Função para iniciar o cronômetro
function startTimer() {
    let timeFactor = 1; // Fator de tempo, padrão é 1 para fácil e normal

    // Se a dificuldade for difícil, o cronômetro será 1.5x mais rápido
    if (difficulty === "difícil") {
        timeFactor = 1.5;
    }

    timer = setInterval(function () {
        timeElapsed += timeFactor;  // Aumenta o tempo com o fator adequado
        const minutes = Math.floor(timeElapsed / 60);  // Converte os segundos em minutos
        const seconds = Math.floor(timeElapsed % 60);  // Calcula os segundos restantes
        timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;  // Atualiza o display do cronômetro
    }, 1000);
}

// Função para parar o cronômetro
function stopTimer() {
    clearInterval(timer);  // Limpa o intervalo do cronômetro
}

// Função para resetar o cronômetro
function resetTimer() {
    clearInterval(timer);  // Limpa o intervalo do cronômetro
    timeElapsed = 0;  // Reseta o tempo
    timerElement.textContent = "0:00";  // Reseta o display do cronômetro
}

// Função para ajustar a dificuldade (caso queira modificar a dificuldade dinamicamente)
function setDifficulty(level) {
    difficulty = level;
}

