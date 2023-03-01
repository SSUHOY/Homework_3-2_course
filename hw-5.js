// function comparison(a , b) {
//     if (a > b) {
//         alert(b);
//     } else {
//        alert(a);  
//     }
// }

// comparison(8 , 4);
// comparison(4 , 4);
// comparison(6 , 6);


function value(a) {
    return a % 2
}

let result = (Number(value()));

if (result === 0) {
    alert('Это число четное')
} else if (result !== 0) {
    alert('Это число нечетное');
} 


