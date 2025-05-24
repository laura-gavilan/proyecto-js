const saveUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.log(`usuarios actuales`, users)
    if (users.some(usuario => usuario.email === email)) {
        alert('El usuario ya existe.');
        console.log(`Intento de registro duplicado: ${email}`);
        return;
    }

    users.push({ email, password });
    localStorage.setItem('usuarios', JSON.stringify(users));
    console.log('Usuario registrado:', { email, password });
    alert('Usuario registrado con éxito.');
};


const verifyLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.log('Usuarios en login:', users);
    const user = users.find(usuario => usuario.email === email && usuario.password === password);
    if (user) {
        alert('Login exitoso.');
    } else {
        alert('Credenciales incorrectas.');
    }
};


document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('register-password').value.trim();

    console.log('Formulario registro enviado:', email, password);
    saveUser(email, password);
});



document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email-login').valuetrim().toLowerCase();
    const password = document.getElementById('password-login').value.trm();

    console.log('Formulario login enviado:', email, password);
    verifyLogin(email, password);
});






// const btnLogin = document.getElementById("btn-login");
// btnLogin.addEventListener("dblclick", () => {
// 	cerrarSesion();
// });

// const cerrarSesion = () => {
// 	btnLogin.textContent = "Login";

// 	localStorage.removeItem("userName");
// 	localStorage.removeItem("userEmail");
// 	localStorage.removeItem("displayName");

// 	alert("Sesion cerrada correctamente");
// };