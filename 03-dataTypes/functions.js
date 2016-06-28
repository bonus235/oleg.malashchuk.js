"use strict";


//последнее число словом


(function() {
var getDigitName = (function() {
var digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
return function(n) {
return digitNames[n]
}
}())
function getLastDigit(n) {
return n % 10
}
console.log('The last digit of given integer is:', "'", getDigitName(getLastDigit(123095526)), "\'")
}())



//реверс числа


(function() {
function reverseDigits(number) {  
var digit = Math.abs(number);
var count = 0;
var reverseArr = [];
while(digit!=0)
{
reverseArr[count] = digit%10;  
digit = parseInt(digit/10);
count++;
}
var retStr = "";
for (var i = 0; i < count; i++) {
retStr = retStr + reverseArr[i];
};
return retStr;
}
console.log(reverseDigits(256));
}())


//подсчет div

(function() {
console.log(document.getElementsByTagName('div').length);
}())



