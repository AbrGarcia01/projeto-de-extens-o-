function showDifficultyMenu() {
    document.getElementById("menu-container").classList.add("hidden");
    document.getElementById("difficulty-menu").classList.remove("hidden");
    document.getElementById("back-button").classList.remove("hidden");
    document.getElementById("welcome-message").classList.add("hidden");
}

let selectedDifficulty = ''; // Armazena a dificuldade selecionada

function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    showThemeMenu(); // Exibe o menu de temas após a escolha da dificuldade
}

function showThemeMenu() {
    document.getElementById("difficulty-menu").classList.add("hidden");
    document.getElementById("theme-menu").classList.remove("hidden");
}

function startGame(theme) {
    if (!selectedDifficulty) {
        alert("Por favor, selecione uma dificuldade primeiro!");
        return;
    }
    if (!theme) {
        alert("Por favor, selecione um tema!");
        return;
    }
    // Redireciona para o jogo com os parâmetros escolhidos
    window.location.href = `jogo.html?dificuldade=${selectedDifficulty}&tema=${theme}`;
}

function goBack() {
    const themeMenu = document.getElementById("theme-menu");
    const difficultyMenu = document.getElementById("difficulty-menu");
    
    if (!themeMenu.classList.contains("hidden")) {
        themeMenu.classList.add("hidden");
        difficultyMenu.classList.remove("hidden");
    } else if (!difficultyMenu.classList.contains("hidden")) {
        difficultyMenu.classList.add("hidden");
        document.getElementById("menu-container").classList.remove("hidden");
        document.getElementById("back-button").classList.add("hidden");
        document.getElementById("welcome-message").classList.remove("hidden");
    }
}
