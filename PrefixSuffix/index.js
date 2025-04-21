function prefix(nums) {
  let prefixSum = [];
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    prefixSum.push(total);
  }
  return rageSum(prefixSum, 1, 3);
}

console.log(prefix([2, -1, 3, -3, 4]));

function rageSum(prefixSum, left, right) {
  let preRight = prefixSum[right];
  let preleft = left > 0 ? prefixSum[left - 1] : 0;
  console.log(preRight, preleft);

  return preRight - preleft;
}

function prefixProduct(nums) {
  let prefixProd = [];
  prefixProd[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    prefixProd[i] = prefixProd[i - 1] * nums[i - 1];
  }
  return prefixProd;
}

function sufficProduct(nums) {
  let prefixProd = [];
  prefixProd[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    prefixProd[i] = prefixProd[i + 1] * nums[i + 1];
  }
  return prefixProd;
}

function productExceptIteself(nums) {
  let prefix = prefixProduct(nums);
  let sufix = sufficProduct(nums);
  console.log(prefix, sufix);

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(prefix[i] * sufix[i]);
  }
  return res;
}
//Output: [24,12,8,6]
console.log(productExceptIteself([1, 2, 3, 4]));
