var mysql = require ('mysql');

// To create connection with database MySql.
var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"Hasnuhana@88"
});

con.connect ( function(err){
	if (err) throw err;
	console.log('Connected!'); // database connect done.
	con.query("create database myfirstdb", function (err, result)
	{
		if (err) throw err;
		console.log('Database Created Succesfully!');
	});
	
});