'use strict';

var utils = require('../utils/writer.js');
var Test = require('../service/TestService');

module.exports.testMath = function testMath (req, res, next) {
  Test.testMath()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
