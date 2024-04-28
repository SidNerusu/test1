document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const loginButton = loginForm.querySelector('button[type="submit"]');
    const popupContainer = document.getElementById('popupContainer');
    const closePopup = document.getElementById('closePopup');

    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (username == 'admin' && password == 'password') {
            alert('welcome');
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    });

    closePopup.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const registerButton = registerForm.querySelector('button');
    const popupContainer = document.getElementById('popupContainer');
    const closePopup = document.getElementById('closePopup');

    registerButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const name = registerForm.querySelector('input[type="text"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;

        if (name && password && email) {
            alert('account created');;
        } else {
            alert('Please fill in all the fields.');
        }
    });

    closePopup.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });
});
