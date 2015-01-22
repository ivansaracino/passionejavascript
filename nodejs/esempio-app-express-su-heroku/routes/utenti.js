var express = require('express');
var router = express.Router();
var serviziUtenze = require('../servizi/serviziUtenze');
var form = require('express-form');
var field = form.field;

var validatoreLogin = form(
		field('username').trim().required('', 'Inserire il nome utente!'),
		field('password').trim().required('','Inserire la password!')
	);

var validatoreRegistrazione = form(
		field('username').trim().required('', 'Inserire il nome utente!'),
		field('password').trim().required('','Inserire la password!'),
		field('email').trim().required('','Inserire la mail').isEmail('Inserire un indirizzo di mail valido!')
	);

router.route('/login')
	.get(function(request,response) {
		response.render('login');
	})
	.post(validatoreLogin, function(request,response){
		var utente;
		if (!request.form.isValid) {
			response.render('login', {messages: request.form.errors});
		}
		else {
			utente = serviziUtenze.login(
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
		}
		
		
	});

router.route('/registrazione')
	.get(function(request,response) {
		response.render('registrazione');
	})
	.post(validatoreRegistrazione, function(request,response) {
		var utente = {};
		if (!request.form.isValid) {
			response.render('registrazione', {messages: request.form.errors});
		} else {
			utente.username = request.body.username;
			utente.password = request.body.password;
			utente.email = request.body.email;
			utente.profilo = 'semplice';
			utente.confermato = false;
			serviziUtenze.registra(utente);
			response.render('login', {
				registrazioneOk: 'Confermare la registrazione tramite la mail di conferma'});
		}
		
	});

router.route('/logout')
	.get(function(request,response) {
		request.session.destroy(function() {
			response.redirect('/');
		});
	});

router.route('/conferma/:username')
	.get(function(request,response){
		serviziUtenze.confermaRegistrazione(request.params.username);
		response.render('login', {registrazioneOk: 'Ora puoi effettuare il login'});
	});

module.exports = router;