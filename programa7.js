var http = require('http');

// var options = {
//   host: 'www.google.com',
//   port: 80,
//   path: '/index.html'
// };

http.get(process.argv[2], function(res) {
  res.setEncoding("utf8");
  res.on("data", function(chunk) {
    console.log(chunk);
  });
}).on('error', function(e) {
  console.log(e.message);
});