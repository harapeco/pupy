var myutil = require('myutil'),
	fs = require('fs'),
	util = require('util');

var Sample = {
	setA: function(arg) {
		fs.readFile(arg, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log(data);
		});
	},
	setB: function(arg) {
		fs.readFile(arg, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log(data);
		});
	},
	setC: function(arg) {
		fs.readFile(arg, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log(data);
		});
	}
};
var dirPath = __dirname + '/samples';
var files = new Array();
for (var i=1; i<=6; i++) {
	files[i] = util.format('%s/%s%d.txt', dirPath, 'sample', i);
}
/*
Sample.setA(files[1]);
Sample.setB(files[2]);
Sample.setC(files[3]);
*/

myutil.Sync.init(Sample)
	.push('setA', files[1])
	.push('setB', files[2])
	.push('setC', files[3])
	.run();