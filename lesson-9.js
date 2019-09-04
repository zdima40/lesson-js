// ОБРАБОТКА ИСКЛЮЧЕНИЙ

// Пример создания исключения
var foo = function (n){
    var customError = new Error('n should be less 10')
    customError.name = "my custom error";
    if (n > 10) {
        throw customError; // исключение Error
    } 
    return 0;
};

// Пример обработки исключений
// try {
//  инcтрукции
// } catch (выражение){
//  инcтрукции
// } finally {
//  инcтрукции
// }
try {
    foo(1); // Some error: n should be less 10
} catch (error) {
    console.log('Error message: ' + error.message + '. Error name: ' + error.name);
} finally {
    console.log('Finally'); // Выполняется всегда
}