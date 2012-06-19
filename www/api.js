
var   mongoose              = require('mongoose')
    , util                  = require('util')
    , conf                  = require('./conf').conf
    , api_require           = require('./api.require')
    , api_response          = require('./api.response')
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

module.exports = {
    exception_post              : exception_post
  , require                     : api_require
  , response                    : api_response
};