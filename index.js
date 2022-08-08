var http = require('http');
var {output} = require('./code.js');

http.createServer(function(req, res) {
    res.write(output());
    res.end();
  })
  .listen(8080);