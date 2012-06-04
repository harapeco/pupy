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
				title: 'Peechik',
				data: data
			});
		})
		.error(function(err){
			throw err;
		});
};

exports.signup = function(req, res){
	res.render('user/signup', {
		title: 'signup'
	});
};

exports.add = function(req, res){
	var User = sequelize.import(MODELPATH + 'user');
	var user = User.build({
		name: req.body.name,
		email: req.body.email
	});
	user.save()
		.success(function(data){
			res.redirect('/');
		})
		.error(function(err){
			throw err;
		});
};

exports.login = function(req, res){
	res.render('user/login', {
		title: 'login'
	});
};

exports.auth = function(req, res){
	var User = sequelize.import(MODELPATH + 'user');
	User.find({where: {
		email: req.body.email
		,password: req.body.password
		}
	})
		.success(function(data){
			
		})
		.error(function(err){
			throw err;
		});
};