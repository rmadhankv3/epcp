var express = require('express');
var app = express();
var fs = require("fs");
var TOKEN = '';
var request = require('request');


var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

app.post('/token', function (req, res) {
    console.log(req);
    //res.send(req.body);
    TOKEN = req.body.token;
    console.log('token : '+TOKEN);
    if(TOKEN != ''){
      getIdentifier(res);
    }else {
      res.send('nothing found');
    }
    //res.send(req.body);
});

app.get('/token', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});


var server = app.listen(process.env.PORT, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://"+host+":"+port);

});


function getIdentifier(res){
  var url = 'http://rpxnow.com/api/v2/auth_info?apiKey=90ef369262e67fe16d54c454afcf1b6fb11e8d07&token='+TOKEN;
  request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log("Email : "+ body); // Print the google web page.
          body = JSON.parse(body);
          getAccount(res,body.profile.email);
       }else{
         console.log('Error occured');
         res.send('Error occured');
       }
  });
}

function getAccount(res, email){
    var records = [];
    conn.query("SELECT Id, Name, email FROM contact where email = "+email, function(err, result) {
      if (err) { return console.error(err); }
      console.log("total : " + result.totalSize);
      console.log("fetched : " + result.records.length);
      if(result.records.length == 1){
        res.send('successfully logged in');
      }else {
        res.send('Sorry... cant loggin');
      }
    });
}
