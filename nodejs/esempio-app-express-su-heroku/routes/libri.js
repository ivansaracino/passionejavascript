var express = require('express');
var router = express.Router();
var serviziLibri = require('../servizi/serviziLibri');

router.route('/')
	.get(function(request,response) {
		var libri = serviziLibri.listaLibri();
		response.render('listalibri', {libri : libri});
	});

module.exports = router;

