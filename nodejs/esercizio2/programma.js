var fs = require('fs'),
    contenutoFile = fs.readFileSync(process.argv[2]),
    numeroLinee = contenutoFile.toString().split('\n').length;

console.log(numeroLinee);