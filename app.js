const hbs = require('hbs');
const express = require('express');
require('dotenv').config();

const server = express();


hbs.registerPartials(__dirname + '/views/partials', function (err) {});

server.set('view engine', 'hbs');

// MIDLEWARS
server.use( express.static('public') )



server.get('/', ( request, response ) => {

    response.render('home', { 
        nombre: 'Jaime Guzmán',
        titulo: 'Curso de Node'
     });
});

server.get('/generic', ( request, response ) => {

    response.render('generic', {
        nombre: 'Jaime Guzmán',
        titulo: 'Curso de Node'
    })
});

server.get('/elements', ( request, response ) => {

    response.render('elements', {
        nombre: 'Jaime Guzmán',
        titulo: 'Curso de Node'
    });
});

server.get('/index', ( request, response ) => {

    response.sendFile(__dirname + '/public/index.html')
});

server.get('*', (request, response) => {

    response.sendFile(__dirname + '/public/404.html');
});









server.listen(process.env.PORT, () => console.log('Escuchando en el puerto 8081'));