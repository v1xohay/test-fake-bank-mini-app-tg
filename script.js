document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Добро пожаловать в Fake Bank!');
});

// Telegram Web App initialization
Telegram.WebApp.ready();
