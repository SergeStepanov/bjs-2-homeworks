// тут вы можете вызывать функции из task.js

function testCase() {
    const alarmTest = new AlarmClock();

    alarmTest.addClock('09:34', () => console.log('Подъём!!!!!!'), 1);

    alarmTest.addClock(
        '09:35',
        () => {
            console.log('Вставай давай!!!!!!');
            alarmTest.removeClock(2);
        },
        2
    );

    // alarmTest.addClock('20:00', () => console.log('error'));

    alarmTest.addClock(
        '09:36',
        () => {
            console.log('Проспал!!!!!!');
            alarmTest.clearAlarms(), alarmTest.printAlarms();
        },
        3
    );

    alarmTest.addClock('09:02', () => console.log('Вставай!!!!!!'), 1);

    alarmTest.printAlarms();

    alarmTest.start();

    return;
}

testCase();
