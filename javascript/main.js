// @ProgrammingWithIndra

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let j = 1;
// while (j <= 10) {
//   console.log(j);
//   j++;
// }

// let k = 15;

// do {
//   console.log(k);
//   k++;
// } while (k <= 10);

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (target !== guess) {
  guess = Math.floor(Math.random() * 10);
  console.log(`Target: ${target}, Guess: ${guess}`);
}

console.log("Hey you win the game.");
