var express = require('express');
var app = express(); 

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');     
app.use(express.static(__dirname + '/public'));  

app.get('/', function(req,res) {
	res.render('index');
});    

app.get('/benvenuto', function(req,res){
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