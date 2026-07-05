const len = document.getElementById("len");
const Lowercase = document.getElementById("LowerCase");
const UpperCase = document.getElementById("UpperCase");
const Symbols = document.getElementById("Symbols");
const Numbers = document.getElementById("Numbers");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const lowerCase = "abcdefghigklmnopqrstuvqxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "@#$%^&*()_+{}";
const numbers = "0123456789";
const password = document.getElementById("f-password");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const length = len.value;
    let temp_password = "";
    let perm_password = "";
    if(length == ""){
        password.textContent = "Pls input the length of your password";
        return;
    }
    if(length < 7){
        password.textContent = "Pls your password must be at least 7 characters"
        return;
    }
    if(Lowercase.checked){
        temp_password += lowerCase;
        }
    if(UpperCase.checked){
        temp_password += upperCase;
        }
    if(Numbers.checked){
        temp_password += numbers;
        }
    if(Symbols.checked){
        temp_password += symbols;
        }
    if (temp_password === "") {
        password.textContent = "Pls select at least one character type!";
        return;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * temp_password.length);
        perm_password += temp_password[randomIndex];
    }
    password.textContent = `Your password is: ${perm_password}`;
} )