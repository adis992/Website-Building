var formIcons = (function() {
    function showValidityIcon(input) {
      var icon = input.parentNode.querySelector('.valid-icon, .error-icon');
      if (input.checkValidity()) {
        if (!icon) {
          icon = document.createElement('i');
          icon.classList.add('fas', 'fa-check', 'valid-icon');
          input.parentNode.insertBefore(icon, input.nextSibling);
        }
        icon.classList.remove('error-icon');
        icon.classList.add('valid-icon');
      } else {
        if (!icon) {
          icon = document.createElement('i');
          icon.classList.add('fas', 'fa-times', 'error-icon');
          input.parentNode.insertBefore(icon, input.nextSibling);
        }
        icon.classList.remove('valid-icon');
        icon.classList.add('error-icon');
      }
    }
  
    return {
      showValidityIcon: showValidityIcon

    };
  })();
  