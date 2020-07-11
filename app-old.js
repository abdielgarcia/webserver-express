const http = require('http');


//creando servidor con el paquete http
http.createServer((req, res) => {


        //  res.write('Hola Mundo');

        res.writeHead(200, { 'Content-Type': 'application/json' });


        //Creando un json para devolver al cliente
        let salida = {
            nombre: 'Abdiel',
            edad: 31,
            url: '/'
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);