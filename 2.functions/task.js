"use strict"

function getArrayParams(...arr) {
    
    let min = Infinity;
    let max = -Infinity;
    let avg = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i];
        }

        if(arr[i] < min){
            min = arr[i];
        }
        
        sum += arr[i];
        avg = sum / arr.length;
    }

    
    console.log(min);
    console.log(max);

    console.log(sum);
    console.log(avg);

    return { 
        min: min,
        max: max,
        avg: Number(avg.toFixed(2))
        };
}


function summElementsWorker(...arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] !== undefined){

            sum += arr[i];
        } else {
            return 0;
        }
        
    }
    
    return sum;
}
  
function differenceMaxMinWorker(...arr) {

    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] !== undefined){
            if(max < arr[i]){
                max = arr[i];

            }

            if(min > arr[i]){
                min = arr[i];

            }
        } else {
            return 0;
        }
    }

    return max - min;
    
}

function differenceEvenOddWorker(...arr) {

    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] !== undefined){
            
            if(arr[i] % 2 == 0){
                sumEvenElement = sumEvenElement + arr[i];
            } else {
                sumOddElement = sumOddElement + arr[i];
            }   
        } else {
            return 0;
        }
        
    }

    return sumEvenElement - sumOddElement;
}
  
function averageEvenElementsWorker(...arr) {

    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] !== undefined){

            if(arr[i] % 2 == 0){

                sumEvenElement += arr[i];
                countEvenElement++;

            }
        } else {
            return 0;
        }
        
    }

    if (sumEvenElement !== countEvenElement){
        return sumEvenElement / countEvenElement;
    } else {
        return 0;
    }
}
  
function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    let array = [];
	let maxOfTheMax = [];

    for (let i = 0; i < arrOfArr.length; i++) {

        maxWorkerResult = arrOfArr[i];
		array.push(maxWorkerResult)
		maxOfTheMax.push(func(...maxWorkerResult));
    }

    const max = maxOfTheMax.reduce((a, b) => Math.max(a, b), -Infinity);
	return (max);
}

//////////////////////////// с видео уроков


// function printArgs(name, ...args) {
//     console.log(`name - ${name}`);
//     for (let i = 0; i < args.length; i++) {

//         console.log(`args - ${args[i]}`);
//     }
// }

// printArgs(1, 3, 4, 0);

// function sum(...args) {
//     let sum = 0;

//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }

//     console.log(sum);

//     return sum;
// }

// sum(1,2,3,3,3);

// let minusArrow = (a, b) => a + b;

// let user = {
//     name: '111',
//     userName,
// }

// let user2 = {
//     name: '222',
//     userName,
// }

// let user3 = {
//     name: '333',
//     userName,
// }

// function userName(){
//     console.log(this.name);
// }

