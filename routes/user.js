
exports.index = function(req, res) {
	var Post = sequelize.import(MODELPATH + 'post');
	Post.findAll({
		where: {id: ['id > ?', 1]}
	}).success(function(data){
		res.render('user/index', {
			title: 'Pichiku',
			data: data
		});
	}).error(function(err){
		throw err;
	});
};

exports.post = function(req, res) {
	var Post = sequelize.import(MODELPATH + 'post');
	var post = Post.build({body: req.body.body});
	post.save()
		.success(function(){
		})
		.error(function(err){
			throw err;
		});
	Post.findAll()
		.success(function(data){
			res.render('user/index', {
				title: 'Pichiku',
				data: data
			});			
		})
		.error(function(err){
			throw err;
		});
};