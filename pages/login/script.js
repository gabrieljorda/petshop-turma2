const form = document.querySelector(".form-login");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido");
        return;
    }

    if (senha.length < 6) {
        alert("A senha precisa ter no mínimo 6 caracteres");
        return;
    }

    alert("Login realizado com sucesso! Bem-vindo à PetPrime 🐾");

    form.reset();
});