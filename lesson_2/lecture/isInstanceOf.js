// Проверка класса оператором instanceof

let arr = new Array(1, 2)

console.log(arr instanceof Array); // true

// Оператор instanceof нам поможет для определения
// ● Принадлежит ли объект к предлагаемому классу
// ● Либо к одному из встроенных классов, как в примере с Array
// ● Или для функций — конструкторов:

function Rabbit() {}

console.log(new Rabbit() instanceof Rabbit); // true