// Задание 1

// let arrNum = [3, 6, 7, 9];

// function getSumNumber() {
//   let getResult = arrNum.reduce((acc, num) => acc + num, 0);
//   console.log(getResult);
// }

// function getMultNumber() {
//   let getResult = Math.round(arrNum.reduce((acc, num) => acc * num));
//   console.log(getResult);
// }

// function getDivNumber() {
//   let getResult = Math.round(arrNum.reduce((acc, num) => (acc / num)*10));
//   console.log(getResult);
// }

// function printFrame(callback) {
//   console.log(arrNum);
//   callback();
// }

// printFrame(getSumNumber);
// printFrame(getMultNumber);
// printFrame(getDivNumber);

// Задание 2 

// const users = [
//   { name: 'Jon', age: 22 },
//   { name: 'Richard', age: 18 },
//   { name: 'Anton', age: 32 },
//   { name: 'Lida', age: 23 },
//   { name: 'Bob', age: 44 }
// ];


// function compareUser(a, b) {
//   if (a.age > b.age) return 1;
//   if (a.age < b.age) return -1;
//   return 0;
// }

// function sort(arr, compareFunction) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       const condition = compareFunction
//         ? compareFunction(arr[i], arr[j]) > 0 
//         : arr[i].toString() > arr[j].toString();
//       if (condition) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// users.sort(compareUser);
// console.log(users);

// // Задание 3 

// let arr = [1, '4', 9, 'two'];
// let arrSecond = [1, '4', false, 9, 'two'];

// function each(callback) {
//     callback();
// }

// function reversedArrFunc() {
//     let reverseArr = arr.reverse();
//     console.log(arr);
// }

// function toNumberArrFunc() {
//     let toNumberArr = arrSecond.map((el) => +el).filter(item => item !== isNaN);
//     let toNumberArrPop = toNumberArr.pop();
//     console.log(toNumberArr);
// }

// each(reversedArrFunc);
// each(toNumberArrFunc);

// Задание 4

// let currentDate = new Date();

// let timerDate = setTimeout(function Date() {
//     timerDate = setTimeout(Date, 3000);
//     currentDate.setSeconds(currentDate.getSeconds() + 3)
//     let dateToString = currentDate.toString()
//     console.log(dateToString);
// });


// setTimeout(() => { clearInterval(timerDate); console.log('Прошло 30 секунд'); }, 30000);

// Задание 5

function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        return callback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);

