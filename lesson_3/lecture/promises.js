// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         Math.random() * 2 < 1
//         ? resolve('Done')
//         : reject(new Error('Error'))
//     }, 500);
// })

// console.log(promise);

// Цепочка промисов

// new Promise(function(resolve) {
//     setTimeout(() => {
//         resolve(2)    
//     }, 1000);
// }).then(function(result) {
//         console.log(result);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(result * 2)
//             }, 1000);
//         }

//     )
// }).then(function(result) {
//         console.log(result);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(result * 2)
//             }, 1000);
//         }
    
//     )
// }).then(function(result) {
//     console.log(result);
// })


// class Thenable {
//     constructor(num) {
//         this.num = num;
//     }

//     then(resolve) {
//         console.log(resolve); // function() {nayive code}
//         // будет успешно выполнено с аргументом this.num * 2 через 1 секунду
//         setTimeout(() => {
//             resolve(this.num * 2)
//         }, 1000);
//     }
// }

// new Promise(resolve => resolve(1))
//     .then(result => {
//         return new Thenable(result);
//     })
//     .then(console.log);

// ОБРАБОТКА ОШИБОК

// new Promise((resolve, reject) => {
//     throw new Error('Error!');
// }).catch((error) => {
//     console.log(`Ошибка ${error} обработана, продолжаем работу`);
// }).then(() => console.log('Управление перейдет в следующий then'));

// ПРИМЕР ПРОБРОСА ОШИБОК

// Здесь в теле промиса генерируется ошибка, мы её получаем в первом catch() и
// пробуем обработать. Если обработка успешна, то управление передаём
// последующему then(). Если обработка неудачна, то у нас срабатывает оператор
// throw и тогда работает следующий catch(), a then() перед ним пропускается. В
// текущем примере заключительный catch() обработал ошибку и если после него был
// ещё then(), управление передалось ему как в предыдущем примере.

new Promise((resolve, reject) => {
    throw new Error('Error!')
}).catch((error) => {
    if(error instanceof URIError) {
        // обрабатываем ошибку
    } else {
        console.log('Не могу обработать ошибку');
        throw error; // пробрасываем эту или другую ошибку в соедующий catch
    }
}).then(() => {
    /* не выполнится */
}).catch(error => {
    console.log(`Неизвестная ошибка: ${error}`);
    // ничего не возвращаем => выполнение продолжается в нормальном режиме
});

// Promise.race() и Promise.any()

// Метод Promise.race() берёт из массива промисов первый выполнившийся (по
//скорости) промис и возвращает его результат. Остальные промисы будут
//проигнорированы.

// Promise.allSettled()
// Этот метод аналогичен Promise.all, но исправляет его недостатки. Результатом его
// выполнения будет массив объектов с итоговым статусом и результатом выполнения.