'use strict';

function compareArrays(arr1, arr2) {
    let result;

    if (arr1.length === arr2.length) {
        result = arr1.every((item, index) => item === arr2[index]);
    } else {
        result = false;
    }

    return result; // boolean
}

function advancedFilter(arr) {
    let resultArr = arr
        .filter((index) => index > 0)
        .filter((index) => index % 3 === 0)
        .map((index) => index * 10);

    return resultArr; // array
}
