// @ProgrammingWithIndra

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
  marks: 98,
};

// const colors = ["red", "green", "blue"];

// console.log(colors);

// console.log(person);

// for (let key in colors) {
//   console.log(key);
// }

for (let property in person) {
  console.log(property, person[property]);
}

// for (let property of Object.keys(person)) {
//   console.log(property, person[property]);
// }
