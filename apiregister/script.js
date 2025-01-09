// Object to store user data
const formData = {
    firstName: null,
    lastName: null,
    email: null,
};

// Select form and input elements
const form = document.getElementById("mon_form");
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");

const errorName = document.getElementById("error_name");
const errorEmail = document.getElementById("error_email");

// Event listeners to capture user input
firstNameInput.addEventListener("input", (e) => {
    formData.firstName = e.target.value;
    if (formData.firstName) {
        errorName.style.display = "none";
        firstNameInput.classList.remove("error");
    }
});

emailInput.addEventListener("input", (e) => {
    formData.email = e.target.value;
    if (validateEmail(formData.email)) {
        errorEmail.style.display = "none";
        emailInput.classList.remove("error");
    }
});

// Form submit event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Check first name
    if (!formData.firstName) {
        errorName.style.display = "block";
        firstNameInput.classList.add("error");
        valid = false;
    }

    // Check email validity
    if (!validateEmail(formData.email)) {
        errorEmail.style.display = "block";
        emailInput.classList.add("error");
        valid = false;
    }

    if (valid) {
        console.log("Form data submitted:", formData);
        alert("Form submitted successfully!");
        form.reset();
    }
});

// Helper function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
