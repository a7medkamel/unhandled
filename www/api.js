
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

function exception_post(req, cb){
  var model = new Event(req.body);

  model.save(function (err) {
    if (err){ console.log(err); }
  })
}

function me_exceptions(req, cb){
  Exception.find({}, cb);
}

module.exports = {
    require                     : api_require
  , middleware                  : api_middleware
  , response                    : api_response
  // api
  , exception_post              : exception_post
};