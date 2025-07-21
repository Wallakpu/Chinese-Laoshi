// Function to check if user is logged in
const isUserLoggedIn = () => {
    const email = localStorage.getItem("Email");
    const password = localStorage.getItem("Password");
    return email && password;
}

// Function to update navbar based on login status
const updateNavbar = () => {
    const container = document.getElementById('login-container');
    container.innerHTML = ''; // clear old button

    const btn = document.createElement('a');
    btn.classList.add('login-btn');

    // Dynamically build login page path
    const currentPath = window.location.pathname;
    let loginPagePath = 'login.html'; 
    if (currentPath.includes('/pages/')) {
        loginPagePath = '../login.html';
    }

    if (isUserLoggedIn()) {
        btn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Logout';
        btn.href = '#';
        btn.onclick = logout;
    } else {
        btn.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i>&nbsp;Login';
        btn.href = loginPagePath;
        btn.onclick = null;
    }

    container.appendChild(btn);
}


// Logout function
const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    alert("Logged out successfully!");
    updateNavbar();
    
    setTimeout(() => {
        window.location.href = "/index.html"; // Going back to parent directory
    }, 500);
}


//For sign-up 
const signUp=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    if(email && password){
        localStorage.setItem("Email",email);
        localStorage.setItem("Password",password);

        alert("Sign Up Successfully!");
        
        // Update navbar after successful signup
        updateNavbar();

        setTimeout(() => {
            window.location.href = "/index.html";
        }, 500);

    } else {
        alert("Please fill up both field to sign up!");
    }
}

// For login
const logIn=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    const savedEmail=localStorage.getItem("Email");
    const savedPassword=localStorage.getItem("Password");

    if(email==savedEmail && password==savedPassword){
        alert("Login Successfull!");
        
        // Updated navbar after successful login
        updateNavbar();

        setTimeout(() => {
            window.location.href = "/index.html";
        }, 500);
    } else {
       alert("Invalid email or password!");
    }
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