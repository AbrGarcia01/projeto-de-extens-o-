<?php
session_start();
include('conexao.php'); // Conexão com o banco

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = trim($_POST["nome"]);
    $senha = trim($_POST["senha"]);

    $sql = "SELECT id, senha FROM jogadores WHERE nome = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $nome);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($senha, $row["senha"])) {
            $_SESSION["usuario_id"] = $row["id"];
            $_SESSION["usuario_nome"] = $nome;
            header("Location: jogo.php"); // Redireciona para o jogo
            exit();
        } else {
            echo "Senha incorreta!";
        }
    } else {
        echo "Usuário não encontrado!";
    }

    $stmt->close();
    $conn->close();
}
?>
