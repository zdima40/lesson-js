// МАССИВЫ - Часть 1

// Примеры создания массива
var arr = [1,2,3];
var months = ['January', 'February', 'March'];
var myArray = new Array('January', 'February', 'March');
// Если передать конструктору Array одно числовое значение, то оно будет
// являться длинной массива, а не его элементом
// Массив при этом будет попрежнему динамическим (в него можно
// добавлять более указанного в качестве аргумента количества элементов)
var myArray = new Array(10);
console.log(myArray.length); // 10

// Пример добавления элемента в массив
months[3] = 'May';
months[months.length] = 'June';

console.log(months); // Array [ 'January', 'February', 'March', 'May', 'June' ]
console.log(months.length); // 5

// Дина массива - это индекс последнего элемента +1
months[10] = 'Some month';
console.log(months.length); // 11
months['num'] = 'Some month';
console.log(months.length); // 11

// Сокращение длины массива
months.length = 3;
console.log(months); // Array [ 'January', 'February', 'March' ]

// Удаление элемента массива
delete months[1]; // delete не производит сдвига элементов
console.log(months); // Array [ 'January', &lt;1 пустой элемент&gt;, 'March' ]

// Проверка массива
console.log(Array.isArray(months)); // true