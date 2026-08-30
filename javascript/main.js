// @ProgrammingWithIndra

let time = 20;
let greeting = "Hello";

if (time < 5) {
  greeting = "Good Night.";
} else if (time < 12) {
  greeting = "Good Morning.";
} else if (time < 17) {
  greeting = "Good Afternoon.";
} else if (time < 22) {
  greeting = "Good Evening.";
}

console.log(greeting);
