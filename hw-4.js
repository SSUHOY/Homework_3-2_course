let i = 0;

while (i < 2) {
    console.log('Привет');
    i++;
}

let b = 1;

do {
    console.log(b);
    b++;
} while (b < 6);


let c = 7;

do {
    console.log(c);
    c++;
} while (c < 23);

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}

for (const item in obj) {
    alert(`${item} - зарплата ${obj[item]} долларов`)
}
