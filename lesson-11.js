// ОБЪЕКТЫ - часть 1

// {
// имя: значение;
// имя: значение;

// имя: значение;
// }

// Пример литерального создания объекта
var person = {
    name: 'Nina',
    age: '20',
    gender: 'female',
    foo: function() {
        return 'Hello world!';
    }
}
    
// выражение.идентификатор
console.log(person.age); // 20

// выражение[выражение]
console.log(person['age']); // 20

// вызов метода объекта
console.log(person.foo()); // Hello world!

// Пример создания объекта при помощи функции конструктора Object
var object = new Object();
object.prop = 'val';
console.log(object.prop); // val

// Пример создания объекта при помощи статического метода create
var object = Object.create(null);
object.prop = 'val';
console.log(object.prop); // val

var object = Object.create({x: 10, y: 20}); // x, y - свойства переданного обекта
console.log(object); // Object { }
console.log(object.x, object.y); // 10 20