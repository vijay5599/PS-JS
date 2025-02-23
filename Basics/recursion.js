// function recursionFunc(i, n) {
//   if (i > n) return;
//   console.log("Namee");
//   recursionFunc(i + 1, n);
// }

// console.log(recursionFunc(1, 4));

// function sumOfN(i, sum) {
//   if (i < 1) {
//     console.log(sum);
//     return;
//   }

//   return sumOfN(i - 1, sum + i);
// }

// console.log(sumOfN(5, 0));

// function factorial(n) {
//   if (n === 0 || n === 1) return n;
//   else return n * factorial(n - 1);
// }

// console.log(factorial(5));

// function fibonacciSeries(n) {
//   function fibonacci(num) {
//     // Base cases
//     if (num === 0) return 0;
//     if (num === 1) return 1;
//     // Recursive case
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }

//   // Generate the series
//   let series = [];
//   for (let i = 0; i <= n; i++) {
//     series.push(fibonacci(i));
//   }
//   return series;
// }

// console.log(fibonacciSeries(5));

// function revArray(nums, start, end) {
//   if (start >= end) return;
//   [nums[start], nums[end]] = [nums[end], nums[start]];
//   revArray(nums, start + 1, end - 1);
// }
// let nums = [1, 2, 3, 4, 5];
// let start = 0;
// let end = nums.length - 1;
// revArray(nums, start, end);
// console.log(nums);

// function checkPali(str, start, end) {
//   if (start >= end) return true;
//   if (str[start] !== str[end]) return false;
//   return checkPali(str, start + 1, end - 1);
// }
// let str = "ABCDCBA";
// let start = 0;
// let end = str.length - 1;
// console.log(checkPali(str, start, end));
// console.log(str);

/* Hashhing */
function count(nums) {
    let countNums = new Map();
    for (let num of nums) {
      countNums.set(num, (countNums.get(num) || 0) + 1);
    }
    let sortedEntries = [...countNums.entries()].sort((a, b) => a[1] - b[1]);
    return [sortedEntries[0][0], sortedEntries[sortedEntries.length - 1][0]];
  }
  
  console.log(count([1, 2, 1, 3, 2, 5]));
  