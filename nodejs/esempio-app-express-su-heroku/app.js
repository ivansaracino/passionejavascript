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

app.get('/benvenuto', function(req,res){
	req.session.utente = req.query.nome;
	res.render('benvenuto', {nomeCognome : req.query.nome});
});      
 
app.get('/pagina1', function(req,res) {
	res.render('pagina1');
});

app.get('/pagina2', function(req,res) {
	res.render('pagina2'); 
});        
 
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});                 	        