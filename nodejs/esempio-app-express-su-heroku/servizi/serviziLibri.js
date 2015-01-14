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

	return {
		listaLibri : listaLibri
	};
})();