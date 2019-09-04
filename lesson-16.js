// АТРИБУТЫ СВОЙСТВ

// Атрибуты свойств: name, value, writable, enumerable, configurable
console.log(module.exports.getOwnPropertyDescriptor(person, 'name'));
console.log(module.exports.getOwnPropertyDescriptor(person, 'age'));

// Пример изменения атрибутов нового свойства 'gender'
Object.defineProperty(person, 'gender', {
    value: 'male',
    writable: false, // разрешает(запрещает) запись свойства
    enumerable: false, // разрешает (запрещает) вывод значения
    configurable: false, // разрешает (запрещает) изменение атрибутов свойства
});

Object.defineProperty(person, 'gender', {
    writable: true, // TypeError (т.к. configurable: false)
});

console.log(person.gender); // male
person.gender = 'female';
console.log(person.gender); // male, (т.к. writable: false)

for (property in person) {
    console.log(property); // name, _age, age (т.к. enumerable: false)
}

console.log(Object.keys(person)); // Array [ 'name', '_age', 'age' ]

console.log(person.propertyIsEnumerable('gender')); // false

// Пример изменения атрибутов нескольких свойств одновременно
var o = {};
Object.defineProperties(o, {
    x: {
        value: 10,
        writable: false
    },
    y: {
        value: 20,
        writable: false
    },
    r: {
    get: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    }
});

console.log(o.r); //22.360679774997898