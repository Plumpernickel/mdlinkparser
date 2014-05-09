var assert = require("assert");
var parse = require('../index.js');
var data = require('./datafeed.js');

describe('the parse() invocation', function(){
    it('should return an array of strings in markdown link format from the imported variable data', function(done){
        var linkArr = parse(data.strings);
        for (var i = 0; i < data.expected.length; i++){
            assert.equal(linkArr[i], data.expected[i]);
        }
        done();
    });
});
