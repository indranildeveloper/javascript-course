// @ProgrammingWithIndra

// console.log(!true);
// console.log(!false);

// let user = "john";

// if (!user) {
//   console.log("There is no user.");
// } else {
//   console.log("We have a user.");
// }

let x = 5 === 7;
let y = !(5 === 7);

if (!(x || y)) {
  console.log("Valid condition.");
} else {
  console.log("Invalid condition.");
}

// console.log(x);
// console.log(y);

let user = null;

console.log(!!user);
