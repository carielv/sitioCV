/*  Oculto la info de empleos    */
const todosInfoEmpleos  = document.getElementsByClassName("infoempleo");
for (let i=0;i<todosInfoEmpleos.length;i++){
    todosInfoEmpleos[i].style.display="none";
}

/* Muestro y Oculto info de empleos al pulsar cada boton */
/* Investigar como optimizar el codigo para la version 2 */

document.getElementById('empleo1').onclick = function () {
    if (document.getElementById('infoempleo1').style.display == "none") {
        document.getElementById('infoempleo1').style.display="block";
    } else {
        document.getElementById('infoempleo1').style.display="none";
    }
}

document.getElementById('empleo2').onclick = function () {
    if (document.getElementById('infoempleo2').style.display == "none") {
        document.getElementById('infoempleo2').style.display="block";
    } else {
        document.getElementById('infoempleo2').style.display="none";
    }
}

document.getElementById('empleo3').onclick = function () {
    if (document.getElementById('infoempleo3').style.display == "none") {
        document.getElementById('infoempleo3').style.display="block";
    } else {
        document.getElementById('infoempleo3').style.display="none";
    }
}
