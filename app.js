const http = require('http');
const url = require('url');

const handRequest = require("./handRequest");

http.createServer((req,res)=>{


    const pathName = url.parse(req.url).pathname;
	let _fileHandObj = new handRequest.handFn();

	var _p = _fileHandObj.readFile(pathName);

	_p.then((data)=>{

        res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
        res.write(data);
        res.end();
         
	},(err)=>{

		res.writeHead(500,{"Content-Type":"application/json"});
        res.write("content:dasdasdashdjahsdakdhaskjdhakdakshdadka");
        res.end();

	});

   
}).listen(8080);

