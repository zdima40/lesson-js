// GET SET

var person = {
    name: 'Tom',
    _age: 20,
    get age(){
        return this._age;
    },
    set age(val){
        this._age = val < 0 ? 0 : val > 100 ? 100 : val;
    },
}

console.log(person.age);
person.age = 100;
console.log(person.age);
person.age = -10;
console.log(person.age);
person.age = 110;
console.log(person.age);