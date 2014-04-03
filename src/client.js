var Nipple = require('nipple');
var constants = require('./constants');

var getRootLiks = function(callback){
  if (typeof window !== 'undefined') {
    var $ = require('jquery/dist/jquery');
    $.ajax({
      url: constants.urls.root,
      method: 'GET',
      success: function(data){
        return callback(data.data.children);
      }
    });
  }else {
    Nipple.get(constants.urls.root, function (err, res, payload) {
      return callback(JSON.parse(payload).data.children);
    });  
  }
  
};

// var Nipple = require('nipple');

// var getRootLiks = function(callback){
//   return {wat: "wat"};
// };

//module.exports = getRootLiks;

module.exports = getRootLiks;