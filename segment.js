// &&
// ||

const x1 = 10;
const x2 = 30;
const a = 12;

console.log(a >= x1 && a <= x2);

let balance = 120000;
const withdrawal = Number.parseFloat(prompt("Введіть суму для зняття"));
balance -= withdrawal;
const addCash = Number.parseFloat(prompt("Введіть суму для поповнення"));
balance += addCash;
const bonus = 0.03;

for (let i = 0; i < 12; i++) {
  balance += balance * bonus;
}

alert(`Ваш баланс = ${balance}`);
