var modulo = (function(){
	var getDati = function(container) {
    			  		$.ajax({
                        	type: 'GET',
    						url: 'https://ajaxjsonpexample.herokuapp.com/',
    						jsonpCallback: 'callback',
                            contentType: "application/json",
                            dataType: 'jsonp',
    						success: function(json) {
       							console.dir(json[0].titolo + '-' + json[1].titolo);
    						    var contenuto = '<b>' + 
    						                        json[0].titolo 
    						                        + '</b><br />' 
    						                        + '<b>' 
    						                        + json[1].titolo + '</b>';
    						    $('#' + container).html(contenuto);
    					    },
    						error: function(e) {
       							console.log(e.message);
    						}
						});
    			  };

		
		return {
			getDati : getDati
		};
})();