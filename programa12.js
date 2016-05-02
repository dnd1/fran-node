var http = require('http');
var map = require('through2-map'); 

var server = http.createServer(function (req, res) {  
    // request handling logic... 
    if (req.method === "POST"){
        req.pipe(map(function (chunk) {  
           var temp = chunk.toString().split('');
           var ress = [];
           for (i in temp){
                ress[i] = temp[i].toUpperCase();
           } 
           return ress.join('');
         })).pipe(res);
    }
    
})  
server.listen(process.argv[2]);