//QuerySelector

const heading = document.querySelector(".header__texto h2"); // 0 o 1 elementos
heading.textContent = "Nuevo Heading";
console.log(heading);

//QuerySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "Nuevo Texto";
enlaces[0].classList.add("Nueva-clase");
// enlaces[0].classList.remove("navegacion__enlace");

//GetElementById

const heading2 = document.getElementById("heading");
console.log(heading2);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement("A")

//Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";
//Agregar el texto
nuevoEnlace.textContent = "Tienda Virtual";
//Agregar la clase 
nuevoEnlace.classList.add("navegacion__enlace")

//Agregarlo al documento

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//Eventos

console.log(1);
window.addEventListener("load", function() { //Load espera a que el JS,HTML esten listos
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

window.addEventListener("DOMContentLoaded", function() { //DOMContentLoaded solo espera a que se descargue el HTML no espera a css o img
    console.log(4);
})

console.log(5);


// window.onscroll = function(evento) {
//     console.log(evento);
// }


//Seleccionar elementos y asociarles un evento


// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function(evento) {
//     console.log(evento);
//     evento.preventDefault();

//     //Validar formulario

//     console.log("Enviando formulario");
// });




//Eventos de los inputs y texarea
const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}


const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

//Evento de Submit
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    //Validar formulario
    const { nombre, email, mensaje } = datos;
    if (nombre === "" || email === "" || mensaje === "") {
        mostarAlerta("Todos los campos son obligatorios", "error");
        return; // Corta la ejecucion del codigo 
    }
    //Enviar el formulario
    mostarAlerta("Enviando formulario");
});


function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

function mostarAlerta(mensaje, error = null) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("formulario_enviado")
    }
    formulario.appendChild(alerta);

    //Desaparezca despues de 5 segundos 
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}