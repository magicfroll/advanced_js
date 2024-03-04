// ГЛОБАЛЬНЫЙ ОБЪЕКТ
// Хранит переменные и функции, доступные из любой части программы - var и функции, объявленные с ключевым словом function
console.log(window);
console.log(window);
console.log(window);
console.log(window);
console.log(window);
console.log(globalThis);
console.log(globalThis === window); // true

// Можно записать данные в глобальный объект напрямую:
window.local = 5;

console.log(window.local); // 5

// Uлобальный объект хранит также все встроенные классы в JavaScrip


// ОБЪЕКТ ФУНКЦИИ

// Свойство ф-ии name

function someFunction() {}

someFunction.name = 'otherFunction'

console.log(someFunction.name); //someFunction

// Свойство length указывает, сколько аргументов ожидает функция
// arguments.length показывает количество аргументов, фактически переданных функции.

// Особенности стрелочных функций:
// * не имеют своего this
// * отсутствует массив arguments
// * для однострочных стрелочных функций без выражений в фигурных скобках автоматически подставляется return для выражения 

const sum = (a, b) => a + b;

console.log(sum.length); // 2

sum(1, 2);



