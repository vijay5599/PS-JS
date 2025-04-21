// class MinStack {
// 	constructor() {
// 		this.stack = [];
// 	}

// 	/**
// 	 * @param {number} val
// 	 * @return {void}
// 	 */
// 	push(val) {
// 		this.stack.push(val);
// 	}

// 	/**
// 	 * @return {void}
// 	 */
// 	pop() {
// 		this.stack.pop();
// 	}

// 	/**
// 	 * @return {number}
// 	 */
// 	top() {
// 		this.stack.unshift();
// 	}

// 	/**
// 	 * @return {number}
// 	 */
// 	getMin() {}
// }

// let minStack = new MinStack();
// minStack.push(1);
// minStack.push(2);
// minStack.push(0);
// minStack.getMin();
// minStack.pop();
// minStack.top();
// minStack.getMin();

function getMin(nums) {
	let mini = nums[nums.length - 1];
	for (let i = 0; i < nums.length - 1; i++) {
		mini = Math.min(mini, nums[i]);
	}
	return mini;
}

let nums = [2, 4, 5, 3, 6, 1];
console.log(getMin(nums));

