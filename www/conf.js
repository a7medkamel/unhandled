
var extend          = require('node.extend')
  , util            = require('util')
  , argv            = require('optimist').argv
  ;

var $conf = function(c){
  return extend(true, $base, c);
}

var $base = {
    env: {
      profile       : false
    , host          : 'http://unhandled.net/'
    , port          : 3000
  }
}

var $default = {
  mongoose: {
      uri           : 'mongodb://96.126.98.21/unhandled'
  }
};

var $experimental = {
  mongoose: {
      uri           : 'mongodb://96.126.98.21/unhandled_exp'
  }
};

module.exports = {
    conf              : argv.x? $conf($experimental): $conf($default)
};{}