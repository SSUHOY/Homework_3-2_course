let attention = alert('У нашего банка есть приложение');
let clientOS = prompt('Укажите вашу операционную систему: 1-IOS; 0-ANDROID');
let askYear = String(prompt('Укажите год выпуска модели телефона'));
let clientDeviceYear = '2015';


if (clientOS === '1' && askYear >= clientDeviceYear) {
    alert('Установите версию приложения для IOS по ссылке')
} else if (clientOS === '1' && askYear < clientDeviceYear) {
    alert ('Установите облегченную версию приложения для IOS по ссылке')
} else if (clientOS === '0' && askYear < clientDeviceYear) {
    alert('Установите облегченную версию приложения для Android по ссылке')
} else if (clientOS === '0' && askYear >= clientDeviceYear) {
    alert('Установите версию приложения для Android по ссылке')
}
