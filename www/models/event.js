var   mongoose      = require('mongoose')
    , exception     = require('./exception')
    ;

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

module.exports = {
    def: {
        app_Id            : { type: String, trim: true }
      , app_version       : { type: String, trim: true }
      , exception         : exception.def
      , date              : { type: Date, 'default': Date.now }
    }
};

var Event = new Schema(module.exports.def, {strict: true});

mongoose.model('Event', Event);