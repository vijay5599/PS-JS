// var removeOuterParentheses = function (s) {
//   let ans = "";
//   let cnt = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (cnt === 0 && s[i] === "(") cnt++;
//     else if (s[i] === "(") {
//       cnt++;
//       ans += s[i];
//     }
//     if (cnt === 1 && s[i] === ")") cnt--;
//     else if (s[i] === ")") {
//       cnt--;
//       ans += s[i];
//     }
//   }
//   return ans;
// };

// let str = "(()())(())";
// console.log(removeOuterParentheses(str));

// function reverseWord(str) {
//   let s = str.trim().split(/\s+/);
//   let revStr = s.reverse();
//   return revStr.join(" ");
// }

// let s = "  hello world  ";
// console.log(reverseWord(s));

// var largestOddNumber = function (num) {
//   if (parseInt(num.slice(-1)) % 2 === 1) return num;
//   let i = num.length - 1;
//   while (i >= 0) {
//     const n = parseInt(num[i]);
//     if (n % 2 === 1) return num.slice(0, i + 1);
//     i--;
//   }
//   return "";
// };

// let num = "35427";
// console.log(largestOddNumber(num));

// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) {
//     return "";
//   }
//   if (strs.length === 1) {
//     return strs[0];
//   }
//   // Sort the list of strings
//   // Sorting helps in comparing only the first and last strings
//   // to find the common prefix, as they will have the minimum and maximum possible prefixes.
//   strs.sort();
//   console.log(strs);

//   let start = strs[0];
//   let end = strs[strs.length - 1];
//   let cmnPrefix = "";
//   // Compare characters of the first and last string
//   // This is sufficient because if the first and last strings share a common prefix,
//   // all the strings in between will also share that prefix.
//   for (let i = 0; i < Math.min(start.length, end.length); i++) {
//     if (start[i] === end[i]) {
//       console.log(start, end, "strs");

//       cmnPrefix += start[i];
//     } else {
//       break;
//     }
//   }
//   return cmnPrefix;
// };
// let strs = ["flower", "faow", "flight"];
// // Output: "fl"
// console.log(longestCommonPrefix(strs));

// var isIsomorphic = function (s, t) {
//   if (s.length !== t.length) return false;
//   let mapS = new Map();
//   let mapT = new Map();
//   for (let i = 0; i < s.length; i++) {
//     let charS = s[i];
//     let charT = t[i];
//     if (mapS.has(charS) && mapS.get(charS) !== charT) return false;
//     if (mapT.has(charT) && mapT.get(charT) !== charS) return false;
//     mapS.set(charS, charT);
//     mapT.set(charT, charS);
//     console.log(mapS, mapT);
//   }

//   return true;
// };

// let s = "egg",
//   t = "add";
// let s1 = "foo",
//   t1 = "bar";
// console.log(isIsomorphic(s, t));
// console.log(isIsomorphic(s1, t1));

// var frequencySort = function (s) {
//   let feqMap = new Map();
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     feqMap.set(s[i], (feqMap.get(s[i]) || 0) + 1);
//   }
//   let sortedMap = Array.from(feqMap.entries()).sort((a, b) => b[1] - a[1]);
//   for (let [key, value] of sortedMap) {
//     result += key.repeat(value);
//   }
//   return result;
// };

// let s = "tree";
// console.log(frequencySort(s));

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// var romanToInt = function (s) {
//   const romanToIntMap = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let res = 0;
//   let prev = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     let curr = romanToIntMap[s[i]];
//     if (prev > curr) {
//       res -= curr;
//     } else {
//       res += curr;
//     }
//   }
//   return res;
// };

// let s = "LVIII";
// console.log(romanToInt(s));

// var maxDepth = function (s) {
//   if (s === "") return 0;
//   if (!s.includes("(")) return 0;
//   let cnt = 0;
//   let maxD = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       cnt++;
//       maxD = Math.max(maxD, cnt);
//     } else if (s[i] === ")") cnt--;
//   }
//   return maxD;
// };

// let str = "(1)+((2))+(((3)))";
// console.log(maxDepth(str));
// let str1 = "2";
// console.log(maxDepth(str1));

// var isAnagram = function (s1, s2) {
//   if (s1.length !== s1.length) return false;
//   let freqMap = new Map();
//   for (let i = 0; i <= s1.length; i++) {
//     let charS1 = s1[i];
//     let charS2 = s2[i];
//     freqMap.set(s1[i], (freqMap.get(charS1) || 0) + 1);
//     freqMap.set(s2[i], (freqMap.get(charS2) || 0) - 1);
//   }
//   for (let count of freqMap.values()) {
//     if (count !== 0) return false;
//   }
//   return true;
// };

// let s1 = "RULES",
//   s2 = "LESRT";
// console.log(isAnagram(s1, s2));

// var rotateString = function (s, goal) {
//   let rotated = s;
//   let foundRes = false;
//   for (let i = 0; i < s.length; i++) {
//     rotated = rotated.slice(1) + rotated[0];
//     if (rotated === goal) foundRes = true;
//   }
//   return foundRes ? true : false;
// };
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  let str = s.concat(s);
  return str.includes(goal);
};

let s = "abcde",
  goal = "abced";
console.log(rotateString(s, goal));
