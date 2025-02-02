const adminUsername = "Sasmitha";
const adminPassword = "123";


function loginPOS() {
    let userUsername = document.getElementById("username").value;
    let userPassword = document.getElementById("password").value;

    if (userUsername === "" || userPassword === "") {
        alert("Please fill  in both fields.")
    } else if (userUsername === adminUsername && userPassword === adminPassword) {
        alert("Heellloo");
    } else {
        alert("Invalid username or password");
    }
}