const LinkedStack = require('./LinkedStack');
const ArrayStack = require('./ArrayStack');

let linkedStack = new LinkedStack();
let arrayStack = new ArrayStack();

function test(stack) {
	stack.push(5);
	stack.push(4);
	stack.push(3);
	stack.push(2);
	stack.push(1);

	while (!stack.isEmpty()) {
		let value = stack.pop();
		console.log('stack value', value);
	}
}

test(linkedStack);
test(arrayStack);
