var fs = require('fs');

var file = fs.readFileSync('file.txt', "utf8");
var lines = file.toString().split('\n');

for(var i=0; i<lines.length;i++){
  console.log(lines[i]);
}



