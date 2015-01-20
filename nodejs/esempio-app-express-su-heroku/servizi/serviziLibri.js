module.exports = (function(){
	var libri = [
		{
			titolo : 'Il signore degli anelli',
			codiceisbn: 'DRF00223Z',
			autore: 'John Ronald Reuel Tolkjen' 
		},
		{
			titolo : 'Guerra e pace',
			codiceisbn: 'FTGR44E3',
			autore: 'Lev Tolstoj'  
		},
		{
			titolo : 'Javascript the good parts',
			codiceisbn: 'ZZ3423DR665',
			autore: 'Douglas Crockford'  
		}
	];

	var listaLibri = function() {
		return libri;
	};

	var elimina = function(codiceisbn) {
		libri = libri.filter(function(libro) {
			return libro.codiceisbn != codiceisbn;
		});
	};

	var salvaLibro = function(libro) {
		libri.push(libro);
	};

	var cercaLibri = function(chiave) {
		return libri.filter(function(libro) {
			return (libro.titolo.toLowerCase().search(chiave.toLowerCase()) != -1);
		});
	};

	return {
		listaLibri : listaLibri,
		elimina: elimina,
		salvaLibro: salvaLibro,
		cercaLibri: cercaLibri
	};
})();