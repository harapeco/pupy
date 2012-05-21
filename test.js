var myutil = require('myutil'),
	Sequelize = require('sequelize'),
	sequelize = new Sequelize(
		'node',
		'node',
		'node',
		{
			host: 'localhost',
			port: 3306
		}
	);

var Post = sequelize.import(__dirname + '/models/post');
console.dir(Post);