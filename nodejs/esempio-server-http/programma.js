var http = require('http'),
    url = require('url');

var server = http.createServer(function (req, res) {
  var urlRichiesta = url.parse(req.url, true);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World: ' + urlRichiesta.query.nome + " " + urlRichiesta.query.cognome);
  res.end();
});

server.listen(8080, function() {
	console.log("Server Web in ascolto su 8080 .....");
});