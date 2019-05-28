const LinkedList = require('.');

function test1() {
	// demo
	const list = new LinkedList();
	console.log('list', list.toString());
	list.prepend(3);
	list.prepend(2);
	list.prepend(1);

	console.log('list', list.toString());
	console.log('length', list.length());
	console.log('isEmpty', list.isEmpty());

	console.log('list @2 is: ', list.get(2));
}

function test2() {
	let list = new LinkedList();
	for (let i = 10; i >= 0; i--) {
		list.prepend(i);
	}

	console.log('remove @7');
	console.log(list.toString());
	list.removeAtIndex(7);
	console.log(list.toString());

	console.log('remove first');
	list.removeAtIndex(0);
	console.log(list.toString());

	console.log('remove last');
	list.removeAtIndex(list.size - 1);
	console.log(list.toString());
}

function test3() {
	const list = new LinkedList();
	for (let i = 10; i >= 0; i--) {
		list.prepend(i);
	}

	list.addAtIndex(0, 99);
	list.addAtIndex(2, 100);
	list.addAtIndex(list.length() - 1, 999);
	//console.log('size, length', list.size, list.length());
	//list.append(999);

	console.log(list.toString());
}

// exec
test3();
