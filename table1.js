var mysql = require ('mysql');

// To create connection with database MySql.
var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"Hasnuhana@88",
	database: "myfirstdb"
});

/*con.connect ( function(err){
	if (err) throw err;
	console.log('Connected!'); // database connect done.
	//create table
	con.query("create table mytable1 (name varchar(50), address varchar(200), phone varchar(20))", function (err, result)
	{
		if (err) throw err;
		console.log('Table Created Succesfully!');
	});
});*/

// insert data into table
con.connect ( function(err){
	if (err) throw err;
	console.log('Connected!');
	//create table
	con.query("insert into mytable1 (name,address,phone) values ('Shilpi','86/2 Hindmotor','1236757849' )", function (err, result)
	{
		if (err) throw err;
		console.log('1 row inserted Succesfully!');
	});
});