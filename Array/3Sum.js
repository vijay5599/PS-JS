function threeSum(nums) {
	const res = [];
	nums.sort((a, b) => a - b); // ✅ Numeric sort

	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) break; // ✅ No need to check beyond 0
		if (i > 0 && nums[i] === nums[i - 1]) continue; // ✅ Skip duplicates

		let j = i + 1;
		let k = nums.length - 1;

		while (j < k) {
			const sum = nums[i] + nums[j] + nums[k];
			if (sum === 0) {
				res.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;

				// ✅ Skip duplicates for j
				while (j < k && nums[j] === nums[j - 1]) j++;
				// ✅ Skip duplicates for k
				while (j < k && nums[k] === nums[k + 1]) k--;
			} else if (sum < 0) {
				j++;
			} else {
				k--;
			}
		}
	}

	return res;
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
