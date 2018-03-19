var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis fif! \n');  // Test fails here!
}).listen(8000, 'localhost');
console.log('Server running at http://shaijutest.herokuapp.com/');
