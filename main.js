/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(req);
    res.send('Hello World!');
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

