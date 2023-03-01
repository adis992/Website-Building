var formModule = (function () {

  function init() {
    var formElement = document.querySelector('form');
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
        formModule.showFormErrors(errors);
      } else {
        formElement.clearFormErrors();
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
      formElement.clearFormErrors();
      formIcons.removeValidityIcons();
    });

    usernameInput.addEventListener('focus', function () {
      formElement.clearFormErrors();
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
    var formElement = document.querySelector('form');
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

HTMLFormElement.prototype.clearForm = function () {
  var inputs = this.querySelectorAll('input');
  inputs.forEach(function (input) {
    input.value = '';
  });
  this.clearFormErrors();
}

var clearBtn = document.querySelector('#clear-btn');
var formElement = document.querySelector('form');
clearBtn.addEventListener('click', function () {
  formElement.clearForm();
});
