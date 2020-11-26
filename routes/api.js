/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      let result = {initNum: initNum, initUnit, returnNum, returnUnit, string: toString};
      result = 
        (returnUnit === undefined && initNum === undefined) ? {error: "invalid number and unit"} :
        returnUnit === undefined ? "invalid unit" :
        initNum === undefined ? {error: "invalid number"} :
        result;
      res.send(result);
    });
    
};
