function maxArea(heights) {
  let l = 0,
    r = heights.length - 1;
  let maxArea = 0;
  while (l < r) {
    maxArea = Math.max(maxArea, Math.min(heights[l], heights[r]) * (r - l));
    if (heights[l] < heights[r]) l++;
    else r--;
  }
  return maxArea;
}

let height = [1, 7, 2, 5, 4, 7, 3, 6];
console.log(maxArea(height));
