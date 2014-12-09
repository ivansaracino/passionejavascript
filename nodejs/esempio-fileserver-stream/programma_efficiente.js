var http = require('http'), 
    fs = require('fs');
 
var server = http.createServer(function (req, res) {
  var stream = fs.createReadStream(__dirname + '/data.txt');
  stream.pipe(res);
});
server.listen(8000);