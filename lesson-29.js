// PROMISES - Часть 2

// // Пример 1
// // Promise
// const fetchProducts = () => Promise.resolve({data: [1,2,3]});

// const getProducts = () => {
//     fetchProducts().then(result => {
//         console.log('result', result);
//     })
// }
// getProducts();

// // async await ES7
// const fetchProducts2 = () => Promise.resolve({data: [1,2,3]});

// const getProducts2 = async () => {
//     const res = await fetchProducts2();
//     console.log('result', res);
// }
// getProducts2();

// // Пример 2
// // Обработка ошибок через promises
// const fetchProducts3 = () => Promise.resolve({data: [1,2,3]});

// const getProducts3 = () => {
// fetchProducts3()
//     .then(result => console.log('result', result))
//     .catch(error => console.log('error', error));
// }
// getProducts3();

// Обработка ошибок через async await
const fetchProducts4 = () => Promise.resolve({data: [1,2,3]});

const getProducts4 = async () => {
    try {
        const products = await fetchProducts4();
        console.log('products', products);
    } catch (err) {
        console.log('err', err);
    }
}
getProducts4();

console.log('после Promise')

// // Пример 3. Promise
// const fetchProduct = () => Promise.resolve({data: [1, 2, 3]});
// const fetchAdditional = (p) => Promise.resolve({data: [4, 5, 6].concat(p)});

// const getProducts = () => {
// return fetchProduct().then(products => {
//     if (products.data.length) {
//         return fetchAdditional(products.data)
//         .then(additionalData => {
//             return additionalData.data;
//         })
//     } else {
//         return products.data
//     }
// })
// };

// getProducts().then(result => {
//     console.log(result);
// })

// // Пример 4. async await
// const fetchProduct = () => Promise.resolve({data: [1, 2, 3]});
// const fetchAdditional = (p) => Promise.resolve({data: [4, 5, 6].concat(p)});

// const getProducts = async () => {
//     const products = await fetchProduct();
//     if (!products.data.length) {
//         return products.data;
//     }
//     return await fetchAdditional(products.data);
// }

// getProducts().then(result => {
//     console.log(result);
// })