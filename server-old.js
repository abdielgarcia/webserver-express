const express = require('express');
const app = express();

//Con esta instruccion estoy lanzando la pgina html que se encuentra en el directorio public
app.use(express.static(__dirname + '/public'))


//expres hbs
app.set('view engine', 'hbs');

//creando server con paquete Expres
//estamos configurando una solicitud get cuando la peticion sea /
/* app.get('/', (req, res) => {

    // res.send('Hola Mundo');

    //Creando un json para devolver al cliente
    let salida = {
        nombre: 'Abdiel',
        edad: 31,
        url: '/'
    }

    //la funcion send ya detecta el json y lo devuelve como tal
    res.send(salida);
});
 */


//creando server con paquete Expres
//estamos configurando una solicitud get cuando la peticion sea /data

/* app.get('/data', (req, res) => {
    res.send('Hola Data');
});
 */

app.listen(3000)