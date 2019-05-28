function isPalindrome(str, start = 0, end = null) {
	end = end || str.length - 1;

	if (str.length < 2) {
		return true;
	}

	if (end <= start) {
		return true;
	}

	let c1 = str.charAt(start).toUpperCase();
	let c2 = str.charAt(end).toUpperCase();

	if (!/[A-Z]/i.test(c1)) {
		return isPalindrome(str, start + 1, end);
	}

	if (!/[A-Z]/i.test(c2)) {
		return isPalindrome(str, start, end - 1);
	}

	if (str.charAt(c1) != str.charAt(c2)) {
		return false;
	}

	return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome(''), true);
console.log(isPalindrome('a'), true);
console.log(isPalindrome('tt'), true);
console.log(isPalindrome('tot'), true);
console.log(isPalindrome('tacocat'), true);
console.log(isPalindrome('boring'), false);
console.log(isPalindrome('abc-xbby-cba'), false);

// https://www.toptenz.net/top-10-famous-palindromes.php
console.log(isPalindrome('A Man, A Plan, A Canal-Panama!'), true);
console.log(isPalindrome('Mr. Owl Ate My Metal Worm'), true);
console.log(isPalindrome('Madam In Eden, I’m Adam'), true);




