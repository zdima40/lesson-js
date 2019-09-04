// ОБЛАСТИ ВИДИМОСТИ

// Пример 1
// Пример глобальной и локальной переменной.
var i = 10; // Глобальная переменная

var foo = function (){
    var i = 20; // Локальная переменная
    console.log(i);
    
    var boo = function () {
        // отсутсвие var у локальной переменной приведет к перезаписи 
        // значения переменной из предыдущей области видимости
        i = 30; // Перезапишет i из предыдущей области видимости
        console.log(i);
    }

    boo();
    console.log(i);
}
foo(); // 20 // 30 // 30

// Пример 2
function k() {
    a = 3;
    console.log('k', a);
}

k();

function f() {
    if (true) {
        var a = 5;
    }
    console.log('f', a);
}

f();

function j() {
    if (true) {
        let b = 5;
    }
    //console.log('j', b);
}

j();


// Пример 3
say('Вася'); // Что выведет? Не будет ли ошибки?

var phrase = 'Привет';

function say(name) {
    console.log( name + ', ' + phrase );
}



