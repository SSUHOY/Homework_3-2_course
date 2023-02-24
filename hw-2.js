let value = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(value)) {
    alert('Нужно писать число');
} else if (value % 2 === 0) {
    alert('Это число четное');
} else {
    alert('Это число не четное')
}
