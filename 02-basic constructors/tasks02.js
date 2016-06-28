// Task 1.1
// __________________________________



var x = 6, y = 15, z = 4;
x+= y - x++ * z; 
console.log(x);
z = -- x - y * 5; 
console.log(z);
y /= x + 5 % z; 
console.log(y);
z = x++ + y * 5; 
console.log(z);
x = y - x++ * z;
console.log(x);



var a = 2, b = 6, c = 3;
avg = (a+b+c)/3;
console.log(avg);


var r = 2, h = 10;
V = Math.PI*r*r*h;
console.log("Объем цилиндра", V);
S = 2*Math.PI*r*(r+h);
console.log("Площадь поверхности цилиндра", S);






// Task 1.2
// __________________________________



var a = 2, b = 6, sum = 0;

for(var i = a + 1; i < b; i++){

sum+=i;

if(i%2!=0){

console.log("В числовом промежутке от А до В имеется нечетное число", i);

}

}

console.log("Сумма всех чисел расположенных в числовом промежутке от А до В равна", sum);





var n = 7, factorial = 1;
do{
factorial*=n;
n--;
}while(n>0);

console.log("Количество возможных вариантов доставки товара", factorial);





// прямоугольник

var a=4, b=4, rect='';
for(var i=0; i< b; i++){
for(var j = 0; j < a; j++){
if((i==0) || (i == b-1) || (j==0) || j==a-1){
rect+='*';
}			
else{
rect+='&nbsp;&nbsp;'
}
}
rect+='<br/>'
}
document.write(rect);





// прямоугольный треугольник 


var a = 4, b=4;

for(var i = 0; i <= b; i++){

for(var j = 0; j <= a; j++){

if((j==0) || (i == a) || (i==j)){

document.write('*');

} else 
{

document.write('&nbsp&nbsp');

}

}

document.write('<br>');

};



// равнобедренный треугольник 

var a = 7, b = 4;
for(i=0; i<b;i++){
for(j=0; j<a; j++){
if(j==(a-1)/2 + i || j ==(a-1)/2 -i || i==b-1){
document.write('*');
}
else{
document.write('&nbsp&nbsp');

}

}

document.write('<br>');

};




// ромб


var a = 7, b = 7;
for(i=0; i<b;i++){
for(j=0; j<a; j++){
if( (i<b/2 && j==(a-1)/2 + i) || (i<b/2 && j ==(a-1)/2 -i) ){
document.write('*');
}
else if( j==(a-1)/2 + (a-1-i) || j ==(a-1)/2 -(a-1-i) ){
document.write('*');
}  	
else{
document.write('&nbsp&nbsp');
}
}
document.write('<br>');
};






// Task 3.1
// ______________________________________________



var arr = [1, 110, -1, -5, 2, -3, 4, -18];
var sum = 0;

function arraySum(array){

  for(var i = 0; i < array.length; i++){
     sum += array[i];
  }
  console.log("Сумма всех значений массива =", sum);
  var avg = sum/arr.length;
  console.log( "Среднее арифметическое значений массива =", avg);
         {
     sum += array[i];
  }
}
arraySum(arr);

console.log("Максимальное значение массива =", Math.max.apply(null,arr));
console.log("Минимальное значение массива =", Math.min.apply(null,arr));



