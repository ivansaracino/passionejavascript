var express = require('express');
var router = express.Router();
var serviziLibri = require('../servizi/serviziLibri');
var form = require('express-form');
var field = form.field;

var validatoreNuovoLibro = form(
		field('codiceisbn').trim().required('', 'Inserire il codice isbn!'),
		field('titolo').trim().required('','Inserire Il titolo!'),
		field('autore').trim().required('','Inserire autore!')
	);

var validatoreRicercaLibro = form(
		field('chiave').trim().required('', 'Inserire La chiave di ricerca!')
	);

router.route('/')
	.get(function(request,response) {
		var libri = serviziLibri.listaLibri();
		response.render('listalibri', {libri : libri});
	});

router.route('/elimina/:codiceisbn')
	.get(function(request,response){
		serviziLibri.elimina(request.params.codiceisbn);
		response.redirect('/libri');
	});

router.route('/nuovo')
	.get(function(request,response) {
		response.render('nuovolibro');
	})
	.post(validatoreNuovoLibro,function(request,response) {
		var messages;
		var libro = {};
		if (!request.form.isValid) {
			messages = request.form.errors;
		}
		else {
			libro.codiceisbn = request.body.codiceisbn;
			libro.titolo = request.body.titolo;
			libro.autore = request.body.autore;
			serviziLibri.salvaLibro(libro);
			messages = ['Libro memorizzato con successo'];
		}
		response.render('nuovolibro', {messages: messages});
	});

router.route('/cerca')
	.get(function(request, response) {
		response.render('cercalibro');
	})
	.post(validatoreRicercaLibro, function(request, response) {
		if (!request.form.isValid) {
			messages = request.form.errors;
			response.render('cercalibro', {messages: messages});
		}
		else {
			var libri = serviziLibri.cercaLibri(request.body.chiave);
			response.render('listalibri', {libri : libri});
		}
	});

module.exports = router;

