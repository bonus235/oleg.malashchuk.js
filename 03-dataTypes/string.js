"use strict";


// 1 реверс строки


(function() {
function reverse(str) {
return str.split('').reverse().join('')
}
console.log(reverse('AbracadabrA'));
}())


// 3 подстрока в тексте


(function() {
function countRepeatingSubstring(text, word) {
var match = text.match(new RegExp(word, 'gi'))
return match && match.length || 0
}
console.log(countRepeatingSubstring('The target substring is **"in"**. The text is as follows: We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don\'t have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.', 'in'))
}())


// 5 Удаление пробелов


(function() {
function replaceWhiteSpace(text) {
return text.replace(/ /g, '&nbsp;')
}
console.log(replaceWhiteSpace('  hello    world '))
}())