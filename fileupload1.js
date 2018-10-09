var http = require('http');
var formidable = require('formidable');
/*need to learn about formidabel more 
formidabel = module use to parsing form data, especially file upload*/

http.createServer(function(req, res)
{
	if (req.url =='/formidable'){
		//parse a file upload. file uploaded and stored in a temporary file. move the file into a different folder.
		var form = new formidable.IncomingForm();
		form.parse(req, function(err, fields, files)
		{
			//var oldpath = files.uploadfile.path;
			//var newpath = 'C:\Users\Shilpi\Shilpi_node' + files.uploadfile.name;
			//fs.rename(oldpath,newpath,function(err)
			//{
				//if (err) throw err;
				res.write('File uploded and renamed SUCCESSFULLY!!');
				res.end();
			//}
			//);
		}
	);
	}
	else
	{
		//write node.js with html form and upload file
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write('<form action ="fileupload" method ="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="uploadfile"><br>');
		res.write('<input type="submit">');
		res.write('</form>');
		res.end();
	}
}).listen(8080);