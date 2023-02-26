let password = 'пароль к коду';
let askuser = prompt('Введите пароль');

if (password === askuser) {
    alert('Пароль введен верно');
} else if (password !== askuser) {
    alert('Пароль введен неправильно');
}

let c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно')
}