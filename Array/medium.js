/*Find the Largest element in an array*/
// function largestEle(nums) {
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < nums.length; i++) {
//     if (max < nums[i]) {
//       max = nums[i];
//     }
//   }
//   return max;
// }
// let nums = [8, 10, 5, 7, 9];
// console.log("largestEle", largestEle(nums));

/*Find Second Smallest and Second Largest Element in an array*/
// function seclargestEle(nums) {
//   //[10, 20, 4, 45, 99]
//   if (nums.length < 2) return -1;
//   let second_large = Number.MIN_SAFE_INTEGER;
//   let large = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > large) {
//       second_large = large;
//       large = nums[i];
//     } else if (nums[i] > second_large && nums[i] !== large) {
//       second_large = nums[i];
//     }
//   }
//   return second_large;
// }

// function secSmallestEle(nums) {
//   if (nums.length < 2) return -1;
//   let second_small = Number.MAX_SAFE_INTEGER;
//   let small = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < small) {
//       second_small = small;
//       small = nums[i];
//     } else if (nums[i] < second_small && nums[i] !== small) {
//       second_small = nums[i];
//     }
//   }
//   return second_small;
// }
// let nums = [8, 10, 5, 7, 9];
// console.log("second_large", seclargestEle(nums));
// console.log("second_small", secSmallestEle(nums));

/*Array Sorted or not */

// function arraySortedOrNot(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i - 1] > nums[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// // let nums = [8, 10, 5, 7, 9];
// let nums = [1, 2, 3, 4, 5];
// console.log("arraySortedOrNot", arraySortedOrNot(nums));

/*Remove Duplicates in-place from Sorted Array */
// function dupRemove(nums) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     console.log(nums[i], nums[j]);
//     if (nums[i] !== nums[j]) {
//       console.log(nums[i], nums[j], i, j, "ff");
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   for (let k = i + 1; k < nums.length; k++) {
//     nums[k] = "_";
//   }
//   return nums;
// }
// let nums = [1, 1, 2, 2, 2, 3, 3];
// console.log("dupRemove", dupRemove(nums));

// function rotateByOne(nums) {
//   let temp = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i + 1];
//   }
//   nums[nums.length - 1] = temp;
//   return nums;
// }

// console.log("rotateByOne", rotateByOne([1, 2, 3, 4, 5]));

// function reverseArr(arr, start, end) {
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
//   return arr;
// }

// function rotateByKEle(nums, k) {
//   reverseArr(nums, k, nums.length - 1);
//   reverseArr(nums, 0, nums.length - k);
//   reverseArr(nums, 0, nums.length - 1);
//   return nums;
// }

// console.log("rotateByKEle", rotateByKEle([1, 2, 3, 4, 5], 3));

// function moveAllZerosAtEnd(nums) {
//   let temp = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       temp.push(nums[i]);
//     }
//   }
//   let n = temp.length;
//   for (let i = n; i < nums.length; i++) {
//     temp.push(0);
//   }
//   return temp;
// }
// console.log("moveAllZerosAtEnd", moveAllZerosAtEnd([1, 2, 3, 0, 5, 0, 5]));

// function unionArray(a1, a2) {
//   const mySet = new Set();
//   for (let num of a1) {
//     mySet.add(num);
//   }
//   for (let num of a2) {
//     mySet.add(num);
//   }
//   return Array.from(mySet);
// }
// let arr1 = [1, 2, 3, 4, 5],
//   arr2 = [2, 3, 4, 4, 5];
// console.log("unionArray", unionArray(arr1, arr2));

// function missingNumber(a1, N) {
//   let totalSum = Math.floor((N * (N + 1)) / 2);
//   let sum = 0;
//   for (let i = 0; i < a1.length; i++) {
//     sum += a1[i];
//   }
//   return totalSum - sum;
// }
// let arr = [1, 2, 3, 5],
//   N = 5;
// console.log("missingNumber", missingNumber(arr, N));

// function maxConsecOnes(a1) {
//   let count = 0,
//     max_count = 0;
//   for (let i = 0; i < a1.length; i++) {
//     if (a1[i] === 1) count++;
//     else count = 0;
//     if (count > max_count) max_count = count;
//   }
//   return max_count;
// }
// let arr = [1, 1, 1, 0, 1, 1];
// console.log("maxConsecOnes", maxConsecOnes(arr));

// function appearceOnce(arr) {
//   let map = new Map();
//   for (let a of arr) {
//     map.set(a, (map.get(a) || 0) + 1);
//   }
//   for (const [key, value] of map) {
//     if (value === 1) return key;
//   }
// }
// let arr = [4, 1, 2, 1, 2];
// console.log("appearceOnce", appearceOnce(arr));
// // time complexity will be O(N) + O(M).

// function longestSubarray(arr, N, k) {
//     let maxLen = 0;
//     for (let i = 0; i < N; i++) {
//       let sum = 0;
//       for (let j = i; j < N; j++) {
//         sum += arr[j];
//         if (sum === k) {
//           maxLen = Math.max(j - i + 1, maxLen);
//         }
//       }
//     }
//     return maxLen;
//   }
//   let arr = [2, 3, 5],
//     N = 3,
//     k = 5;
//   console.log("longestSubarray", longestSubarray(arr, N, k));

// function groupAnagrams(strs) {
//   let map = new Map();
//   for (const s of strs) {
//     let sortedS = s.split("").sort().join("");
//     if (map.has(sortedS)) {
//       map.get(sortedS).push(s);
//     } else {
//       map.set(sortedS, [s]);
//     }
//   }
//   return Array.from(map.values());
// }

// // Test
// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(strs));

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let sSort = s.split("").sort().join();
//   let tSort = t.split("").sort().join();
//   return sSort == tSort;
// }

function topKFrequent(nums, k) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  let arr = Array.from(map.entries())
    .map(([num, freq]) => [freq, parseInt(num)])
    .sort((a, b) => b[0] - a[0]);
  // Return top k elements (second element of each pair)
  return arr.slice(0, k).map((item) => item[1]);
}
let nums = [1, 2, 2, 3, 3, 3],
  k = 2;
console.log(topKFrequent(nums, k));
