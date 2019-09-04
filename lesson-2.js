// ПРИВЕДЕНИЕ ТИПОВ

// Использование конструкторов соответсвующих типов
console.log('=== Конструкторы типов ===');
console.log(typeof Number('10')); // number
console.log(typeof String(10)); // string
console.log(typeof Boolean(10)); // boolean

// Использование аналогов преобразования типа
// Number
console.log('=== Аналог для Number ===');
console.log(typeof (+'10')); // number
console.log(typeof (+true)); // number (1)
console.log(typeof (+false)); // number (0)

// String
console.log('=== Аналог для String ===');
console.log(typeof (''+10)); // string
console.log(typeof (10).toString()); // string

// Boolean
console.log('=== Аналог для Boolean ===');
console.log(!!10); // true
console.log(!!0); // false

console.log('=== Пример parseInt ===');
console.log(parseInt('20 px')); // (number) 20
