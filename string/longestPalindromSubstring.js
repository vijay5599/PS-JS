function longestPalindromeSubstring(str) {
  let start = 0;
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    expandAroundCenter(str, i, i); // Odd-length palindrome
    expandAroundCenter(str, i, i + 1); // Even-length palindrome
  }

  function expandAroundCenter(str, l, r) {
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      l--; //-1,
      r++; //1,
      console.log(l, r);
    }
    if (r - l - 1 > length) {
      start = l + 1; //0,
      length = r - l - 1; //1,
    }
  }
  return str.substring(start, start + length);
}

console.log(longestPalindromeSubstring("babad"));

// function isPalindrome(str) {
//     // Remove punctuation and extra spaces, convert to lowercase
//     let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return cleanStr === cleanStr.split('').reverse().join('');
// }

// // Test cases
// console.log(isPalindrome("Was it a car or a cat I saw?")); // true
// console.log(isPalindrome("hello world")); // false
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
