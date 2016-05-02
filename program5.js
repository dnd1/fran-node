module.exports=function bar(dirname,ext,callback) {

    var fs = require('fs');

    fs.readdir(process.argv[2], function (err, f) {
        if (err) return callback(err);
        data=[];
        for (i=0;i<f.length ;i++){
            res = f[i].split(".");
            if (res[1]==process.argv[3]){
                data.push(f[i]);

            }
        }
        return callback(null,data);
    });

};
