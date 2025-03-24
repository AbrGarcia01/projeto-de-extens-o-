function showDifficultyMenu() {
    document.getElementById("menu-container").classList.add("hidden");
    document.getElementById("difficulty-menu").classList.remove("hidden");
    document.getElementById("back-button").classList.remove("hidden");
    document.getElementById("welcome-message").classList.add("hidden");
    document.getElementById("footer").classList.add("hidden");
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
    
    if (theme === "personalizado") {
        importCustomTheme();
    } else {
        redirectToGame(selectedDifficulty, theme);
    }
}

function importCustomTheme() {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", function (event) {
        let file = event.target.files[0];
        if (!file) {
            alert("Por favor, selecione uma imagem para o tema personalizado.");
            return;
        }
        let imageUrl = URL.createObjectURL(file);
        localStorage.setItem("customTheme", imageUrl);
        redirectToGame(selectedDifficulty, "personalizado");
    });
    input.click();
}

function redirectToGame(difficulty, theme) {
    let gamePage = "jogo_" + difficulty + ".html";
    window.location.href = `${gamePage}?tema=${theme}`;
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
        document.getElementById("footer").classList.remove("hidden"); 
    }
}
