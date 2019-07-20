var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express Server escutando na porta ' +
        app.get('port'));
});

// execute o comando node server.js aparecerá no seu terminal a mensagem que está no console.log() 