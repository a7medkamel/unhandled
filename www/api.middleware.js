var   mongoose            = require('mongoose')
    , util                = require('util')
    , zlib                = require('zlib')
    , api_response        = require('./api.response')
    , conf                = require('./conf').conf
    ;

function json_writer(req, res, parse)
{
  return function(err, result){
    if (!err)
    {
      parse = parse || function(i){ return i; };

      send_json(res, parse(result));
    }
    else
    {
      api_response.error(202, req, res, function(result){
        send_json(res, result);
      });
    }
  };
}

// function iff_not_err(err, fnt)
// {
//   if (!err)
//   {
//     fnt();
//   }
// }

function send_json(res, result)
{
  res.contentType('application/json');

  // only do encoding if the req accepts gzip!!!
  res.setHeader("content-encoding", "gzip");

  var results = JSON.stringify(result);

  zlib.gzip(results, function(err, data){
    return res.send(data); // send it off
  });

  // res.send(JSON.stringify(result));
}

module.exports = {
    json_writer         : json_writer
  // , iff_not_err         : iff_not_err
  , send_json           : send_json
};