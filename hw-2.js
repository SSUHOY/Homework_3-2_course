let attention = alert('У нашего банка есть приложение');
let clientOS = prompt('Укажите вашу операционную систему');

if (clientOS === '1') {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === '0') {
    console.log('Установите версию приложения для Android по ссылке');
}