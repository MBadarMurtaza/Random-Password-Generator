// This file contain all the logic 
const passwordBox = document.getElementById("input");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~|/[]{}?<=>-";
const allChars = upperCase + lowerCase + number + symbol;

// this function is used to create password
function createPassword() {
  let password = "";
  while (password.length < lenght) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
// this function is used copy the password
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
