var formModule = (function () {
  function init() {
    var formElement = document.querySelector('form');
    var usernameInput = formElement.querySelector('#username');
    var passwordInput = formElement.querySelector('#password');
    // provjera validnosti input polja prilikom unosa i pri izlasku iz polja
    usernameInput.addEventListener('input', function () {
      clearErrors(usernameInput);
      formIcons.showValidityIcon(usernameInput);
    });

    usernameInput.addEventListener('blur', function () {
      formIcons.showValidityIcon(usernameInput);
    });

    passwordInput.addEventListener('input', function () {
      clearErrors(passwordInput);
      formIcons.showValidityIcon(passwordInput);
    });

    passwordInput.addEventListener('blur', function () {
      formIcons.showValidityIcon(passwordInput);
    });

    // validacija forme prilikom submit-a
    formElement.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors(formElement);

      var errors = formValidation.checkFormValidity(formElement);

      if (errors.length > 0) {
        showErrors(errors);
      } else {
        // provjera korisničkog imena i lozinke
        if (usernameInput.value === 'username' && passwordInput.value === 'password') {
          clearErrors(formElement);
          formModule.showSuccess('Login successful!');
        } else {
          showErrors(['Invalid username or password.']);
        }
      }
    });

    // brisanje poruka o greškama i ikona prilikom resetiranja forme
    formElement.addEventListener('reset', function () {
      clearErrors(formElement);
      formIcons.removeValidityIcons();
    });

    // brisanje poruka o greškama i ikona pri fokusiranju input polja
    usernameInput.addEventListener('focus', function () {
      clearErrors(formElement);
      var icon = usernameInput.parentNode.querySelector('.valid-icon');
      if (icon) {
        icon.parentNode.removeChild(icon);
      }
    });
  }

  function showErrors(errors) {
    var errorsDiv = document.createElement('div');
    errorsDiv.classList.add('errors');
    errors.forEach(function (error) {
      var errorDiv = document.createElement('div');
      errorDiv.classList.add('error');
      errorDiv.innerText = error;
      errorsDiv.appendChild(errorDiv);
    });
    var formElement = document.querySelector('form');
    formElement.appendChild(errorsDiv);
  }

  function showSuccess(message) {
    var successDiv = document.createElement('div');
    successDiv.classList.add('success');
    successDiv.innerText = message;
    var formElement = document.querySelector('form');
    formElement.appendChild(successDiv);
  }

  function clearErrors(element) {
    var invalidFields = element.querySelectorAll('.invalid');
    invalidFields.forEach(function (field) {
      field.classList.remove('invalid');
    });
    var errorDivs = element.querySelectorAll('.error');
    errorDivs.forEach(function (error) {
      error.parentNode.removeChild(error);
    });

  }

  return {
    init: init,
    showErrors: showErrors,
    showSuccess: showSuccess,
    clearErrors: clearErrors
  };
})();

// dodatak za čišćenje forme
HTMLFormElement.prototype.clearForm = function () {
  var inputs = this.querySelectorAll('input');
  inputs.forEach(function (input) {
    input.value = '';
  });
  formModule.clearErrors(this);
};

// listener za gumb "Clear form"
var clearBtn = document.querySelector('#clear-btn');
var formElement = document.querySelector('form');
clearBtn.addEventListener('click', function () {
  formElement.clearForm();
});

formElement.addEventListener('submit', function (e) {
  e.preventDefault();
  formModule.clearErrors(formElement);

  // dodaj poziv funkcije za provjeru korisnika i prikaz poruke
  if (checkUserCredentials()) {
    formModule.showSuccess('Login successful!');
  } else {
    formModule.showErrors(['Invalid username or password']);
  }
});

// funkcija koja provjerava korisničko ime i lozinku
function checkUserCredentials() {
  var usernameInput = document.querySelector('#username');
  var passwordInput = document.querySelector('#password');
  if (usernameInput.value === 'new_user' && passwordInput.value === '123456789') {
    return true;
  }
  return false;
}