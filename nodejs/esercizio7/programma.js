var http = require('http'),
    i = 0;

(function() {
	var totalData = "",
	    numeroChunk = 0;

	http.get('http://cspnet.it', function (response) {
  		response.setEncoding('utf8');
  		response.on('data', function(data) {
  			totalData += data;
  			numeroChunk++;
  		});
  		response.on('error', console.error);
  		response.on('end', function() {
  			console.log("FINITO: " + 
  			             totalData + 
  			            " NUMERO CHUNK " + 
  			           	numeroChunk);
  		});
	});
})();
