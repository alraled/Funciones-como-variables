var saludo = function (texto) {
    
    alert("Hola " + texto.target.outerText);
}

function saludando (texto) {

    alert("Hola " + texto.target.outerText);
}


document.getElementById("btn1").onclick = function (e) { // Esto es la estructura de una FUNCIÓN ANÓNIMA.//
    alert("Hola " + e.target.outerText);
}
document.getElementById("btn2").onclick = saludando; // Esto es la estructura de cómo hacer para que al clickar en el botón 2, éste arroje un "Hola Botón 2".//


