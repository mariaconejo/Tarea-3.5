// Ejercicio 3
//Escriba un programa que combine los dos programas anteriores e imprima en la consola el
//siguiente triángulo, usando while:

//Puntos extra: Agregar al programa funcionalidad que permita al usuario indicar el tamaño del
//triángulo.
let num = parseInt(prompt("Enter your number: "));
let asterisk = ' ';
let count = 0;

while(count < num){
    asterisk = asterisk + ' *';
    while(asterisk < num){
        asterisk = asterisk + ' *';
    }
    console.log(asterisk);
    count++;
}
