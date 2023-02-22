const year = ('Первый IPhone вышел в 2007 году');
alert(year);

const author = ('Java Script был создан Бренданом Эйхом');
alert(author);

let age = prompt('Сколько Вам лет?');
alert(age);

let user = {
    name: "John",
    age: 29,
    isAdmin: true,
    cityOfResidence: "Russia"
}

alert(user);

delete user.cityOfResidence;

let info = prompt('Какую информацию хотите узнать о пользователе?')
info = alert(`${user}`);

let yourName = prompt('Как Вас зовут?');
alert(`Привет, ${yourName} !`);


