// ОБЪЕКТЫ - часть 2

// Классический метод до ES5
var Person = function (id, name) {
    this.id = id;
    this.name = name;
}

Person.prototype.greet = function () {
    return 'Hello ' + this.name;
}

var person = new Person(1, 'JavaScript');
console.log(person.greet()); // Hello JavaScript

// Классический метод наследования
var WebPerson = function (id, name, skills) {
    Person.apply(this, arguments);
    this.skills = skills;
}

//WebPerson.prototype.constructor = WebPerson;
WebPerson.prototype = Object.create(Person.prototype);

var WebPerson = new WebPerson(1, 'JavaScript', ['css', 'html']);
console.log(WebPerson.greet()); // Hello JavaScript