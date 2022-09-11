/* import {multi } from 'operacion.js' */



let nu1=9;
let nu2=3;

const funcion = require ('./funcion.js');
const multiplicacion = require ('./multiplicacion.js');
const division = require('./division.js');
const resta = require('./resta.js');
const suma = require('./suma.js'); 
const vector = require('./vector.js');
const trabajos = require('./trabajos.js');
const aprendices = require('./aprendices.js');


console.log(multiplicacion.mensaje(), multiplicacion.multi(10,5));
console.log(division.mensaje(), division.divi(nu1,nu2));//malas practicas.
console.log(resta.mensaje(), resta.res(10,5));
console.log(suma.mensaje(), suma.sumar(10,5)); 
console.log(vector.mensaje(), vector.nombres(3));
console.log(trabajos.mensaje(), trabajos.profesion(3));
console.log( funcion.mensaje(), funcion.perro(2));
(aprendices.apren(4));