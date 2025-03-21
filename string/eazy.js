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

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let mapS = new Map();
  let mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];
    if (mapS.has(charS) && mapS.get(charS) !== charT) return false;
    if (mapT.has(charT) && mapT.get(charT) !== charS) return false;
    mapS.set(charS, charT);
    mapT.set(charT, charS);
    console.log(mapS, mapT);
  }

  return true;
};

let s = "egg",
  t = "add";
let s1 = "foo",
  t1 = "bar";
console.log(isIsomorphic(s, t));
console.log(isIsomorphic(s1, t1));
