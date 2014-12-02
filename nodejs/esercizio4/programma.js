var fs = require('fs'),
    path = require('path');

fs.readdir(process.argv[2], function (err, listaFiles) {
  listaFiles.forEach(function (file) {
  	console.log(file);
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file);
  });
});
