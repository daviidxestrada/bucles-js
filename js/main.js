/*

for(inicializaciónContadora; condición; inc/dec contadora ){

    bloqque de instrucciones
}

*/

/*

for(let i = 1; i<=5; i++){
    console.log(i)
}

console.log("fuera del for")


for(let i = 5; i >= 1 ; i--){
    console.log(i)
}

console.log("fuera del for")

*/

/*

while(condición){
bloque de instrucciones

}

*/
/*
let palabra="patata"
let palabraUsuario=prompt("Escribe una palabra")

while(palabra!=palabraUsuario){
    console.log("La palabra ingresada es " + palabraUsuario)
    palabraUsuario = prompt("Error escribe otra palabra")
}

console.log("Fuera del while")

let contador=1

while(contador<=5){
    console.log(contador)
    contador++
}

console.log("Fuera del while")
*/

/*

do{
    bloque de instrucciones
}while(condición)

*/

let palabra="patata"
let palabraUsuario;
do{
    palabraUsuario=prompt("Escribe una palabra")
    console.log(palabraUsuario)
}while (palabra!=palabraUsuario)