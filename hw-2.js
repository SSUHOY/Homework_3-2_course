let attention = alert('У нашего банка есть приложение');
let clientOS = prompt('Укажите вашу операционную систему');

if (clientOS === 'ios') {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 'android') {
    console.log('Установите версию приложения для Android по ссылке');
}