// КОНСТАНТЫ

// Пример условной константы в ES5
var MY_CONST1 = 100;

MY_CONST1 = 200;
console.log(MY_CONST1); // 200

// Пример константы в ES6
const MY_CONST = 100;
// MY_CONST = 200; // SyntaxError: Identifier 'MY_CONST' has already been declared
console.log(MY_CONST); // SyntaxError: redeclaration of var MY_CONST

// Константа доступна только внутри блока
if (true) {
    const MY_CONSTA = 100;
}
// console.log(MY_CONSTA); // ReferenceError: MY_CONSTA is not defined

// Константа объекта
const Obj = {
    name: 'JS'
}
Obj.name = 'css';
console.log(Obj.name); // css
// Obj = 'css'; // TypeError: invalid assignment to const `Obj&#39;