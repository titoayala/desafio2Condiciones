// SCRIPT PARA LAS TRES PARTES. CADA FUNCION CORRESPONDE A UNA PARTE DEL DESAFIO
// SE DECLARAN LAS VARIABLES DENTRO DE CADA FUNCION PARA QUE NO SEAN GLOBALES!!!


// PARTE 1
function cambiaBorde() {
    console.log("llamado a función Parte 1...");
    const imagen = document.querySelector(".imgp1");
    if (imagen.style.border != "") {
        imagen.style.border = "";
    } else {
        imagen.style.border = "solid 2px red";
    }
}


// PARTE 2
function parte2Suma() {
    console.log("llamado a función Parte 2...");
    let respuesta = document.querySelector(".respuesta");
    let qs1 = parseInt(document.getElementById('qstick1').value) || 0; //SI EL USUARIO NO SELECCIONA NINGUN STICKER, EL VALOR DE LA VARIABLE SERA 0 POR DEFECTO.
    let qs2 = parseInt(document.getElementById('qstick2').value) || 0;
    let qs3 = parseInt(document.getElementById('qstick3').value) || 0;
    let suma = qs1 + qs2 + qs3;

    if (qs1 < 0 || qs2 < 0 || qs3 < 0) { //CONDICION PARA NO PERMITIR VALORES NEGATIVOS!!!
        respuesta.innerHTML = 'No se permiten valores negativos';
    }
    else if (suma <= 10) {
        respuesta.innerHTML = 'Llevas '+suma+' Stickers';
    }
    else {
        respuesta.innerHTML = 'Llevas demasiados Stickers';
    }
}

//PARTE 3
function parte3verifica() {

    let respuesta = document.querySelector(".respuesta");
    let digito1 = document.getElementById('selector1').value; //NO SE NECESITA CAMBIAR TIPO DE DATOS A NUMERICO. CON STRING FUNCIONA!
    let digito2 = document.getElementById('selector2').value;
    let digito3 = document.getElementById('selector3').value;
    let clave = digito1 + digito2 + digito3; // SE CONCATENAN LOS STRING, NO SE SUMAN PORQUE NO SON TIPO INT.!!!

    if (clave == 911) {
        respuesta.innerHTML = 'Password 1 correcto';
    }
    else if (clave == 714) {
        respuesta.innerHTML = 'Password 2 correcto';
    } else {
        respuesta.innerHTML = 'Password incorrecto';
    }
}