/*  ejercicio4.js
    Examen 2 | Ejercicio 4
    Corrige los 5 errores que impiden ejecutar la película. 2
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/

'use strict'

class Pelicula {
  constructor() {
    //Le faltaba .bind(this) para que realmente funcionase y cargase el método iniciar cuando ya se haya cargado todo
    window.onload = this.iniciar.bind(this);
  }

  iniciar(){
    const p1 = new Personaje('Ana')
    const p2 = new Personaje('Blas')

    p1.hablar(`Ya me tienes harta ${p2.nombre}`)
    p2.hablar(`¡Pues anda que tú a mi ${p1.nombre}!`)
    do{
      p1.dispararA(p2)
      if (p2.vivo)
        p2.dispararA(p1)
    }while (p1.vivo && p2.vivo)
    console.log('THE END')
  }
}

class Personaje{
  //No se recibía el nombre desde el constructor
  constructor(nombre){
    this.nombre = nombre
    this.arma = new Arma()
    this.vivo = true
  }
  hablar(texto){
    //El console log estaba con comillas simples y para que ${} funciones, tiene que estar entre ``
    console.log(`${this.nombre}: "${texto}"` )
  }
  dispararA(personaje){
    //Simplemente se llamaba a la propiedad arma, sin indicarle de que objeto personaje era
    personaje.arma.disparar()
    if (Math.random() < 0.3){
      personaje.hablar('¡Maldita sea! ¡Me has dado!')
      personaje.vivo = false
      this.hablar('Te lo advertí. Ja, ja, ja')
    }
    else
      personaje.hablar('¡Has fallado!')
  }
}

class Arma{
  disparar(){
    console.log('¡¡PUM!!')
  }
}

new Pelicula()
