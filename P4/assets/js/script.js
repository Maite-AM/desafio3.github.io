
//Primer requerimiento: Divs cambian a color negro. 
const divs = document.querySelectorAll('div');

divs.forEach(function(div) {
    div.addEventListener('click', function() {
        div.style.backgroundColor = 'black';
    });
});


//Segundo requrimiento: Presionar teclas
let colorTecla = '';

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        colorTecla = 'pink';
    }
    else if (event.key === 's') {
        colorTecla = 'orange';
    }
    else if (event.key === 'd') {
        colorTecla = 'lightblue';
    }
    
    if (colorTecla) {
        document.getElementById('key').style.backgroundColor = colorTecla;
    }
});

//Tercer requerimiento: Presionar teclas y crear divs

let nuevoColorTecla = '';

document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        nuevoColorTecla = 'purple';
    }
    else if (event.key === 'w') {
        nuevoColorTecla = 'gray';
    }
    else if (event.key === 'e') {
        nuevoColorTecla = 'brown';
    }

    // Crear DIV
    if (nuevoColorTecla) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.backgroundColor = nuevoColorTecla;
        nuevoDiv.style.border = '1px solid black';

    // Añador DIV en html
    document.body.appendChild(nuevoDiv);
    }
});