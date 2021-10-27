



console.log(document.getElementById("zoom"));
console.log(document.getElementsByClassName("coder"));
console.log(document.getElementsByTagName("h1"));


// Seleccionar con jquery - se selecciona igual que CSS
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

//

$("#print3").append(`
<p> DESDE append con jquery </p> 
`)