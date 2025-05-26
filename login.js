const saveUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.log(`usuarios actuales`, users)
    if (users.some(usuario => usuario.email === email)) {
        alert('El usuario ya existe.');
        console.log(`Intento de registro duplicado: ${email}`);
        return false;
    }

    users.push({ email, password });
    localStorage.setItem('usuarios', JSON.stringify(users));
    console.log('Usuario registrado:', { email, password });
    alert('Usuario registrado con éxito.');
    return true;
};


const verifyLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.log('Usuarios en login:', users);
    const user = users.find(usuario => usuario.email === email && usuario.password === password);
    if (user) {
        alert('Login exitoso.');
        sessionStorage.setItem('user', email);
        showLogoutButton(); //guarda estado de sesión//
        return true;
    } else {
        alert('Credenciales incorrectas.');
        return false;
    }
};


document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();
    if (saveUser(email, password)) {
        event.target.reset(); // limpiar form después de registro exitoso
    }
});



document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email-login').value.trim().toLowerCase();
    const password = document.getElementById('password-login').value.trim();

    if (verifyLogin(email, password)) {
        event.target.reset(); // limpiar form después de login exitoso
        // Aquí puedes redirigir o mostrar otra cosa
    }
});


// document.addEventListener('DOMContentLoaded', () => {
//     const logoutBtn = document.getElementById('logout-btn');

//     const showLogoutButton = () => {
//         // Mostrar botón solo si hay usuario logueado
//         const user = sessionStorage.getItem('user');
//         logoutBtn.style.display = user ? 'inline-block' : 'none';
//     };

//     logoutBtn.addEventListener('click', () => {
//         sessionStorage.removeItem('user'); // elimina sesión
//         alert('Sesión cerrada.');
//         // Limpia los campos del login
//         document.getElementById('email-login').value = '';
//         document.getElementById('password-login').value = '';
//         showLogoutButton();

//         // Aquí puedes agregar acciones adicionales, como mostrar el formulario de login o redirigir
//     });

//     // Llama esta función cuando la página cargue para mostrar u ocultar el botón
//     showLogoutButton();
// });
