// ДЕСТРУКТУРИЗАЦИЯ

const obj9 = {
    width: 100,
    height: 200,
}

// Пример 1
let { width, height } = obj9
console.log(width, height); // 100 200

// Пример 2
function genObj() {
    return {
        width2: 200,
        height2: 300,
    }
}

let { width2, height2 } = genObj();
console.log(width2, height2); // 200 300

// Пример 3 (переопределение имен)
function genObj2() {
    return {
        width: 300,
        height: 400,
    }
}

let { width: w, height: h } = genObj2();
console.log(w, h); // 300 400

// Пример 4. Деструктуризация вложенного объекта
let obj = {
    id: 100,
    attr: {
        width3: 400,
        height3: 500
    }
}

let { id, attr: { width3, height3} } = obj;
console.log(width3, height3); // 400 500

// Пример 5. Значения по умолчанию
let obj2 = {
    id: 100,
    attr: {
        width4: 444
    }
}

let { id2, attr: { width4 = 20, height4 = 30} } = obj2;
console.log(width4, height4); // 20 30

// Пример 6. Деструктуризация массива
let [ red, green = 'green'] = ['red'];
console.log(red, green); // red green

// Пример 7. Деструктуризация массива
let [first, , third] = ['red', 'green', 'blue'];
console.log(first, third); // red blue

// Пример 8. Деструткуризация объекта, переданного функции в качестве аргумента
function getSizes({ width, height }) {
    console.log(width, height);
}

getSizes({width: 100, height: 200}); // 100 200