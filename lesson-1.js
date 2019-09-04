// ТИПЫ

// Простые типы
var myNumber = 1,
myString = 'string',
myBool = true,
myNull = null,
myUndef = undefined;

console.log(typeof myNumber); // number
console.log(typeof myString); // string
console.log(typeof myBool); // boolean
console.log(typeof myNull); // object (баг в ECMAScript, должно быть null)
console.log(typeof myUndef); // undefined

console.log('------------------'); 

// Регулярные выражения
var obj = {name: 'myName'},
array = [1,2,3],
regexp = /w+/g,
func = function(){};

console.log(typeof obj); // object
console.log(typeof array); // object
console.log(typeof regexp); // object
console.log(typeof func); // function