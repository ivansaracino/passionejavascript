var express = require('express');
var router = express.Router();
var serviziBiblioteca = require('../servizi/serviziUtenze');

router.route('/login')
	.get(function(request,response) {

		response.render('login');
	})
	.post(function(request,response){
		var utente = serviziBiblioteca.login(
			request.body.username,
			request.body.password
		);
		if (utente) {
			request.session.utente = utente;	
			response.render('home');
		}
		else {
			response.render(
				'login', 
				{ loginFallito : 'Utente non abilitato'}
			);
		}
		
	});

router.route('/registrazione')
	.get(function(request,response) {
		response.render('registrazione');
	})
	.post(function(request,response) {
		var utente = {};
		utente.username = request.body.username;
		utente.password = request.body.password;
		utente.email = request.body.email;
		utente.profilo = 'semplice';
		serviziBiblioteca.registra(utente);
		response.render('login', {
			registrazioneOk: 'Ora puoi effettuare il login!'});
	});

router.route('/logout')
	.get(function(request,response) {
		request.session.destroy(function() {
			response.redirect('/');
		});
	});

module.exports = router;