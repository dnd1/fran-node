var fs = require('fs');

f = fs.readFileSync(process.argv[2]); 
t=0;
for (i=0;i<f.length ;i++){
    if (f[i]==10){
        t+=1;
    }
}
console.log(t);