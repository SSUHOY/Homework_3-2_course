// function comparison(a , b) {
//     if (a > b) {
//         alert(b);
//     } else {
//        alert(a);  
//     }
// }

// comparison(8 , 4);
// comparison(4 , 4);
// comparison(6 , 6);

// function confirmNumber(n) {
//         if (n % 2 == 0) {
//             console.log('Число четное');
//         } else {
//             console.log('Число нечетное');
//         }
//     }

//     confirmNumber(57); 
//     confirmNumber(34); 

// ЗАДАНИЕ 3 
// 3.1
// function value1(a) { 
//     let result = a**2; 
//     console.log(result); 
//   } 

//   value1(54); 
//   value1(65); 
//   value1(7);
// 3.2

// function value(a){ 
//     return a**2; 
//   } 

//   console.log(value(6)); 
//   console.log(value(62));

// ЗАДАНИЕ 4 
// function askUserAge() {
//     let age = prompt('Сколько Вам лет?');
//     if (age < 0) {
//         console.log('Вы ввели неправильное число');
//     } else if (age <= 12) {
//         console.log('Привет, Друг!');
//     } else if (age >= 13) {
//         console.log('Добро пожаловать!');
//     }
// }

// askUserAge();

// ЗАДАНИЕ 5

// function checkValues() {
//     let a = prompt('Введите число');
//     let b = prompt('Введите число');
//     if (isNaN(a || b)) {
//        return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b
//     }
// }

// console.log(checkValues());

// ЗАДАНИЕ 6 :

// function checkValue(i) {


//   if (isNaN(i)) {
//     return 'Переданный параметр не является числом';
//   } else {
//     return Math.pow(i, 3)
//   }
// }
// console.log(`i в кубе равняется ${checkValue(0)}`);
// console.log(`i в кубе равняется ${checkValue(1)}`);
// console.log(`i в кубе равняется ${checkValue(2)}`);
// console.log(`i в кубе равняется ${checkValue(3)}`);
// console.log(`i в кубе равняется ${checkValue(4)}`);
// console.log(`i в кубе равняется ${checkValue(5)}`);
// console.log(`i в кубе равняется ${checkValue(6)}`);
// console.log(`i в кубе равняется ${checkValue(7)}`);
// console.log(`i в кубе равняется ${checkValue(8)}`);
// console.log(`i в кубе равняется ${checkValue(9)}`);
// console.log(`i в кубе равняется ${checkValue(10)}`);

// Задание 7 

// function monthTake() {

//   let a = Number(prompt('Введите номер месяца, а программа определит к какому времени года он относится'));

//   if (a === 1 || a === 2 || a === 12) {
//     return alert('Это зима!')
//   } else if (a === 3 || a === 4 || a === 5) {
//     return console.log('Это весна!')
//   } else if (a === 6 || a === 7 || a === 8) {
//     return console.log('Это лето!')
//   } else if (a === 9 || a === 10 || a === 11) {
//     return console.log('Это осень!')
//   } else {
//     console.log('Увы, такого месяца нет');
//   }
  
// }


// Тема 2.6 Массивы.

// Задание 1 
 
// const numbs = [1, 5, 4, 10, 0, 3]; 
 
// for (let a = 0; a < numbs.length; a++) 
// { 
//   if (numbs[a] === 10) break;
//   console.log(numbs[a]); 
// } 
     
 
// Задание 2 - нужно ли искать индекс '4' и как его найти?
 
// const numbers = [1, 5, 4, 10, 0, 3]; 
 
// for (i = 0; i < numbers.length; i++) {

//   if (numbers[i] == 4) {
//     console.log(numbers[i]);
//     break;
//   }
// }

// Задание 3 

// let numbs = [1, 3, 5, 10, 20]; 
 
// numbs = numbs.join(' '); 
// console.log(numbs); 

//  Задание 4

// let arr = []; 
// for (let i = 0; i < 3; i++) { 
//   arr[i] = []; 
  
//   for (let b = 0; b < 3; b++) { 
//     arr[i].push(1); 
//   } 
// }  
// console.log(arr); 

// Задание 5

// let arr = [1, 1, 1]; 
// arr.push(2, 2, 2); 
// console.log(arr); 
 
// Задание 6

// let arr = [9, 8, 7, 'a', 6, 5]; 
 
// arr = arr.sort(); 
// let a = arr.pop(); 
// console.log(a); 

// Задание 7

// const arr = [9, 8, 7, 6, 5]; 
 
// let usersValue = (Number(prompt('Введите число от 1 до 10'))); 
 
// let search = arr.includes(usersValue); 
// console.log(search);

// Задание 8 

// let string = 'abcdef'; 
// string = string.split(''); 
// string.reverse(); 
// console.log(string); 
// string = string.join(''); 
// console.log(string);

// Задание 9 

let arr = [ 
  [1,2,3], 
  [4,5,6], 
]; 
 
console.log(arr.flat());
  










