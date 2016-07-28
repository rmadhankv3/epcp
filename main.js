/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var app = express();

var url = require('url');
var url_parts = url.parse(request.url, true);
var query = url_parts.query;

app.get('/', function (req, res) {
    console.log(req);
    res.send('Hello World!');

});

app.post('/', function (req, res) {
    console.log(req);
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    res.send(query);

});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
