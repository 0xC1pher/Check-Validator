```markdown
# Check Validator Library

**Check Validator** es una biblioteca ligera y moderna para validar correos electrónicos, números de teléfono y contraseñas en formularios web. Es fácil de usar, altamente configurable y está diseñada para ser integrada en proyectos modernos de JavaScript.

---

## Características

- **Valida correos electrónicos**: Asegura que el formato del correo electrónico sea válido.
- **Valida números de teléfono**: Verifica que el número de teléfono tenga un formato válido.
- **Valida contraseñas**: Asegura que la contraseña cumpla con requisitos de complejidad (mayúsculas, minúsculas, números y caracteres especiales).
- **Valida múltiples campos a la vez**: Permite validar todos los campos de un formulario en un solo paso.
- **Muestra mensajes de error personalizados en el DOM**: Proporciona retroalimentación visual al usuario en caso de errores.

---

## Instalación

### Entorno moderno (con módulos)
Si estás usando un entorno moderno de JavaScript (como un proyecto con Node.js o un bundler como Webpack o Vite), puedes importar la biblioteca directamente:

```javascript
import Check from './validationlib.js';
```

### Entorno tradicional (sin módulos)
Si estás en un entorno tradicional, puedes incluir el archivo en tu HTML:

```html
<script src="validationlib.js"></script>
```

---

## Configuración

Define los selectores del DOM donde se mostrarán los mensajes de error:

```javascript
const config = {
    emailError: '#emailError',
    phoneError: '#phoneError',
    passwordError: '#passwordError',
    allErrors: '#allErrors'
};
```

---

## Uso

1. Crea una instancia de la clase `Check`:

```javascript
const validator = new Check(config);
```

2. Usa los métodos de validación:

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
```

---

## Comparación con otras bibliotecas

Aunque existen muchas bibliotecas de validación, **Check Validator** se destaca por su simplicidad, enfoque específico y características únicas. Aquí hay algunas debilidades comunes de otras bibliotecas que **Check Validator** aborda:

### 1. **Validator.js**
- **Debilidades**:
  - Limitada a validaciones básicas.
  - Falta de integración con frameworks.
  - Sin manejo de errores visuales.

### 2. **Yup**
- **Debilidades**:
  - Enfoque en esquemas, puede ser verboso.
  - Dependencia de Formik.
  - Curva de aprendizaje.

### 3. **Joi**
- **Debilidades**:
  - Pensado para backend.
  - Tamaño grande.
  - Complejidad.

### 4. **Vuelidate**
- **Debilidades**:
  - Limitado a Vue.js.
  - Falta de soporte para validaciones asíncronas.
  - Documentación limitada.

### 5. **Formik + Yup**
- **Debilidades**:
  - Complejidad.
  - Dependencia de React.
  - Problemas de rendimiento en formularios grandes.

### 6. **Parsley.js**
- **Debilidades**:
  - Dependencia de jQuery.
  - Limitado a validaciones frontend.
  - Documentación desactualizada.

### 7. **Validate.js**
- **Debilidades**:
  - Validaciones básicas.
  - Falta de integración con frameworks.
  - Manejo de errores limitado.

### 8. **Ajv (Another JSON Schema Validator)**
- **Debilidades**:
  - Enfoque en JSON.
  - Complejidad.
  - Falta de soporte para validaciones visuales.

### 9. **React Hook Form**
- **Debilidades**:
  - Limitado a React.
  - Curva de aprendizaje.
  - Validaciones complejas requieren trabajo adicional.

### 10. **EmailValidator**
- **Debilidades**:
  - Enfoque limitado a correos electrónicos.
  - Sin soporte para otros frameworks.
  - Validaciones básicas.

---

## ¿Por qué usar Check Validator?

- **Ligera y fácil de usar**: Enfocada en la simplicidad y el rendimiento.
- **Manejo de errores visuales**: Proporciona una forma integrada de mostrar mensajes de error en el DOM.
- **Flexible**: Permite validaciones personalizadas y complejas.
- **Independiente de frameworks**: Funciona tanto en el frontend como en el backend.
- **Documentación clara**: Fácil de integrar y usar.

---

## Ejemplo de uso en un proyecto

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Example</title>
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

---

## Conclusión

**Check Validator** es una biblioteca ligera y moderna que puedes usar en tus proyectos o compartir con otros desarrolladores. Con las mejoras realizadas, es más eficiente, fácil de usar y está alineada con los estándares actuales de JavaScript. ¡Es perfecta para validar formularios en aplicaciones web! 🚀
```

### Instrucciones para usar el archivo:
1. Copia el contenido anterior.
2. Pégalo en un archivo llamado `README.md`.
3. Colócalo en la raíz de tu proyecto junto con el archivo `validationlib.js`.
4. ¡Listo! Ahora tienes una documentación clara y completa para tu biblioteca, incluyendo una comparación con otras bibliotecas y razones para usar **Check Validator**. 🚀
