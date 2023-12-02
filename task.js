const salary = Number(prompt("Введіть зарплату"));
const bonus = 0.15;
const tax = 0.19;

let result = salary + salary * bonus;
result = result - result * tax;
alert(`Ваша зарплата = ${result}`);
