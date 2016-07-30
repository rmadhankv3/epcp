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
