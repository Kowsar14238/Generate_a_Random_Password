
const passwordBox = document.getElementById("password");
const length = 15;//Length of the password

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = `!@#$%^&*()-_=+[]{}|:<>?~/`;

const finalPassword = upperCase + lowerCase + number + symbol;//Storage password

function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += finalPassword[Math.floor(Math.random() * finalPassword.length)];
    }

    passwordBox.value = password;//Show password at the box
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}