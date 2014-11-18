'use strict';

var modulo = (function(){
	var timer,
	    start = function() {
				   	timer = window.setInterval(function() {
				   		counter++;
				   		window.document.getElementById('contenuto').innerHTML='<b>' + counter + '<b/>';
				   	}, 1000);
				   	document.getElementById('stop').disabled = false; 
				   	document.getElementById('start').disabled = true; 

	               },
	    counter = 0,
	    stop = function() {
	    	window.clearInterval(timer);
	    	counter = 0;
	    	document.getElementById('start').disabled = false; 
	    	document.getElementById('stop').disabled = true; 
	    };


	return {
		start : start,
		stop: stop
	};
})();