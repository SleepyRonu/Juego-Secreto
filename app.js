let numeroSecreto = 0;
let intentos = 0;
let listanNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste El numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el ususario no acerto
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero es menor');
    } else { 
        asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja() {
   document.getElementById('valorUsuario').value ='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if (listanNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    } else {

    }
    
    //si el numero generado esta incluido en la lista
    if (listanNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listanNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','juego del numero secreto!!');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego() {
    //limpiar caja (todo)
    LimpiarCaja()
    //indicar mesaje Intervalo de numeros
    //generar numero aleatorio
    //inicializar num intentos
    condicionesIniciales();
    //Deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();