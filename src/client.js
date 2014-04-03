var Nipple = require('nipple');

var getRootLiks = function(callback){
  Nipple.get('http://www.reddit.com/.json', function (err, res, payload) {
    return callback(JSON.parse(payload).data.children);
  });
};

// var Nipple = require('nipple');

// var getRootLiks = function(callback){
//   return {wat: "wat"};
// };

//module.exports = getRootLiks;

module.exports = getRootLiks;