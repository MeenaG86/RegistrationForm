
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitBtn = document.getElementById("submitBtn");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");
    const form = document.getElementById("registerForm");

    /*function validateName() {
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
            nameIcon.className = "fa fa-user icon invalid";

            return false;
        }
        nameError.style.display = "none";
        nameIcon.className = "fa fa-user icon valid";
        return true;
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.style.display = "block";
            emailIcon.className = "fa fa-envelope icon invalid";
            return false;
        }
        emailError.style.display = "none";
        emailIcon.className = "fa fa-envelope icon valid";  
        return true;
    }

    function validatePassword() {
        if (passwordInput.value.length < 6) {
            passwordError.style.display = "block";
            passwordIcon.className = "fa fa-lock icon invalid";
            return false;
        }
        passwordError.style.display = "none";
        passwordIcon.className = "fa fa-lock icon valid";
        return true;
    }

    function checkFormValidity() {
        submitBtn.disabled = !(validateName() && validateEmail() && validatePassword());
    }

    nameInput.addEventListener("input", checkFormValidity);
    emailInput.addEventListener("input", checkFormValidity);
    passwordInput.addEventListener("input", checkFormValidity);*/
     let touched = {
        name: false,
        email: false,
        password: false
    };

    function validateName(showError) {
        const isValid = nameInput.value.trim() !== "";

        if (!isValid && showError) {
            nameError.style.display = "block";
            nameIcon.className = "fa fa-user icon invalid";
        } else if (isValid) {
            nameError.style.display = "none";
            nameIcon.className = "fa fa-user icon valid";
        } else {
            nameError.style.display = "none";
            nameIcon.className = "fa fa-user icon";
        }
        return isValid;
    }

    function validateEmail(showError) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(emailInput.value.trim());

        if (!isValid && showError) {
            emailError.style.display = "block";
            emailIcon.className = "fa fa-envelope icon invalid";
        } else if (isValid) {
            emailError.style.display = "none";
            emailIcon.className = "fa fa-envelope icon valid";
        } else {
            emailError.style.display = "none";
            emailIcon.className = "fa fa-envelope icon";
        }
        return isValid;
    }

    function validatePassword(showError) {
        const isValid = passwordInput.value.length >= 6;

        if (!isValid && showError) {
            passwordError.style.display = "block";
            passwordIcon.className = "fa fa-lock icon invalid";
        } else if (isValid) {
            passwordError.style.display = "none";
            passwordIcon.className = "fa fa-lock icon valid";
        } else {
            passwordError.style.display = "none";
            passwordIcon.className = "fa fa-lock icon";
        }
        return isValid;
    }

    function checkFormValidity() {
        submitBtn.disabled = !(
            validateName(touched.name) &&
            validateEmail(touched.email) &&
            validatePassword(touched.password)
        );
    }

    // input → user typing → don't show error
    nameInput.addEventListener("input", () => {
        validateName(false);
        checkFormValidity();
    });

    emailInput.addEventListener("input", () => {
        validateEmail(false);
        checkFormValidity();
    });

    passwordInput.addEventListener("input", () => {
        validatePassword(false);
        checkFormValidity();
    });

    // blur → user leaves field → show error
    nameInput.addEventListener("blur", () => {
        touched.name = true;
        validateName(true);
        checkFormValidity();
    });

    emailInput.addEventListener("blur", () => {
        touched.email = true;
        validateEmail(true);
        checkFormValidity();
    });

    passwordInput.addEventListener("blur", () => {
        touched.password = true;
        validatePassword(true);
        checkFormValidity();
    });

    // ✅ Submit success shown on page
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        form.style.display = "none";          // hide form
        successMessage.style.display = "block"; // show success message
    });
