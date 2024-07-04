document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-us");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateForm();

    });

    form.addEventListener("keypress", (event) => {
        if(event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            validateForm();
        }        
    });

    const validateForm = () => {
        const fName = document.getElementById("fname").value;
        const lName = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const query = document.querySelector(`input[name="query"]:checked`);
        const message = document.getElementById("message").value;
        const consent = document.getElementById("consent").checked;
        const success = document.getElementById("success");

        let isValid = true;

        if(!fName) {
            showError("error1");
            showBorder("fname");
            isValid = false;
        } else {
            clearError("error1");
            clearBoarder("fname");
        }
        if(!lName) {
            showError("error2");
            showBorder("lname");
            isValid = false;
        } else {
            clearError("error2");
            clearBoarder("lname");
        }
        if(!email) {
            showError("error3");
            showBorder("email");
            isValid = false;
        } else {
            clearError("error3");
            clearBoarder("email");
        }
        if(!query) {
            showError("error4");
            isValid = false;
        } else {
            clearError("error4");
        }
        if(!message) {
            showError("error6");
            showBorder("message");
            isValid = false;
        } else {
            clearError("error6");
            clearBoarder("message");
        }
        if(!consent) {
            showError("error7");
            isValid = false;
        } else {
            clearError("error7");
        }

        if(isValid) {
            success.style.display = "block";
            form.reset();
        }
    }

    const showError = (errorId) => {
        document.getElementById(errorId).style.display = "block";
    }

    const clearError = (errorId) => {
        document.getElementById(errorId).style.display = "none";
    }

    const showBorder = (inputId) => {
        document.getElementById(inputId).style.border = "2px solid hsl(0, 66%, 54%)";
    }

    const clearBoarder = (inputId) => {
        document.getElementById(inputId).style.border = "2px solid hsl(187, 24%, 22%)";
    }
   
})
