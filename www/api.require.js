var   mongoose             = require('mongoose')
    , util                 = require('util')
    , conf                 = require('./conf').conf
    ;

var
   // identity             = require('./models/identity')
      api_user_context     = require('./models/api.user.context')
//     , api_user_identifier  = require('./models/api.user.identifier')
//     ;
    
var   
    //   Identity             = mongoose.model('Identity')
      ApiUserContext       = mongoose.model('ApiUserContext')
      // ApiUserIdentifier    = mongoose.model('ApiUserIdentifier')
    ;

function require_user_context(req, res, next) {
  var user_context = null;
  
  user_context = new ApiUserContext({
      id        : req.param('id')
    , authority : req.param('authority')
    , token     : req.param('token')
  });
  
  user_context.validate(function(err){
    if (!err) {
      req.user_context = user_context;
      next();
    }
  });

  return false;
}

module.exports = {
    user_context        : require_user_context
  // , user_identifier     : require_user_identifier
  // , login               : require_login
};