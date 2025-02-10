let numeroSec = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDadoPorUsuario = parseInt(document.getElementById('valorPorUsuario').value);
    intentos++; 
    if (numeroSec === numeroDadoPorUsuario){
        asignarTextoElemento('p',`Acertastes!!!! en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos' } `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else if ( numeroSec > numeroDadoPorUsuario){
        asignarTextoElemento('p','El numero secreto es mayor que el ingresado');
    } else {
        asignarTextoElemento('p','El numero secreto es menor que el ingresado');
    }
    limpiarCaja();
    return;
}

function numeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length ==  numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else{
            //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return numeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    

}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorPorUsuario') //Para usar el query selector por id, necesitamos incluir el numeral# al principio
    valorCaja.value = '';
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSec = numeroSecreto();
    intentos = 0;
    return;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
    


condicionesIniciales();

