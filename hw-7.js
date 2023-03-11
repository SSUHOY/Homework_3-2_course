// Задание 1

// const stringLowerCase = 'js';
// const stringToUpperCase = stringLowerCase.toUpperCase();

// console.log(stringToUpperCase);

// Задание 2 - ВОПРОС   как вернуть в один элемент массива - в консоли выдает два массива

// function stringGet() {
//   const searchStart = ['Осадки', 'Температура', 'Освещенность', 'Давление'];
//   const search = 'ос';

//   return searchStart.filter((el) => el.toLowerCase().includes(search.toLowerCase()));
    
// };


// console.log(stringGet());

// Задание 3 

// let number = 32.58884;

// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));

// Задание 4 


//--вывод бОльшего числа

// let arrNumbers = [52, 53, 49, 77, 21, 32];

// function getMaxOfArr() {
//     return Math.max(...arrNumbers);
// }

// //--вывод меньшего числа

// function getMinOfArr() {
//     return Math.min(...arrNumbers);
// }

// console.log(getMinOfArr());
// console.log(getMaxOfArr());

// Задание 5 

// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue) + minValue);
// }

// console.log(getRandomInt(1,10));

// Задание 6 
// let arrInt = [];
// let Int = (Number(prompt('Введите число'))); 
// let IntDivision = Math.round(Int / 2);

// function generateRandom() {
//     return Math.round(Math.random() * Int);
// }

// function generateArr() {
//     for (let i = 0; i < IntDivision; i++) {
//         arrInt.push(generateRandom());
//     }
// console.log(arrInt);
// }

// console.log(generateArr());


// Задание 7

// function getRandomInt() {

// let i = prompt('Введите первое число');
// let c = prompt('Введите второе число');

// return Math.round(Math.random() * (Math.max(i, c) - Math.min(i, c)) + Math.min(i,c));

// }
// console.log(getRandomInt());

// Задание 8 

// let myDate = new Date(2023, 2, 9, 18, 43, 40);
// console.log(myDate);

// Задание 9 

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);

// console.log(currentDate);

// Задание 10 

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date(2005, 9, 10);

// let fullDate = 'Сегодня: ' + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

// console.log(fullDate);

// Задание 11 

function askUserGame() {

    let arrWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrWords = arrWords.sort(() => Math.random() - 0.5);
    let arrWordsAlert = alert(arrWords);

    let askUserFirstEl = prompt('Какое было первое слово?');
    let askUserSecondEl = prompt('Какое было второе слово?');;

    if (arrWords[0].toLowerCase() === askUserFirstEl.toLowerCase() && arrWords[6].toLowerCase() === askUserSecondEl.toLowerCase()) {
        return alert('Ответ верный! Поздравляем!');
    } else if (arrWords[0].toLowerCase() === askUserFirstEl.toLowerCase() || arrWords[6].toLowerCase() === askUserSecondEl.toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Неверно!');
    }
};


function monthTake() {

    let a = Number(prompt('Введите номер месяца, а программа определит к какому времени года он относится'));
  
    if (a === 1 || a === 2 || a === 12) {
      return console.log('Это зима!')
    } else if (a === 3 || a === 4 || a === 5) {
      return console.log('Это весна!')
    } else if (a === 6 || a === 7 || a === 8) {
      return console.log('Это лето!')
    } else if (a === 9 || a === 10 || a === 11) {
      return console.log('Это осень!')
    } else {
      console.log('Увы, такого месяца нет');
    }
  
  }
  

