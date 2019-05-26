var httpObj = require('http');
var urlAddress = require('url');
httpObj.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var data = urlAddress.parse(req.url,true);
  var formQuery = data;
  res.write(JSON.stringify(formQuery));
  res.end();
}).listen(5000);