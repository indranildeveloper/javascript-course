// @ProgrammingWithIndra

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (target !== guess) {
  guess = Math.floor(Math.random() * 10);
  console.log(`Target: ${target}, Guess: ${guess}`);
}

console.log("Hey you win the game.");

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }
