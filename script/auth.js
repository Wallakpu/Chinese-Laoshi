// Function to check if user is logged in
const isUserLoggedIn = () => {
    const email = localStorage.getItem("Email");
    const password = localStorage.getItem("Password");
    return email && password;
}

// Function to update navbar based on login status
const updateNavbar = () => {
    const loginBtn = document.querySelector('.login-btn');

    // Dynamically build login page path
    const currentPath = window.location.pathname;
    let loginPagePath = './pages/login.html'; // default path (if at root)

    if (currentPath.includes('/pages/')) {
        // If current page is inside pages folder, go one level up
        loginPagePath = './login.html';
    }

    if (isUserLoggedIn()) {
        // User is logged in - show logout
        loginBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Logout';
        loginBtn.href = '#';
        loginBtn.onclick = logout;
    } else {
        // User is not logged in - show login
        loginBtn.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i>&nbsp;Login';
        loginBtn.href = loginPagePath;
        loginBtn.onclick = null;
    }
}


// Logout function
const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    alert("Logged out successfully!");
    updateNavbar();
    
    setTimeout(() => {
        window.location.href = "../index.html"; // Going back to parent directory
    }, 500);
}

// Initialize navbar when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateNavbar();
});

// Listen for storage changes (if user logs in/out in another tab)
window.addEventListener('storage', (e) => {
    if (e.key === 'Email' || e.key === 'Password') {
        updateNavbar();
    }
});