var http = require('http');
var map = require('through2-map'); 
var url = require('url');

var server = http.createServer(function (req, res) {  
    // request handling logic... 
    if (req.method === "GET"){
        var url_props = url.parse(req.url, true); 
        if (url_props.pathname === "/api/parsetime"){
          //etc
          var n = new Date(url_props.query.iso);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({"hour":n.getHours(),"minute":n.getMinutes(),"second":n.getSeconds()}));
        } else if (url_props.pathname === "/api/unixtime"){
          //etc
          var n = new Date(url_props.query.iso).getTime();
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({"unixtime":n}));
        }
    }
    
})  
server.listen(process.argv[2]);

// /api/parsetime?iso=2013-08-10T12:10:15.474Z