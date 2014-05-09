var fs = require('fs');
var parse = require('./linkparser.js');

if(process.argv){
    var data = process.argv[2];

    fs.readFile(data, 'utf8', function(err, data){
        if(err)
            throw err;
        if(!data)
            throw "no file argument given";
        if(data.match(/^.+[\.md|\.markdown]$/))
            parse(data);
    });
}
