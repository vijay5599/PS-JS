function productEceptItself(nums) {
  let n = nums.length;
  let res = new Array(n);

  res[0] = 1;
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }
  return res;
}

console.log(productEceptItself([1, 2, 3, 4]));
