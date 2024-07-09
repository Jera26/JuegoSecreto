let numeroSecreto= 0;
let numeroIntento= 0 ; 
let listaNumSorteados= [];
let numMax= 20;
console.log(numeroSecreto)


function asignarTextoElemento(elemento , texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML= texto;
    return
}



function verificarIntento(){
    let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);
     console.log(numeroIntento);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento  ('p',`acertaste en  ${numeroIntento} ${(numeroIntento == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');// esta funcion remueve el atributo o habilita el boton reiniciar 
    } else if (numeroUsuario > numeroSecreto){
        asignarTextoElemento ('p', 'el numero es menor ')

    } else{
        asignarTextoElemento('p ', 'el numero es mayor')
    }

    numeroIntento ++;
     limpiar();
        return;
    
}

function limpiar (){
    //let caja = 
    document.querySelector('#valorUsuario').value = '';
    //aja.value= '';
    
}


function condicionesIniciales (){
    asignarTextoElemento('h1','juego del numero secreto! ');
    asignarTextoElemento('p',`Acierta el número del 1 al ${numMax} `);
    numeroSecreto= numSecretoJuego();
    numeroIntento = 1; 
}

function numSecretoJuego () {
     let numGenerado = Math.floor(Math.random() * numMax) + 1;
    // si el numero generado esta en la lista 
    console.log(listaNumSorteados);
    console.log(numGenerado);
 // si ya sorteamos todos los numeros 
    if (listaNumSorteados.length === numMax){ // resolviendo la recursividad
        asignarTextoElemento ('p','se sortearon todos los numeros posibles ')
    }else{
            if ( listaNumSorteados.includes(numGenerado)){
        
        return numSecretoJuego();// recursividad 
        
        }
        else{
            listaNumSorteados.push(numGenerado);//  agrega el elemento a la lista 
        return numGenerado;
    }

   

    }
     
     
}

function reiniciarJuego (){
    limpiar();// limpiar caja
    //intervalos de números
    condicionesIniciales();
   //generar un numero aleatorio 
   // numSecretoJuego();
     //invocar 
    //deshabilitar boton nuevo juego 
    document.getElementById('reiniciar').setAttribute('disabled','true');
    //inicializar el numero de  intentos 
 

}

condicionesIniciales();

