function ok(code, req, res, cb)
{
  // todo ensure that code is in the 200 range
  status_code(code, req, res, 200, cb);
}

function error(code, req, res, cb)
{
  // todo ensure that code is in the 500 range
  status_code(code, req, res, 500, cb);
}

function status_code(code, req, res, $default, cb)
{
  code = code || $default;
  res.statusCode = code;
  cb({ status: code });
}

module.exports = {
    error               : error
  , ok                  : ok
};