var http = require ('http');
var dTime = require ('./myfirstmodule');
var uc = require('upper-case');

http.createServer ( function (request, response)
					{
					//response.writeHead( 200, {'Content-Type': 'text/html'});
					response.write ( 'Current date and time:' +dTime.myDateTime());
					response.write (uc('Welcome Shilpi'));
					response.end ();
					}
				).listen(8080);