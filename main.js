var express = require('express');
var app = express();
var fs = require("fs");
var TOKEN = '';


var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

app.post('/token', function (req, res) {
    console.log(req);
    res.send(req.body);
    TOKEN = req.body.token;
    console.log('token : '+TOKEN);
});

var server = app.listen(process.env.PORT, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://"+host+":"+port);

});


function getIdentifier(res){
  var options = {
    host: 'https://rpxnow.com',
    port: 80,
    path: '/api/v2/auth_info?apiKey=90ef369262e67fe16d54c454afcf1b6fb11e8d07&token='+TOKEN,
    method: 'POST'
  };

  http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      res.send(chunk);
    });
  }).end();
}
