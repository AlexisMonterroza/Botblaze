document.addEventListener("DOMContentLoaded", () => {
    const usuarioAutorizado = {
        username: "User",
        password: "12345"
    };

    // Referencias a elementos del DOM para autenticación
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("login-message");

    // Verificar si todos los elementos están cargados
    if (!loginForm || !usernameInput || !passwordInput || !loginMessage) {
        console.error("No se encontraron los elementos necesarios para la autenticación.");
        return;
    }

    // Función para manejar el inicio de sesión
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === usuarioAutorizado.username && password === usuarioAutorizado.password) {
            loginMessage.textContent = "Inicio de sesión exitoso. Redirigiendo...";
            loginMessage.style.color = "green";

            setTimeout(() => {
                // Oculta el formulario de inicio de sesión y muestra el contenido principal
                document.getElementById("login-section").style.display = "none";
                document.getElementById("main-content").style.display = "block";
            }, 1000);
        } else {
            loginMessage.textContent = "Usuario o contraseña incorrectos.";
            loginMessage.style.color = "red";
        }
    });
});