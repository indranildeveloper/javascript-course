// JavaScript Strings

let firstName = "John";
let lastName = "Doe";

// let message = "Your full name is " + firstName + " " + lastName + "!";

let message = `Your full name is ${firstName.toUpperCase()} ${lastName.toUpperCase()}!`;

console.log(message);

let price = 10;
let tax = 0.25;

let total = `Your total is: $${(price * (1 + tax)).toFixed(2)}`;

console.log(total);
