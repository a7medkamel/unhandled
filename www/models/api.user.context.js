var mongoose = require('mongoose');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var ApiUserContext = new Schema({
    // id                  : { type: String, required: true }
  // , authority           : { type: String, required: true }
  // , token               : { type: String, required: true }
  // , name                : { type: String, trim: true}
}, {strict: true});

mongoose.model('ApiUserContext', ApiUserContext)