var http = require('http');

addrs = process.argv.slice(2,5); 
m=[];
  
http.get(addrs[0], function(res) {
  res.setEncoding("utf8");
  body="";
  res.on("data", function(chunk) {
    body+=chunk;
  });
  res.on("end", function(){
    console.log(body); 
  });
  http.get(addrs[1], function(res) {
    res.setEncoding("utf8");
    body="";
    res.on("data", function(chunk) {
      body+=chunk;
    });
    res.on("end", function(){
      console.log(body);
    });
    http.get(addrs[2], function(res) {
      res.setEncoding("utf8");
      body="";
      res.on("data", function(chunk) {
        body+=chunk;
      });
      res.on("end", function(){
         console.log(body);
      }); 
    });
  });
}).on('error', function(e) {
  console.log(e.message);
});
