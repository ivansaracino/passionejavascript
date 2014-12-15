var express = require('express');

var app = express();

app.get('/', function(req,res) {
	res.end('Tutto ok!');
});
app.listen('8000', function() {
	console.log('Server Web in ascolto su 8000 ...');
});