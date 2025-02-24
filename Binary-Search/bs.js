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
  