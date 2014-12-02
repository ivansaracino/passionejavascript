var xml = require('xml');

var xmlString = xml({libri : 
	[
		{
			libro: [
				{titolo : 'Il signore degli anelli'}, 
				{autore : 'Tolkien'}
			],
		},
		{
			libro: [
				{titolo: 'Guerra e pace'},
				{autore: 'Tolstoj'}
			]
		}
	]
}, true);

console.log(xmlString);