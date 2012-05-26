// Include module
var express = require('express')
  ,Sequelize = require('sequelize')
  ,myrouter = require('myrouter')
  ,fs = require('fs')
  ,Sequelize = require('sequelize')
  ,config = require('config');

// Define constants
ROOT = __dirname + '/';
CONFPATH = ROOT + 'config/';
ROUTEPATH = ROOT + 'routes/';
MODELPATH = ROOT + 'models/';
DOCROOT = ROOT + 'public/';

// Set values
var app = module.exports = express.createServer()
	,routesDir = __dirname + '/routes'
	,routesMap = JSON.parse(fs.readFileSync(CONFPATH + 'routes.json', 'utf-8'));
sequelize = new Sequelize(
		config.db.name,
		config.db.user,
		config.db.pass,
		{
			host: config.db.host,
			port: config.db.port
		}
	);

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
myrouter.map(app, routesMap, routesDir);
//app.get('/', routes.index);

// Listen request
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
