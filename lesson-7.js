// COLLBACK

// Пример callback функции
var func = function(callback){
    var name = 'Name';
    callback(name);
}

func(function(n){
    console.log(n); // Name
});
