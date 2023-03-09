// Задание 1

// const stringLowerCase = 'js';
// const stringToUpperCase = stringLowerCase.toUpperCase();

// console.log(stringToUpperCase);

// Задание 2 - ВОПРОС   как вернуть в 1 элемент массива - в консоли выдает два

function stringGet() {
    const searchStart = (['Осадки', 'Температура', 'Освещенность', 'Давление']);
    const search = 'ос';
   
    searchStart.forEach((searchStart) => {
        if (searchStart.toLowerCase().startsWith(search.toLowerCase()))  {
            console.log(new Array(searchStart));
        }
});
}

console.log(stringGet());

