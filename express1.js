/*Robust routing
Focus on high performance
Super-high test coverage
HTTP helpers (redirection, caching, etc)
View system supporting 14+ template engines
Content negotiation
Executable for generating applications quickly*/


var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('hello!!!!');
}).listen(8080);