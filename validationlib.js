/**
 * check-validator.js is a public Library.
 * @author: Alfieri morillo - (0x4171341);
 * @version: 2.0.0;
 * Usage: Include script at the bottom of webpage just before closing body tag;
 */

class Check {
    constructor(config = {}) {
        this.config = config;
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const isValid = emailRegex.test(email.trim());

        if (!isValid && this.config.emailError) {
            document.querySelector(this.config.emailError).innerHTML = `<span>Invalid email address</span>`;
        }

        return isValid;
    }

    validateNumber(phoneNumber) {
        const phoneRegex = /^(\+\d{1,3})?\d{10}$/;
        const isValid = phoneRegex.test(phoneNumber.trim());

        if (!isValid && this.config.phoneError) {
            document.querySelector(this.config.phoneError).innerHTML = `<span>Invalid phone number</span>`;
        }

        return isValid;
    }

    validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_\-+={}[\]|:;"'<>?,./]).{8,}$/;
        const isValid = passwordRegex.test(password);

        if (!isValid && this.config.passwordError) {
            document.querySelector(this.config.passwordError).innerHTML = `<span>Weak password, password must contain an uppercase, lowercase, number, and special character with a minimum of 8 characters</span>`;
        }

        return isValid;
    }

    validateAll(...validations) {
        const isValid = validations.every(validation => validation === true);

        if (!isValid && this.config.allErrors) {
            document.querySelector(this.config.allErrors).innerHTML = `<span>Invalid form field details, crosscheck details provided</span>`;
        }

        return isValid;
    }
}

// Exportación del módulo
export default Check;
