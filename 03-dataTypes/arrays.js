"use strict";


// массив из индекса * 5


(function() {
var arr = Array.apply(Array, new Array(20)).map(function(el, i) {
return i*5
})
console.log(arr)
}())


// сравнение строк


(function() {
var chars1 = 'Пролив'.split('')
, chars2 = 'Прокис'.split('')
chars1.forEach(function(el, i){
var compared = el.charCodeAt(0) - chars2[i].charCodeAt(0)
, result = compared > 0 ? 'Символ больше' : compared < 0 ? 'Символ меньше' : 'Символы равны'
console.log(i, result)
})
}())


// возрастающая последовательность


var arr = [0,1,2,3,0,1,2,3,4,5,6,7,0,1,2,3,6,1,2,3,7];
function max_sequence(arr) {
var seq_arr = [arr[0]];
var tmp_arr = [arr[0]]
for (i = 1; i < arr.length; i++) {         
if (arr[i] >= arr[i-1]) {
tmp_arr.push(arr[i]);
} else {
if (tmp_arr.length > seq_arr.length) {
seq_arr = tmp_arr;
}
tmp_arr = [arr[i]];
}
}
if (tmp_arr.length > seq_arr.length) {
seq_arr = tmp_arr;
}
return seq_arr;
}
console.log(max_sequence(arr));