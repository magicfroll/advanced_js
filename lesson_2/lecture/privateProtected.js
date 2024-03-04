// ЗАЩИЩЕННЫЕ СВОЙСТВА КЛАССА

// class AutoMobile {
//     _horsePower = 0;

//     set horsePower(value) {
//         if (value < 0) throw new Error('Отрицательное количество сил')
//         this._horsePower = value;
//     }

//     get horsePower() {
//         return this._horsePower;
//     }

//     constructor(power) {
//         this._horsePower = power;
//     }
// }

// let auto = new AutoMobile(100);

// auto.horsePower = 10; // Error: Отрицательное количество сил
// console.log(auto._horsePower);

// ПРИВАТНЫЕ СВОЙСТВА КЛАССА

class AutoMobile {
    #horsePowers = 0;

    set horsePowers(value) {
        if (value < 0) throw new Error('Отрицательное количество сил')
        this.#horsePowers = value;
    }

    get horsePowers() {
        return this.#horsePowers;
    }

    constructor(power) {
        this.#horsePowers = power;
    }
}

let auto = new AutoMobile(100);

auto.horsePowers = 50; 

console.log(auto.horsePowers);

// auto.#horsePowers = 10; // Ошибка