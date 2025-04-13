function tappingWater(height) {
  let n = height.length;
  if (n === 0) {
    return 0;
  }

  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  console.log(leftMax, rightMax);
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
}
let height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
console.log(tappingWater(height));

// [0, 2, 0, 3, 1, 0, 1, 3, 2, 1] => input
// [0, 2, 2, 3, 3, 3, 3, 3, 3, 3] => leftMax
// [3, 3, 3, 3, 3, 3, 3, 3, 2, 1] => rightMax
// [0, 2, 2, 3, 3, 3, 3, 3, 2, 1] => Math.min(leftMax, rightMax)
// [0, 0, 2, 0, 2, 3, 2, 0, 0, 0] => Math.min(leftMax, rightMax) - input[i]
// res => 2 + 2 + 3 + 2 ==> 9     => sum of vals
