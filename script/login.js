document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Call the login function from auth.js
            if (typeof handleLogin === 'function') {
                handleLogin(username, password);
            } else {
                console.error('handleLogin function not found');
                // Fallback redirect
                window.location.href = '../index.html';
            }
        });
    }
});