/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let number = input.match(/([0-9./]*)/)[1];
    number = number === '' ? 1 : (number.includes('/') || number.includes('.') ?
      (number.split('/').length > 2 || number.split('.').length > 2 ? undefined :
      number.includes('/') ? number.split('/')[0] / number.split('/')[1] : number) : number);
    return number !== undefined ? parseFloat(parseFloat(number).toFixed(5)) : undefined;
  };
  
  this.getUnit = function(input) {
    const validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var inputUnit = input.match(/\D+$/);
    return inputUnit !== null ? (validUnits.includes(inputUnit[0]) ? inputUnit[0] : undefined) : undefined;
  };
  
  this.getReturnUnit = function(initUnit) {
    var units = {
      gal: 'l',
      l: 'gal',
      lbs: 'kg',
      kg: 'lbs',
      mi: 'km',
      km: 'mi'
    };
    return initUnit !== undefined ? units[initUnit.toLowerCase()] : undefined;
  };

  this.spellOutUnit = function(unit) {
    spelledUnits = {
      mi: 'miles',
      km: 'kilometers',
      gal: 'gallons',
      l: 'liters',
      lbs: 'pounds',
      kg: 'kilograms'
    };
    return spelledUnits[unit !== undefined ? unit.toLowerCase() : undefined];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let conversions = {
      gal: initNum * galToL,
      l: initNum / galToL,
      lbs: initNum * lbsToKg,
      kg: initNum / lbsToKg,
      mi: initNum * miToKm,
      km: initNum / miToKm
    }
    let convertedNum = conversions[initUnit !== undefined ? initUnit.toLowerCase() : undefined];
    return convertedNum !== undefined ? parseFloat(convertedNum.toFixed(5)) : undefined;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
  };
  
}

module.exports = ConvertHandler;
