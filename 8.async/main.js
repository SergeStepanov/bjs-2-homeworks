// тут вы можете вызывать функции из task.js

const alarmTest = new AlarmClock();

alarmTest.addClock('09:00', () => console.log('Подъём!!!!!!'), 1);
alarmTest.addClock('09:02', () => console.log('Вставай!!!!!!'), 1);
alarmTest.addClock('09:02', () => console.log('Вставай давай!!!!!!'), 2);
alarmTest.addClock('09:03', () => console.log('Проспал!!!!!!'), 3);

alarmTest.printAlarms();

console.log(alarmTest);

console.log(`=======---======`);

alarmTest.removeClock(2);

console.log(alarmTest);

console.log(`=======---======`);

alarmTest.clearAlarms();

console.log(alarmTest);
