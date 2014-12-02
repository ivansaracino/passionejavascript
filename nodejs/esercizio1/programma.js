var somma = 0,
    i = 0;

if (process.argv.length > 2) {
	for (i = 2; i < process.argv.length; i++) {
		if (Number(process.argv[i])) {
		  somma += parseInt(process.argv[i]);
		}	
		else {
		  console.log("Parametro " + process.argv[i] + " non è un numero!" );
		}
	} 
	console.log(somma);
} else {
	console.log('Esempio di utilizzo : node programma.js 1 3 5');
}

