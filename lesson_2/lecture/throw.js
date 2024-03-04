// Пользовательская ошибка

try {
    throw new Error('Это ошибка!'); 
}
catch(err) {
    console.log(err);
    console.log(err.name);
} 

// Проброс ошибки на уровень выше

try {
    throw new Error('Это ошибка!'); 
}
catch(err) {
    if(!(err instanceof Error)) throw new Error('Непредвиденная ошибка');
} 
