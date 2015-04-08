var http = require('http');
var uuid = require('node-uuid');
var async = require('async');

function callExternalUrl(){
    var uniqueId = uuid.v1();
    console.time(uniqueId);
    var options = {
        host: 'google.com',
        port: '80',
        path: '/',
        method: 'GET'
    };
    var req = http.request(options, function(res) {
        var msg = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            msg += chunk;
            console.timeEnd(uniqueId);
        });
        res.on('end', function() {
        });
    });
    req.end();
}

function iterateAsync(callback){
    var iter = [];
    for(var i=0; i<1000; i++){
        iter[i] = i;
    }
    async.each(iter,
        function(item, callback) {
            callExternalUrl();
        },
        function(err) {
            callback(err);
        }
    );
}

iterateAsync(function(){console.log('done');});