var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis! \n');  // Test fails here!
}).listen(80, 'finalsome3.herokuapp.com');
console.log('Server running at http://shaijutest.herokuapp.com/');
