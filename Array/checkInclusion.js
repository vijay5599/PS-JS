// function checkInclusion(s1, s2) {
// 	s1.split("").sort().join("");

// 	for (let i = 0; i < s2.length; i++) {
// 		for (let j = i + 1; j < s2.length; j++) {
// 			let substr = s2
// 				.slice(i, j + 1)
// 				.split("")
// 				.sort()
// 				.join("");

// 			if (substr === s1) return true;
// 		}
// 	}
// 	return false;
// }

function checkInclusion(s1, s2) {
	const countMap = {};

	for (let char of s2) {
		countMap[char] = (countMap[char] || 0) + 1;
	}

	console.log(countMap);
}

let s1 = "abc",
	s2 = "lecabee";
console.log(checkInclusion(s1, s2));
