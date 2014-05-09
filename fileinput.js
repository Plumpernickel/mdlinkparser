var fs = require('fs');
var parse = require('./index.js');

if(process.argv){
    var file = process.argv[2];

    fs.readFile(file, 'utf8', function(err, data){
        if(err)
            throw err;
        if(!data)
            throw "invalid file argument given";
        if(file.match(/.+[\.md|\.markdown]/))
            return console.log(parse(data));
    });
}
