// МОДУЛЬНОСТЬ

// scripts.js
// Пример 1. Импорт модуля
import { addTwo, API_URL as URL} from './math';
console.log(addTwo(1, 2), URL);

// Пример 2. Импорт модуля со значением default
import nameOfDefault from '.math';
console.log(nameOfDefault(1, 2));

// Пример 3. Импорт всех функцй в один объект
import * as math from './math';
console.log(math.addTwo(1,2), math.muliplyTwo(1,2));

// math.js
// Пример создания модуля
export const addTwo = (a, b) => a + b;
export const API_URL = 'http://google.com/api';

// Пример создания модуля
export default (a, b) => a + b;

// Пример создания модуля
export const addTwo = (a, b) => a + b;
export const muliplyTwo = (a, b) => a * b;