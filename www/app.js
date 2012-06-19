
/**
 * Module dependencies.
 */

var express         = require('express')
  , routes          = require('./routes')
  , mongoose        = require('mongoose')
  , util            = require('util')
  , api             = require('./api')
  , conf            = require('./conf').conf

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
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

app.get('/', routes.index);

app.post('/api/v1/user/exceptions/', api.require.user_context, function (req, res) {
  api.exception_post(req);

  api.response.ok(202, req, res, function(result){
    res.send(result);
  });
});

console.log(conf);
app.listen(conf.env.port);

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
console.log("========================================================");

