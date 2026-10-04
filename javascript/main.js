// @ProgrammingWithIndra

// if (true) {
//   let x = 10;
//   console.log(x);
// }

// console.log(x);

// const colors = ["red", "green", "blue"];

// let i = 50;

// for (let i = 0; i < colors.length; i++) {
//   console.log(i, colors[i]);
// }

// console.log(i);

// const nums = [1,2,3]

function makeDouble(nums) {
  let result = [];
  for (let num of nums) {
    const double = num * 2;
    result.push(double);
  }
  return result;
}

const result = makeDouble([1, 2, 3]);
console.log(result);
