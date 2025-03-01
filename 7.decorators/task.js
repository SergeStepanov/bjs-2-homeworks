'use strict';

function cachingDecoratorNew(func) {
    // Ваш код

    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let idx = cache.findIndex((item) => item.hash === hash);

        if (idx !== -1) {
            console.log('Из кэша: ' + cache[idx].result);
            return 'Из кэша: ' + cache[idx].result;
        } else {
            let result = func.call(this, ...args);
            cache.push({ hash, result });

            if (cache.length > 5) {
                cache.shift();
            }
            console.log('Вычисляем: ' + result);
            return 'Вычисляем: ' + result;
        }
    }
    return wrapper;
}

function debounceDecoratorNew(func, ms, flag = false) {
    // Ваш код

    let savedArgs;
    let savedThis;
    return function (...args) {
        savedArgs = args;
        savedThis = this;
        if (flag) {
            return;
        }
        func.apply(this, savedArgs);
        flag = true;
        setTimeout(() => {
            flag = false;
            func.apply(savedThis, savedArgs);
        }, ms);
    };
}

function debounceDecorator2(func, ms) {
    // Ваш код
    let timeout;
    let count = 0;
    let flag = false;
    let savedArgs;
    let savedThis;

    return function (...args) {
        count++;

        savedArgs = args;
        savedThis = this;
        if (flag) {
            return;
        }

        clearTimeout(timeout);

        func.apply(this, savedArgs);
        flag = true;
        timeout = setTimeout(() => {
            flag = false;
            func.apply(savedThis, savedArgs);

            console.log(`Функция вызвана кол-во раз: ${count}`);
        }, ms);
    };
}
