var inputMail = document.querySelector(".input__mail");
var inputError = document.querySelector(".input__error");
var inputBtn = document.querySelector(".input__btn");
var textInvalid = document.querySelector(".text__invalid");

inputBtn.addEventListener("click", () =>
{
    var validacion = inputMail.value;
    if(validacion.includes("@") && validacion.includes(".com"))
    {
        inputMail.value = "";
        inputError.style.display = "none";
        textInvalid.style.display = "none";
    }
    else
    {
        inputError.style.display = "block";
        textInvalid.style.display = "block";
    }
});