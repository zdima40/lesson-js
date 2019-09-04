//'use strict'
// THIS

// Пример 1
// Первым аргументом call или apply может быть объект, на который и будет указывать this 
var obj1 = {a: 'Custom'};

// Данное свойство принадлежит глобальному объекту
var a = 'Global';

function whatsThis() {
    console.log(this.a);  //значение this зависит от контекста вызова функции
}

whatsThis();          // 'Global'
whatsThis.call(obj1);  // 'Custom'
whatsThis.apply(obj1); // 'Custom'


// Пример 2
const obj = {
    x: 1,
    f: function() {
        console.log(this.x);
    }
};

const myF = obj.f;
// obj.f.call(obj);  // .call(context, arg1, arg2)
// obj.f.apply(obj); // .apply(context, [arg1, arg2]);
//myF(); // undefined

class C {
    constructor() {
        this.x = 1;
        this.f = () => {
            console.log(this.x);
        };
    }
}

const c = new C();
c.f();

const cMyF = c.f;
cMyF();