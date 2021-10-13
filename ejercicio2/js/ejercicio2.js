/*  ejercicio2.js
    Examen 2 | Ejercicio 2
    Programa la función comprobarEdad para comprobar si la fecha introducida en el campo de fecha
    corresponde a alguien mayor de 18 años o no.
    La función mostrará un mensaje por consola indicando si es mayor de edad o no.
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/

'use strict'

function comprobarEdad(fecha){
  
  // Obtenemos la fecha de hoy y la fecha del día del cumpleaños recibida mediante la clase Date()
  let hoy = new Date();
  let cumpleanos = new Date(fecha);
  // Creamos la variable edad y le asignamos el valor del día de hoy menos el día del cumpleaños, que es la edad
  // aunque aún faltaría comprobar el mes
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  // Para comprobar el mes le restamos el mes del día del cumpleaños al mes del día de hoy
  let m = hoy.getMonth() - cumpleanos.getMonth();

  // Aquí comprobamos que si m es menor a 0 quiere decir que el mes todavía no ha llegado este año,
  // así que le tendríamos que restar uno a edad, o si el mes es 0 pero el día del cumpleaños es mayor al día
  // de hoy, quiere decir que estamos en el mes del cumpleaños, pero que el día no ha llegado todavía, así que, 
  // también le restaríamos uno a edad, y obtendríamos la edad final.
  if(m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }
  // Una vez obtenida la edad, solo falta comprobar si es mayor a 18 o no.
  if(edad >= 18)
    console.log('Es mayor de edad.');
  else console.log('Es menor de edad.');

}