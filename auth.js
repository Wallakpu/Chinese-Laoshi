// Function to handle login
function handleLogin(username, password) {
    // In a real app, you would validate credentials with a server
    // For demo purposes, we'll just check if fields aren't empty
    if (username && password) {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        // Update UI
        updateAuthButton();
        
        // Redirect to index.html
        window.location.href = '../index.html';
        return true;
    } else {
        alert('Please enter both username and password');
        return false;
    }
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    updateAuthButton();
    window.location.href = '../index.html';
}

// Function to check login status
function checkAuth() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Update auth button (as previously shown)
function updateAuthButton() {
    const authButtonContainer = document.getElementById('authButtonContainer');
    const isLoggedIn = checkAuth();
    const username = localStorage.getItem('username');

    if (isLoggedIn) {
        authButtonContainer.innerHTML = `
            <div class="profile-dropdown">
                <button class="profile-btn" id="profileButton">
                    <i class="fa-solid fa-user"></i>&nbsp;${username || 'Profile'}
                </button>
                <div class="dropdown-content">
                    <a href="./profile.html">My Profile</a>
                    <a href="#" id="logoutLink">Logout</a>
                </div>
            </div>
        `;

        document.getElementById('logoutLink')?.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    } else {
        authButtonContainer.innerHTML = `
            <a href="./login.html" class="login-btn" id="authButton">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>&nbsp;Login
            </a>
        `;
    }
}

// Initialize auth state when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateAuthButton();
    
    // Handle storage events (for when login state changes in another tab)
    window.addEventListener('storage', function(e) {
        if (e.key === 'isLoggedIn') {
            updateAuthButton();
        }
    });
});