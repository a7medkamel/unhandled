
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
    , host          : 'http://ahmedkamel.dyndns.org:3000/'
    , port          : 3000
  }
}

var $default = {
  mongoose: {
      uri           : 'mongodb://192.168.1.102/unhandled_test'
  }
};

var $experimental = {
  mongoose: {
      uri           : 'mongodb://192.168.1.102/unhandled_exp'
  }
};

module.exports = {
    conf              : argv.x? $conf($experimental): $conf($default)
};{}