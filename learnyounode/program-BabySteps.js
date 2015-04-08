var data = process.argv;
var total=0;
//console.log(data[0]);
//console.log(data.length);

for (var i=2 ; i< data.length ; i++){
	total = total + Number(data[i]);
}
console.log(total);
