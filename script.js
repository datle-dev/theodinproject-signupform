const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const password = document.getElementById("password");
const confirmPassword = document.getElementById('confirm-password');


email.addEventListener('change', () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid e-mail address');
    } else {
        email.setCustomValidity('');
    }
});

phoneNumber.addEventListener('input', () => {
    if (phoneNumber.validity.typeMismatch) {
        phoneNumber.setCustomValidity('Please enter 9 digits with no other characters');
    } else {
        phoneNumber.setCustomValidity('');
    }
})

confirmPassword.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
        password.setCustomValidity('Passwords must match');
        console.log('passwords dont match');
    } else {
        password.setCustomValidity('');
        console.log('passwords match!');
    }
});