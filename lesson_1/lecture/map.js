// Map — это коллекция ключ/значение, как и Object. 
// Но основное отличие в том, что
// Map позволяет использовать ключи любого типа.
// Обычный объект приводит ключи к строкам.

// Методы и свойства:
// ● new Map() — создаёт коллекцию
// ● map.set(key, value) — записывает по ключу key значение value
// ● map.get(key) — возвращает значение по ключу или undefined, если ключ key
// отсутствует
// ● map.has(key) — возвращает true, если ключ key присутствует в коллекции, иначе
// false
// ● map.delete(key) — удаляет элемент (пару «ключ/значение») по ключу key
// ● map.clear() — очищает коллекцию от всех элементов
// ● map.size — возвращает текущее количество элементов

let map = new Map();

map.set('1', 'str1'); 

map.set(1, 'num1'); 

map.set(true, 'bool1'); 

// -----------------------

let map2 = new Map();

map2.set('1', 'We')
    .set(1, 'likes')
    .set(true, 'JS')

console.log(map2);


// Для перебора коллекции Map есть 4 метода:
// ● map.keys() — возвращает итерируемый объект по ключам
// ● map.values() — возвращает итерируемый объект по значениям
// ● map.entries() — возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for(..of..)
// ● map.forEach() — итератор, работающий так же, как и с массивом

let recipeMap = new Map([
    ['огурец', 500],
    ['помидор', 350],
    ['лук', 50]
]);

// Перебор по ключам
for(let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
};

// Перебор по значениям
for(let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
};

// Перебор по элементам в формате [ключ, значение]
for(let entry of recipeMap) {
    console.log(entry); // огурец, 500 и т.д.
};


// Выполняем функцию для каждого элемента
recipeMap.forEach((value, key, map) => {
    console.log(`${ley}: ${value}`);  // огурец: 500 и т.д.
})


// Создать Map  из объекта
let map3 = new Map(Object.entries(obj));

// Создать объект из Map
let obj = Object.fromEntries(map);

