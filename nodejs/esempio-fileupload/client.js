var http = require('http'), 
    fs = require('fs');

var options = {
  host: 'localhost', 
  port: 8000, path: '/', 
  method: 'POST'
};

var req = http.request(options, function(res) {
  console.log(res.statusCode);
});

var readStream = fs.ReadStream(__dirname + '/in.txt');
	
	readStream.pipe(req);

	readStream.on('close', function () {
  		req.end();
  		console.log('Io ho terminato di mandare il file al server...');
	});

console.log('Resto in attesa di chiusura connessione ...');