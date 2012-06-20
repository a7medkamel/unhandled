
var   mongoose              = require('mongoose')
    , util                  = require('util')
    , conf                  = require('./conf').conf
    , api_require           = require('./api.require')
    , api_response          = require('./api.response')
    , api_middleware        = require('./api.middleware')
    ;
     
var   db                    = mongoose.connect(conf.mongoose.uri)
    ;
 
var   exception             = require('./models/exception')
    , $event                = require('./models/event')
    ;
    
var   Exception             = mongoose.model('Exception')
    , Event                 = mongoose.model('Event')
    ;

function app_events_post(req, cb){
  var model = new Event(req.body);

  model.save(function (err) {
    if (err){ console.log(err); }
  })
}

function app_events(req, cb){
  Event.find({}, cb);
}

module.exports = {
    require                     : api_require
  , middleware                  : api_middleware
  , response                    : api_response
  // api
  , app_events_post             : app_events_post
  , app_events                  : app_events
};