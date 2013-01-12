var request = require('request');

module.exports = function(callback) {
  var options = {
    uri: 'https://pugme.herokuapp.com/random',
    json: true
  };

  request(options, function(err, res, body) {
    if (err) return callback(err);
    if (!body.pug) return callback(new Error('No pug found'));
    return callback(null, body.pug);
  });
};