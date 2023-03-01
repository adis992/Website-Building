var formValidation = (function () {
  function checkFormValidity(form) {
    var errors = [];

    // provjera validnosti polja za unos username
    var usernameInput = form.querySelector('#username');
    if (usernameInput.value.trim() === '') {
      usernameInput.classList.add('invalid');
      errors.push('Please enter username.');
    } else if (usernameInput.value.trim() !== 'new_user') {
      usernameInput.classList.add('invalid');
      errors.push('Please enter valid username.');
    }

    // provjera validnosti polja za unos password
    var passwordInput = form.querySelector('#password');
    if (passwordInput.value.trim() === '') {
      passwordInput.classList.add('invalid');
      errors.push('Please enter password.');
    } else if (passwordInput.value.trim() !== '123456789') {
      passwordInput.classList.add('invalid');
      errors.push('Please enter valid password.');
    }

    return errors;
  }

  function clearFormErrors(form) {
    var invalidFields = form.querySelectorAll('.invalid');
    invalidFields.forEach(function (field) {
      field.classList.remove('invalid');
    });
  }

  return {
    checkFormValidity: checkFormValidity,
    clearFormErrors: clearFormErrors
  }
})();


