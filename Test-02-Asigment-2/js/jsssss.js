
$(function () {    //funkcija za validaciju input polja
    const form = $("#login-form");
    const username = $("#username");
    const password = $("#password");
    const errorContainer = $("#error-container");
    const successContainer = $("#success-container");


    form.on("submit", function (event) {           //funkcija za validaciju input polja
        event.preventDefault();
        let errors = [];

        // Provera korisničkog imena
        if (username.val().trim() === "") {
            showError(username, "Please, enter Username");
            errors.push("Please, enter Username");
        } else if (username.val().trim() !== "new_user") {
            showError(username, "Please, enter valid Username");
            errors.push("Please, enter valid Username");
        } else {
            showSuccess(username);
        }

        // Provera lozinke
        if (password.val().trim() === "") {
            showError(password, "Please, enter Password");
            errors.push("Please, enter Password");
        } else if (password.val().trim() !== "123456789") {
            showError(password, "Please, enter valid Password");
            errors.push("Please, enter valid Password");
        } else {
            showSuccess(password);
        }
        // Priprema poruka o greškama i uspešnom logovanju
        if (errors.length === 0) {
            showSuccessMessage();
        } else {
            showErrorMessage(errors);
        }


        function showError(input, message) {
            input.removeClass("valid").addClass("invalid");
            input.next(".validation-icon").removeClass("success-icon").addClass("error-icon fa fa-times");
            input.nextAll(".error-message:first").text(message).show();
            input.nextAll(".success-message:first").hide();
            input.focus();
            if (input.attr("id") === "username") {
                input.nextAll(".error-message:first").css("margin-left", "10px");
            } else {
                input.nextAll(".error-message:first").css("margin-left", "0");
            }
        }



        function showSuccess(input) {   //funkcija za uspesno logovanje
            input.removeClass("invalid").addClass("valid");
            input.next(".validation-icon").removeClass("error-icon").addClass("success-icon fa fa-check");
            input.nextAll(".success-message:first").show();
            input.nextAll(".error-message:first").hide();
            input.trigger("blur");
            input.attr("disabled", true);
            input.next(".validation-icon").addClass("fa-spin");
            setTimeout(function () {
                input.attr("disabled", false);
                input.next(".validation-icon").removeClass("fa-spin").removeClass("fa-check").addClass("fa fa-check");
            }, 1500);
        }



        function showSuccessMessage() {              //funkcija za uspesno logovanje/message
            successContainer.html("<p>Successful login!</p>");
            successContainer.addClass("valid");
            successContainer.find(".validation-icon").addClass("success-icon");
            successContainer.find(".success-message").show();
            successContainer.find(".error-message").hide();
            errorContainer.html("");
        }

        function showErrorMessage(errors) {       //funkcija za neuspesno logovanje/message
            let errorList = "<ul>";
            errors.forEach(function (error) {
                errorList += "<li>" + error + "</li>";
            });
            errorList += "</ul>";
            errorContainer.html(errorList);
            successContainer.html("");
        }
    });
});


/*RESET ALL BTN/ PONISTAVA INPUT POLJA KAO I FUNKCIJE JS-A*/
$(function () {
    // Select the reset button and error container
    const resetBtn = $('#reset-btn');
    const errorContainer = $('#error-container');

    // Attach a click event listener to the reset button
    resetBtn.on('click', function () {
        // Clear the input fields
        $('#login-form input').val('');

        // Clear the error messages
        $('.error-message').hide();
        errorContainer.empty();

        // Reset the validation classes
        $('.validation-icon').removeClass('success-icon error-icon fa fa-times');
        $('input').removeClass('valid invalid');
    });
});
