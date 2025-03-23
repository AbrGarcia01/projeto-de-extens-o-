document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.querySelector(".memory-game");

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false; // Impede que o jogador vire mais de duas cartas ao mesmo tempo
    let matchedPairs = 0; // Conta o número de pares encontrados

    // Função que vira a carta
    function flipCard() {
        if (lockBoard || this === firstCard) return; // Impede clicar duas vezes na mesma carta
        this.classList.add("flip"); // Adiciona a classe 'flip' à carta

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch(); // Verifica se as cartas viradas são um par
    }

    // Função que verifica se as cartas viradas são um par
    function checkForMatch() {
        let isMatch = firstCard.dataset.image === secondCard.dataset.image; // Compara as imagens

        isMatch ? disableCards() : unflipCards(); // Desativa ou desvira as cartas
    }

    // Função que desativa as cartas quando elas formam um par
    function disableCards() {
        firstCard.removeEventListener("click", flipCard); // Remove o evento de clique das cartas
        secondCard.removeEventListener("click", flipCard); // Remove o evento de clique das cartas

        matchedPairs++;
        resetBoard();

        // Se todas as cartas foram combinadas, o jogo acabou
        if (matchedPairs === gameContainer.children.length / 2) {
            setTimeout(() => {
                stopTimer(); // Para o cronômetro
                if (confirm("Parabéns! Você venceu! Deseja jogar novamente?")) {
                    resetGame(); // Reseta o jogo
                    startGame(); // Inicia o jogo novamente
                } else {
                    resetGame(); // Reseta o jogo sem iniciar novamente
                }
            }, 500);
        }
    }

    // Função que desvira as cartas quando elas não formam um par
    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove("flip"); // Remove a classe 'flip'
            secondCard.classList.remove("flip"); // Remove a classe 'flip'

            resetBoard(); // Reseta o estado do tabuleiro
        }, 1000); // Tempo para esperar antes de desvirar as cartas
    }

    // Função que reseta as variáveis de controle de cartas
    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    // Função que cria o tabuleiro de cartas, embaralhando as imagens
    function createBoard(shuffledImages) {
        gameContainer.innerHTML = ""; // Limpa o tabuleiro existente

        // Cria cada carta com base nas imagens embaralhadas
        shuffledImages.forEach(image => {
            const card = document.createElement("div");
            card.classList.add("memory-card");
            card.dataset.image = image; // Atribui a imagem à carta
            card.innerHTML = `
                <img class='front-face' src='${image}' alt=''>
                <img class='back-face' src='imgPadrao/interrogacao.png' alt=''>
            `;
            card.addEventListener("click", flipCard); // Adiciona evento de clique
            gameContainer.appendChild(card); // Adiciona a carta ao tabuleiro
        });
    }

    // Função para obter as imagens embaralhadas
    function getShuffledImages() {
        const selectedImages = temasConfig[tema].subtemas;
        const images = [...selectedImages, ...selectedImages]; // Duplicando as imagens para formar pares
        return images.sort(() => Math.random() - 0.5); // Embaralha as imagens
    }

    // Função de inicialização do jogo
    function initializeGame() {
        const images = getShuffledImages(); // Obtém as imagens embaralhadas
        createBoard(images); // Cria o tabuleiro com as imagens embaralhadas
    }

    // Chama a função de inicialização do jogo
    initializeGame();

    // Função para resetar o jogo
    function resetGame() {
        matchedPairs = 0;
        initializeGame(); // Recria o tabuleiro com novas imagens embaralhadas
        resetTimer(); // Reseta o cronômetro
    }

    // Atribui as funções de controle das cartas para os eventos de clique
    // (Não é mais necessário após a criação do tabuleiro dinamicamente)
});
