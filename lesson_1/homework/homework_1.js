// Задание 1

// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
    {title: "Inhale/Exhale", artist: "Those Damn Crows", year: "2023"},
    {title: "Absolution", artist: "Muse", year: "2003"},
    {title: "Sun", artist: "Thomas Bergersen", year: "2020"},
]

const collection = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            next() {
                return index < musicCollection.length ? {
                    value: musicCollection[index++],
                    done: false} : {done: true};
            }
        }
    }
}

for (let albom of collection) {
    console.log(`${albom.title} - ${albom.artist} (${albom.year})`);
}

// ----------------------------------------

// Задание 2

// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

let chefsSpecMap = new Map();

chefsSpecMap.set('Виктор', 'Пицца')
            .set('Ольга','Суши')
            .set('Дмитрий','Десерты')

let chefsDishesMap = new Map();
chefsDishesMap.set('Пицца "Маргарита"','Виктор')
              .set('Пицца "Пепперони"', 'Виктор')
              .set('Суши "Филадельфия"', 'Ольга')
              .set('Суши "Калифорния"', 'Ольга')
              .set('Тирамису', 'Дмитрий')
              .set('Чизкейк', 'Дмитрий')

let ordersMap = new Map();

let alexei = {name: 'Алексей'}
let maria = {name: 'Мария'}
let irina = {name: 'Ирина'}


ordersMap.set(alexei, [chefsDishesMap.get('Пицца "Пепперони"'), chefsDishesMap.get('Тирамису')])
         .set(maria, [chefsDishesMap.get('Суши "Калифорния"'), chefsDishesMap.get('Пицца "Маргарита"')])
         .set(irina, [chefsDishesMap.get('Чизкейк')]);

for(let entry of ordersMap) {
    console.log(entry);
}