// let id = Symbol('dogID')

// let buddy = {
//     [id]: 'Жучка'
// }

// console.log(buddy[id]); // Жучка

let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Мурка')]: 'Мурка',
    [Symbol('Таракашка')]: 'Таракашка',
    elephant: 'Слон'
}

console.log(buddies);

let newBuddies = {};

// Свойства с ключами-символами игнорируются в итераторе объектов for(… in …) и
// структурой Object.keys(buddy). Это часть общего принципа сокрытия свойств с
// ключами-символами.
console.log(Object.keys(buddies));

// Object.assign копирует все свойства, в том числе, символьные.
Object.assign(newBuddies, buddies);

console.log(newBuddies);

// ГЛОБАЛЬНЫЙ РЕЕСТР СИМВОЛОВ

let id = Symbol.for('id') // Если символа не существует, он будет создан

// Можно перезаписатль в другую переменную
let idAgain = Symbol.for('id');

// Проверяем, что это один и тот же символ
alert(id === idAgain); // true

// Symbol.keyFor возвращает описание символа по идентификатору. Работает только для глобальных символов, но 
// можно использовать сво-во description для переменной сожержащей сивол 
console.log(Symbol.keyFor(idAgain)); // id

console.log(idAgain.description); // id


