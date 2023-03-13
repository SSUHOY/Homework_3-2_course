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

const users = [
  { name: 'Jon', age: 22 },
  { name: 'Richard', age: 18 },
  { name: 'Anton', age: 32 },
  { name: 'Lida', age: 23 },
  { name: 'Bob', age: 44 }
];


function compareUser(a, b) {
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;
  return 0;
}

function sort(arr, compareFunction) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const condition = compareFunction
        ? compareFunction(arr[i], arr[j]) > 0 
        : arr[i].toString() > arr[j].toString();
      if (condition) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

users.sort(compareUser);
console.log(users);


