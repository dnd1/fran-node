var net = require('net');


var server = net.createServer(function(s){

    var dd = new Date();
    //"YYYY-MM-DD hh:mm"
    var data =  dd.getFullYear() + "-" + ("0"+ String(Number(dd.getMonth()) + 1)   ).slice(-2) + "-" + dd.getDate() + " " +  dd.getHours() + ":" + ("0"+dd.getMinutes()).slice(-2) + "\n"; 
    s.end(data);

});

server.listen(process.argv[2]);