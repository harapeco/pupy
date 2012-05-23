/*
 * GET home page.
 */
exports.index = function(req, res) {
	res.render('index', {title: 'User.index'});
};
exports.post = function(req, res) {
	res.render('index', {title: 'User.post'});
};