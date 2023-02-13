//para poder llamar o traer las etiquetas de html existe
//document.getElementoBy...className, ID etc o
//document.querySelector si es una etiqueta puntual.

const h1 = document.querySelector('h1');
const p = document.querySelector('p'); //trae la primera etiqueta de parrafo que encuentre 
const parrafito = document.querySelector('.parrafito'); //si se quiere llamar segun clase
const pid = document.querySelector('#pid'); //si se quiere llamar segun id
const input = document.querySelector('input');

console.log(h1);
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});