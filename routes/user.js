var dateUtils = require('date-utils')
	,config = require('config');

exports.index = function(req, res){
	var Post = sequelize.import(MODELPATH + 'post');
	Post.findAll()
		.success(function(data){
			data.forEach(function(val) {
				val.createdAt = (new Date(val.createdAt)).toFormat(config.date.format);
			});
			res.render('user/index', {
				title: 'Pichiku',
				data: data
			});
		})
		.error(function(err){
			throw err;
		});
};

exports.post = function(req, res){
	var Post = sequelize.import(MODELPATH + 'post');
	var post = Post.build({body: req.body.body});
	post.save()
		.success(function(data){
			data.createdAt = (new Date(data.createdAt)).toFormat(config.date.format);
			res.send(JSON.stringify(data));
		})
		.error(function(err){
			throw err;
		});
};