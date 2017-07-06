const fs = require('fs');

let handFn = function handRequest(){

 	this.readFile = (fileName)=>{
    let content = '';

	switch(fileName){

		case "/list.do":
		  content = "this is list"
		  break;
		case "/detail.do":
		  content = "this is detail"
		  break;
		default:
		  content = "not fund anything";
	  }

       const _p = new Promise((resolve,reject)=>{
       fs.readFile('./resures/he.txt','utf-8',(err,data)=>{
       	   if(err){
       	   	 reject(new Error("read file fail..."));
       	   	 return;
       	   }
       	   resolve(data);
        })
	 })


      return _p;

 	}
}


exports.handFn = handFn;
