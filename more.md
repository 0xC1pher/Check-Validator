## Entorno tradicional (sin módulos)
### Si estás en un entorno tradicional, puedes incluir el archivo en tu HTML:
-----
html
Copy
<script src="check.js"></script>

-----
## Configuración
### Define los selectores del DOM donde se mostrarán los mensajes de error:

```javascript
const config = {
    emailError: '#emailError',
    phoneError: '#phoneError',
    passwordError: '#passwordError',
    allErrors: '#allErrors'
};
----------
**Uso crea una instancia de la clase Check**

const validator = new Check(config);
**Usa los métodos de validación:**

```javascript
const emailIsValid = validator.validateEmail('test@example.com');
const phoneIsValid = validator.validateNumber('+1234567890');
const passwordIsValid = validator.validatePassword('Password123!');

const allValid = validator.validateAll(emailIsValid, phoneIsValid, passwordIsValid);

if (allValid) {
    console.log('All fields are valid');
} else {
    console.log('Some fields are invalid');
}
--------
## Distribución como biblioteca pública

--------
## Ejemplo de uso 
--------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Lib</title>
</head>
<body>
    <form id="form">
        <input type="email" id="email" placeholder="Email">
        <div id="emailError"></div>

        <input type="tel" id="phone" placeholder="Phone">
        <div id="phoneError"></div>

        <input type="password" id="password" placeholder="Password">
        <div id="passwordError"></div>

        <button type="submit">Submit</button>
        <div id="allErrors"></div>
    </form>

    <script src="check.js"></script>
    <script>
        const config = {
            emailError: '#emailError',
            phoneError: '#phoneError',
            passwordError: '#passwordError',
            allErrors: '#allErrors'
        };

        const validator = new Check(config);

        document.getElementById('form').addEventListener('submit', (e) => {
            e.preventDefault();

            const emailIsValid = validator.validateEmail(document.getElementById('email').value);
            const phoneIsValid = validator.validateNumber(document.getElementById('phone').value);
            const passwordIsValid = validator.validatePassword(document.getElementById('password').value);

            const allValid = validator.validateAll(emailIsValid, phoneIsValid, passwordIsValid);

            if (allValid) {
                alert('Form submitted successfully!');
            }
        });
    </script>
</body>
</html>
```

