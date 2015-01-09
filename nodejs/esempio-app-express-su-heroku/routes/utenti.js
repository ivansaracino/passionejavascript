var express = require('express');
var router = express.Router();

router.route('/login')
	.get(function(request,response) {
		response.render('login');
	});

router.route('/registrazione')
	.get(function(request,response) {
		response.render('registrazione');
	});

module.exports = router;