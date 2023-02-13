const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const button = document.getElementById('btnCalcular');
const result = document.getElementById('result');

console.log(input1);
console.log(input2);
console.log(button);

//el metodo addEventlistener se le pasan dos argumentos. el 1ro es el tipo de evento que queremos ejecutar y el segundo es la funcion que debe ejecutar 
//si observan en el metodo la funcion no se llama con los parentecis.

        // button.addEventListener('click', btnOnClick);

        // function btnOnClick(){
        //     let rta = parseInt(input1.value) + parseInt(input2.value);
        //     result.innerText = `El resultado de sumar los valores es de: ${rta}`;
            
        // }

function btnOnClick(){
    let rta = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = `El resultado de sumar los valores es de: ${rta}`;
    
}

//Se hace el ejercicio ahora con las etiquetas dentro de un formulario
//El metodo addEventListener es quien le pone los parentesis a la funcion cuando se le hace el llamado
//El metodo le envia como argumento a la funcion un evento
//Es decir se le pueden poner un parametro a la funcion que sea el evento
form.addEventListener('submit', btnOnClick);

        function btnOnClick(event){
            console.log(event);
            event.preventDefault();//nos permite evitar el submit y que se recargue la pagina
            let rta = parseInt(input1.value) + parseInt(input2.value);
            result.innerText = `El resultado de sumar los valores es de: ${rta}`;
            
        }

//otra forma de solucinar el problema del submit usando el evento en el boton es cambiar en el 
//documento html la propiedad type del boton para que no sea de type="submit" por defecto sino
//type="button"
button.addEventListener('click', btnOnClick);

        function btnOnClick(){
            let rta = parseInt(input1.value) + parseInt(input2.value);
            result.innerText = `El resultado de sumar los valores es de: ${rta}`;
            
        }


//practicando otros eventos
const listItem1 = document.querySelector('.item1');
const aitem1 = document.querySelector('.aitem1');
const listItem2 = document.querySelector('#item2');
const listItem3 = document.querySelector('#item3');

listItem1.addEventListener('mouseover', listItemEvent);

function listItemEvent(){
    listItem1.classList.add('active');
    aitem1.classList.add('active');
}

listItem1.addEventListener('mouseout', listItemEvent2);

function listItemEvent2(){
    listItem1.classList.remove('active');
    aitem1.classList.remove('active');
}