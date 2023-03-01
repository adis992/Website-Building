var form = (function () {

  function init() {
    var formElement = document.querySelector('form'); // promijenjena varijabla form u formElement
    var usernameInput = formElement.querySelector('#username');
    var passwordInput = formElement.querySelector('#password');

    usernameInput.addEventListener('input', function () {
      formIcons.showValidityIcon(usernameInput);
    });

    usernameInput.addEventListener('blur', function () {
      formIcons.showValidityIcon(usernameInput);
    });

    passwordInput.addEventListener('input', function () {
      formIcons.showValidityIcon(passwordInput);
    });

    passwordInput.addEventListener('blur', function () {
      formIcons.showValidityIcon(passwordInput);
    });

    formElement.addEventListener('submit', function (e) {
      e.preventDefault();
      var errors = formValidation.checkFormValidity(formElement);

      if (errors.length > 0) {
        form.showFormErrors(errors); // ovdje možete koristiti this.showFormErrors(errors) umjesto form.showFormErrors(errors)
      } else {
        this.clearFormErrors(); // ovdje možete koristiti formElement.clearFormErrors() umjesto this.clearFormErrors()
        var successDiv = document.createElement('div');
        successDiv.classList.add('success');
        successDiv.innerText = 'Login successful!';
        formElement.appendChild(successDiv);

        if (usernameInput.value.trim() !== '' && usernameInput.value.trim() === 'new_user') {
          var icon = document.createElement('i');
          icon.classList.add('fas', 'fa-check', 'valid-icon');
          usernameInput.parentNode.insertBefore(icon, usernameInput.nextSibling);
        }

        if (passwordInput.value.trim() !== '' && passwordInput.value.trim() === '123456789') {
          var icon = document.createElement('i');
          icon.classList.add('fas', 'fa-check', 'valid-icon');
          passwordInput.parentNode.insertBefore(icon, passwordInput.nextSibling);
        }
      }
    });

    formElement.addEventListener('reset', function () {
      this.clearFormErrors(); // ovdje možete koristiti formElement.clearFormErrors() umjesto this.clearFormErrors()
      formIcons.removeValidityIcons();
    });

    usernameInput.addEventListener('focus', function () {
      this.clearFormErrors(); // ovdje možete koristiti formElement.clearFormErrors() umjesto this.clearFormErrors()
      var icon = usernameInput.parentNode.querySelector('.valid-icon');
      if (icon) {
        icon.parentNode.removeChild(icon);
      }
    });

  }

  function showFormErrors(errors) {
    var errorsDiv = document.createElement('div');
    errorsDiv.classList.add('errors');
    errors.forEach(function (error) {
      var errorDiv = document.createElement('div');
      errorDiv.classList.add('error');
      errorDiv.innerText = error;
      errorsDiv.appendChild(errorDiv);
    });
    var formElement = document.querySelector('form'); // promijenjena varijabla form u formElement
    formElement.appendChild(errorsDiv);
  }

  function clearFormErrors() {
    var errors = document.querySelectorAll('.error');
    errors.forEach(function (error) {
      error.parentNode.removeChild(error);
    });
    formValidation.clearFormErrors(document.querySelector('form'));
  }

  return {
    init: init,
    showFormErrors: showFormErrors,
    clearFormErrors: clearFormErrors
  };

})();

document.addEventListener('DOMContentLoaded', function () {
  form.init();
});
HTMLFormElement.prototype.clearFormErrors = function() {
  // Implementacija funkcije
}
