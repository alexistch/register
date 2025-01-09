const formData = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
};

// Références aux éléments du formulaire
const form = document.getElementById("mon_form");
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");

const errorName = document.getElementById("error_name");
const errorLastName = document.getElementById("error_last_name");
const errorEmail = document.getElementById("error_email");
const errorPassword = document.getElementById("error_password");
const errorConfirmPassword = document.getElementById("error_confirm_password");
const successMessage = document.getElementById("success_message");

// Mise à jour des données à chaque saisie
firstNameInput.addEventListener("input", (e) => {
    formData.firstName = e.target.value;
    errorName.style.display = "none";
    firstNameInput.classList.remove("error");
});

lastNameInput.addEventListener("input", (e) => {
    formData.lastName = e.target.value;
    errorLastName.style.display = "none";
    lastNameInput.classList.remove("error");
});

emailInput.addEventListener("input", (e) => {
    formData.email = e.target.value;
    errorEmail.style.display = "none";
    emailInput.classList.remove("error");
});

passwordInput.addEventListener("input", (e) => {
    formData.password = e.target.value;
    errorPassword.style.display = "none";
    passwordInput.classList.remove("error");
});

confirmPasswordInput.addEventListener("input", (e) => {
    formData.confirmPassword = e.target.value;
    errorConfirmPassword.style.display = "none";
    confirmPasswordInput.classList.remove("error");
});

// Validation lors de la soumission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    if (!formData.firstName) {
        errorName.style.display = "block";
        firstNameInput.classList.add("error");
        isValid = false;
    }

    if (!formData.lastName) {
        errorLastName.style.display = "block";
        lastNameInput.classList.add("error");
        isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        errorEmail.style.display = "block";
        emailInput.classList.add("error");
        isValid = false;
    }

    if (!formData.password) {
        errorPassword.style.display = "block";
        passwordInput.classList.add("error");
        isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
        errorConfirmPassword.style.display = "block";
        confirmPasswordInput.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
            form.reset();
        }, 3000);
    }
});
