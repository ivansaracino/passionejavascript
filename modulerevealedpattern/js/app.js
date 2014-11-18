'use strict';

var modulo = (function(){
	var timer,
	    start = function() {
				   	timer = window.setInterval(function() {
				   		counter++;
				   		window.document.getElementById('contenuto').innerHTML='<b>' + counter + '<b/>';
				   	}, 1000);
				   	alternaBottoni();

	               },
	    counter = 0,
	    stop = function() {
	    	window.clearInterval(timer);
	    	counter = 0;
	    	alternaBottoni();
	    },
	    alternaBottoni = function() {
	    	document.getElementById('start').disabled = !document.getElementById('start').disabled;
	    	document.getElementById('stop').disabled = !document.getElementById('start').disabled;

	    };


	return {
		start : start,
		stop: stop
	};
})();