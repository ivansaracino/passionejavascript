var mioPlotter = (function(){
	var dati = [],
    	i,
    	disegna = function(id) {
    	   var tavola = document.getElementById(id);
    	   tavola.setAttribute("style","width:400px; height:200px;");
           Flotr.draw(tavola,[dati]);
    	};
   		for (i = 0; i < 10; i++) {
			dati.push([i,i*i]);
		}
		return {
			disegna : disegna
		}
})();