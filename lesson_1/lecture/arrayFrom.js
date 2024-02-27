// Псевдо массив - объект, который имеет индексы и свойство length

let pseudo = {
    0: 'first',
    1: 'second',
    length: 2
}

let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());

let str = 'It`s Array Like!';

let arrayStr = Array.from(str);
console.log(arrayStr);