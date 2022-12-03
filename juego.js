let lista_num = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let contador_movimento = 0;
let mov_1 = null;
let mov_2 = null;
let resul_mov_1 = 0;
let resul_mov_2 = 0;
let contador_acierto = 0;
let mostrar_aciertos = document.getElementById("aciertos");
let movimiento = 0;
let mostrar_movimientos = document.getElementById("movimientos");
let mostrar_tiempo = document.getElementById("tiempo");
let tiempo = false;
let temp = 60;
let temp_interval = null;

// lista_num.sort(function {return Math.random()-0.5}); buscar porque no funciona

lista_num.sort(()=>{return Math.random()-0.5}); //la funcion flecha sera una funcion escrita. 
// funtion "nombre de funcion"(){return Math.random()-0.5;}
console.log(lista_num);

// - refleva los numerocuando llegue el temp a 0seg.
function lock_numeros(){
   for(let i=0;i<=15;i++){
     let bloquear_cuadrado = document.getElementById(i);
     bloquear_cuadrado.innerHTML = lista_num[i];
     bloquear_cuadrado.disabled = true;
   }
};

// - funcion contador regresivo
function contador_seg(){
    temp_interval = setInterval(function(){
        temp --;
        mostrar_tiempo.innerHTML = "Tiempo: "+temp+" seg";
        if(temp == 0){
            clearInterval(temp_interval);//cancela la accion repetitiva
            lock_numeros();
        }
    },1000); //ejecuta indefinidamente cada 1000 o cierto intervalo de tiempo 
}

// - funcion principal
function darvuelta(id){
    // - temporizador 
    if(tiempo == false){
        contador_seg();
        tiempo = true;
    }

    contador_movimento++;
    console.log(contador_movimento);
    if(contador_movimento == 1){
        // - Primera Seleccion
        mov_1 = document.getElementById(id);// devuelve al elemento una referencia por su id. modifica a la etiqueta nombrandola por medio de su id
        // de todo el documento del html seleccionamos por el id.
        mov_1.innerHTML = lista_num[id]; //innerHTML: modifica lo que esta dentro de la etiqueta
        mov_1.disabled = true; //inavilita el boton para que ya no siga contando
        resul_mov_1 = lista_num[id];//despues se usara en un if   
    }
    else if(contador_movimento == 2){
        // - Segunda seleccion
        mov_2 = document.getElementById(id);
        mov_2.innerHTML = lista_num[id];
        mov_2.disabled = true;
        resul_mov_2 = lista_num[id];
        // - Si ambos son iguales
        if(resul_mov_1 == resul_mov_2){
            contador_movimento = 0;
            contador_acierto++;
            // - aumenta el contador aciertos
            mostrar_aciertos.innerHTML = "Aciertos: " + contador_acierto;
            // - aumento de contador moviento en HTML 
            if(contador_acierto == 8){
                mostrar_aciertos.innerHTML = "Aciertos: GANASTE";
                mostrar_movimientos.innerHTML = "Movimientos: GANASTE";
            }
        }
        else{
            // - si son distintos se dan vuelta los 2 
            setTimeout(function(){
                mov_1.innerHTML = " "; 
                mov_2.innerHTML = " ";
                mov_1.disabled = false;
                mov_2.disabled = false;
                contador_movimento = 0;
            },700)
        }
        movimiento ++;
        mostrar_movimientos.innerHTML = "Movimientos: " + movimiento;
    }
        

}