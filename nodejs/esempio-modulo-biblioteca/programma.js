var biblioteca = require('./biblioteca');

biblioteca.inserisciLibro({
	titolo : "Il signore degli anelli",
	autore : "Tolkien"
});

biblioteca.inserisciLibro({
	titolo : "Guerra e pace",
	autore : "Tolstoj"
});

biblioteca.elaboraLibri(function(error, libri) {
	if (error)
		console.log(error.messaggio);
	else {
		libri.forEach(function(libro) {
			console.log("Titolo: " + 
				         libro.titolo + 
				         "- Autore: " + 
				         libro.autore);
		});
	}
});