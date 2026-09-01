// @ProgrammingWithIndra

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let fruits = ["apple", "banana", "cherry", "mango"];

// fruits.splice(2, 0, "lemon", "kiwi");
// let deletedElements = fruits.splice(1, 2);
let deletedElements = fruits.splice(2, 1, "lemon", "kiwi");

console.log(fruits);
console.log(deletedElements);
