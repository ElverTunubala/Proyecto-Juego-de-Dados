let suma = 0
let suma2 = 0


function jugar(){
    let aleatorio1= Math.floor(Math.random()*6)+1;

    if(aleatorio1 == 3){
        alert("PERDIO EL TURNO, SIGUE EL OTRO JUGADOR")
        suma = aleatorio1 + suma
    }



    let fuente1="./img/"+ aleatorio1 + ".svg";
    document.querySelector('.imagen1').setAttribute('src',fuente1);
    suma = aleatorio1 + suma

    
    if (aleatorio1==1){
        suma = 0
        console.log("PERDIO :( el puntaje quedo: "+suma)
    
    }
    else{
        suma = suma
        console.log("↕" )
    }




    if (suma<= 21){
        console.log("el puntaje va en: "+suma)
        if(suma==16 || suma==17 || suma==18 || suma==19){
            alert("esta seguro de seguir, puede que pierda en el siguiente tiro")
        }
    
    }
    else{
        alert("ya perdio la suma de puntos es: " +suma)
    }



    
}


// FUNCION JUGADOR 2

function jugar2(){
    let aleatorio2= Math.floor(Math.random()*6)+1;

    if(aleatorio2 == 3){
        alert("PERDIO EL TURNO, SIGUE EL OTRO JUGADOR")
        suma2 = aleatorio2 + suma2
    }
    let fuente2="./img/"+ aleatorio2 + ".svg";
    document.querySelector('.imagen2').setAttribute('src',fuente2);
    suma2 = aleatorio2 + suma2

    
    if (aleatorio2==1){
        suma2 = 0
        console.log("PERDIO :( el puntaje quedo: "+suma2)
    
    }
    else{
        suma2 = suma2
        console.log("↕" )
    }




    if (suma2<= 21){
        console.log("el puntaje va en: "+suma2)
        if(suma2==16 || suma2==17 || suma2==18 || suma2==19){
            alert("esta seguro de seguir, puede que pierda en el siguiente tiro")
        }
    
    }
    else{
        alert("ya perdio la suma de puntos es: " +suma2)
    }

}



function calcular() {

    if (suma> suma2){
        console.log("el ganador es el JUGADOR 1: ")
    }
    else if(suma == suma2){
        console.log("hay un empate ")
    }
    else{
        console.log("el ganador es el JUGADOR 2: ")
    }

}



 
