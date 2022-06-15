var restify = require('restify')

var server = restify.createServer()

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
  }
  
  var server = restify.createServer();
  server.get('/hello/:name', respond);
  server.head('/hello/:name', respond);

var port = 3000

server.listen(port, function (err) {
    if(err) console.log(err)
    else console.log("Aplication running on port: " + port)
})