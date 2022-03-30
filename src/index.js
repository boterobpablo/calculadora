
import './styles.css';

const cajas = document.querySelectorAll('.caja');
const input = document.querySelector('input');

let numero = '',
    numeros = [],
    operador = '',
    operadores = [],
    texto = '0',
    // borrarNumero = true,
    borrarNumeroArray = false,
    pulsarIgual = false,
    pulsarOperador = false,
    // pulsarRaiz = false,
    ponerPunto = true,
    resultadoEnPantalla = false,
    resultado = 0,
    k = -1;

input.placeholder = texto;


const eventoClickCajas = (i) => {
    cajas[i].addEventListener('click', () => {

        console.log('click');



        // cuando se pulsa un numero
        if (cajas[i].innerText == 0 || cajas[i].innerText == 1 || cajas[i].innerText == 2
            || cajas[i].innerText == 3 || cajas[i].innerText == 4 || cajas[i].innerText == 5
            || cajas[i].innerText == 6 || cajas[i].innerText == 7 || cajas[i].innerText == 8
            || cajas[i].innerText == 9
        ) {
            console.log('click en numeros');

            /* evaluar si lo que aparece es un 0 y lo limpia para ingresar
            los nuevos numeros */
            if (input.placeholder == '0') {
                texto = '';
                input.placeholder = texto;
            }

            /* si el resultado se esta mostrando en pantalla y se pulsa un 
            numero, se reinicia todo */
            if (resultadoEnPantalla) {
                texto = ``;
                input.placeholder = texto;
                numeros = [];
                operadores = [];
                resultadoEnPantalla = false;
            }

            // if (input.placeholder.at(-1) == 0 || input.placeholder.at(-1) == 1 || input.placeholder.at(-1) == 2
            //     || input.placeholder.at(-1) == 3 || input.placeholder.at(-1) == 4 || input.placeholder.at(-1) == 5
            //     || input.placeholder.at(-1) == 6 || input.placeholder.at(-1) == 7 || input.placeholder.at(-1) == 8
            //     || input.placeholder.at(-1) == 9
            // ) {
            // while (input.placeholder.at(k) == 0 || input.placeholder.at(k) == 1 || input.placeholder.at(k) == 2
            // || input.placeholder.at(k) == 3 || input.placeholder.at(k) == 4 || input.placeholder.at(k) == 5
            // || input.placeholder.at(k) == 6 || input.placeholder.at(k) == 7 || input.placeholder.at(k) == 8
            //     || input.placeholder.at(k) == 9
            // ){
            //     k = -1;
            //     let num = input.placeholder.at(k);
            //     console.log(num);
            //     numero = Number(`${num}${cajas[i].innerText}`);
            //     k--
            // }
            // }

            numero = Number(`${numero}${cajas[i].innerText}`);
            console.log(numero);

            texto = `${texto}${cajas[i].innerText}`;
            input.placeholder = texto;

            // borrarNumero = true;
            pulsarOperador = true;
            pulsarIgual = true;
            // pulsarRaiz = true;

        }


        // si se pulsa la tecla .
        if (cajas[i].innerText == '.') {
            if (ponerPunto) {
                if (resultadoEnPantalla) {
                    texto = ``;
                    input.placeholder = texto;
                    numeros = [];
                    operadores = [];
                    resultadoEnPantalla = false;
                }

                numero = `${numero}.`
                texto = `${texto}.`
                input.placeholder = texto;

            }
            ponerPunto = false;
        }


        // cuando se pulsa un operador
        if (cajas[i].innerText == '+' || cajas[i].innerText == '-'
            || cajas[i].innerText == '*' || cajas[i].innerText == '/'
            || cajas[i].innerText == '^'
        ) {
            if (pulsarOperador) {
                console.log('click en operadores');

                if (!numero == '') {
                    numeros.push(numero);
                    numero = '';
                }

                texto = `${texto}${cajas[i].innerText}`;
                input.placeholder = texto;

                operador = cajas[i].innerText;
                operadores.push(operador);

                // borrarNumero = false;
                pulsarOperador = false;
                pulsarIgual = true;
                // pulsarRaiz = false;
                resultadoEnPantalla = false;
                ponerPunto = true;
                // borrarNumeroArray = true;

                console.log(numeros);
                console.log(operadores);

            }
        }


        // cuando se pulsa igual
        if (cajas[i].innerText == '=') {
            if (pulsarIgual) {

                console.log('click en igual');

                if (!numero == '') {
                    numeros.push(numero);
                    console.log(numeros);
                    numero = '';
                }

                // si viene el operador ^ en el arreglo de operadores, dar prioridad
                while (operadores.includes('^')) {
                    let indiceOperador = operadores.indexOf('^');
                    let res = Math.pow(numeros[indiceOperador], numeros[indiceOperador + 1]);
                    // if (indiceOperador == 0) {
                    // } else {
                    //     resultado = resultado + Math.pow(numeros[indiceOperador], numeros[indiceOperador + 1]);
                    // }
                    numeros.splice(indiceOperador, 1);
                    numeros.splice(indiceOperador, 1);
                    numeros.splice(indiceOperador, 0, res);
                    operadores.splice(indiceOperador, 1);
                    console.log('^', numeros);
                    console.log('^', operadores);
                    console.log('^', resultado);
                }

                // si viene el operador * en el arreglo de operadores, dar prioridad
                while (operadores.includes('*')) {
                    let indiceOperador = operadores.indexOf('*');
                    let res = numeros[indiceOperador] * numeros[indiceOperador + 1];
                    // if (indiceOperador == 0) {
                    //     resultado = numeros[indiceOperador] * numeros[indiceOperador + 1];
                    // } else {
                    //     resultado = resultado + (numeros[indiceOperador] * numeros[indiceOperador + 1]);
                    // }
                    numeros.splice(indiceOperador, 1);
                    numeros.splice(indiceOperador, 1);
                    numeros.splice(indiceOperador, 0, res);
                    operadores.splice(indiceOperador, 1);
                    console.log('*', numeros);
                    console.log('*', operadores);
                    console.log('*', resultado);
                }

                // si viene el operador / en el arreglo de operadores, dar prioridad
                while (operadores.includes('/')) {
                    let indiceOperador = operadores.indexOf('/');
                    let res = numeros[indiceOperador] / numeros[indiceOperador + 1];
                    // if (indiceOperador == 0) {
                    //     resultado = numeros[indiceOperador] / numeros[indiceOperador + 1];
                    // } else {
                    //     resultado = resultado + (numeros[indiceOperador] / numeros[indiceOperador + 1]);
                    // }
                    numeros.splice(indiceOperador, 1);
                    numeros.splice(indiceOperador, 1);
                    numeros.splice(indiceOperador, 0, res);
                    operadores.splice(indiceOperador, 1);
                    console.log('/', numeros);
                    console.log('/', operadores);
                    console.log('/', resultado);
                }

                resultado = resultado + numeros[0];
                console.log(resultado);

                for (let j = 1; j < numeros.length; j++) {

                    if (operadores[j - 1] == '+') {
                        resultado = resultado + numeros[j];
                        console.log(resultado);
                    }

                    if (operadores[j - 1] == '-') {
                        resultado = resultado - numeros[j];
                        console.log(resultado);
                    }

                    // if (operadores[j - 1] == '*') {
                    //     resultado = resultado * numeros[j];
                    //     console.log(resultado);
                    // }

                    // if (operadores[j - 1] == '/') {
                    //     resultado = resultado / numeros[j];
                    //     console.log(resultado);
                    // }

                    // if (operadores[j - 1] == '^') {
                    //     resultado = Math.pow(resultado, numeros[j]);
                    //     console.log(resultado);
                    // }
                }

                numeros = [];
                numeros.push(resultado);

                /* manejar decimales, cuando paso de string a number o
                viceversa, lo hago para usar los metodos de uno o de otro */
                resultado = String(resultado);
                if (resultado.includes('.')) {
                    resultado = Number(resultado);
                    resultado = resultado.toFixed(5);
                    resultado = String(resultado);
                    while (resultado.at(-1) == '0') {
                        resultado = resultado.slice(0, -1);
                    }
                }

                texto = `${resultado}`;
                input.placeholder = texto;

                resultado = 0;
                operadores = [];
                resultadoEnPantalla = true;
                ponerPunto = true;
                borrarNumeroArray = false;
                console.log('numeros', numeros);
                console.log('operadores', operadores);
            }
            pulsarIgual = false;
            // pulsarRaiz = true;
        }


        // cuando pulso raiz
        if (cajas[i].innerText == 'Raiz') {
            if (numeros.length <= 1) {

                if (!numero == '') {
                    numeros.push(numero);
                    numero = '';
                }

                resultado = Math.sqrt(numeros[0]);
                console.log(resultado);

                numeros = [];
                numeros.push(resultado);

                /* manejar decimales, cuando paso de string a number o
                viceversa, lo hago para usar los metodos de uno o de otro */
                resultado = String(resultado);
                if (resultado.includes('.')) {
                    resultado = Number(resultado);
                    resultado = resultado.toFixed(5);
                    resultado = String(resultado);
                    while (resultado.at(-1) == '0') {
                        resultado = resultado.slice(0, -1);
                    }
                }

                texto = `${resultado}`;
                input.placeholder = texto;

                resultado = 0;
                operadores = [];
                resultadoEnPantalla = true;
                pulsarOperador = true;
                ponerPunto = true;
                borrarNumeroArray = false;
                // pulsarRaiz = false;
                console.log(numeros);
                console.log(operadores);
            }
        }


        // cuando se pulsa borrar
        if (cajas[i].innerText == 'Borrar') {

            console.log('click borrar');
            // si el ultimo registro es un numero y se va a borrar
            if (texto.at(-1) == 0 || texto.at(-1) == 1 || texto.at(-1) == 2
                || texto.at(-1) == 3 || texto.at(-1) == 4 || texto.at(-1) == 5
                || texto.at(-1) == 6 || texto.at(-1) == 7 || texto.at(-1) == 8
                || texto.at(-1) == 9
            ) {
                numero = String(numero);
                numero = numero.slice(0, -1);
                numero = Number(numero);
                console.log(numero);

                texto = texto.slice(0, -1);
                input.placeholder = texto;

                let num = numeros.at(-1);
                num = String(num);

                // borrar numero del array
                if (borrarNumeroArray) {

                    console.log(String(numeros.at(-1)).length);
                    console.log('ultimo numero', num);

                    if (num.length == 1) numeros.pop();

                    if (num.length > 1) {
                        numeros.pop();
                        num = num.slice(0, -1);
                        num = Number(num);
                        console.log('borrar array', num);
                        numeros.push(num);
                    }

                    if (texto.at(-1) == '+' || texto.at(-1) == '-' || texto.at(-1) == '*'
                        || texto.at(-1) == '/' || texto.at(-1) == '^'
                    ) {
                        borrarNumeroArray = false;
                    }
                }

                console.log(numeros);

                // si es un operador y se va a borrar
            } else {
                operadores.pop();
                console.log(operadores);
                texto = texto.slice(0, -1);
                input.placeholder = texto;
                pulsarOperador = true;
                borrarNumeroArray = true;
            }

            if (input.placeholder == 0) { }

            if (texto.at(-1) == '.') {
                texto = texto.slice(0, -1);
                input.placeholder = texto;
                ponerPunto = true;
            }
        }


        // cuando se pulsa AC, resetea todo
        if (cajas[i].innerText == 'AC') {
            resetear();
        }


    })
};


// poner el evento click a cada una de las cajas
for (let i = 0; i < cajas.length; i++) {
    eventoClickCajas(i);
}


// metodo para poner valores por defecto
const resetear = () => {
    numero = '';
    numeros = [];
    operador = '';
    operadores = [];
    texto = '0';
    input.placeholder = texto;
    pulsarIgual = false;
    pulsarOperador = false;
    ponerPunto = true;
    // pulsarRaiz = false;
    resultadoEnPantalla = false;
    resultado = 0;
    borrarNumeroArray = false;
} 