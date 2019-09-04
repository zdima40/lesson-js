// СТРЕЛОЧНЫЕ ФУНКЦИИ МАССИВОВ

var arr = ['a', 'b', 'c', 'd'];

// Пример forEach
arr.forEach(element => console.log(element.toUpperCase())) // Array [ 'A', 'B', 'C', 'D' ]


// Пример map
console.log(arr.map(function (e) {
    return e.toUpperCase();
})); // Array [ 'A', 'B', 'C', 'D' ]

// Пример filter
var filtered = arr.filter(function (e) {
    return e.indexOf('b') === -1;
})
console.log(filtered); // Array [ 'A', 'C', 'D' ]

var find = arr.find(function (e) {
    return e.indexOf('b') === 0;
})
console.log(find); // B

// Пример every
var arr = ['aa', 'bb', 'cc']
var ever = arr.every(function (e) {
    return e.length > 1;
});
console.log(ever); // true (т.к. все элементы удовлетворяют условию)

// Пример some

var arr = ['aa', 'b', 'cc']
var ever = arr.some(function (e) {
    return e.length > 1;
});
console.log(ever); // true (т.к. есть элементы удовлетворяющий условию)

// Пример reduce - проходит массив слева на право
// a - промежуточное значение, b - значение текущего элемента массива
var numbers = [1, 2, 3, 4, 5, 6];
var reduced = numbers.reduce(function (a, b, index, array) {
    return a + b; // сложит все элементы массива
});
console.log(reduced); // 21

// Пример reduceRigth - проходит массив cправа на лево
// a - промежуточное значение, b - значение текущего элемента массива
var numbers = [1, 2, 3, 4, 5, 6];
var reduced = numbers.reduceRight(function (a, b, index, array) {
    return a - b; // сложит все элементы массива
});
console.log(reduced); // -9

// Пример indexOf, lastIndexOf
console.log(numbers.indexOf(3));     // 2
console.log(numbers.lastIndexOf(5)); // 4
console.log(numbers.lastIndexOf(7)); // -1