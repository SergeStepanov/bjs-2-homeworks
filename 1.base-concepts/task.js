'use strict';

function solveEquation(a, b, c) {
    let arr = [];
    // код для задачи №1 писать здесь

    let discriminant = b ** 2 - 4 * a * c;
    let squareRootDiscriminant = Math.sqrt(discriminant); // Math.sqrt(number) расчет корня

    if (discriminant === 0) {
        arr.push((-b - squareRootDiscriminant) / (2 * a));
    } else if (discriminant > 0) {
        arr.push(
            (-b + squareRootDiscriminant) / (2 * a),
            (-b - squareRootDiscriminant) / (2 * a)
        );
    }

    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;

    // код для задачи №2 писать здесь

    return totalAmount;
}
