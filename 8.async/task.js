'use strict';

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = 0;
    }

    addClock(time, callback, id) {
        if (id === undefined) throw new Error('Параметр id не передан.');

        const idTrue = this.alarmCollection.some((elem) => elem.id === id);

        if (idTrue === true) {
            console.error(`Будильник с таким id: \'${id}\' уже существует`);
            return;
        } else {
            return this.alarmCollection.push({ id, time, callback });
        }
    } // ok!!!

    removeClock(id) {
        return this.alarmCollection.filter((item) => {
            if (item.id === id) {
                this.alarmCollection.splice(
                    this.alarmCollection.indexOf(item),
                    1
                );
            }
        });
    } //ok

    getCurrentFormattedTime() {
        const nowDate = new Date();
        const nowHours =
            nowDate.getHours() < 10
                ? `0${nowDate.getHours()}`
                : `${nowDate.getHours()}`;
        const nowMinutes =
            nowDate.getMinutes() < 10
                ? `0${nowDate.getMinutes()}`
                : `${nowDate.getMinutes()}`;

        return `${nowHours}:${nowMinutes}`;
    } // ok!!!

    start() {
        // debugger;

        const xClock = checkClock.bind(this);

        function checkClock(clock) {
            if (clock.time === this.getCurrentFormattedTime()) clock.callback();
        }

        if (this.timerId === 0)
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((item) => xClock(item));
            }, 1000);
    } //?????????????

    stop() {
        if (this.timerId !== 0) {
            clearInterval(this.timerId);
            this.timerId = 0;
        }
    } //?????????

    printAlarms() {
        console.log(
            `Печать всех будильников в количестве: ${this.alarmCollection.length}`
        );

        this.alarmCollection.forEach((elem, ind) =>
            console.log(`Будильник № ${ind + 1} заведен на ${elem.time}`)
        );
    } // ok!!!!

    clearAlarms() {
        clearInterval(this.timerId); //???

        this.alarmCollection.splice(0);
    }
}
