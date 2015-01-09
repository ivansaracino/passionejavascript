var express = require('express');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var app = express(); 

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(cookieParser());

app.use(expressSession({
	secret: 'stringaqualunque',
	resave: false,
	saveUninitialized: true    
}));

app.use(function(req,res,next) {
	res.locals.session = req.session;
	next();     
}); 

app.use(express.static(__dirname + '/public'));  

app.get('/', function(req,res) {
	res.render('index');
});

var utenti = require('./routes/utenti');
app.use('/utente', utenti);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});                 	        