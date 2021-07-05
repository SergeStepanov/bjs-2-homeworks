'use strict';

// Задание 1
function getArrayParams(arr) {
    let min = 101;
    let max = -101;
    let sum = 0;
    let avg = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];

        if (arr[i] < min) min = arr[i];

        sum += arr[i];
        avg = (sum / arr.length).toFixed(2);
    }

    // Ваш код

    return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
    let sum = 0;

    // Ваш код
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function makeWork(arrOfArr, func) {
    let max = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
        let sum = func(arrOfArr[i]);

        if (sum > max) max = sum;
    }

    return max;
}

// Задание 3
function worker2(arr) {
    // Ваш код
    let result = Math.abs(Math.max(...arr) - Math.min(...arr));

    return result;
}
