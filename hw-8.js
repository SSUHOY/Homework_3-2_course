// Задание 1

let arrNum = [3, 6, 7, 9];

function getSumNumber() {
  let getResult = arrNum.reduce((acc, num) => acc + num, 0);
  console.log(getResult);
}

function getMultNumber() {
  let getResult = Math.round(arrNum.reduce((acc, num) => acc * num));
  console.log(getResult);
}

function getDivNumber() {
  let getResult = Math.round(arrNum.reduce((acc, num) => (acc / num)*10));
  console.log(getResult);
}

function printFrame(callback) {
  console.log(arrNum);
  callback();
}




printFrame(getSumNumber);
printFrame(getMultNumber);
printFrame(getDivNumber);