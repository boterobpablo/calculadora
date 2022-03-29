
import './styles.css';

const cajas = document.querySelectorAll('.caja');
const input = document.querySelector('input');

let numero = '',
    numeros = [],
    operador = '',
    operadores = [],
    texto = '0',
    pulsarIgual = false,
    pulsarOperador = false,
    ponerPunto = true,
    resultadoEnPantalla = false,
    resultado = 0;

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

            numero = Number(`${numero}${cajas[i].innerText}`);
            console.log(numero);

            texto = `${texto}${cajas[i].innerText}`;
            input.placeholder = texto;

            pulsarOperador = true;
            pulsarIgual = true;

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
            || cajas[i].innerText == '^' || cajas[i].innerText == 'Raiz'
        ) {
            if (pulsarOperador) {
                console.log('click en operadores');

                if (!numero == '') {
                    numeros.push(numero);
                    numero = '';
                }

                texto = `${texto} ${cajas[i].innerText} `;
                input.placeholder = texto;

                operador = cajas[i].innerText;
                operadores.push(operador);

                pulsarOperador = false;
                pulsarIgual = false;
                resultadoEnPantalla = false;
                ponerPunto = true;

                console.log(numeros);
                console.log(operadores);

            }
        }


        // cuando se pulsa igual
        if (cajas[i].innerText == '=') {
            if (pulsarIgual) {

                console.log('click en igual');

                numeros.push(numero);
                console.log(numeros);
                numero = '';

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

                    if (operadores[j - 1] == '*') {
                        resultado = resultado * numeros[j];
                        console.log(resultado);
                    }

                    if (operadores[j - 1] == '/') {
                        resultado = resultado / numeros[j];
                        console.log(resultado);
                    }
                }

                texto = `${resultado}`;
                input.placeholder = texto;
                numeros = [];
                numeros.push(resultado);
                resultado = 0;
                operadores = [];
                resultadoEnPantalla = true;
                ponerPunto = true;
                console.log(numeros);
                console.log(operadores);
            }
            pulsarIgual = false;
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
    numero = '',
        numeros = [],
        operador = '',
        operadores = [],
        texto = '0',
        pulsarIgual = false,
        pulsarOperador = false,
        resultadoEnPantalla = false,
        resultado = 0;
    ponerPunto = true;
    input.placeholder = texto;
} 