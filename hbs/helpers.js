/**
 * En este archivo se definiran los helpers que puedo utilizar en el sitio cuando lo desee
 * 
 */


//importo el paquete hbs para utilizar sus funciones
const hbs = require('hbs');


//De esta forma registro helpers y los utilizo colocando  'getAnio' en los archivos donde los necesite
hbs.registerHelper('getAnio', () => {

    return new Date().getFullYear();

});