var fileUtils = require('./fileUtils'),
	dir = process.argv[2],
    filtro = process.argv[3];

	fileUtils.filtra(dir, filtro, function (err, list) {
		if (err)
	    	return console.error('Errore: ', err);
	  	list.forEach(function (file) {
	    	console.log(file);
		});
	});