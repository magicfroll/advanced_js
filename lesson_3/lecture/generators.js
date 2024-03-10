// function* generator() {
//     let ret = 0;
//     yield ++ret;
//     yield ++ret;
//     return ++ret;
// }

// let it = generator();

// console.log(it); // объект генератора

// console.log(it.next().value); // {done: false, value: 1}
// console.log(it.next().value); // 2
// console.log(it.next().value); // 3

// Передача данных в генератор

function* generator() {
    let ret = 17;
    let anotherRet = yield;
    console.log(ret, anotherRet);
    anotherRet = yield ret;
    console.log(ret, anotherRet);
}

let it = generator();

it.next().value;
console.log(it.next(100).value);
it.next(10).value;