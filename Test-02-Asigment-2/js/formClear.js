var formClear = (function() {
    function clearFormFields(form) {
      var inputs = form.querySelectorAll('input');
      inputs.forEach(function(input) {
        input.value = '';
      });
      form.clearFormErrors();
    }
  
    return {
      clearFormFields: clearFormFields
    };
  })();
  