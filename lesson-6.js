// ЗАМЫКАНИЯ

// Пример замыкания
var counter = function (){
    var count = 1;
    return function () {
        console.log(count++);
    }
};

var counterFirst = counter();
counterFirst(); // 1
counterFirst(); // 2
var counterSecond = counter();
counterSecond(); // 1
counterSecond(); // 2


// Пример замыкания через объект
var counterThird = function (){
    return counterThird.count++;
};
counterThird.count = 1;
console.log(counterThird()); // 1
console.log(counterThird()); // 2
