var mymodule = require('./program5');

mymodule(process.argv[2],process.argv[3],function(err,data){
    if (err) return err; 
    for (i in data){
        console.log(data[i]);
    };
});