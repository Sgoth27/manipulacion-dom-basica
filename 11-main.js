//para poder llamar o traer las etiquetas de html existe
//document.getElementoBy...className, ID etc o
//document.querySelector si es una etiqueta puntual.

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
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

//si queremos modificar el texto en alguna etiqueta. Incluso si ponemos como texto alguna etiqueta adicional
//el navegador lo puede interpretar como código html lo cual puede ser un riesgo segun como se use.
h1.innerHTML = "Cambio del titulo <br> desde JS";

//la diferencia es que en este caso no interpreta la etiqueta adicional que se puso en el texto nuevo.
h2.innerText = "Cambio del Segundo titulo <br> desde JS"

//para modificar un atributo de una etiqueta se puede usar getAttribute o setAttribute
//getAtributte nos ayuda a leer los atributos que tenga un elemento
//SetAtributte para modificar un atributo de la etiqueta
//util para darle una clase a una etiqueta

        // console.log(h1.getAttribute('class'));
        // h1.setAttribute('class', 'rojo');
        // console.log(h1.getAttribute('class'));

//otra funcion que solo funciona con las clases de una etiquets es classList
h1.classList.add('rojo');
h1.classList.remove('verde');

//para eventos es bueno usar el metodo Classlist.toogle

//Es metodo ClassList.contains es como un condicional nos dvuelve true o false dependiendo de la clase que estemos buscando

//en los inputs podemos cambiar sus valores directamente
input.value = '456';


//para crear o agregar etiquetas al archivo html se usa document.createElement('')
//sin embargo esa etiqueta se debe asociar a una etiqueta que ya este creada en el documento html se puede usar el metodo append()
const img = document.createElement('img');
img.setAttribute('src', "./Captura de pantalla_20230104_162052.png"); 
console.log(img);

//si queremos borrar el contenido de una etiqueta
pid.innerHTML="";
pid.append(img);