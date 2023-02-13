var nombreError = document.getElementById('mensaje1');
var emailError = document.getElementById('mensaje2');
var claveError = document.getElementById('mensaje3');
var clave2Error = document.getElementById('mensaje4');
var icono1 = document.getElementById('icono-incorrecto');
var icono2 = document.getElementById('icono-correcto');

function ValidarNombre(){
    var nombre = document.getElementById('name');
    var nombreValido = /^[A-Za-z\s]+$/;
    if (nombre.value == "") {
        nombreError.innerHTML = 'Rellena este campo';
        nombre.classList.add('invalido');
        icono1.classList.remove('icono-incorrecto');
        icono1.classList.add('icono-correcto2');
        return false;
    }
    else if (nombreValido.test(nombre.value)) {

        nombre.classList.remove('invalido');
        nombreError.innerHTML="";
        nombre.classList.add('valido');
        icono1.innerHTML = "";
        icono2.classList.remove('icono-correcto');
        icono2.classList.add('icono-correcto2');
        return true;
    }

    else {
        nombreError.innerHTML= 'Nombre inválido';
        nombre.classList.remove('valido');
        nombre.classList.add('invalido');
        icono1.classList.add('icono-incorrecto2');
        return false;
    }
}
function ValidarEmail() {
    var email = document.getElementById ('email');
    var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(email.value == "") {
        emailError.innerHTML = "Rellene este campo";
        email.classList.add('invalido');
        icono1.classList.remove('icono-incorrecto');
        icono1.classList.add('icono-correcto2');
        return false;
    }
    else if (emailValido.test(email.value)) {
        emailError.innerHTML = "";
        email.classList.remove('invalido');
        email.classList.add('valido');
        icono2.classList.remove('icono-correcto');
        icono2.classList.add('icono-correcto2');
        return true;
    }
    else{
        email.classList.remove('valido');
        emailError.innerHTML = "Email inválido";
        email.classList.add('invalido');
        icono2.innerHTML="";
        icono1.classList.remove('icono-incorrecto');
        icono1.classList.add('icono-incorrecto2');
        return false;
    }
}
function ValidarClave() {
    var clave = document.getElementById('clave');
    var claveValida = /^[\s\S]{1,8}$/;
    if (clave.value == "") {
        claveError.innerHTML= "Rellene este campo";
        clave.classList.add('invalido');
        icono1.classList.remove('icono-incorrecto');
        icono1.classList.add('icono-correcto2');
        return false;
    }
    else if (claveValida.test(clave.value)){
        claveError.innerHTML= "";
        clave.classList.remove('invalido');
        clave.classList.add('valido');
        icono2.classList.remove('icono-correcto');
        icono2.classList.add('icono-correcto2');
        return true;
    }
    else{
        claveError.innerHTML="No debe tener más de 8 caracteres";
        clave.classList.remove('valido');
        clave.classList.add('invalido');
        icono1.classList.remove('icono-incorrecto');
        icono1.classList.add('icono-incorrecto2');
        return false;
    }

}
function ValidarClave2(){
    var clave = document.getElementById('clave');
    var clave2 = document.getElementById('clave2');
    if (clave2.value == "") {
        clave2Error.innerHTML = "Rellene este campo";
        clave2.classList.add('invalido');
        icono1.classList.remove('icono-incorrecto');
        icono1.classList.add('icono-correcto2');
        return false;
    }
    else if (clave.value == clave2.value){
        clave2Error.innerHTML = "";
        clave2.classList.remove('invalido');
        clave2.classList.add('valido');
        icono2.classList.remove('icono-correcto');
        icono2.classList.add('icono-correcto2');
        return true;
    }
    else {
        clave2Error.innerHTML = "Las contraseñas no coinciden";
        clave2.classList.remove('valido');
        clave2.classList.add('invalido');
        icono1.classList.remove('icono-incorrecto');
        icono1.classList.add('icono-incorrecto2');
        return false;
    }
}
function ValidarFormulario()
{
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const clave = document.getElementById('clave');
const clave2 = document.getElementById('clave2');
const formulario = document.getElementById('formulario');
if (ValidarNombre() && ValidarEmail() && ValidarClave() && ValidarClave2() === true){
    alert ('Inscripción correcta');
    nombre.classList.add('valido');
    email.classList.add('valido');
    clave.classList.add('valido');
    clave2.classList.add('valido');
    formulario.reset();
    return true;
}
else{
    return false;
}
}
