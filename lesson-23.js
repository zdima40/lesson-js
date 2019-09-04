// REST

// Пример 1
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
  
console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10


// Пример 2
// Пример arguments ES5
var getName = function (id, name) {
  console.log(arguments); // Arguments { 0: 100, 1: 'Java', ещё 2… }
  return arguments[0] + ', ' + arguments[1];
};

console.log(getName (100, 'Java')); // 100, Java

// Пример spread ... ES6
var getName = (...args) => {
  console.log(args); // Array [ 100, 'Java' ]
  return args.join(', ');
};

console.log(getName (100, 'Java')); // 100, Java