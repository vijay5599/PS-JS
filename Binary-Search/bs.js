// function binarySearch(nums, low, high, target) {
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] === target) return target;
//     else if (nums[mid] < target)
//       return binarySearch(nums, mid + 1, high, target);
//     else return binarySearch(nums, low, mid - 1, target);
//   }
// }
// let nums = [3, 4, 6, 7, 9, 12, 16, 17],
//   target = 6;
// console.log("binarySearch", binarySearch(nums, 0, nums.length - 1, target));

// function lowerBound(nums, target) {
//   let low = 0,
//     high = nums.length - 1;
//   let ans = 0;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] < target) {
//       low = mid + 1;
//     } else if (nums[mid] >= target) {
//       ans = mid;
//       high = mid - 1;
//     }
//   }
//   return ans;
// }
// let nums = [3, 5, 8, 15, 19],
//   target = 9;
// console.log("lowerBound", lowerBound(nums, target));
// function higherBound(nums, target) {
//   let low = 0,
//     high = nums.length - 1;
//   let ans = 0;
//   while (low < high) {
//     let mid = Math.floor((low + high) / 2);
//     console.log(mid, low, high);
//     if (nums[mid] <= target) {
//       low = mid + 1;
//     } else if (nums[mid] > target) {
//       ans = mid;
//       high = mid - 1;
//     }
//   }
//   return ans;
// }

// console.log("higherBound", higherBound([3, 5, 8, 9, 15, 19], 9));

// function floorAndCeil(nums, target) {
//     let low = 0, high = nums.length - 1;
//     let floor, ceil;
//     while (low <= high) {
//       let mid = Math.floor((low + high) / 2);
//       if (nums[mid] <= target) {
//         floor = nums[mid];
//         low = mid + 1;
//       } else if (nums[mid] >= target) {
//         ceil = nums[mid];
//         high = mid - 1;
//       }
//     }
//     return [floor, ceil];
//   }
//   let nums = [3, 4, 4, 7, 8, 10],
//     target = 5;
//   console.log("floorAndCeil", floorAndCeil(nums, target));

// function firstOccurrence(nums, target) {
//     let low = 0, high = nums.length - 1;
//     let fistOccur = -1
//     while(low <= high){
//         let mid = Math.floor((low + high) / 2);
//         if(nums[mid] === target){
//             fistOccur=mid;
//             high = mid - 1

//         }
//         else if (nums[mid] > target) high = mid - 1;
//         else {
//             low = mid + 1
//         }
//     }
//     return fistOccur
// }

// let nums = [3,4,13,13,13,20,40], target = 13
// console.log("firstOccurrence", firstOccurrence(nums, target))

// function lastOccurrence(nums, target) {
//     let low = 0, high = nums.length - 1;
//     let lastOccur = -1
//     while(low <= high){
//         let mid = Math.floor((low + high) / 2);
//         if(nums[mid] === target){
//             lastOccur=mid;
//             low = mid + 1
//         }
//         else if (nums[mid] > target) high = mid - 1;
//         else {
//             low = mid + 1
//         }
//     }
//     return lastOccur
// }

// let nums = [3,4,13,13,13,20,40], target = 13
// console.log("lastOccurrence", lastOccurrence(nums, target))

// var firstAndLastOccurrence = function (nums, target) {

//     function bs(nums, target, is_search_left) {
//         let res = -1
//         let low = 0, high = nums.length - 1;
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2);
//             console.log(mid,low, high )
//             if (nums[mid] < target) low = mid + 1
//             else if (nums[mid] > target) high = mid - 1;
//             else {
//                 res = mid
//                 if (is_search_left) high = mid - 1
//                 else low = mid + 1
//             }
//         }
//         return res
//     }

//     let fistOccur = bs(nums, target, true)
//     let lastOccur = bs(nums, target, false)
//     return [fistOccur, lastOccur]
// };
// let nums = [5,7,7,8,8,10], target = 8
// console.log("firstAndLastOccurrence", firstAndLastOccurrence(nums, target))

// var countOccurrences = function (nums, target) {

//     function bs(nums, target, is_search_left) {
//         let res = -1
//         let low = 0, high = nums.length - 1;
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2);
//             if (nums[mid] < target) low = mid + 1
//             else if (nums[mid] > target) high = mid - 1;
//             else {
//                 res = mid
//                 if (is_search_left) high = mid - 1
//                 else low = mid + 1
//             }
//         }
//         return res
//     }

//     let fistOccur = bs(nums, target, true)
//     let lastOccur = bs(nums, target, false)
//     let totalOccurances = (lastOccur-fistOccur)+1
//     return totalOccurances
// };
// let nums = [2, 2 , 3 , 3 , 3 , 3 , 4], target = 3
// console.log("countOccurrences", countOccurrences(nums, target))

