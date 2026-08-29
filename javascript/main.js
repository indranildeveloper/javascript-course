//  @ProgrammingWithIndra

// String Methods
// indexOf
// slice
// replace
// replaceAll -> ES2021

let message = "Hello World. Hello World. Hello World.";
console.log(message.indexOf("World"));
console.log(message.indexOf("z"));
console.log(message.slice(6, 11));
console.log(message.slice(0));

console.log(message.replace("Hello", "Hi There"));
console.log(message.replaceAll("Hello", "Hi There"));

console.log(message);
