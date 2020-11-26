/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      const input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', function(done) {
      const input = '2.5mi';
      assert.equal(convertHandler.getNum(input), 2.5);
      done();
    });
    
    test('Fractional Input', function(done) {
      const input = '1/2mi';
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      input = '1.5/3kg';
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      input = '2/2/2gal';
      assert.equal(convertHandler.getNum(input), undefined);
      done();
    });
    
    test('No Numerical Input', function(done) {
      input = 'kg';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.include(input, convertHandler.getUnit('1/2' + ele));
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.equal(convertHandler.getReturnUnit("18holes"), undefined)
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      var expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [18.9271, 'l'];
      var expected = 5;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); // 0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [0.6, 'mi'];
      var expected = 0.96561;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); // 0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [3.5, 'km'];
      var expected = 2.1748;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1), // 0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [1/2, 'lbs'];
      var expected = 0.2268;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); // 0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [5, 'kg'];
      var expected = 11.0231;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); // 0.1 tolerance
      done();
    });
    
  });

});