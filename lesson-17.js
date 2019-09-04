// РАСШИРЯЕМОСТЬ ОБЪЕКТА

// Пример проверки объекта на расширяемость
var obj = {a: 'a'};
console.log(Object.isExtensible(obj)); // true
Object.preventExtensions(obj); // запрет на добавление новых свойств в объект
console.log(Object.isExtensible(obj)); // false
obj.x = 1;
console.log(obj.x); // undefined (т.к. isExtensible = false)

Object.seal(obj);
delete obj.a;
console.log(obj); // Object { a: 'a' } (т.к. seal устанавливает атрибут configurable = false)
console.log(Object.isSealed(obj)); // true

Object.freeze(obj);
delete obj.a;
console.log(obj); // Object { a: 'a' } (т.к. freeze устанавливает configurable = false)
obj.a = 'b';
console.log(obj); // Object { a: 'a' } (т.к. freeze устанавливает writable = false)
console.log(Object.isFrozen(obj)); // true