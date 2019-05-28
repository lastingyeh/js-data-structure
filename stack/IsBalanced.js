function peek(stack) {
	return stack[stack.length - 1];
}

function isBalanced(str) {
	let stack = [];

	for (let i = 0; i < str.length; i++) {
		let letter = str.charAt(i);

		if (letter === '(') {
			stack.push(letter);
		} else if (letter === ')') {
			if (stack.length === 0 || peek(stack) !== '(') {
				return false;
			}
			stack.pop();
		}
	}
	return stack.length === 0;
}

console.log('true cases:');
console.log('()', isBalanced('()'));
console.log('(())', isBalanced('(())'));
console.log('((()))', isBalanced('((()))'));

console.log()

console.log('false cases:', )
console.log('(()', isBalanced('(()'));
console.log('())', isBalanced('())'));
console.log(')(', isBalanced(')('));
console.log(')', isBalanced(')'));

