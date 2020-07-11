const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const puerto = process.env.PORT || 3000;

//Con esta instruccion estoy lanzando la pgina html que se encuentra en el directorio public
app.use(express.static(__dirname + '/public'))


//expres hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


//Helpers

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Abdiel'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(puerto, () => {
    console.log(`Escuchando peticiones en el puerto ${puerto}`);
})