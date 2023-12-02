const message = "В цьому рядкові 27 символів";
console.log(message.length);

//Конкатенація рядків

const firstName = "John";
const lastName = "Stalone";

console.log(`${firstName} ${lastName}`);

const roomNumber = 32;
const userName = "Dmytro Bovdun";
const hotelName = "Burj Al Arab";

console.log(
  `Гість ${userName} проживає в готелі ${hotelName} в номері ${roomNumber}`
);

let btnName = "send";
btnName = btnName.toUpperCase();
console.log(btnName);
const user_name = "JOHN Stalone";
console.log(user_name.toUpperCase());

//includes()

const blackListWord1 = "спам";
const blackListWord2 = "розпродаж";

const string1 = "Привіт, я принц Абдул, це не спам, даю тобі мільйон";
const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!!!";
const string3 = "Рекламна компанія adidas";

console.log(string1.includes(blackListWord1));
console.log(string2.toLowerCase().includes(blackListWord2));
