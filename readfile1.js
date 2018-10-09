var http = require ('http');
var fs = require ('fs');

http.createServer( function (req, res)
	{
		res.writeHead (200,{ 'Content-Type':'text/html'});
		fs.readFile('demohtml1.html', function (err,data)
		{
		res.write(data);
		res.end();
		}
		)
		/*fs.appendFile('demohtml1.html','append data', function(err){
			if (err) throw err;
			console.log('saved!');
		}
		)*/
	}
).listen(8080);

/*http.createServer( function ( req, res)
{
	//res.writeHead (200,{'Content-Type':'text/html'});
	var data = fs.readFileSync ('demohtml1.html');
	console.log(data.toString());
	res.end();
}
).listen(8080);*/