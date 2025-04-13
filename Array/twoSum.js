function twoSum(numbers, target) {
  // For unsorted array - using hash map approach
  const map = new Map();
  
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    
    if (map.has(complement)) {
      return [map.get(complement) + 1, i + 1];
    }
    
    map.set(numbers[i], i);
  }
  
  return []; // Return empty array if no solution found
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6));      // [1, 3]
console.log(twoSum([1, 2, 3, 4], 8));   // []
