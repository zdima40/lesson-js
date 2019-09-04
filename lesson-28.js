// PROMISES - Часть 1

// Пример 1
const promise = new Promise ((resolve, reject) => {
    setTimeout(() => { // setTimeout для асинхронного выполнения
        if (false) {
            resolve(`it's resolve`);
        } else {
            reject(`it's reject`);
        }
    }, 1000)
});

promise
    .then(data => {
        console.log(`data: ${data}`);
        return `new data2`;
    })
    .then(data2 => console.log(`data: ${data2}`))
    .catch(error => console.log(`error: ${error}`));

// Пример 2 вывод error без применения catch
const promise2 = new Promise ((resolve, reject) => {
setTimeout(() => { // setTimeout для асинхронного выполнения
    if (false) {
        resolve(`it's resolve`);
    } else {
        reject(`it's reject`);
    }
    }, 1000)
});

promise2.then(data => console.log(`data: ${data}`), error => console.log(`error: ${error}`));



