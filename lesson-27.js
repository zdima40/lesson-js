// СТРОКИ ES5, ES6

// Прмиер 1. Конкатенация строк
const fName = 'Java';
const sName = 'Script';

// Пример объединения строк ES5
console.log(fName + ' ' + sName);  // Java Script

// Пример объединения строк ES6
console.log(`${fName} ${sName}`);  // Java Script

// Пример 2.
// ES5
const name = 'Java Script';
const html = '<div>' +
'<h1>' + name + '</h1>' +
'</div>';
console.log(html); // <div><h1>Java Script</h1></div>

// ES6
const name2 = 'Java Script';
const html2 = `
    <div>                       
        <h1> ${name2} </h1>
    </div>
`;
console.log(html2); // <div><h1>Java Script</h1></div>

// Пример 3.
// ES6
const message = `This is ${100/4}`;  // This is 25
console.log(message);

// Пример 4.
// ES6
const tag = (strings, ...values) => {
    console.log(strings, values);    // [ 'It\'s ', ' and I\'m ', '' ] [ 10, 'sleepy' ]
    if (values[0] < 20) {
        values[1] = 'awake';
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

const message2 = tag`It's ${new Date().getHours()} and I'm ${'sleepy'}`
console.log(message2);  // It's 10 and I'm awake