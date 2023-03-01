// Selektovanje elemenata
var form = document.querySelector('form');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');

// Događaj "submit"
form.addEventListener('submit', function (error) {
    // Spriječavanje podrazumijevanog ponašanja forme
    error.preventDefault();
    function clearErrors() {
        var errors = document.querySelectorAll('.error');
        errors.forEach(function (error) {
            error.parentNode.removeChild(error);
        });
        var invalidFields = document.querySelectorAll('.invalid');
        invalidFields.forEach(function (field) {
            field.classList.remove('invalid');
        });
    }



    // Provjera unesenih podataka
    var errors = [];
    if (usernameInput.value.trim() === '') {
        usernameInput.classList.add('invalid');
        var errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.innerText = 'Please enter username.';
        usernameInput.parentNode.insertBefore(errorDiv, usernameInput.nextSibling);
        var icon = document.createElement('i');
        icon.classList.add('fas', 'fa-times', 'error-icon');
        usernameInput.parentNode.insertBefore(icon, usernameInput.nextSibling);
        errors.push('Please enter username.');
    }
    if (usernameInput.value.trim() !== 'new_user' && usernameInput.value.trim() !== '') {
        usernameInput.classList.add('invalid');
        var errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.innerText = 'Please enter valid username.';
        usernameInput.parentNode.insertBefore(errorDiv, usernameInput.nextSibling);
        var icon = document.createElement('i');
        icon.classList.add('fas', 'fa-times', 'error-icon');
        usernameInput.parentNode.insertBefore(icon, usernameInput.nextSibling);
        errors.push('Please enter valid username.');
    }
    if (passwordInput.value.trim() === '') {
        passwordInput.classList.add('invalid');
        var errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.innerText = 'Please enter password.';
        passwordInput.parentNode.insertBefore(errorDiv, passwordInput.nextSibling);
        var icon = document.createElement('i');
        icon.classList.add('fas', 'fa-times', 'error-icon');
        passwordInput.parentNode.insertBefore(icon, passwordInput.nextSibling);
        errors.push('Please enter password.');
    }
    if (passwordInput.value.trim() !== '123456789' && passwordInput.value.trim() !== '') {
        passwordInput.classList.add('invalid');
        var errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.innerText = 'Please enter valid password.';
        passwordInput.parentNode.insertBefore(errorDiv, passwordInput.nextSibling);
        var icon = document.createElement('i');
        icon.classList.add('fas', 'fa-times', 'error-icon');
        passwordInput.parentNode.insertBefore(icon, passwordInput.nextSibling);
        errors.push('Please enter valid password.');
    }
    // brisanje grešaka nakon što korisnik unese ispravne podatke


    // Ako ima grešaka, ispisati ih ispod forme
    var errorsDiv = document.createElement('div');
    errorsDiv.classList.add('errors');
    if (errors.length > 0) {
        errors.forEach(function (error) {
            var errorDiv = document.createElement('div');
            errorDiv.classList.add('error');
            errorDiv.innerText = error;
            errorsDiv.appendChild(errorDiv);
        });
        form.appendChild(errorsDiv);
        return;
    }


    // Ako nema grešaka, označiti polja kao ispravna i ispisati poruku ispod forme
    usernameInput.classList.add('valid');
    passwordInput.classList.add('valid');
    var successDiv = document.createElement('div');
    successDiv.classList.add('success');
    successDiv.innerText = 'Successful login!';
    form.appendChild(successDiv);

    // Resetovanje polja
    usernameInput.value = '';
    passwordInput.value = '';

    // Resetovanje forme
    clearErrors("");

    var clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', function () {
        clearErrors();
    });

    if (errors.length > 0) {
        // Ukloni sve prethodno postavljene ikone i poruke o greškama
        var errorIcons = document.querySelectorAll('.error-icon');
        var errorMessages = document.querySelectorAll('.error');
        errorIcons.forEach(function (icon) {
            icon.parentNode.removeChild(icon);
        });
        errorMessages.forEach(function (msg) {
            msg.parentNode.removeChild(msg);
        });

        usernameInput.classList.add('valid');
        passwordInput.classList.add('valid');
        var successDiv = document.createElement('div');
        successDiv.classList.add('success');
        successDiv.innerText = 'Successful login!';
        form.parentNode.insertBefore(successDiv, form.nextSibling);

        usernameInput.value = '';
        passwordInput.value = '';

        /*reset success  div*/
        setTimeout(function () {
            form.parentNode.removeChild(successDiv);
        }, 3000);
    } else {
        errors.forEach(function (error) {
            var errorDiv = document.createElement('div');
            errorDiv.classList.add('error');
            errorDiv.innerText = error.message;
            var icon = document.createElement('i');
            icon.classList.add('fas', 'fa-times', 'error-icon');
            if (error.fixed === 'username') {
                usernameInput.classList.add('invalid');
                usernameInput.parentNode.insertBefore(errorDiv, usernameInput.nextSibling);
                usernameInput.parentNode.insertBefore(icon, usernameInput.nextSibling);
            } else {
                passwordInput.classList.add('invalid');
                passwordInput.parentNode.insertBefore(errorDiv, passwordInput.nextSibling);
                passwordInput.parentNode.insertBefore(icon, passwordInput.nextSibling);
            }
        });
    }
});    