// function searchInSortedRotatedArr(nums, target) {
//     let l = 0, h = nums.length-1;
//     while(l <= h) {
//         let mid = Math.floor((l+h)/2);
//         if(nums[mid] === target) return true;
//         console.log(nums[l] , nums[mid] , nums[h], (nums[l] === nums[mid] === nums[h]), nums[l] === nums[mid], nums[mid] === nums[h])
//         if(nums[l] === nums[mid] === nums[h]){
//             l += 1
//             h -= 1
//             console.log(nums[l] , nums[mid] , nums[h]);

//             continue
//         }
//         if(nums[l] <= nums[mid]) {
//             if(nums[l] <= target && target <= nums[mid]) h = mid -1
//             else l = mid+1
//         }
//         //right position
//         else{
//             if(nums[mid] <= target && target <= nums[h]) l = mid + 1
//             else h = mid - 1
//         }
//     }
//     return false
// }
// let nums = [1,0,1,1,1], target = 0
// console.log("searchInSortedRotatedArr",searchInSortedRotatedArr(nums, target))

// function minimumInRotatedSorted(nums) {
//     let l = 0, h = nums.length-1;
//     let min = Number.MAX_SAFE_INTEGER
//     while(l <= h) {
//         let mid = Math.floor((l+h)/2);
//         if(nums[l] <= nums[mid]) {
//             min = Math.min(min, nums[l])
//             l = mid + 1
//         }
//         //right position
//         else{
//             min = Math.min(min, nums[mid])
//             h = mid - 1
//         }
//     }
//     return min
// }

// let nums = [4,5,6,7,0,1,2,3]
// console.log("minimumInRotatedSorted",minimumInRotatedSorted(nums))

// function singleEleInRotatedSorted(nums) {
//   let n = nums.length;
//   if (n === 1) return nums[0]; // If there's only one element, return it
//   if (nums[0] !== nums[1]) return nums[0]; // If the first element is unique, return it
//   if (nums[n - 1] !== nums[n - 2]) return nums[n - 1]; // If the last element is unique, return it

//   let l = 1,
//     h = nums.length - 2;
//   while (l <= h) {
//     let mid = Math.floor((l + h) / 2);
//     if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
//       return nums[mid]; // If mid element is unique, return it

//     // Check if the unique element is on the left or right side
//     if (
//       (mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
//       (mid % 2 === 1 && nums[mid] === nums[mid - 1])
//     ) {
//       l = mid + 1; // Move to the right side
//     } else {
//       h = mid - 1; // Move to the left side
//     }
//   }
//   return -1; // If no unique element is found, return -1
// }

// let nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
// console.log("singleEleInRotatedSorted", singleEleInRotatedSorted(nums));

//github.copilot.editor.enableAutoCompletions
// function squareRoot(n) {
//   let l = 0,
//     h = n;
//   let ans = -1;
//   while (l <= h) {
//     let mid = Math.floor((l + h) / 2);
//     if (mid * mid <= n) {
//       ans = mid;
//       l = mid + 1;
//     } else {
//       h = mid - 1;
//     }
//   }
// }
// let n = 8;
// console.log("squareRoot", squareRoot(n));

// function nthRoot(n, m) {
//   let l = 1,
//     h = m;
//   while (l <= h) {
//     let mid = Math.floor((l + h) / 2);
//     let tmp = Math.pow(mid, n);
//     if (tmp === m) {
//       return mid;
//     } else if (tmp < m) {
//       l = mid + 1;
//     } else {
//       h = mid - 1;
//     }
//   }
// }

// let n = 3,
//   m = 27;
// console.log("nthRoot", nthRoot(n, m));

// function smallestDivisor(nums, N, limit) {
//   let maxNum = Math.max(...nums);
//   for (let i = 1; i < maxNum; i++) {
//     let ans = 0;
//     for (let j = 0; j < N; j++) {
//       ans += Math.ceil(arr[j] / i);
//     }
//     if (ans <= limit) {
//       return i;
//     }
//   }
// }'

// function smallestDivisor(nums, limit) {
//   let l = 1,
//     h = Math.max(...nums);
//   let res = Number.MAX_SAFE_INTEGER;
//   while (l <= h) {
//     let mid = Math.floor((l + h) / 2);
//     let sum = sumByMid(nums, mid);
//     if (sum <= limit) {
//       res = Math.min(res, mid);
//       h = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//     return res;
//   }
// }
// function sumByMid(nums, mid) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += Math.ceil(nums[i] / mid);
//   }
//   return sum;
// }

// let arr = [1, 2, 3, 4, 5],
//   limit = 8;
// // let
// //   arr = [1, 2, 5, 9],
// //   limit = 6;

// console.log("smallestDivisor", smallestDivisor(arr, limit));























































