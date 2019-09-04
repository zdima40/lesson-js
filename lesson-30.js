// PROMISES - Часть 3

// // Пример 1
// //Promise.all ждет выполнения всех обещаний (или первого метода reject()).
// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// }); 

// Promise.all([p1, p2, p3]).then(values => { 
//   console.log(values); 
// });

//Выведет: 
// [3, 1337, "foo"] 

// // Пример 2
// var p1 = new Promise((resolve, reject) => { 
//     setTimeout(resolve, 1000, "one"); 
// }); 
// var p2 = new Promise((resolve, reject) => { 
//     setTimeout(resolve, 2000, "two"); 
// });
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "three");
// });
// var p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "four");
// });
// var p5 = new Promise((resolve, reject) => {
//     // Это обещание прервет Promise.all
//     reject("reject");
// });

// Promise.all([p1, p2, p3, p4, p5]).then(value => { 
//     console.log(value);
// }, reason => {
//     console.log(reason)
// });
  
//Выведет:
//"reject"

// // Пример 3
// var p1 = new Promise((resolve, reject) => { 
//     setTimeout(resolve, 1000, "one"); 
// }); 
// var p2 = new Promise((resolve, reject) => { 
//     setTimeout(resolve, 2000, "two"); 
// });
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "three");
// });
// var p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "four");
// });
// var p5 = new Promise((resolve, reject) => {
//     // Это обещание прервет Promise.all
//     reject("reject");
// });

// let promises = [p1, p2, p3, p4, p5];
// promises = promises.map(p => p.catch(() => undefined))
// Promise.all(promises).then(value => console.log(value));
  
//Выведет:
//[ 'one', 'two', 'three', 'four', undefined ]


// // Пример 4
// //Promise.all ждет выполнения всех обещаний (или первого метода reject()).
// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// }); 

// const runAsyncFunction = async() => {
//   result = Promise.all([p1, p2, p3].map( async (p) => {
//       return await p;
//   }))
//   console.log(await result)
// }

// runAsyncFunction();


// //Пример 5
// var p1 = new Promise((resolve, reject) => { 
//     setTimeout(resolve, 1000, "one"); 
// }); 
// var p2 = new Promise((resolve, reject) => { 
//     setTimeout(resolve, 2000, "two"); 
// });
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "three");
// });
// var p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "four");
// });
// var p5 = new Promise((resolve, reject) => {
//     // Это обещание прервет Promise.all
//     reject("reject");
// });

// const runAsyncFunction = async() => {
//   try {
//     result = Promise.all([p1, p2, p3, p4, p5].map(async (p) => {
//         return await p;
//     }))
//     console.log(await result) // не выведет
//   } catch (error) {
//     console.log('err', error); // err reject
//   }
// } 

// runAsyncFunction();


// Пример 6
var p1 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, "one"); 
}); 
var p2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, "two"); 
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
    // Это обещание прервет Promise.all
    reject("reject");
});


const runAsyncFunction = async() => {
    result = Promise.all([p1, p2, p3, p4, p5].map(async (p) => {
      try {
        return await p;
      } catch (error) {
        //console.log('err', error); // err reject
      }
    }))
    console.log(await result) // [ 'one', 'two', 'three', 'four', undefined ]
} 

runAsyncFunction();
