var fs = require('fs');

fs.readFile(process.argv[2], function (err, f) {
    if (err) throw err;
    t=0;
    for (i=0;i<f.length ;i++){
        if (f[i]==10){
            t+=1;
        }
    }
    console.log(t);
});