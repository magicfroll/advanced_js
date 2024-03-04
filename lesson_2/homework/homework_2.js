console.log('---ЗАДАНИЕ 1---');

// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = []
    
    get allBooks() {
        return this.#books
    }

    addBook(title) {
        try {
            if (this.hasBook(title)) {
                throw new Error('Такая книга уже есть в библиотеке')
            }
            this.#books.push(title)
        } catch(err) {
            console.log(err.message);
        }       
    }

    removeBook(title) {
        try {
            if (!this.hasBook(title)) {
                throw new Error('Такой книги нет в библиотеке')
            }
            this.#books = this.#books.filter(item => item !== title);
        } catch(err) {
            console.log(err.message);
        }
    }

    hasBook(title) {
        if (this.#books.includes(title)) {
            return true;
        } return false;
    }

    constructor(bookList) {
        try {
            if (bookList.length !== new Set(bookList).size) {
                throw new Error('В списке есть дубликаты')
            }
            this.#books = bookList;
        } catch (err) {
            console.log(err.message);
        }    
    }
}

let lib = new Library(["value1", "value2", "value3"]);

let lib2 = new Library(["value1", "value2", "value3", "value3"]); // В списке есть дубликаты

lib.addBook("value2"); // Такая книга уже есть в библиотеке

lib.addBook("value4");

console.log(lib.allBooks); // ['value1', 'value2', 'value3', 'value4']

lib.removeBook("value5"); // Такой книги нет в библиотеке

lib.removeBook("value2");

console.log(lib.allBooks); // ['value1', 'value3', 'value4']

// ----------------------------------
console.log('');
console.log('---ЗАДАНИЕ 2---');

// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

function addReview() {
    const inputReview = document.querySelector('.input-review');
    const addButton = document.querySelector('.add-button');
    const message = document.querySelector('.error-message');
    const container = document.querySelector('.container');          
    try {
        const review = inputReview.value
        if (review.length < 10 || review.length > 100) {
            throw new Error('Отзыв должен быть больше 10 и меньше 100 символов')                    
        }
        const p = document.createElement('p');
        p.textContent = review;
        container.prepend(p);
    } catch(err) {
        message.textContent = err.message;
    }
}


const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
                {
                    id: "1",
                    text: "Отличный телефон! Батарея держится долго.",
                },
                {
                    id: "2",
                    text: "Камера супер, фото выглядят просто потрясающе.",
                },
            ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
    ];

let initialReviewList = []

initialData.forEach(item => {
    product = `Product: ${item.product}`
    item.reviews.forEach(item => {
        reviewId = `Review ID: ${item.id}`;
        reviewText = `Review text: ${item.text}`;
    });
    initialReviewList.push(`${product}. ${reviewId}. ${reviewText}`)

});

console.log(initialReviewList);

initialReviewList.forEach(element => {
    const container = document.querySelector('.container'); 
    const p = document.createElement('p');
    p.textContent = element;
    container.prepend(p);
});
