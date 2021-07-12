'use strict';

function parseCount(numberPars) {
    let numberRes = Number.parseInt(numberPars, 10);

    if (isNaN(numberRes)) throw new Error('Невалидное значение');

    return numberRes;
}

function validateCount(item) {
    try {
        let result = parseCount(item);
        return result;
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || c + b < a)
            throw new Error('Треугольник с такими сторонами не существует');
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let semiPerimeter = this.getPerimeter() / 2;
        let areaOfaTriangle = Math.sqrt(
            semiPerimeter *
                (semiPerimeter - this.a) *
                (semiPerimeter - this.b) *
                (semiPerimeter - this.c)
        );

        return +areaOfaTriangle.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getArea: function () {
                return 'Ошибка! Треугольник не существует';
            },

            getPerimeter: function () {
                return 'Ошибка! Треугольник не существует';
            },
        };
    }
}
