"use strict"
function solveEquation(a, b, c) {
    let arr = [];

    let d = b**2-4*a*c;

    if(d < 0){
        console.log('d < 0');
        console.log(arr);

    } else if (d === 0){
        d = -b/(2*a);
        arr.push(d);

        console.log('d === 0');
        console.log(arr);
    } else {
        let oneD = (-b + Math.sqrt(d) )/(2*a);
        let twoD = (-b - Math.sqrt(d) )/(2*a);

        arr.push(oneD, twoD);

        console.log('d > 0');
        console.log(arr);
    }
  
    return arr;
}

solveEquation(1, 2, 10);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let P = percent/100/12;

    console.log(P);

    let S = amount - contribution;

    console.log(S);

    let payMonths = S * (P + (P / (((1 + P)**countMonths) - 1)));
    let payTotal = payMonths * countMonths;

    payTotal = Number(payTotal.toFixed(2));
    console.log(payTotal);

    return payTotal;
}

calculateTotalMortgage(10, 0, 50000, 12);