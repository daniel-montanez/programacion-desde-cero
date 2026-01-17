console.log("JS cargado correctamente");

let nombre = "Daniel";
let objetivo = "Aprender a programar";

console.log(nombre);
console.log(objetivo);

alert("Hola Daniel, JavaScript ya funciona");

const boton = document.getElementById("miBoton");
const titulo = document.getElementById("titulo");
const input = document.getElementById("nombreInput");
const saludarBtn = document.getElementById("saludarBtn");
const respuesta = document.getElementById("respuesta");

boton.addEventListener("click", function () {
  alert("¡Ya sé usar JavaScript!");
});

saludarBtn.addEventListener("click", function () {
  const nombre = input.value;

  if (nombre === "") {
    respuesta.textContent = "Escribe tu nombre primero";
  } else {
    respuesta.textContent = "Hola " + nombre + ", vas muy bien 👏";
  }
});