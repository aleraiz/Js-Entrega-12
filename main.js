


// Selectores con js
// console.log(document.getElementById("zoom"));
// console.log(document.getElementsByClassName("coder"));
// console.log(document.getElementsByTagName("h1"));


// Seleccionar con jquery - se selecciona igual que CSS ( jQuery siempre nos trae un array, sea de un solo objero o varios)
$("h1")
$("#zoom")
$(".coder")


console.log($("h1"));
console.log($("#zoom"));
console.log($(".coder"));

console.log("------------------");


// document.getElementById("btn").addEventListener("click", () => {
// console.log(document.getElementById("dato").value);
// })

// $("#btn").addEventListener("click", () => {
//     console.log(document.getElementById("dato").value);
// })

console.log("------------------");

//Forma correcta de agregar elementos en el html

const elemento = document.createElement("p")
elemento.textContent = "TEXTO DE CREATE ELEMENT"

document.getElementById("print").appendChild(elemento)

// Otra forma de agregar html - innerHTML ( para usar esta forma hay que sanitizar el codigo)

document.getElementById("print2").innerHTML = `
<p> DESDE INNER HTML </p>
`

// agregar html con jquery

$("#print3").append(`
<p> DESDE append con jquery </p> 
`)


// Método ready() se emplea para detectar que el DOM está listo para usarse.
// Cuando una página se está cargando, existe un tiempo de espera hasta que podamos manipular el DOM.
$(document).ready(function() {
    console.log("El DOM está listo");
})


// Para determinar cuando se cargaron todas las imágenes y otros recursos externos a la página usamos el evento load. El evento ready ocurre antes que load.
window.addEventListener(`load`, function() {
    console.log("Todos los elementos de la ventana están cargados");
})

// MÉTODO ON
// Con el método on() podemos asignar eventos a elementos del DOM.
// Es una opción al método addEventListener() de JS Vanilla cuando usamos jQuery

// normal
// document.getElementById("btn2").addEventListener("click", () => {
//     console.log("click en enviar");
// })


//con jQuery
$("btn3").click(()=> {
    console.log("click en enviar con jQuery");
})