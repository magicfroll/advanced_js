// Задание 1 (тайминг 25 минут)
// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное
// свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется
// значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
// Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
// Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
// противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
// Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// ошибку.

// class BankAccount {
//     #balance = 0;    
    
//     get balance() {
//         return this.#balance;
//     }    
    
//     deposit(amount) {
//         if (amount <= 0) {
//             throw new Error('Сумма не может быть отрицательной');
//         } else {
//             this.#balance += amount;
//         }
//     }

//     withdraw(amount) {
//         if (amount <= 0) {
//             throw new Error('Сумма не может быть отрицательной');
//         }
//         else if (this.#balance < amount) {
//             throw new Error('Денежных средств не хватеает');
//         } else {
//             this.#balance -= amount;
//         } 

//     }
    
//     constructor(initialBalance) {
//         this.#balance = initialBalance
//     }
// }
    
    
// // Создаем новый банковский счет с начальным балансом 500
// let account = new BankAccount(500);
// console.log(account.balance); // Выводит: 500


// account.deposit(200);
// console.log(account.balance); // Выводит: 700


// account.withdraw(100);
// console.log(account.balance); // Выводит: 600


    // --------------------------------------------

//     Задание 2 (тайминг 35 минут)
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
// некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
// наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
// действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ.

// class User {
//     constructor(name, surname) {
//         this.name = name,
//         this.surname = surname
//     }
// }


// class PremiumUser extends User {

// }


// class RegularUser extends User {

// }


// function getAccountInfo(user) {
//     // Премиум аккаунт действителен до такой-то даты или информация отсутствует
//     if (user instanceof PremiumUser) {
//         console.log('Премиум аккаунт действителен до:');    
//         console.log(user?.premiumAccount ?? 'Информация отсутствует');
//     } else if (user instanceof RegularUser) {
//         console.log('пользователь без премиум аккаунта');
//     } else {
//         console.log('Тип пользователя не определен');
//     } 
// }


// // Проверка

// const premUser = new PremiumUser('John', 'Do');
// getAccountInfo(premUser);
// console.log('----------'); 

// const premUser2 = new PremiumUser('John', 'Do');
// premUser2.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
// getAccountInfo(premUser2);
// console.log('----------'); 
//  // Пример: установите срок действия на год вперед

// const regUser = new RegularUser('Adam', 'Smith');
// getAccountInfo(regUser);
// console.log('----------');  

// const user = new Array();
// getAccountInfo(user);


// ---------------------------------------
// Задание 3 (тайминг 15 минут)
// Вы создаете интерфейс, где пользователь вводит число.
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать
// соответствующий ответ.
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
// "Проверить".
// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
// должна использовать try и catch для проверки вводимого значения.

// function isNum() {
//     const numberInput = document.querySelector('.number-input');
//     const checkButton = document.querySelector('.check-button');
//     const message = document.querySelector('.message')
//     checkButton.addEventListener(
//         'click', () => {
//             try {
//                 const number = Number(numberInput.value);
//                 if (isNaN(number) || numberInput.value === '') {
//                     throw new Error('Необходимо ввести положительное число')
//                 }
//                 message.textContent = 'Вы ввели число' 
//             } catch(err) {
//                 message.textContent = err.message 
//                 }
//         }
//     )    
// }

// ------------------------------------------

// Задание 4 (тайминг 25 минут)
// Пользователи вашего сайта могут добавлять элементы в список. Но есть условие:
// введенное значение должно содержать от 3 до 10 символов.
// 1. Создайте HTML-структуру с текстовым полем, кнопкой и списком.
// 2. Напишите функцию, которая будет добавлять элементы в список или
// генерировать исключение, если длина введенного значения не соответствует
// требованиям.

function addItem() {
    const input = document.querySelector('.user-input');
    const addButton = document.querySelector('.add-button');
    const message = document.querySelector('.error-message');
    const itemList = document.querySelector('.item-list');

    addButton.addEventListener(
        'click', () => {
            try{
                const stirng = input.value;
                console.log(stirng);
                if (stirng.length < 3 || stirng.length > 10) {
                    throw new Error('Должно быть от 3 до 10 символов')
                }
                const li = document.createElement('li')
                li.textContent = stirng
                itemList.appendChild(li);
                message.textContent = '';
            } catch(err) {
                message.textContent = err.message;
            } finally {
                console.log('Совершена попытка добавления');
            }
            
        }
    )

}