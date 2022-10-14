var cadena = "";
var cadenaguardada = "";
var teclas;
var control = false;

window.onload = function () {
    teclas = document.getElementsByName("tecla");
    for (var i = 0; i < teclas.length; i++) {
        teclas[i].onclick = pulsartecla;
    }

    document.getElementById("limpiar").onclick = pulsarLimpiar;
    document.getElementById("mayus").onclick = pulsarBloqMayus;
    document.getElementById("shift").onclick = pulsarShift;
    document.getElementById("retro").onclick = pulsarRetroceso;
    document.getElementById("guardar").onclick = pulsarGuardar;
    document.getElementById("mostrar").onclick = pulsarMostrar;

}

function pulsartecla() {
    cadena += document.getElementById(this.id).value;
    mostrar();
    if (control == true){
        control = false;
        for (var i = 0; i < teclas.length; i++) {
            teclas[i].value = teclas[i].value.toLowerCase();
        }
    }
}

function pulsarLimpiar() {
    cadena = "";
    mostrar();
}

function pulsarBloqMayus() {
    for (var i = 0; i < teclas.length; i++) {
        if (teclas[i].value == teclas[i].value.toUpperCase()) {
            teclas[i].value = teclas[i].value.toLowerCase();
        } else {
            teclas[i].value = teclas[i].value.toUpperCase();
        }
    }
}

function pulsarShift(){
    control = true;
    for (var i = 0; i < teclas.length; i++) {
        if (teclas[i].value == teclas[i].value.toLowerCase() && control == true) {
            teclas[i].value = teclas[i].value.toUpperCase();
        }
    }
    mostrar();
}

function pulsarRetroceso(){
    cadena = cadena.slice(0, -1);
    mostrar();
}

function pulsarGuardar(){
    cadenaguardada = cadena;
    cadena = "";
    mostrar();
    alert("Texto guardado con exito");
}

function pulsarMostrar(){
    alert(cadenaguardada);
}

function mostrar() {
    document.getElementById("pantalla").value = cadena;
}