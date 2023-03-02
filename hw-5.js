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

// ЗАДАНИЕ 6

function checkValue() { 
   let i = prompt('Введите число');

    if (isNaN(i)) { 
      return 'Переданный параметр не является числом'; 
    } else { 
     return Math.pow(i, 3)
    } 
  } 
   console.log(`i в кубе равняется ${checkValue()}`);





