module.exports = (function(){
	var utentiRegistrati = [
		{
			username : 'ivan',
			password: 'saracino',
			email: 'ivan.saracino@gmail.com',
			profilo: 'admin' 
		},
		{
			username : 'dd',
			password: 'dd',
			email: 'ivan.saracino@gmail.com',
			profilo: 'semplice' 
		}
	];
	var login = function(username,password) {
		console.log(utentiRegistrati);
		var utentiLoggati = utentiRegistrati.filter(function(utente) {
			return utente.username === username && 
			       utente.password === password;
		});
		return utentiLoggati[0];
	};
	var registra = function(utente) {
		utentiRegistrati.push(utente);
		console.log(utentiRegistrati);
	};
	return {
		login : login,
		registra : registra
	};
})();