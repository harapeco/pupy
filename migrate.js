// Include modules.
var fs = require('fs')
	,Sequelize = require('sequelize')
	,EventEmitter = require('events').EventEmitter;
// Connect to database and set value.
var sequelize = new Sequelize(
		'node',
		'node',
		'node',
		{
			host: 'localhost',
			port: 3306
		}
	)
	// Configure to the environment.
	,dirPath = __dirname + '/models'
	,isForce = false;
// Set force flag.
process.argv.forEach(function(val) {
	if (val.match(/-force/i))
		isForce = true;
});
// Read model files and migrate.
fs.readdir(dirPath, function(err, files) {
	if (err != null) throw err;
	var ev = new EventEmitter;
	// Create model.
	ev.on('run', function(index) {
		if (index >= files.length) return;
		var model = sequelize.import(dirPath + '/' + files[index]);
		if (isForce)
			ev.emit('drop', model, index);
		else
			ev.emit('sync', model, index);
	});
	// Drop table.
	ev.on('drop', function(model, index) {
		model.drop()
			.success(function() {
				console.log('Successfully drop the table.: ' + model.tableName);
				ev.emit('sync', model, index);
			})
			.error(function(err) {
				console.log('Failed to drop the table.: ' + model.tableName);
				throw err;
			});
	});
	// Create table.
	ev.on('sync', function(model, index) {
		model.sync()
			.success(function() {
				console.log('Successfully created the table.: ' + model.tableName);
				console.log('');
				ev.emit('run', ++index);
			})
			.error(function(err) {
				console.log('Failed to create the table.: ' + model.tableName);
				throw err;
			});
	});
	// Start migrate
	ev.emit('run', 0);
});
