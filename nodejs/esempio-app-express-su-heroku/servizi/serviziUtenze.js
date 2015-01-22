module.exports = (function(){
	var servizioPosta = require('nodemailer');
	var postino = servizioPosta.createTransport({
    	service: 'gmail',
	    auth: {
	        	user: 'passionejavascript@gmail.com',
	        	pass: '*********' 
	    	}
	});
	
	var utentiRegistrati = [
		{
			username : 'ivan',
			password: 'saracino',
			email: 'ivan.saracino@gmail.com',
			profilo: 'admin',
			confermato: true
		},
		{
			username : 'dd',
			password: 'dd',
			email: 'ivan.saracino@gmail.com',
			profilo: 'semplice',
			confermato: true 
		}
	];

	var login = function(username,password) {
		var utentiLoggati = utentiRegistrati.filter(function(utente) {
			return utente.username === username && 
			       utente.password === password &&
			       utente.confermato === true;
		});
		return utentiLoggati[0];
	};

	var registra = function(utente) {
		var href = 'http://localhost:5000/utente/conferma/' + utente.username;
		utentiRegistrati.push(utente);
		postino.sendMail({
    		from: 'passionejavascript@gmail.com',
    		to: utente.email,
    		subject: 'conferma registrazione',
    		html: 'Confermi la registrazione alla biblioteca con un click: ' +
    			  '<a href="' + href +  
    			  '">Confermo!</a>'
		}, function(err, info) {
	    		if (err)
	        		console.log(err);
	    		if (info)
	        		console.log(info);  
			});
		console.log(utentiRegistrati);
	};
	
	var confermaRegistrazione = function(username) {
		var utenteDaConfermare = utentiRegistrati.filter(function(utente) {
			return utente.username === username;
		});

		if (utenteDaConfermare)
			utenteDaConfermare[0].confermato = true;
	};

	return {
		login : login,
		registra : registra,
		confermaRegistrazione: confermaRegistrazione
	};
})();