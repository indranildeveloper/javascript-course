// JavaScript Conditionals

let time = 100;
let greeting = "Hi";

if (time < 10) {
  console.log("Good Morning.");
  greeting = "Hello, Good Morning :)";
} else if (time < 15) {
  console.log("Good Day.");
  greeting = "Hey, have a good day :)";
} else if (time < 20) {
  console.log("Good Afternoon.");
  greeting = "Hey, have a good afternoon :)";
} else if (time < 24) {
  console.log("Good Night.");
  greeting = "Hey, have a good night :)";
} else {
  console.log("Invalid time.");
  greeting = "Hey set the time from 0 to 24.";
}

console.log(greeting);
