var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Sou um servidor criado pelo Node.js!\n');
}).listen(3000, '127.0.0.1');

/* Agora, rode o script no terminal através do comando node node-server.js(rode o seu arquivo)
Para testar, abra a URL (http://localhost:3000), se tudo der certo, aparecerá a mensagem: Sou um servidor criado pelo Node.js! */

