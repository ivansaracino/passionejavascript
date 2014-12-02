var fs = require('fs'),
    file = process.argv[2],
    numeroLinee;

fs.readFile(file, function (err, contenutoFile) {
	if (!err) {
  		numeroLinee = contenutoFile.toString().split('\n').length;
  		console.log(numeroLinee);
  	} else {
  		console.log("Problemi in lettura " + file);
  	}
});