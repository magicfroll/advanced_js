// Задание 1 (тайминг 20 минут)
// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль.

const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags')


// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
    if (!book[metadataType]) {
        book[metadataType] = [];
    }  
    book[metadataType].push(data)  
}
    
    
// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
    return book[metadataType];
}
    
    
// Создание объекта книги и добавление метаданных
let book = {
title: "1984",
author: "George Orwell"
};
    
    
addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");


// Вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol)); // ["Отличная книга о дистопии!"]
console.log(getMetadata(book, ratingSymbol)); // [5]
console.log(getMetadata(book, tagsSymbol)); // ["dystopia"]

console.log(book);

// ------------------------------------------------------------------------------

// Задание 2 (тайминг 20 минут)
// Используя Symbol.iterator, создайте объект "Библиотека", который можно
// итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойство-
// символ Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен
// перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
// консоль

const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },    
    ];

const library = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            next() {
                return index < books.length ? {
                        value: books[index++],
                        done: false} : {done: true};
            }
        }
    }    
}

for (let book of library) {
    console.log(book.title, book.author);
}

// ------------------------------------------------------
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.

// Дан код html:

// ```html
// <div>Element 1</div>
// <div data-active="true">Element 2</div>
// <div>Element 3</div>
// <div data-active="true">Element 4</div>
// ```

// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active.

// Выведите результат на консоль.

// const elements = document.querySelectorAll('div')
// console.log(elements);
// const array = Array.from(elements)
// console.log(array);
// const active = array.filter(element => element.hasAttribute('data-active'))
// console.log(active);

// -------------------------------------------------

// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.****

// 1. Map будет использоваться для хранения соответствия между уроком и преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.

// 1. Map: урок => преподаватель

// let lessons = new Map();
// // "Математика", "Смирнов"
// // "История", "Иванова"
// lessons.set("Математика", "Смирнов", "История", "Иванова")

// let student = {
//     name: "Иван"
// }

// let students = new Map();

// let ivanLessons = new Set();

// ivanLessons.add("Математика");
// ivanLessons.add("История");

// students.set(student, ivanLessons);

// 2. Map: студент => Set уроков


// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Ивана: ${[...students.get(student)]} `); // Математика, История


// Второй вариант

let lessons = new Map();
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

let studentsLessons = new Map();

function addStudentLesson(student, lesson) {
    if (!studentsLessons.has(student)) {
        studentsLessons.set(student, new Set());
    }
    studentsLessons.get(student).add(lesson);
}

addStudentLesson("Иван", "Математика");
addStudentLesson("Иван", "История");
addStudentLesson("Анна", "История");

console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`);

const ivansLessons = studentsLessons.get("Иван");
console.log(`Уроки Ивана: ${[...ivansLessons]}`);