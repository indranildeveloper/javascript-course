//  @ProgrammingWithIndra

// Template Strings

let firstName = "John";
let lastName = "Doe";

// Welcome: John Doe!
// let greeting = "Welcome: " + firstName + " " + lastName + "!";

let greeting = `Welcome: ${firstName.toUpperCase()} ${lastName}!`;

console.log(greeting);

let price = 10;
let tax = 0.25;

let total = `Total: $${(price * (1 + tax)).toFixed(2)}`;
console.log(total);

let message = `He 
said,
"lol"`;
console.log(message);
