var http = require('http'), 
    fs = require('fs'),
    writeStream;

var server = http.createServer(function (req, res) {
   writeStream = fs.createWriteStream(__dirname + 
      	                                'out_' + 
      	                                new Date().getTime() +
      	                                '.txt');
   req.pipe(writeStream);
   req.on('end', function() {
      writeStream.end();
      res.statusCode = 200;
      res.end();
   });
});

server.listen(8000, function() {
	console.log('server http in ascolto sulla porta 8000');
});