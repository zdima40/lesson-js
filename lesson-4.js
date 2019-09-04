// ЦИКЛЫ

// Пример цикла for
// for (инициализация; тест; инкремент) {инструкция}
console.log('for, i++');
var i;
for (i = 0; i < 5; i++){
    console.log(i); // от 0 до 4
}

console.log('for, i--');
for (i = 5; i >= 0; i--){
    console.log(i); // от 5 до 0
}

// Пример цикла while
// while (выражение) {инструкция}
console.log('while, i--');
var i = 5;
while (i--){
    console.log(i); // от 4 до 0
}

// Пример цикла do while
// do {инструкция} while (выражение)
console.log('do while, i++');
var i = 0;
do {
    console.log(i++); 
} while (i < 5) // от 0 до 4