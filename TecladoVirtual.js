var cadena = "";
var cadenaguardada = [];
var teclas;
var desplazamientos;
var control = false;
var aux = 0;
var j = 0;

window.onload = function () {
    teclas = document.getElementsByName("tecla");
    for (var i = 0; i < teclas.length; i++) {
        teclas[i].onclick = pulsartecla;
    }

    desplazamientos = document.getElementsByName("desplazamiento");
    for (var i = 0; i < desplazamientos.length; i++) {
        desplazamientos[i].onclick = pulsarDesplazamiento;
    }

    document.getElementById("limpiar").onclick = pulsarLimpiar;
    document.getElementById("mayus").onclick = pulsarBloqMayus;
    document.getElementById("shift").onclick = pulsarShift;
    document.getElementById("retro").onclick = pulsarRetroceso;
    document.getElementById("guardar").onclick = pulsarGuardar;
    document.getElementById("mostrar").onclick = pulsarMostrar;
    document.getElementById("teclea").onclick = pulsarTeclear;

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

function pulsarDesplazamiento() {
    switch (this.id) {
        case "primero":
            aux = 0;
            break
        case "retroceder":
            if (aux > 0) {
                aux--;
            }
            break
        case "avanzar":
            if (aux < cadenaguardada.length - 1) {
                aux++;
            }
            break
        case "ultimo":
            aux = cadenaguardada.length - 1;
        }

        mostrarArray();
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
    if (cadena !== ""){
        cadenaguardada.push(cadena);
        cadena = "";
        mostrar();
        alert("la cadena: " + '"' + cadenaguardada[j] + '"' + " se ha guardado");
        j++;
    } else {
        alert("La cadena esta vacia, por favor escribe algo para poder guardarlo");
    }
}

function pulsarMostrar(){
    if (cadenaguardada.length){
        for (i = 0; i < document.getElementsByClassName("control").length; i++) {
            document.getElementsByClassName("control")[i].disabled = false;
            document.getElementsByClassName("control")[i].style.backgroundColor = " rgba(0, 255, 255, 0.5)";
        }

        for (i = 0; i < document.getElementsByClassName("tecla").length; i++) {
            document.getElementsByClassName("tecla")[i].disabled = true;
            document.getElementsByClassName("tecla")[i].style.backgroundColor = " rgba(100, 100, 100)";
        }

        for (i = 0; i < document.getElementsByClassName("boton").length; i++) {
            document.getElementsByClassName("boton")[i].disabled = true;
            document.getElementsByClassName("boton")[i].style.backgroundColor = " rgba(100, 100, 100)";
        }

        mostrarArray();
    }else{
        alert("No puedes mostrar las cadenas guardadas si no has tecleado nada");
    }
}

function pulsarTeclear(){
    for (i = 0; i < document.getElementsByClassName("control").length; i++) {
        document.getElementsByClassName("control")[i].disabled = true;
        document.getElementsByClassName("control")[i].style.backgroundColor = " rgba(100, 100, 100)";
    }

    for (i = 0; i < document.getElementsByClassName("tecla").length; i++) {
        document.getElementsByClassName("tecla")[i].disabled = false;
        document.getElementsByClassName("tecla")[i].style.backgroundColor = " rgb(32, 32, 32)";
    }

    for (i = 0; i < document.getElementsByClassName("boton").length; i++) {
        document.getElementsByClassName("boton")[i].disabled = false;
        document.getElementsByClassName("boton")[i].style.backgroundColor = " rgba(255, 136, 0, 0.466)";
    }

    cadena = "";
    mostrar();

}

function mostrar() {
    document.getElementById("pantalla").value = cadena;
}

function mostrarArray() {
    document.getElementById("pantalla").value = cadenaguardada[aux];
}