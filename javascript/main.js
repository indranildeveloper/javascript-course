// @ProgrammingWithIndra

function greet(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}`;
}

const result = greet("John", "Doe");
console.log(result);

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 6));

// function checkAge(age) {
//   if (age < 18) {
//     return "Too young.";
//   } else {
//     return "Access granted.";
//   }
// }

// function checkAge(age) {
//   if (age < 18) {
//     return "Too young.";
//   }
//   return "Access granted.";
// }

function checkAge(age) {
  return age < 18 ? "Too young." : "Access granted.";
}

console.log(checkAge(14));

// function isEvenNumber(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// function isEvenNumber(num) {
//   return num % 2 === 0 ? true : false;
// }

function isEvenNumber(num) {
  return num % 2 === 0;
}

console.log(isEvenNumber(20));
console.log(isEvenNumber(25));
