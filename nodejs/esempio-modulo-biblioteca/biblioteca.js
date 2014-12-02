module.exports = (function() {
	var libri = [],
	    inserisciLibro = function(libro) {
			libri.push(libro);
	    },
	    elaboraLibri = function(callback) {
        	if (libri.length === 0)
        		callback({messaggio: 'biblioteca vuota'}, null);
        	else
        	    callback(null, libri);	
        };
	    
	    return {
	    	inserisciLibro : inserisciLibro,
	    	elaboraLibri : elaboraLibri
	    };
})();