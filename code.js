let password = document.getElementById('password-form');
let passwordConfirm = document.getElementById('confirm-password')
let passwordNoMatch = document.querySelector('.password-no-match')



document.addEventListener('change', function () {
    if(password.value != passwordConfirm.value) {
        passwordNoMatch.textContent = "* Passwords do not match";
        passwordNoMatch.style.color = "red";
        password.style.borderColor = "red";
        passwordConfirm.style.borderColor = "red";
    }
    if(password.value == passwordConfirm.value) {
        passwordNoMatch.textContent = "";
        password.style.borderColor = "black";
        passwordConfirm.style.borderColor = "black";
    }
})