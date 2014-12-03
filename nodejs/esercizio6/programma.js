var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
  response.on('end', function() {console.log("FINITO");});
});