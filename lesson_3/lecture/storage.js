// Методы у LocalStorage и SessionStorage одинаковы.
// ● setItem(ключ, значение) — сохранить элемент с ключом «ключ» и данными
// «значение».
// ● getItem(ключ) — получить значение по ключу.
// ● removeItem(ключ) — удалить пару «ключ» и «значение» по заданному ключу.
// ● key(номер позиции) — получить ключ на заданной позиции.
// ● length — количество элементов в хранилище.
// ● clear() — очистка хранилища.

console.log(localStorage);

localStorage.setItem('Собачка', 'Жучка');
localStorage.setItem('Кошечка', 'Мурка')

console.log(localStorage);

const keys = Object.keys(localStorage);
const values = Object.values(localStorage);

for (let i = 0; i < localStorage.length; i++) {
    console.log(keys[i], values[i]);    
}