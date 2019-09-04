// МАССИВЫ - Часть 2

function logging(cb) {
    const oldArray = ['c', 'e', 'a', 'b'];
    const newArray = cb(oldArray);
    console.log('NEW: ', newArray, ', OLD: ', oldArray);
}

// НЕ изменяют исходный массив
console.log('=== Не изменяют исходный массив ===');
logging(array => array.join());       // NEW:  c,e,a,b , OLD:  [ 'c', 'e', 'a', 'b' ]
logging(array => array.join(' '));    // NEW:  c e a b , OLD:  [ 'c', 'e', 'a', 'b' ]
logging(array => array.concat('g', ['d','h'])); // NEW:  [ 'c', 'e', 'a', 'b', 'g', 'd', 'h' ] , OLD:  [ 'c', 'e', 'a', 'b' ]
logging(array => array.slice(-2));    // NEW:  [ 'a', 'b' ] , OLD:  [ 'c', 'e', 'a', 'b' ]
logging(array => array.slice(1, -1)); // NEW:  [ 'e', 'a' ] , OLD:  [ 'c', 'e', 'a', 'b' ]

// Изменяют исходный массив
// может принимать в качестве аргумента функцию, которая определит метод сортировки
console.log('=== Изменяют исходный массив ===');
logging(array => array.sort());            // NEW:  [ 'a', 'b', 'c', 'e' ] , OLD:  [ 'a', 'b', 'c', 'e' ]
logging(array => array.reverse());         // NEW:  [ 'b', 'a', 'e', 'c' ] , OLD:  [ 'b', 'a', 'e', 'c' ]
logging(array => array.splice(1, 2, 'z')); // NEW:  [ 'e', 'a' ] , OLD:  [ 'c', 'z', 'b' ]
logging(array => array.splice(1, 1));      // NEW:  [ 'e' ] , OLD:  [ 'c', 'a', 'b' ]

// Методы добавления элементов в массив
logging(array => array.push('p'));         // NEW:  5 , OLD:  [ 'c', 'e', 'a', 'b', 'p' ]
logging(array => array.unshift('o'));      // NEW:  5 , OLD:  [ 'o', 'c', 'e', 'a', 'b' ]

// Методы удаления элементов из массива
logging(array => array.pop());      // NEW:  b , OLD:  [ 'c', 'e', 'a' ]
logging(array => array.shift());    // NEW:  c , OLD:  [ 'e', 'a', 'b' ]

