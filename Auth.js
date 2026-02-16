// ================== USERS STORAGE ==================
const users = JSON.parse(localStorage.getItem("users")) || {};

// ================== SIGNUP ==================
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const errorDiv = document.getElementById("signupError");

        if (users[email]) {
            errorDiv.innerText = "Email already exists!";
            return;
        }

        users[email] = { name, password };
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign Up successful! Please login.");
        window.location.href = "login.html";
    });
}

// ================== LOGIN ==================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        const errorDiv = document.getElementById("loginError");

        if (!users[email] || users[email].password !== password) {
            errorDiv.innerText = "Invalid email or password!";
            return;
        }

        // Save logged in user
        localStorage.setItem("user", JSON.stringify({ username: users[email].name, email }));
        window.location.href = "index.html"; // back to main page
    });
}
