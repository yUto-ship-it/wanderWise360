function togglePassword(inputId, icon) {
    const passwordInput = document.getElementById(inputId);
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        // Change icon to eye-slash
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        // Change icon back to eye
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}