var formClear = function() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    usernameInput.value = '';
    passwordInput.value = '';
    formValidation.clearFormErrors(document.querySelector('form'));
    formIcons.removeValidityIcons();
  }
  