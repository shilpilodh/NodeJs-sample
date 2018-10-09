var http = require ('http');
var fs = require ('fs');
var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));


var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "Hasnuhana@88",
	database : "myfirstdb"
})

con.connect(function(err){
	if (err) throw err;
	console.log('Connected!!!');
});

app.get('/',function(req,res){
	res.sendFile(__dirname + '/contact1.html');
});

app.post('/submit',function(req,res){
	console.log('req.body');
	var name = req.body.name;
	var address = req.body.address;
	var phone = req.body.phone;
	
	con.query("insert into mytable1 values ('"+name+"','"+address+"','"+phone+"')",function(err,result){
		if (err) throw err;
	})
	res.end();
});

app.listen(8080);	