// ФУНКЦИИ

// function declaration station
// инструкция объявления функции
function foo(arg){
    return 'Hello ' + arg;
}

console.log(foo('world')); // Hello world

// function definition expression
// выражение определения функции
var boo = function(arg){
    return 'Hello ' + arg;
};

console.log(boo('world')); // Hello world


// Пример самовызывающейся функции
var func = function woo(arg){
    return 'Hello ' + arg;
}('world');
console.log(func); // Hello world