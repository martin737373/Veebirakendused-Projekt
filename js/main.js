document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("login-username-input").value.trim();
    const password = document.getElementById("login-password-input").value.trim();

    if (!username || !password) {
        alert("Please fill in both fields.");
        return;
    }
    window.location.href = "index.html";
});