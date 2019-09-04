// УСЛОВНЫЕ ВЫРАЖЕНИЯ

// Пример 1 условной инструкции if
// if (выражение) { инструкция }
var a = 1, result = '';

if (a > 10){
    result = 'a > 10';
} else if (a <= 10 && a >= 5){
    result = 'a <= 10 and a >= 5';
} else {
    result = 'a < 5';
}
console.log('if: ' + result); // выведет 'a < 5'

// Пример 2 условной инструкции switch

// switch(выражение) {
//  case выражение: инструкция; break;
//  case выражение: инструкция; break;
//  default: инструкция;
// }

var a = 2, result='';
switch (a) {
    case 1: result = 'A';
    break;

    case 2: result = 'B';
    break;

    default: result = 'C';
}
console.log('switch: ' + result); // выведет 'B'


// Пример 3 условного оператора (тернарный оператор)
// выражение1 ? выражение2 : выражение3
var x = 13
var a = x > 10 ? 'x > 10' : 'x <= 10';
console.log('тернарный оператор: ' + a); // 'x > 10'

// Пример 4 Змена условного оператора логическим И
var z = 10;
// if (z) {
//     z = z * 2
//     console.log('LOG: ', z)
// }
z && (z = z * 2);
console.log('LOG: ', z)

// Пример 5 Змена условного оператора логическим ИЛИ
var x = false;
// if (!x) {
//     x = 10;
// }
x || (x = 10);
console.log(x);