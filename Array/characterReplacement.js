function characterReplacement(s, k) {
  let map = new Map();
  let max_c = 0;
  let L = 0;
  let res = 0;
  for (let R = 0; R < s.length; R++) {
    map.set(s[R], (map.get(s[R]) || 0) + 1);
    max_c = Math.max(max_c, map.get(s[R]));

    while (R - L + 1 - max_c > k) {
      map.set(s[L], (map.get(s[L]) || 0) - 1);
      L++;
    }
    res = Math.max(R - L + 1, res);
  }
  return res;
}

console.log(characterReplacement("XYYX", 2));
console.log(characterReplacement("AABABBA", 1));

// const nums = [1, 2, 3, 4, 5];
// const k = 3;
// let maxSum = 0;
// let windowSum = 0;

// // First window
// for (let i = 0; i < k; i++) {
//   windowSum += nums[i]; // sum of first 3
// }
// maxSum = windowSum;

// // Slide the window
// for (let i = k; i < nums.length; i++) {
//   windowSum = windowSum - nums[i - k] + nums[i]; // remove left, add right
//   maxSum = Math.max(maxSum, windowSum);
// }
// console.log(maxSum); // Output: 12 (sum of [3,4,5])
