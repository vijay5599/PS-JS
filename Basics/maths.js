// function countDigits(n) {
//   let count = 0;
//   while (n > 0) {
//     count = count + 1;
//     n = Math.floor(n / 10);
//   }
//   return count;
// }
// console.log(countDigits(12345));

// function reverseNum(n) {
//   let rev = 0;
//   while (n > 0) {
//     rev = rev * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }
//   return rev;
// }
// console.log(reverseNum(12345));

// function ndrome(n) {
//   let num = n;
//   let rev = 0;
//   while (n > 0) {
//     rev = rev * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }
//   return rev === num;
// }
// console.log(palindrome(12321));

function armstrongNumber(n) {
  let res = 0;
  let num = n;
  while (n > 0) {
    res += Math.pow(n % 10, 3);
    n = Math.floor(n / 10);
  }
  return res === num;
}
console.log(armstrongNumber(153));
