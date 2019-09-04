// ОБЪЕКТЫ - часть 4

// метод ES6
class Person {
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }

    greet () {
        return 'Hello ' + this.name;
    }
}
const person = new Person(1, 'JavaScript')
console.log(person.greet());
    
// наследование в ES6
class WebPerson extends Person {
    constructor (id, name, skills) {
        super(id, name);
        this.skills = skills;
    }

    // Пример статического метода (непрототипный метод)
    static hello () {
        return `Hi there`;
    }
}

const webPerson = new WebPerson(1, 'JS', ['css', 'html']);
console.log(webPerson.skills);
console.log(WebPerson.hello());