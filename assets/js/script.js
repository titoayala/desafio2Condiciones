function cambiaBorde() {
    console.log("llamado a función Parte 1...");
    const imagen = document.querySelector(".imgp1");
    if (imagen.style.border != "") {
        imagen.style.border = "";
    } else {
        imagen.style.border = "solid 2px red";
    }
}
