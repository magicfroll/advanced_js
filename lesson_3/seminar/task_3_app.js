// Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в систему, используя данные, сохраненные в LocalStorage.

//     Приложение будет состоять из трёх основных страниц:

//     1. Страница регистрации:
//     1. Предлагает пользователю ввести логин и пароль.
//     2. После ввода данных, они сохраняются в LocalStorage.
//     3. Пользователь перенаправляется на страницу входа.
//     2. Страница входа:
//     1. Предлагает пользователю ввести логин и пароль.
//     2. Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется на страницу приветствия.
//     3. Если данные не совпадают, выводится сообщение об ошибке.
//     3. Страница приветствия:
//     1. Простое приветственное сообщение для авторизованного пользователя.
//     2. Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа. 


const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const logoutBtn = document.querySelector('.logout-btn');
const errorMessage = document.querySelector('.error-message');

const username = document.querySelector('.username-input');
const password = document.querySelector('.password-input');

function registration() {  
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    window.location.href = 'task_3_login.html'
}

function login() {
    if (username && password) {
        if (localStorage.getItem('username') === username.value && 
        localStorage.getItem('password') === password.value) {
        window.location.href = 'task_3_logout.html';
        } else {
        errorMessage.textContent = 'Wrong username or password';
        }    
    } else {
        errorMessage.textContent = 'Wrong username or password';
    }
}

function logout() {
    localStorage.clear('username')
    localStorage.clear('password')
    window.location.href = 'task_3_registration.html';
}

if (registerBtn) {
    registerBtn.addEventListener('click', registration);
} else if (loginBtn) {
    loginBtn.addEventListener('click', login);
} else if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
}

