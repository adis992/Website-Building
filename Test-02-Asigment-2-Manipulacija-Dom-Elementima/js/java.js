// Selektovanje elemenata
var form = document.querySelector('form');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');

// Događaj "submit"
form.addEventListener('submit', function(event) {
    // Spriječavanje podrazumijevanog ponašanja forme
    event.preventDefault();

    // Provjera unesenih podataka
    var errors = [];
    if (usernameInput.value.trim() === '') {
        usernameInput.classList.add('invalid');
        errors.push('Please enter username.');
    }
    if (passwordInput.value.trim() === '') {
        passwordInput.classList.add('invalid');
        errors.push('Please enter password.');
    }
    if (usernameInput.value.trim() !== 'new_user' || passwordInput.value.trim() !== '123456789') {
        usernameInput.classList.add('invalid');
        passwordInput.classList.add('invalid');
        errors.push('Invalid username or password.');
    }

    // Ako ima grešaka, ispisati ih ispod forme
    var errorsDiv = document.createElement('div');
    errorsDiv.classList.add('errors');
    if (errors.length > 0) {
        errors.forEach(function(error) {
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
});
