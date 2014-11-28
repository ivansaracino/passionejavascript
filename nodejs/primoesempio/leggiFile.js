var fs = require('fs');

fs.readFile('readme.txt', {encoding: 'utf8'}, function(err,data) {
	if (err) {
		console.log('errore in lettura file');
	} 
	else {
    	console.log(data);
    }
});

console.log('Prima io!');