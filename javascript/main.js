// @ProgrammingWithIndra

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
};

const doesExists = "firstName" in person;
console.log(doesExists);

// person.age = 20;
// person["age"] = 25;
// person.nationality = "English";
// person["nationality"] = "German";

// delete person.age;
// delete person["age"];
console.log(person);
