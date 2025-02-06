const adminUsername = "Cashier";
const adminPassword = "12345678";

function loginPOS() {
    let userUsername = document.getElementById("username").value;
    let userPassword = document.getElementById("password").value;

    if (userUsername === "" || userPassword === "") {
        alert("Please fill  in both fields.")
    } else if (userUsername === adminUsername && userPassword === adminPassword) {
        alert("Login Successful! Welcome back!");
        window.location.href = `dashboard.html`;
    } else {
        alert("Invalid username or password");
    }

}