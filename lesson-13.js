// ОБЪЕКТЫ - часть 3

// метод ES5
var Person = {
    constructor: function (id, name) {
        this.id = id;
        this.name = name;
        return this;
    },
    greet: function () {
        return 'Hello ' + this.name;
    }
};
    
var person = Object.create(Person).constructor(1, 'JavaScript');
console.log(person.greet());

// наследование в ES5
var WebPerson = Object.create(Person);
WebPerson.constructor = function (id, name, skills) {
    Person.constructor.apply(this, arguments);
    this.skills = skills;
    return this;
}

var webPerson = Object.create(WebPerson).constructor(1, 'JS', ['css', 'html']);
console.log(webPerson.greet());