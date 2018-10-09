var http = require ('http');
var fs = require ('fs');

fs.open ('mynewfile1.txt','w', function(err,file)     for open function seconed parameter used as flag. for write use 'w'/
	{
		if (err) throw err;
		console.log('File saved!');
	}
);

fs.writeFile('mynewfile1.txt','Hello, this is a new file.',function(err)
	{
		if(err) throw err;
		console.log('new data saved!');
	}
);

fs.appendFile('mynewfile1.txt','adding some new data in this file.',function(err)
	{
		if (err) throw err;
		console.log('File update done!');
	}
);

fs.rename ('mynewfile1.txt','myrenamedfile.txt',function(err)
	{
		if (err) throw err;
		console.log('File renamed.');
	}
)


fs.readFile('myrenamedfile.txt',function(err,data)
	{
		if (err) throw err;
		console.log(data.toString());
	}
);