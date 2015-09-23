'use strict';

var numberRepresentation = {
  1 : "I",
  4 : "IV",
  5 : "V",
  9 : "IX",
  10 : "X",
  40 : "XL",
  50 : "L",
  90 : "XC",
  100 : "C",
  500 : "D",
  400 : "CD",
  900 : "CM",
  1000 : "M",
  4000 : "_IV",
  5000 : "_V",
  9000 : "_IX",
  10000 : "_X",
};

var numbers = Object.keys(numberRepresentation);

var toRoman = function(number) {
  numbers.sort(function(a,b) {return b-a;}); //Precisamos ir do maior para o menor
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