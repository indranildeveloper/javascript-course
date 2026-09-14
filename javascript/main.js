// @ProgrammingWithIndra

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
  marks: 98,
};

for (let property of Object.keys(person)) {
  console.log(property, person[property]);
}
