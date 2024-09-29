//Pregunta 3

/* Código proporcionado en enunciado

function pintar(){
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

*/

//Parte 3.2
const ele = document.getElementById("ele1");

ele.addEventListener("click", function(event) {
    pintar(event.target);  
});


//Función modificada
function pintar(elemento) {
    elemento.style.backgroundColor = 'yellow';  
}
