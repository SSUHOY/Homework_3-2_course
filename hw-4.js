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


let n = 1000;
let num = 0;

while (true) {
  if (n > 50) {
    n = n / 2;
    console.log(n);
    num++;
  } if (n < 50) {
    break
  }
}

console.log('Выполнено ' + num + ' итераций');


let day = 1;

for ( ; day <= 31 ; day++) {
    if (day % 5 == 0) {
        console.log(`Сегодня пятница ${day}-е, нужно подготовить отчет`);
        continue
    }
}