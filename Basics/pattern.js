// function printSquare(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       row += "* ";
//     }
//     console.log(row.trim());
//   }
// }
// printSquare(6);

// function printTriangle(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += "* ";
//     }
//     console.log(row.trim());
//   }
// }
// printTriangle(6);
// function printInvertTriangle(n) {
//   for (let i = n; i > 0; i--) {
//     let row = "";
//     for (let j = i; j > 0; j--) {
//       row += "* ";
//     }
//     console.log(row.trim());
//   }
// }
// printInvertTriangle(6);

// function printTriangleNums(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row.trim());
//   }
// }
// printTriangleNums(6);

// function printInvertTriangleNums(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//       row += j + " ";
//     }
//     console.log(row.trim());
//   }
// }

// printInvertTriangleNums(6);
// function printPyramid(n) {
//   for (let i = n; i >= 1; i--) {
//     let row = "";

//     // Add spaces before the stars
//     for (let j = 1; j <= n - i; j++) {
//       row += " ";
//     }

//     // Add stars
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       row += "*";
//     }

//     // Print the row
//     console.log(row);
//   }
// }

// // Example: Print a pyramid with 5 rows
// printPyramid(3);

// function printRectangle(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       if (j === 0 || i === 0 || j === n - 1 || i === n - 1) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row.trim());
//   }
// }

// printRectangle(6);
