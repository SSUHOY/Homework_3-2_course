let password = 'пароль к коду';
let askuser = prompt('Введите пароль');

if (password === askuser) {
    alert('Пароль введен верно');
} else if (password !== askuser) {
    alert('Пароль введен неправильно');
}

let c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно')
}

let d = 4;
let e = 102;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно')
}

let a = Number('2');
let b = Number('3');
alert(a + b);
