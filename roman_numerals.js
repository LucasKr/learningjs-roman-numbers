'use strict';

var numberRepresentation = {
  10000 : "_X",
  9000 : "_IX",
  5000 : "_V",
  4000 : "_IV",
  1000 : "M",
  900 : "CM",
  400 : "CD",
  500 : "D",
  100 : "C",
  90 : "XC",
  50 : "L",
  40 : "XL",
  10 : "X",
  9 : "IX",
  5 : "V",
  4 : "IV",
  1 : "I",
};

var numbers = Object.keys(numberRepresentation);

var toRoman = function(number) {
  var romanNumber = "";
  numbers.forEach(function(num) {
    while(number >= num) {
      number -= num;
      romanNumber += numberRepresentation[num];
    } 
  });
  return romanNumber;
};
module.exports = toRoman;