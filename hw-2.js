let password = 'пароль к коду';
let askuser = prompt('Введите пароль');

if (password === askuser) {
    alert('Пароль введен верно');
} else if (password !== askuser) {
    alert('Пароль введен неправильно');
}

