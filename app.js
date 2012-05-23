// Include module
var express = require('express')
  ,Sequelize = require('sequelize')
  ,myrouter = require('myrouter')
  ,fs = require('fs');

// Define constants
var ROOT = __dirname + '/'
,CONFPATH = ROOT + 'config/'
,ROUTEPATH = ROOT + 'routes/'
,DOCROOT = ROOT + 'public/';

// Set values
var app = module.exports = express.createServer();
/*
var routesMap = {
	"GET /": "user.index"
	,"GET /post": "user.post"
};
*/
var routesMap;
fs.readFileSync(CONFPATH + 'routes.json', 'utf-8', function(err, data) {
	console.log(data);
	if (err) throw err;
	routesMap = data;
});
console.log('map data is.');
console.log(routesMap);
var routesDir = __dirname + '/routes';


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
