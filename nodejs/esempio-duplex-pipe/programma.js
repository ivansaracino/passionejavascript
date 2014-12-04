var net = require('net');
var server = net.createServer(function(socket) {
  console.log('server connesso');
  socket.on('end', function() {
    console.log('server disconnected');
  });
  socket.write('Benvenuto dal server eco ;))\r\n');
  socket.on('data', function(data) {
  	console.log('ricevuti ' + data);
  });
  socket.pipe(socket);
});
server.listen(8000, function() {
  console.log('server in esecuzione su porta 8000');
});