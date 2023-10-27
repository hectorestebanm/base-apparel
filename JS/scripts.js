var inputMail = document.querySelector(".input__mail");
var inputError = document.querySelector(".input__error");
var inputBtn = document.querySelector(".input__btn");
var textInvalid = document.querySelector(".text__invalid");

// Evento de lectura de botón para enviar correo
inputBtn.addEventListener("click", () =>
{
    // Lectura del correo ingresado
    var validacion = inputMail.value;
    // Chequeo de validez de correo electrónico
    // En caso que sea correo válido, limpio mensajes de error y correo ya enviado
    if(validacion.includes("@") && validacion.includes(".com"))
    {
        inputMail.value = "";
        inputError.style.display = "none";
        textInvalid.style.display = "none";
    }
    // En caso que sea correo no válido, muestro mensaje e icono de error en la página
    else
    {
        inputError.style.display = "block";
        textInvalid.style.display = "block";
    }
});