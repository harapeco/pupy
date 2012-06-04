exports.add = function(req, res){
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