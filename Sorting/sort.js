/*Selection Sort*/
// function selectionSort(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] < nums[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
//     }
//   }
//   return nums;
// }
// console.log("selectionSort:", selectionSort([7, 5, 9, 2, 8]));

// function bubbleSort(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < nums.length - 1 - i; j++) {
//       if (nums[j] > nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   return nums;
// }
// console.log("bubbleSort:", bubbleSort([7, 5, 9, 2, 8]));

// function insertionSort(nums) {
//   for (let i = 1; i < nums.length; i++) {
//     let curr = nums[i];
//     let j = i - 1;
//     while (j >= 0 && nums[j] > curr) {
//       nums[j + 1] = nums[j];
//       j--;
//     }
//     nums[j + 1] = curr;
//   }
//   return nums;
// }

// console.log("insertionSort:", insertionSort([13, 46, 24, 52, 20, 9]));
function bubbleSortRec(nums, n) {
    if (n === 1) return;
    for (let j = 0; j < n - 2; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    bubbleSortRec(nums, n - 1);
  }
  let nums = [7, 5, 9, 2, 8];
  bubbleSortRec(nums, nums.length);
  console.log("bubbleSortRec:", nums);
  