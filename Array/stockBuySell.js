// function stockBuySell(prices) {
//   let l = 0;
//   let r = 1;
//   let max_profit = 0;
//   while (r < prices.length) {
//     if (prices[l] < prices[r]) {
//       let profit = prices[r] - prices[l];
//       max_profit = Math.max(max_profit, profit);
//     } else {
//       l = r;
//     }
//     r++;
//   }
//   return max_profit;
// }

// let prices = [7, 1, 5, 3, 6, 4];
// console.log(stockBuySell(prices));

var isValid = function (s) {
  let mapBraces = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];

  for (let char of s) {
    if (mapBraces[char]) {
      stack.push(mapBraces[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
};

let s = "([])";
console.log(isValid(s));
