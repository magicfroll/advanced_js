let range = {
    from: 1,
    to: 10
}

// 1. Вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function () {
    // ...она возвращает объект итератора:
    // 2. Далее for..of работает толькос этим итератором, запрашивая у него новые значения
    return {
        current: this.from,
        last: this.to,
        // 3. next() вызывается на каждой итерации цикла
        next() {
            // 4. Он должен вернуть значение в виде объекта{done:.., value:..}
            return this.current <= this.last ? {
                done: false, 
                value: this.current++
            } : {done: true};
        }
    };
};

for(let number of range) {
    console.log(number);
}