// Парсинг числа Number.parseInt() та Number.parseFloat()

let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
console.log(elementWidth);

let elementHeight = "150.75px";
elementHeight = Number.parseFloat(elementHeight);
console.log(elementHeight);

// Об'єкти Math
const base = 2;
const power = 5;

const result = Math.pow(base, power);
console.log(result);
console.log(base ** power);

//Tasks

// let usersNumber = prompt("Введіть ваше число");
// usersNumber = Number.parseFloat(usersNumber);
// console.log(usersNumber);

// let usersPower = prompt("Введіть степінь");
// usersPower = Number.parseFloat(usersPower);
// let usersResult = usersNumber ** usersPower;
// console.log(usersResult);

//End tasks

const max = 80;
const min = 10;

const value = Math.round(Math.random() * (max - min) + min);
console.log(value);
