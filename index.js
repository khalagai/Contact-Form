document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactUs");
    const submitBtn = document.getElementById("submitButton");

    const validateForm = () => {
        const fields = [
            { id: "fName", errorId: "fNameError" },
            { id: "lName", errorId: "lNameError" },
            { id: "email", errorId: "emailError", isEmail: true },
            { id: "generalQuery", errorId: "queryError", isQuery: true },
            { id: "textArea", errorId: "messageError" },
            { id: "consent", errorId: "consentError", isCheckbox: true }
        ];

        const success = document.getElementById("successSubmit");
        let isValid = true;

        fields.forEach(field => {
            const element = document.getElementById(field.id);
            let value;

            if (field.isQuery) {
                value = document.querySelector(`input[name="query"]:checked`);
            } else if (field.isCheckbox) {
                value = element.checked;
            } else {
                value = element.value.trim();
            }

            if (!value) {
                showError(field.errorId);
                isValid = false;
            } else if (field.isEmail && !isValidEmail(value)) {
                showError(field.errorId);
                isValid = false;
            } else {
                clearError(field.errorId);
            }
        });

        if (isValid) {
            success.style.display = "block";
            success.focus();
            form.reset();
        }
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const showError = (errorId) => {
        const errorElement = document.getElementById(errorId);
        errorElement.style.display = "block";
        errorElement.setAttribute("aria-hidden", "false");
    };

    const clearError = (errorId) => {
        const errorElement = document.getElementById(errorId);
        errorElement.style.display = "none";
        errorElement.setAttribute("aria-hidden", "true");
    };

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        validateForm();
    });

    submitBtn.addEventListener("keypress", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            validateForm();
        }
    });
});
