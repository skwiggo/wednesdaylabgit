var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// put in api address

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));

var server = app.listen(3000, function(){
  // add api variable
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://&s:%s', host, port);
});