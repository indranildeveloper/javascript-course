// @ProgrammingWithIndra

// for (let i = 0; i < 3; i++) {
//   console.log("OUTER LOOP: ", i);
//   for (let j = 0; j < 3; j++) {
//     console.log("   INNER LOOP: ", j);
//   }
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

const shirts = ["red", "blue"];
const sizes = ["s", "m", "l"];

for (let shirt = 0; shirt < shirts.length; shirt++) {
  for (let size = 0; size < sizes.length; size++) {
    console.log(
      `${shirts[shirt]} shirt is available in the size ${sizes[size]}`,
    );
  }
}
