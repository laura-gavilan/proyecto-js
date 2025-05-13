const users = JSON.parse(localStorage.getItem('usuarios')) || [];

const saveUser = (email, password) => {
    if (users.some(usuario => usuario.email === email)) {
        alert('El usuario ya existe.');
        return;
    }
    users.push({ email, password });
    localStorage.setItem('usuarios', JSON.stringify(users));
    alert('Usuario registrado con éxito.');
};


const verifyLogin  = (email, password) => {
    const user = users.find(usuario => usuario.email === email && usuario.password === password);
    if (user) {
        alert('Login exitoso.');
    } else {
        alert('Credenciales incorrectas.');
    }
};


document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('register-password').value;
    
    saveUser(email, password);
});



document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    verifyLogin(email, password);
});
