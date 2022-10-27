'use strict';

var utils = require('../utils/writer.js');
var Operations = require('../service/OperationsService');

module.exports.addElement = function addElement (req, res, next, body, matrix, number) {
  Operations.addElement(body, matrix, number)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.addMatrix = function addMatrix (req, res, next, body, matrixA, matrixB) {
  Operations.addMatrix(body, matrixA, matrixB)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.determinantElement = function determinantElement (req, res, next, body, matrix) {
  Operations.determinantElement(body, matrix)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
        console.log(response);
      utils.writeJson( res, response);
    });
};

module.exports.factorialElement = function factorialElement (req, res, next, body, matrix) {
  Operations.factorialElement(body, matrix)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.powerElement = function powerElement (req, res, next, body, matrix, number) {
  Operations.powerElement(body, matrix, number)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.replaceMatrix = function replaceMatrix (req, res, next, body, matrix, subset, row, column) {
  Operations.replaceMatrix(body, matrix, subset, row, column)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.resizeMatrix = function resizeMatrix (req, res, next, body, matrix, dimensions, number) {
  Operations.resizeMatrix(body, matrix, dimensions, number)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.sqrtElement = function sqrtElement (req, res, next, body, matrix) {
  Operations.sqrtElement(body, matrix)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.transposeElement = function transposeElement (req, res, next, body, matrix) {
  Operations.transposeElement(body, matrix)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
