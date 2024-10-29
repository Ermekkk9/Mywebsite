// Обработка формы входа
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Здесь можно добавить код для проверки имени пользователя и пароля (например, отправка на сервер)
    console.log(`Вход: Имя пользователя: ${username}, Пароль: ${password}`);
    
    // Успешный вход
    alert("Вход выполнен!"); // Уведомление о успешном входе
    window.location.href = "book.html"; // Перенаправление на основной сайт

    // Очистка полей формы
    this.reset();
});

// Обработка формы регистрации
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const regUsername = document.getElementById("regUsername").value;
    const regEmail = document.getElementById("regEmail").value;
    const regPassword = document.getElementById("regPassword").value;

    // Здесь можно добавить код для регистрации пользователя (например, отправка на сервер)
    console.log(`Регистрация: Имя пользователя: ${regUsername}, Email: ${regEmail}, Пароль: ${regPassword}`);
    
    // Успешная регистрация
    alert("Регистрация успешна!"); // Уведомление о успешной регистрации
    window.location.href = "book.html"; // Перенаправление на основной сайт

    // Очистка полей формы
    this.reset();
});

// Переключение между формами входа и регистрации
document.getElementById("toggle").addEventListener("click", function() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "flex";
});

document.getElementById("toggleLogin").addEventListener("click", function() {
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "flex";
});
