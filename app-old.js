const http = require('http');

http.createServer( ( request, response ) => {

    // console.log(request);
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, { 'Content-Type': 'application/csv' });

    response.write( 'Hola mundo' );

    response.end();
})
.listen(3001);

console.log('Escuchando en el puerto 3001');